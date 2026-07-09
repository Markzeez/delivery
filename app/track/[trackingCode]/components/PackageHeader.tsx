import { STATUS_LABELS, STATUS_PILL_STYLES } from "../constants";
import type { PackageStatus } from "../helpers";

type PackageHeaderProps = {
  trackingNumber: string;
  status: PackageStatus;
};

export default function PackageHeader({ trackingNumber, status }: PackageHeaderProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Tracking code
          </p>
          <p className="mt-1 text-3xl font-semibold text-slate-900">
            {trackingNumber}
          </p>
        </div>
        <span
          className={`inline-flex items-center self-start rounded-full px-4 py-2 text-sm font-semibold sm:self-auto ${STATUS_PILL_STYLES[status]}`}
        >
          {STATUS_LABELS[status]}
        </span>
      </div>
    </div>
  );
}
