'use client';

import dynamic from 'next/dynamic';
import type { MapPoint } from '../map-points';

// Leaflet requires browser DOM — load client-side only
const PackageMap = dynamic(() => import('@/app/map/PackageMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-105 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
      <p className="animate-pulse text-sm text-slate-400">Loading map…</p>
    </div>
  ),
});

type LiveMapProps = {
  points: MapPoint[];
  currentLga: string | null;
  currentState: string | null;
};

export default function LiveMap({
  points,
  currentLga,
  currentState,
}: LiveMapProps) {
  const locationLabel = [currentLga, currentState].filter(Boolean).join(', ');

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">Live map</h3>
        <span className="text-xs text-slate-400">
          {locationLabel
            ? `Currently in ${locationLabel}`
            : 'Location not yet updated'}
        </span>
      </div>
      <PackageMap points={points} height={420} />
    </div>
  );
}
