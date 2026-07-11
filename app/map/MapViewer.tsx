"use client";

import dynamic from "next/dynamic";
import type { MapPoint } from "./PackageMap";

// Load the Leaflet map only on the client — no SSR
const PackageMap = dynamic(() => import("./PackageMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[480px] animate-pulse items-center justify-center rounded-2xl border border-slate-200 bg-slate-100">
      <p className="text-sm text-slate-400">Loading map…</p>
    </div>
  ),
});

type MapViewerProps = {
  points: MapPoint[];
};

export default function MapViewer({ points }: MapViewerProps) {
  return <PackageMap points={points} height={480} />;
}
