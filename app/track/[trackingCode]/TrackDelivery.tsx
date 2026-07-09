import { prisma } from "@/lib/prisma";
import { buildMapPoints } from "./map-points";
import type { PackageStatus } from "./helpers";

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
  const pkg = await prisma.package.findUnique({
    where: { trackingNumber: trackingCode },
    include: { updates: { orderBy: { createdAt: "asc" } } },
  });

  if (!pkg) {
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

  const status = pkg.status as PackageStatus;
  const mapPoints = buildMapPoints(pkg);

  return (
    <div className="space-y-6">
      {/* 1. Tracking code + status pill */}
      <PackageHeader trackingNumber={pkg.trackingNumber} status={status} />

      {/* 2. Live map */}
      <LiveMap
        points={mapPoints}
        currentLga={pkg.currentLga ?? null}
        currentState={pkg.currentState ?? null}
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
        currentLga={pkg.currentLga ?? null}
        currentState={pkg.currentState ?? null}
        createdAt={pkg.createdAt}
      />

      {/* 5. Package details */}
      <PackageDetails
        description={pkg.description ?? null}
        weight={pkg.weight}
        deliveryFee={pkg.deliveryFee}
      />

      {/* 6. Timeline */}
      <DeliveryTimeline updates={pkg.updates} />
    </div>
  );
}
