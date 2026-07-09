# Requirements Document

## Introduction

This feature covers two tightly coupled areas of the delivery management system:

1. **MongoDB migration** — Switching Prisma's datasource from PostgreSQL to MongoDB, updating all model IDs to use `@db.ObjectId`, removing the PostgreSQL adapter dependency, updating the environment configuration, and cleaning up `lib/prisma.ts` to use the native Prisma client.

2. **Role-based dashboards and real authentication** — Implementing authenticated, role-scoped dashboards for SENDER, RECEIVER, and RIDER users; moving the payment page into the `app/` directory; wiring NextAuth to real MongoDB users via `lib/auth.ts`; and adding the API routes required by the dashboards.

The app targets Nigerian logistics and uses Next.js 16, Prisma 7 (MongoDB provider), NextAuth v4, React 19, Tailwind v4, and shadcn/ui.

---

## Glossary

- **System**: The Next.js 16 delivery management application.
- **Prisma**: The ORM used for all database access, version 7 with the MongoDB provider.
- **MongoDB**: The target database replacing PostgreSQL.
- **NextAuth**: The authentication library (v4) managing sessions and JWTs.
- **Session**: A NextAuth JWT session containing the authenticated user's `id`, `email`, `name`, and `role`.
- **SENDER**: A user role representing the person who ships a package.
- **RECEIVER**: A user role representing the person who receives a package.
- **RIDER**: A user role representing the delivery rider assigned to packages.
- **ADMIN**: A user role with full system visibility.
- **Package**: A shipment record in the database with tracking, sender, receiver, rider, status, and payment information.
- **TrackingUpdate**: A log entry recording a status change event for a Package.
- **Payment**: The payment record associated with a Package, storing fee and paid status.
- **PackageStatus**: The delivery lifecycle enum: `PENDING`, `PICKED_UP`, `IN_TRANSIT`, `DELIVERED`.
- **PaymentStatus**: The payment lifecycle enum: `PENDING`, `PAID`.
- **Tracking code**: The unique human-readable identifier for a Package (e.g., `NG-LAG-2026-00001`).
- **Authorized route**: A Next.js page or API route that requires a valid Session and enforces role restrictions.
- **ObjectId**: MongoDB's native 24-character hexadecimal document identifier.

---

## Requirements

### Requirement 1: MongoDB Datasource Migration

**User Story:** As a developer, I want to migrate the Prisma schema from PostgreSQL to MongoDB, so that the application stores all data in MongoDB.

#### Acceptance Criteria

1. THE Prisma schema SHALL declare `provider = "mongodb"` in the `datasource db` block.
2. THE Prisma schema SHALL remove any `@default(cuid())` or `@default(uuid())` ID defaults and replace them with `@default(auto()) @map("_id") @db.ObjectId` on every model's primary key field.
3. THE Prisma schema SHALL annotate every foreign-key scalar field that references an ObjectId with `@db.ObjectId`.
4. THE `Package` model SHALL include a `riderId` field (`String? @db.ObjectId`) and a `rider` relation (`User?`) representing the assigned rider.
5. THE `Package` model SHALL include a `payment` field linking to a `Payment` model via a one-to-one relation.
6. THE Prisma schema SHALL define a `Payment` model with fields: `id` (ObjectId), `packageId` (String, unique, @db.ObjectId), `fee` (Float), `status` (PaymentStatus enum, default PENDING), `createdAt` (DateTime).
7. THE Prisma schema SHALL define a `PaymentStatus` enum with values `PENDING` and `PAID`.
8. THE `.env` file SHALL contain a `DATABASE_URL` placeholder in MongoDB connection string format (`mongodb+srv://<user>:<password>@<cluster>/<dbname>`).
9. THE `package.json` SHALL NOT contain `@prisma/adapter-pg` as a dependency.
10. THE `lib/prisma.ts` file SHALL instantiate `PrismaClient` without a driver adapter.

### Requirement 2: NextAuth Real Authentication

**User Story:** As a user, I want to log in with my real email and password stored in MongoDB, so that I can access my role-specific dashboard.

#### Acceptance Criteria

1. WHEN a user submits login credentials, THE `lib/auth.ts` `authorize()` function SHALL look up the user by email using `prisma.user.findUnique`.
2. WHEN the user record is not found, THE `lib/auth.ts` `authorize()` function SHALL return `null`.
3. WHEN the user record is found, THE `lib/auth.ts` `authorize()` function SHALL verify the submitted password against the stored hash using `bcryptjs.compare`.
4. WHEN the password does not match, THE `lib/auth.ts` `authorize()` function SHALL return `null`.
5. WHEN authentication succeeds, THE `lib/auth.ts` `authorize()` function SHALL return an object containing the user's `id`, `name`, `email`, and `role`.
6. THE NextAuth JWT callback SHALL persist the user's `id` and `role` into the JWT token.
7. THE NextAuth session callback SHALL expose the user's `id` and `role` on `session.user`.
8. THE NextAuth TypeScript module augmentation SHALL extend `User`, `Session`, and `JWT` to include `id` and `role` fields.
9. THE `app/Auth/auth.ts` file SHALL be removed and all imports SHALL reference `lib/auth.ts` exclusively.

### Requirement 3: Sender Dashboard

**User Story:** As a SENDER, I want a dashboard showing all packages I have sent, so that I can monitor the status of my shipments.

#### Acceptance Criteria

1. THE Sender_Dashboard at `app/sender/page.tsx` SHALL be a server component that requires a valid Session.
2. WHEN a request reaches the Sender_Dashboard without a valid Session, THE Sender_Dashboard SHALL redirect to `/login`.
3. WHEN the authenticated user's role is not `SENDER`, THE Sender_Dashboard SHALL redirect to `/unauthorized`.
4. WHEN the Sender_Dashboard renders, THE System SHALL fetch all Package records where `senderId` equals the authenticated user's `id`, ordered by `createdAt` descending.
5. WHEN the Sender_Dashboard renders, THE Sender_Dashboard SHALL display each package's tracking code, receiver name, status badge, and formatted creation date.
6. WHEN the package list is empty, THE Sender_Dashboard SHALL display a message indicating no packages have been sent yet.
7. THE Sender_Dashboard SHALL include a link to `/register-package` to allow the user to register a new package.

### Requirement 4: Receiver Dashboard

**User Story:** As a RECEIVER, I want a dashboard showing all packages addressed to me, so that I can track incoming deliveries.

#### Acceptance Criteria

1. THE Receiver_Dashboard at `app/receiver/page.tsx` SHALL be a server component that requires a valid Session.
2. WHEN a request reaches the Receiver_Dashboard without a valid Session, THE Receiver_Dashboard SHALL redirect to `/login`.
3. WHEN the authenticated user's role is not `RECEIVER`, THE Receiver_Dashboard SHALL redirect to `/unauthorized`.
4. WHEN the Receiver_Dashboard renders, THE System SHALL fetch all Package records where `receiverId` equals the authenticated user's `id`, ordered by `createdAt` descending.
5. WHEN the Receiver_Dashboard renders, THE Receiver_Dashboard SHALL display each package's tracking code, sender name, status badge, and formatted creation date.
6. WHEN the Receiver_Dashboard renders, THE Receiver_Dashboard SHALL render a link for each package to `/track-package?code=<trackingCode>`.
7. WHEN the package list is empty, THE Receiver_Dashboard SHALL display a message indicating no incoming packages.

### Requirement 5: Rider Dashboard

**User Story:** As a RIDER, I want a dashboard showing packages assigned to me and the ability to advance their status, so that I can manage my deliveries efficiently.

#### Acceptance Criteria

1. THE Rider_Dashboard at `app/rider/page.tsx` SHALL be a server component that requires a valid Session.
2. WHEN a request reaches the Rider_Dashboard without a valid Session, THE Rider_Dashboard SHALL redirect to `/login`.
3. WHEN the authenticated user's role is not `RIDER`, THE Rider_Dashboard SHALL redirect to `/unauthorized`.
4. WHEN the Rider_Dashboard renders, THE System SHALL fetch all Package records where `riderId` equals the authenticated user's `id`, ordered by `createdAt` descending.
5. WHEN the Rider_Dashboard renders, THE Rider_Dashboard SHALL display each package's tracking code, receiver name, receiver address, and current status.
6. THE Rider_Dashboard SHALL render an inline status-update control for each package that allows the rider to select the next valid status.
7. THE valid status progression SHALL be: `PENDING` → `PICKED_UP` → `IN_TRANSIT` → `DELIVERED`.
8. WHEN a rider submits a status update, THE System SHALL call `PATCH /api/packages/[id]/status` with the new status value.
9. WHEN the status update API call succeeds, THE Rider_Dashboard SHALL reflect the updated status without a full page reload.
10. WHEN the status update API call fails, THE Rider_Dashboard SHALL display an error notification using react-hot-toast.
11. WHEN the package list is empty, THE Rider_Dashboard SHALL display a message indicating no packages are currently assigned.

### Requirement 6: Payment Page

**User Story:** As a user, I want to view and confirm payment for a package, so that delivery fees are properly recorded.

#### Acceptance Criteria

1. THE Payment_Page SHALL be located at `app/payment/page.tsx` (inside the Next.js `app/` directory).
2. THE Payment_Page SHALL accept a `trackingCode` query parameter to identify the package.
3. WHEN the `trackingCode` query parameter is absent or does not match any Package, THE Payment_Page SHALL display a descriptive error message.
4. WHEN the Payment_Page renders for a valid tracking code, THE Payment_Page SHALL display the package's delivery fee, sender name, receiver name, and item name.
5. WHEN the Payment_Page renders, THE Payment_Page SHALL display the current payment status (`PENDING` or `PAID`).
6. WHEN the payment status is `PENDING`, THE Payment_Page SHALL display a "Confirm payment" button.
7. WHEN the "Confirm payment" button is clicked, THE System SHALL call `POST /api/payment/confirm` with the package `id`.
8. WHEN the payment confirmation API call succeeds, THE Payment_Page SHALL update the displayed status to `PAID` and disable the "Confirm payment" button.
9. WHEN the payment confirmation API call fails, THE Payment_Page SHALL display an error notification using react-hot-toast.
10. WHEN the payment status is already `PAID`, THE Payment_Page SHALL display the "Confirm payment" button in a disabled state.

### Requirement 7: Package API Routes

**User Story:** As the system, I want authenticated API routes for package data, so that role dashboards and status updates are backed by real database queries.

#### Acceptance Criteria

1. THE `GET /api/packages` route SHALL require a valid Session; WHEN no Session is present, THE route SHALL return HTTP 401.
2. WHEN the authenticated user's role is `SENDER`, THE `GET /api/packages` route SHALL return only Package records where `senderId` equals the session user's `id`.
3. WHEN the authenticated user's role is `RECEIVER`, THE `GET /api/packages` route SHALL return only Package records where `receiverId` equals the session user's `id`.
4. WHEN the authenticated user's role is `RIDER`, THE `GET /api/packages` route SHALL return only Package records where `riderId` equals the session user's `id`.
5. WHEN the authenticated user's role is `ADMIN`, THE `GET /api/packages` route SHALL return all Package records.
6. THE `GET /api/packages/[id]` route SHALL require a valid Session; WHEN no Session is present, THE route SHALL return HTTP 401.
7. WHEN the requested package `id` does not exist, THE `GET /api/packages/[id]` route SHALL return HTTP 404.
8. THE `PATCH /api/packages/[id]/status` route SHALL require a valid Session with role `RIDER` or `ADMIN`; WHEN the session role is neither, THE route SHALL return HTTP 403.
9. WHEN a valid status value is provided, THE `PATCH /api/packages/[id]/status` route SHALL update the Package's `status` field and create a `TrackingUpdate` record.
10. WHEN an invalid status value is provided to `PATCH /api/packages/[id]/status`, THE route SHALL return HTTP 400 with a descriptive error message.
11. THE `POST /api/payment/confirm` route SHALL require a valid Session; WHEN no Session is present, THE route SHALL return HTTP 401.
12. WHEN a valid package `id` is provided to `POST /api/payment/confirm`, THE route SHALL update the associated Payment record's `status` to `PAID`.
13. WHEN the Package or Payment record is not found in `POST /api/payment/confirm`, THE route SHALL return HTTP 404.

### Requirement 8: Middleware and Route Protection

**User Story:** As the system, I want the Next.js middleware to use NextAuth session tokens for route protection, so that role-specific pages are inaccessible without authentication.

#### Acceptance Criteria

1. THE `middleware.ts` file SHALL use NextAuth's `auth` export to validate sessions rather than checking a raw `token` cookie.
2. THE middleware `matcher` config SHALL protect `/sender/:path*`, `/receiver/:path*`, `/rider/:path*`, `/admin/:path*`, and `/payment/:path*`.
3. WHEN a request to a protected route has no valid Session, THE Middleware SHALL redirect to `/login`.
