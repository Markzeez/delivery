import { STATUS_LABELS } from "../constants";
import { formatDate } from "../helpers";
import type { PackageStatus } from "../helpers";

type PackageStatsProps = {
  status: PackageStatus;
  currentLga: string | null;
  currentState: string | null;
  createdAt: Date;
};

export default function PackageStats({
  status,
  currentLga,
  currentState,
  createdAt,
}: PackageStatsProps) {
  const location = [currentLga, currentState].filter(Boolean).join(", ") || "Not yet updated";

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-500">Package status</p>
        <p className="mt-2 text-xl font-semibold text-slate-900">
          {STATUS_LABELS[status]}
        </p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-500">Current location</p>
        <p className="mt-2 text-base text-slate-900">{location}</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-500">Registered on</p>
        <p className="mt-2 text-base text-slate-900">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}
