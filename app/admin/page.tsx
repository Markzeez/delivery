import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
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
  "REGISTERED",
  "PICKED_UP",
  "IN_TRANSIT",
  "ARRIVED_STATE",
  "ARRIVED_LGA",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "LOST",
] as const;

type PackageStatus = (typeof packageStatuses)[number];

type AdminPageProps = {
  searchParams?: {
    query?: string;
    status?: string;
  };
};

function formatStatusLabel(status: string) {
  return status
    .toLowerCase()
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  const query = searchParams?.query?.trim() ?? "";
  const statusParam = searchParams?.status ?? "";
  const statusFilter = packageStatuses.includes(statusParam as PackageStatus)
    ? statusParam
    : "";

  const where =
    query || statusFilter
      ? {
          OR: query
            ? [
                { trackingCode: { contains: query } },
                { senderName: { contains: query } },
                { receiverName: { contains: query } },
                { senderPhone: { contains: query } },
                { receiverPhone: { contains: query } },
              ]
            : undefined,
          ...(statusFilter ? { status: statusFilter } : {}),
        }
      : undefined;

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

  const [totalPackages, deliveredPackages, lostPackages] = await Promise.all([
    prisma.package.count(),
    prisma.package.count({ where: { status: "DELIVERED" } }),
    prisma.package.count({ where: { status: "LOST" } }),
  ]);

  const packages = (await prisma.package.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 50,
  })) as PackageRow[];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                Total packages
              </p>
              <p className="mt-3 text-4xl font-semibold text-slate-900">{totalPackages}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                Delivered
              </p>
              <p className="mt-3 text-4xl font-semibold text-emerald-700">{deliveredPackages}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                Lost
              </p>
              <p className="mt-3 text-4xl font-semibold text-rose-700">{lostPackages}</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                Search and filter
              </p>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                Search package tracking codes, sender or receiver details. Filter by shipment status.
              </p>
            </div>

            <form className="grid w-full gap-4 lg:grid-cols-[1.6fr_1fr_auto] xl:w-auto" method="get">
              <Input
                name="query"
                defaultValue={query}
                placeholder="Search by tracking code, sender or receiver"
              />
              <Select name="status" defaultValue={statusFilter}>
                <SelectTrigger size="default" className="min-w-50">
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
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Package overview</h1>
              <p className="mt-2 text-sm text-slate-600">
                Showing the most recent 50 packages based on search and status filters.
              </p>
            </div>
          </div>

          <PackagesTable data={packages} />
        </section>
      </div>
    </main>
  );
}
