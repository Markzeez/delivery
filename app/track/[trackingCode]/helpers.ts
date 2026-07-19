export type PackageStatus =
  | "PENDING"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "CANCELLED"
  | "LOST";

export type TrackingUpdate = {
  id: string;
  status: string;
  note: string | null;
  state: string | null;
  lga: string | null;
  createdAt: Date;
};

export type PackageData = {
  trackingNumber: string;
  status: string;
  description: string | null;
  weight: number;
  deliveryFee: number;
  senderName: string;
  senderPhone: string;
  senderAddress: string;
  senderLga: string;
  senderState: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  receiverLga: string;
  receiverState: string;
  currentLga: string | null;
  currentState: string | null;
  createdAt: Date;
  updates: TrackingUpdate[];
};

/**
 * Formats a Date (or null) into a readable locale string.
 * Returns "-" for null/undefined.
 */
export function formatDate(value: Date | null | undefined): string {
  if (!value) return "-";
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

/**
 * Returns true if two lat/lng pairs are within ~1 km of each other.
 * Used to avoid duplicate map pins.
 */
export function isSameLocation(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): boolean {
  return Math.abs(lat1 - lat2) < 0.01 && Math.abs(lng1 - lng2) < 0.01;
}
