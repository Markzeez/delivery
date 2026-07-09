import { formatDate } from "../helpers";
import type { TrackingUpdate } from "../helpers";

type DeliveryTimelineProps = {
  updates: TrackingUpdate[];
};

export default function DeliveryTimeline({ updates }: DeliveryTimelineProps) {
  if (updates.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-900">Delivery timeline</h3>
        <div className="mt-5 rounded-3xl border border-dashed border-slate-200 bg-white p-6 text-slate-500">
          No tracking updates have been recorded yet.
        </div>
      </div>
    );
  }

  // Show most recent first
  const sorted = [...updates].reverse();

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="mb-6 text-lg font-semibold text-slate-900">Delivery timeline</h3>

      <ol className="relative ml-3 border-l-2 border-slate-200">
        {sorted.map((update, idx) => (
          <li key={update.id} className="mb-6 ml-6 last:mb-0">
            {/* Timeline dot */}
            <span
              className={`absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white ${
                idx === 0 ? "bg-blue-600" : "bg-slate-300"
              }`}
            />

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{update.status}</p>
                  {update.note && (
                    <p className="mt-1 text-sm text-slate-500">{update.note}</p>
                  )}
                </div>
                <p className="shrink-0 text-xs text-slate-400">
                  {formatDate(update.createdAt)}
                </p>
              </div>

              {(update.lga || update.state) && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {update.lga && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      {update.lga}
                    </span>
                  )}
                  {update.state && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      {update.state}
                    </span>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
