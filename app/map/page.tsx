import Link from "next/link";
import { MapPin, Package, Search } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getStateCoords } from "@/lib/nigeria-coords";
import type { MapPoint } from "./PackageMap";
import MapViewer from "./MapViewer";

type MapPageProps = {
  searchParams: Promise<{ code?: string }>;
};

export const metadata = {
  title: "Live Map — Ty Logistics",
  description: "Track any package live on the map across Nigeria.",
};

async function getPackageMapData(trackingCode: string) {
  const { data: pkg, error } = await supabase
    .from("packages")
    .select("*, tracking_updates(*)")
    .eq("tracking_number", trackingCode)
    .single();

  if (error || !pkg) return null;

  const points: MapPoint[] = [];

  const [oLat, oLng] = getStateCoords(pkg.sender_state);
  points.push({
    lat: oLat, lng: oLng,
    label: `${pkg.sender_lga}, ${pkg.sender_state}`,
    type: "origin",
    note: `Sender: ${pkg.sender_name}`,
  });

  const updates = [...(pkg.tracking_updates ?? [])].sort(
    (a: { created_at: string }, b: { created_at: string }) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );
  for (const u of updates) {
    if (!(u as { state: string | null }).state) continue;
    const typedU = u as { state: string; lga: string | null; note: string | null; status: string; created_at: string };
    const [lat, lng] = getStateCoords(typedU.state);
    points.push({
      lat, lng,
      label: [typedU.lga, typedU.state].filter(Boolean).join(", "),
      type: "waypoint",
      note: typedU.note ?? typedU.status,
      time: new Date(typedU.created_at).toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" }),
    });
  }

  if (pkg.current_state) {
    const [cLat, cLng] = getStateCoords(pkg.current_state);
    const last = points[points.length - 1];
    const isDupe = last && Math.abs(last.lat - cLat) < 0.01 && Math.abs(last.lng - cLng) < 0.01;
    if (isDupe) {
      points[points.length - 1].type = "current";
    } else {
      points.push({
        lat: cLat, lng: cLng,
        label: [pkg.current_lga, pkg.current_state].filter(Boolean).join(", "),
        type: "current",
        note: `Status: ${pkg.status}`,
      });
    }
  }

  const [dLat, dLng] = getStateCoords(pkg.receiver_state);
  points.push({
    lat: dLat, lng: dLng,
    label: `${pkg.receiver_lga}, ${pkg.receiver_state}`,
    type: "destination",
    note: `Receiver: ${pkg.receiver_name}`,
  });

  return {
    points,
    pkg: {
      trackingNumber: pkg.tracking_number,
      status: pkg.status,
      senderName: pkg.sender_name,
      senderState: pkg.sender_state,
      receiverName: pkg.receiver_name,
      receiverState: pkg.receiver_state,
      currentLga: pkg.current_lga ?? null,
      currentState: pkg.current_state ?? null,
      description: pkg.description ?? null,
      weight: pkg.weight,
      deliveryFee: pkg.delivery_fee,
    },
  };
}

const STATUS_STYLES: Record<string, string> = {
  PENDING: "bg-gray-100 text-gray-700",
  PICKED_UP: "bg-blue-100 text-blue-700",
  IN_TRANSIT: "bg-indigo-100 text-indigo-700",
  DELIVERED: "bg-emerald-100 text-emerald-700",
  CANCELLED: "bg-red-100 text-red-700",
};

function formatStatus(s: string) {
  return s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function MapPage({ searchParams }: MapPageProps) {
  const { code } = await searchParams;
  const trackingCode = code?.trim();
  const data = trackingCode ? await getPackageMapData(trackingCode) : null;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Live Map</p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900">Package location tracker</h1>
          </div>
          <Link href="/track-package" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 sm:mt-0">
            ← View full tracking
          </Link>
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <form method="get" action="/map" className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="code">Tracking code</label>
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input id="code" name="code" type="text" defaultValue={trackingCode ?? ""}
                placeholder="Enter tracking code — e.g. NG-LAG-2026-00001"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 py-3 pl-10 pr-4 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              <MapPin className="h-4 w-4" /> Show on map
            </button>
          </form>
        </section>

        {trackingCode && !data && (
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Package className="h-8 w-8 text-slate-300" />
              <div>
                <p className="font-semibold text-slate-900">Package not found</p>
                <p className="text-sm text-slate-500">No package matching <span className="font-mono font-semibold">{trackingCode}</span>. Check the code and try again.</p>
              </div>
            </div>
          </section>
        )}

        {data && (
          <>
            <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-mono text-base font-semibold text-slate-900">{data.pkg.trackingNumber}</p>
                    <p className="text-xs text-slate-500">
                      {data.pkg.senderState} → {data.pkg.receiverState}{" · "}{data.pkg.weight}kg
                      {data.pkg.description ? ` · ${data.pkg.description}` : ""}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[data.pkg.status] ?? "bg-gray-100 text-gray-700"}`}>
                    {formatStatus(data.pkg.status)}
                  </span>
                  <Link href={`/track/${encodeURIComponent(data.pkg.trackingNumber)}`} className="text-xs font-medium text-blue-600 hover:text-blue-800">
                    Full details →
                  </Link>
                </div>
              </div>
              {data.pkg.currentState && (
                <div className="mt-3 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  Currently in <strong className="text-slate-700">{[data.pkg.currentLga, data.pkg.currentState].filter(Boolean).join(", ")}</strong>
                </div>
              )}
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Live map</h2>
                <p className="text-xs text-slate-400">{data.points.length} location{data.points.length !== 1 ? "s" : ""}</p>
              </div>
              <MapViewer points={data.points} />
            </section>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Sender</p>
                <p className="mt-2 text-base font-semibold text-slate-900">{data.pkg.senderName}</p>
                <p className="text-sm text-slate-500">{data.pkg.senderState}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Receiver</p>
                <p className="mt-2 text-base font-semibold text-slate-900">{data.pkg.receiverName}</p>
                <p className="text-sm text-slate-500">{data.pkg.receiverState}</p>
              </div>
            </div>
          </>
        )}

        {!trackingCode && (
          <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm">
            <MapPin className="mx-auto h-10 w-10 text-slate-300" />
            <p className="mt-4 text-lg font-semibold text-slate-700">Enter a tracking code to see the map</p>
            <p className="mt-2 text-sm text-slate-400">The map will show origin, current location, and destination across Nigeria.</p>
          </section>
        )}
      </div>
    </main>
  );
}
