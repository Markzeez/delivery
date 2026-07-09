import { Role } from "./role";

export const routePermissions = {
  "/admin": [Role.ADMIN],

  "/courier": [Role.COURIER],

  "/dashboard": [
    Role.ADMIN,
    Role.COURIER,
    Role.SENDER,
  ],
};