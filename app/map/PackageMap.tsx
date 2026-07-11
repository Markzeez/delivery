"use client";

import { useEffect, useRef } from "react";

export type MapPoint = {
  lat: number;
  lng: number;
  label: string;
  type: "origin" | "waypoint" | "current" | "destination";
  note?: string;
  time?: string;
};

type PackageMapProps = {
  points: MapPoint[];
  height?: number;
};

const PIN_COLORS: Record<MapPoint["type"], string> = {
  origin: "#2563eb",      // blue-600
  waypoint: "#94a3b8",    // slate-400
  current: "#f97316",     // orange-500
  destination: "#16a34a", // green-600
};

export default function PackageMap({ points, height = 420 }: PackageMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || points.length === 0) return;
    if (mapInstanceRef.current) return; // already initialised

    // Dynamically load Leaflet from CDN to avoid SSR issues
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Load JS
      await new Promise<void>((resolve) => {
        if ((window as unknown as { L?: unknown }).L) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });

      const L = (window as unknown as { L: typeof import("leaflet") }).L;
      if (!mapRef.current) return;

      // Centre map on the current or first point
      const centre = points.find((p) => p.type === "current") ?? points[0];
      const map = L.map(mapRef.current, { zoomControl: true }).setView(
        [centre.lat, centre.lng],
        6
      );
      mapInstanceRef.current = map;

      // OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Draw dashed polyline through all points
      if (points.length >= 2) {
        const latLngs = points.map((p) => [p.lat, p.lng] as [number, number]);
        L.polyline(latLngs, {
          color: "#94a3b8",
          weight: 2,
          dashArray: "6 6",
        }).addTo(map);
      }

      // Add markers
      points.forEach((point) => {
        const isCurrent = point.type === "current";
        const color = PIN_COLORS[point.type];

        const icon = L.divIcon({
          className: "",
          html: `
            <div style="
              position:relative;
              width:${isCurrent ? 18 : 14}px;
              height:${isCurrent ? 18 : 14}px;
            ">
              ${
                isCurrent
                  ? `<div style="
                      position:absolute;inset:-6px;
                      border-radius:50%;
                      background:${color}33;
                      animation:pulse 1.8s infinite;
                    "></div>`
                  : ""
              }
              <div style="
                width:100%;height:100%;
                border-radius:50%;
                background:${color};
                border:2px solid white;
                box-shadow:0 1px 4px rgba(0,0,0,0.3);
              "></div>
            </div>`,
          iconSize: [isCurrent ? 18 : 14, isCurrent ? 18 : 14],
          iconAnchor: [isCurrent ? 9 : 7, isCurrent ? 9 : 7],
        });

        L.marker([point.lat, point.lng], { icon })
          .addTo(map)
          .bindPopup(`<strong>${point.label}</strong>`);
      });

      // Fit all points in view
      const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Inject pulse animation once
  useEffect(() => {
    if (document.getElementById("map-pulse-style")) return;
    const style = document.createElement("style");
    style.id = "map-pulse-style";
    style.textContent = `
      @keyframes pulse {
        0%   { transform: scale(1);   opacity: 0.6; }
        50%  { transform: scale(1.6); opacity: 0.2; }
        100% { transform: scale(1);   opacity: 0.6; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  if (points.length === 0) {
    return (
      <div
        className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50"
        style={{ height }}
      >
        <p className="text-sm text-slate-400">No location data available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div ref={mapRef} style={{ height, borderRadius: "0.75rem", zIndex: 0 }} />
      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-xs text-slate-500">
        {(["origin", "current", "destination", "waypoint"] as MapPoint["type"][]).map(
          (type) => (
            <span key={type} className="flex items-center gap-1.5">
              <span
                className="inline-block h-3 w-3 rounded-full border border-white shadow-sm"
                style={{ background: PIN_COLORS[type] }}
              />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          )
        )}
      </div>
    </div>
  );
}
