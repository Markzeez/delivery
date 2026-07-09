import type { PackageStatus } from "./helpers";

/** Human-readable label for each status value */
export const STATUS_LABELS: Record<PackageStatus, string> = {
  REGISTERED: "Registered",
  PICKED_UP: "Picked up",
  IN_TRANSIT: "In transit",
  ARRIVED_STATE: "Arrived at state hub",
  ARRIVED_LGA: "Arrived at LGA hub",
  OUT_FOR_DELIVERY: "Out for delivery",
  DELIVERED: "Delivered",
  LOST: "Lost",
};

/** Tailwind pill classes for each status */
export const STATUS_PILL_STYLES: Record<PackageStatus, string> = {
  REGISTERED: "bg-slate-100 text-slate-800",
  PICKED_UP: "bg-blue-100 text-blue-900",
  IN_TRANSIT: "bg-indigo-100 text-indigo-900",
  ARRIVED_STATE: "bg-amber-100 text-amber-900",
  ARRIVED_LGA: "bg-orange-100 text-orange-900",
  OUT_FOR_DELIVERY: "bg-emerald-100 text-emerald-900",
  DELIVERED: "bg-emerald-600 text-white",
  LOST: "bg-rose-100 text-rose-900",
};

/** Map pin colours per point type */
export const PIN_COLORS = {
  origin: "#2563eb",
  current: "#f97316",
  destination: "#16a34a",
  waypoint: "#6b7280",
} as const;

/** Map pin legend labels */
export const PIN_LABELS = {
  origin: "Origin",
  current: "Current location",
  destination: "Destination",
  waypoint: "Checkpoint",
} as const;
