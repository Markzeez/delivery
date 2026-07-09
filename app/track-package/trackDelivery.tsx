import { prisma } from "@/lib/prisma";
import { getStateCoords } from "@/lib/nigeria-coords";
import dynamic from "next/dynamic";
import type { MapPoint } from "@/app/components/map/PackageMap";

// Loaded client-side only — Leaflet needs the browser DOM
const PackageMap = dynamic(() => import("@/app/components/map/PackageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

type PackageStatus =
  | "REGISTERED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "ARRIVED_STATE"
  | "ARRIVED_LGA"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "LOST";

type TrackDeliveryProps = {
  trackingCode: string;
};

const statusLabels: Record<PackageStatus, string> = {
  REGISTERED: "Registered",
  PICKED_UP: "Picked up",
  IN_TRANSIT: "In transit",
  ARRIVED_STATE: "Arrived at state hub",
  ARRIVED_LGA: "Arrived at LGA hub",
  OUT_FOR_DELIVERY: "Out for delivery",
  DELIVERED: "Delivered",
  LOST: "Lost",
};

const statusPillStyles: Record<PackageStatus, string> = {
  REGISTERED: "bg-slate-100 text-slate-800",
  PICKED_UP: "bg-blue-100 text-blue-900",
  IN_TRANSIT: "bg-indigo-100 text-indigo-900",
  ARRIVED_STATE: "bg-amber-100 text-amber-900",
  ARRIVED_LGA: "bg-orange-100 text-orange-900",
  OUT_FOR_DELIVERY: "bg-emerald-100 text-emerald-900",
  DELIVERED: "bg-emerald-600 text-white",
  LOST: "bg-rose-100 text-rose-900",
};

const formatDate = (value: Date | null | undefined) => {
  if (!value) return "-";
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

export default async function TrackDelivery({ trackingCode }: TrackDeliveryProps) {
  const pkg = await prisma.package.findUnique({
    where: { trackingNumber: trackingCode },
    include: {
      updates: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!pkg) {
    return (
      <section className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
        <h2 className="text-2xl font-semibold text-slate-900">No package found</h2>
        <p className="mt-3 text-slate-600">
          We could not find a package matching{" "}
          <span className="font-semibold">{trackingCode}</span>.
          Please verify the tracking code and try again.
        </p>
      </section>
    );
  }

  const currentStatus = pkg.status as PackageStatus;

  // ── Build map points ─────────────────────────────────────────────────────
  const mapPoints: MapPoint[] = [];

  // 1. Origin (sender state)
  const [originLat, originLng] = getStateCoords(pkg.senderState);
  mapPoints.push({
    lat: originLat,
    lng: originLng,
    label: `${pkg.senderLga}, ${pkg.senderState}`,
    type: "origin",
    note: `Sender: ${pkg.senderName}`,
  });

  // 2. Tracking update waypoints (chronological)
  pkg.updates.forEach((u: { id: string; status: string; note: string | null; state: string | null; lga: string | null; createdAt: Date }) => {
    if (!u.state) return;
    const [lat, lng] = getStateCoords(u.state);
    mapPoints.push({
      lat,
      lng,
      label: `${u.lga ?? ""}, ${u.state}`,
      type: "waypoint",
      note: u.note ?? u.status,
      time: formatDate(u.createdAt),
    });
  });

  // 3. Current location (if different from last waypoint)
  if (pkg.currentState) {
    const [curLat, curLng] = getStateCoords(pkg.currentState);
    const last = mapPoints[mapPoints.length - 1];
    const isDuplicate =
      last && Math.abs(last.lat - curLat) < 0.01 && Math.abs(last.lng - curLng) < 0.01;

    if (!isDuplicate) {
      mapPoints.push({
        lat: curLat,
        lng: curLng,
        label: `${pkg.currentLga ?? ""}, ${pkg.currentState}`,
        type: "current",
        note: statusLabels[currentStatus],
      });
    } else {
      // Promote last waypoint to current
      mapPoints[mapPoints.length - 1].type = "current";
    }
  }

  // 4. Destination (receiver state)
  const [destLat, destLng] = getStateCoords(pkg.receiverState);
  mapPoints.push({
    lat: destLat,
    lng: destLng,
    label: `${pkg.receiverLga}, ${pkg.receiverState}`,
    type: "destination",
    note: `Receiver: ${pkg.receiverName}`,
  });

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section className="mx-auto w-full max-w-4xl space-y-8">
      {/* ── Header card ── */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              Tracking code
            </p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">
              {pkg.trackingNumber}
            </p>
          </div>
          <span
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${statusPillStyles[currentStatus]}`}
          >
            {statusLabels[currentStatus]}
          </span>
        </div>
      </div>

      {/* ── Live map ── */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/30">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Live map</h3>
          <span className="text-xs text-slate-400">
            {pkg.currentState
              ? `Currently in ${pkg.currentLga ? pkg.currentLga + ", " : ""}${pkg.currentState}`
              : "Location not yet updated"}
          </span>
        </div>
        <PackageMap points={mapPoints} height={420} />
      </div>

      {/* ── Sender / Receiver ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Sender details</h3>
          <dl className="mt-4 space-y-3 text-slate-700">
            <div>
              <dt className="text-sm font-medium text-slate-500">Name</dt>
              <dd className="mt-1 text-base">{pkg.senderName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Phone</dt>
              <dd className="mt-1 text-base">{pkg.senderPhone}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Location</dt>
              <dd className="mt-1 text-base">
                {pkg.senderAddress}, {pkg.senderLga}, {pkg.senderState}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Receiver details</h3>
          <dl className="mt-4 space-y-3 text-slate-700">
            <div>
              <dt className="text-sm font-medium text-slate-500">Name</dt>
              <dd className="mt-1 text-base">{pkg.receiverName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Phone</dt>
              <dd className="mt-1 text-base">{pkg.receiverPhone}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Location</dt>
              <dd className="mt-1 text-base">
                {pkg.receiverAddress}, {pkg.receiverLga}, {pkg.receiverState}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── Status / Location / Created ── */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-500">Package status</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">
            {statusLabels[currentStatus]}
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-500">Current location</p>
          <p className="mt-2 text-base text-slate-900">
            {pkg.currentLga || "Unknown"}, {pkg.currentState || "Unknown"}
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-500">Created</p>
          <p className="mt-2 text-base text-slate-900">
            {formatDate(pkg.createdAt)}
          </p>
        </div>
      </div>

      {/* ── Package details ── */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-900">Package details</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-slate-500">Description</p>
            <p className="mt-2 text-base text-slate-900">{pkg.description}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Weight</p>
            <p className="mt-2 text-base text-slate-900">
              {pkg.weight.toFixed(2)} kg
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Fee</p>
            <p className="mt-2 text-base text-slate-900">
              ₦{pkg.deliveryFee.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* ── Delivery timeline ── */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-900">Delivery timeline</h3>
        <div className="relative mt-5 space-y-0">
          {pkg.updates.length > 0 ? (
            <ol className="relative border-l-2 border-slate-200 ml-3">
              {[...pkg.updates].reverse().map(
                (update: {
                  id: string;
                  status: string;
                  note: string | null;
                  state: string | null;
                  lga: string | null;
                  createdAt: Date;
                }) => (
                  <li key={update.id} className="mb-6 ml-6">
                    {/* dot */}
                    <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white" />
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {update.status}
                          </p>
                          {update.note && (
                            <p className="mt-1 text-sm text-slate-500">
                              {update.note}
                            </p>
                          )}
                        </div>
                        <p className="shrink-0 text-xs text-slate-400">
                          {formatDate(update.createdAt)}
                        </p>
                      </div>
                      {(update.state || update.lga) && (
                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                          {update.lga && (
                            <span className="rounded-full bg-slate-100 px-3 py-1">
                              {update.lga}
                            </span>
                          )}
                          {update.state && (
                            <span className="rounded-full bg-slate-100 px-3 py-1">
                              {update.state}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                )
              )}
            </ol>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-6 text-slate-600">
              No tracking updates have been recorded yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
