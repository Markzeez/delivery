import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Package from "@/lib/models/Package";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import PackagesTable from "./packages-table";

const packageStatuses = [
  "PENDING",
  "PICKED_UP",
  "IN_TRANSIT",
  "DELIVERED",
  "CANCELLED",
] as const;

type PackageStatus = (typeof packageStatuses)[number];

type AdminPageProps = {
  searchParams?: Promise<{
    query?: string;
    status?: string;
  }>;
};

type PackageRow = {
  id: string;
  trackingCode: string;
  senderName: string;
  senderPhone: string;
  receiverName: string;
  receiverPhone: string;
  status: string;
  createdAt: Date;
};

function formatStatusLabel(status: string) {
  return status
    .toLowerCase()
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const session = await auth();

  if (!session?.user) redirect("/login");
  if ((session.user as { role?: string }).role !== "ADMIN") redirect("/");

  const resolved = searchParams ? await searchParams : {};
  const query = resolved.query?.trim() ?? "";
  const statusParam = resolved.status ?? "";
  const statusFilter = packageStatuses.includes(statusParam as PackageStatus)
    ? statusParam
    : "";

  await connectDB();

  // Build MongoDB filter
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: Record<string, any> = {};
  if (statusFilter) filter.status = statusFilter;
  if (query) {
    filter.$or = [
      { trackingNumber: { $regex: query, $options: "i" } },
      { senderName: { $regex: query, $options: "i" } },
      { receiverName: { $regex: query, $options: "i" } },
      { senderPhone: { $regex: query, $options: "i" } },
      { receiverPhone: { $regex: query, $options: "i" } },
    ];
  }

  const [totalPackages, deliveredPackages, cancelledPackages, rawPackages] =
    await Promise.all([
      Package.countDocuments({}),
      Package.countDocuments({ status: "DELIVERED" }),
      Package.countDocuments({ status: "CANCELLED" }),
      Package.find(filter).sort({ createdAt: -1 }).limit(50).lean(),
    ]);

  const packages: PackageRow[] = rawPackages.map((pkg) => ({
    id: pkg._id.toString(),
    trackingCode: pkg.trackingNumber,
    senderName: pkg.senderName,
    senderPhone: pkg.senderPhone,
    receiverName: pkg.receiverName,
    receiverPhone: pkg.receiverPhone,
    status: pkg.status,
    createdAt: new Date(pkg.createdAt),
  }));

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-7xl space-y-8">

        {/* Stats */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                Total packages
              </p>
              <p className="mt-3 text-4xl font-semibold text-slate-900">{totalPackages}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                Delivered
              </p>
              <p className="mt-3 text-4xl font-semibold text-emerald-700">{deliveredPackages}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                Cancelled
              </p>
              <p className="mt-3 text-4xl font-semibold text-rose-700">{cancelledPackages}</p>
            </div>
          </div>
        </section>

        {/* Search + filter */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <form className="grid w-full gap-4 lg:grid-cols-[1.6fr_1fr_auto]" method="get">
            <Input
              name="query"
              defaultValue={query}
              placeholder="Search by tracking code, sender or receiver"
            />
            <Select name="status" defaultValue={statusFilter}>
              <SelectTrigger className="min-w-[12rem]">
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All statuses</SelectItem>
                {packageStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {formatStatusLabel(status)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit">Apply</Button>
          </form>
        </section>

        {/* Table */}
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-slate-900">Package overview</h1>
            <p className="mt-1 text-sm text-slate-500">
              Showing up to 50 packages matching the current filters.
            </p>
          </div>
          <PackagesTable data={packages} />
        </section>
      </div>
    </main>
  );
}
