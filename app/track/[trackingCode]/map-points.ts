import { getStateCoords } from "@/lib/nigeria-coords";
import { STATUS_LABELS } from "./constants";
import { formatDate, isSameLocation } from "./helpers";
import type { PackageData, PackageStatus } from "./helpers";

export type MapPoint = {
  lat: number;
  lng: number;
  label: string;
  type: "origin" | "current" | "destination" | "waypoint";
  note?: string;
  time?: string;
};

/**
 * Builds an ordered array of MapPoints from a package record.
 * Order: origin → chronological waypoints → current location → destination.
 */
export function buildMapPoints(pkg: PackageData): MapPoint[] {
  const points: MapPoint[] = [];

  // 1. Origin
  const [oLat, oLng] = getStateCoords(pkg.senderState);
  points.push({
    lat: oLat,
    lng: oLng,
    label: `${pkg.senderLga}, ${pkg.senderState}`,
    type: "origin",
    note: `Sender: ${pkg.senderName}`,
  });

  // 2. Waypoints from tracking updates (chronological order)
  for (const u of pkg.updates) {
    if (!u.state) continue;
    const [lat, lng] = getStateCoords(u.state);
    points.push({
      lat,
      lng,
      label: `${u.lga ?? ""}, ${u.state}`.trim().replace(/^,\s*/, ""),
      type: "waypoint",
      note: u.note ?? u.status,
      time: formatDate(u.createdAt),
    });
  }

  // 3. Current location
  if (pkg.currentState) {
    const [cLat, cLng] = getStateCoords(pkg.currentState);
    const last = points[points.length - 1];
    const duplicate =
      last && isSameLocation(last.lat, last.lng, cLat, cLng);

    if (!duplicate) {
      points.push({
        lat: cLat,
        lng: cLng,
        label: [pkg.currentLga, pkg.currentState]
          .filter(Boolean)
          .join(", "),
        type: "current",
        note: STATUS_LABELS[pkg.status as PackageStatus],
      });
    } else {
      // Promote the last waypoint to "current"
      points[points.length - 1].type = "current";
    }
  }

  // 4. Destination
  const [dLat, dLng] = getStateCoords(pkg.receiverState);
  points.push({
    lat: dLat,
    lng: dLng,
    label: `${pkg.receiverLga}, ${pkg.receiverState}`,
    type: "destination",
    note: `Receiver: ${pkg.receiverName}`,
  });

  return points;
}
