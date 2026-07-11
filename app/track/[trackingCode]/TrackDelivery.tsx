import { connectDB } from "@/lib/mongodb";
import Package from "@/lib/models/Package";
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
  await connectDB();

  const raw = await Package.findOne({ trackingNumber: trackingCode }).lean();

  if (!raw) {
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

  // Normalise Mongoose subdocument _id → id for components
  const updates: TrackingUpdate[] = (raw.updates ?? [])
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .map((u) => ({
      id: String(u._id ?? `${u.status}-${u.createdAt}`),
      status: u.status,
      note: u.note ?? null,
      state: u.state ?? null,
      lga: u.lga ?? null,
      createdAt: new Date(u.createdAt),
    }));

  const pkg: PackageData = {
    trackingNumber: raw.trackingNumber,
    status: raw.status,
    description: raw.description ?? null,
    weight: raw.weight,
    deliveryFee: raw.deliveryFee,
    senderName: raw.senderName,
    senderPhone: raw.senderPhone,
    senderAddress: raw.senderAddress,
    senderLga: raw.senderLga,
    senderState: raw.senderState,
    receiverName: raw.receiverName,
    receiverPhone: raw.receiverPhone,
    receiverAddress: raw.receiverAddress,
    receiverLga: raw.receiverLga,
    receiverState: raw.receiverState,
    currentLga: raw.currentLga ?? null,
    currentState: raw.currentState ?? null,
    createdAt: new Date(raw.createdAt),
    updates,
  };

  const status = pkg.status as PackageStatus;
  const mapPoints = buildMapPoints(pkg);

  return (
    <div className="space-y-6">
      {/* 1. Tracking code + status pill */}
      <PackageHeader trackingNumber={pkg.trackingNumber} status={status} />

      {/* 2. Live map */}
      <LiveMap
        points={mapPoints}
        currentLga={pkg.currentLga}
        currentState={pkg.currentState}
      />

      {/* 3. Sender / Receiver side-by-side */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SenderCard
          name={pkg.senderName}
          phone={pkg.senderPhone}
          address={pkg.senderAddress}
          lga={pkg.senderLga}
          state={pkg.senderState}
        />
        <ReceiverCard
          name={pkg.receiverName}
          phone={pkg.receiverPhone}
          address={pkg.receiverAddress}
          lga={pkg.receiverLga}
          state={pkg.receiverState}
        />
      </div>

      {/* 4. Status / location / created */}
      <PackageStats
        status={status}
        currentLga={pkg.currentLga}
        currentState={pkg.currentState}
        createdAt={pkg.createdAt}
      />

      {/* 5. Package details */}
      <PackageDetails
        description={pkg.description}
        weight={pkg.weight}
        deliveryFee={pkg.deliveryFee}
      />

      {/* 6. Timeline */}
      <DeliveryTimeline updates={pkg.updates} />
    </div>
  );
}
