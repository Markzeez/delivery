import { supabase } from "@/lib/supabase";
import { buildMapPoints } from "./map-points";
import type { PackageData, PackageStatus, TrackingUpdate } from "./helpers";

import PackageHeader from "./components/PackageHeader";
import LiveMap from "./components/LiveMap";
import SenderCard from "./components/SenderCard";
import ReceiverCard from "./components/ReceiverCard";
import PackageStats from "./components/PackageStats";
import PackageDetails from "./components/PackageDetails";
import DeliveryTimeline from "./components/DeliveryTimeline";

type TrackDeliveryProps = {
  trackingCode: string;
};

export default async function TrackDelivery({ trackingCode }: TrackDeliveryProps) {
  const { data: raw, error } = await supabase
    .from("packages")
    .select("*, tracking_updates(*)")
    .eq("tracking_number", trackingCode)
    .single();

  if (error || !raw) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">No package found</h2>
        <p className="mt-3 text-slate-600">
          We could not find a package matching{" "}
          <span className="font-mono font-semibold">{trackingCode}</span>.
          Please verify the tracking code and try again.
        </p>
      </div>
    );
  }

  const updates: TrackingUpdate[] = (raw.tracking_updates ?? [])
    .sort((a: { created_at: string }, b: { created_at: string }) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )
    .map((u: { id: string; status: string; note: string | null; state: string | null; lga: string | null; created_at: string }) => ({
      id: u.id,
      status: u.status,
      note: u.note ?? null,
      state: u.state ?? null,
      lga: u.lga ?? null,
      createdAt: new Date(u.created_at),
    }));

  const pkg: PackageData = {
    trackingNumber: raw.tracking_number,
    status: raw.status,
    description: raw.description ?? null,
    weight: raw.weight,
    deliveryFee: raw.delivery_fee,
    senderName: raw.sender_name,
    senderPhone: raw.sender_phone,
    senderAddress: raw.sender_address,
    senderLga: raw.sender_lga,
    senderState: raw.sender_state,
    receiverName: raw.receiver_name,
    receiverPhone: raw.receiver_phone,
    receiverAddress: raw.receiver_address,
    receiverLga: raw.receiver_lga,
    receiverState: raw.receiver_state,
    currentLga: raw.current_lga ?? null,
    currentState: raw.current_state ?? null,
    createdAt: new Date(raw.created_at),
    updates,
  };

  const status = pkg.status as PackageStatus;
  const mapPoints = buildMapPoints(pkg);

  return (
    <div className="space-y-6">
      <PackageHeader trackingNumber={pkg.trackingNumber} status={status} />
      <LiveMap points={mapPoints} currentLga={pkg.currentLga} currentState={pkg.currentState} />
      <div className="grid gap-6 lg:grid-cols-2">
        <SenderCard name={pkg.senderName} phone={pkg.senderPhone} address={pkg.senderAddress} lga={pkg.senderLga} state={pkg.senderState} />
        <ReceiverCard name={pkg.receiverName} phone={pkg.receiverPhone} address={pkg.receiverAddress} lga={pkg.receiverLga} state={pkg.receiverState} />
      </div>
      <PackageStats status={status} currentLga={pkg.currentLga} currentState={pkg.currentState} createdAt={pkg.createdAt} />
      <PackageDetails description={pkg.description} weight={pkg.weight} deliveryFee={pkg.deliveryFee} />
      <DeliveryTimeline updates={pkg.updates} />
    </div>
  );
}
