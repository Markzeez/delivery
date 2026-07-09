import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Package from "@/lib/models/Package";

type PackageStatus = "PENDING" | "PICKED_UP" | "IN_TRANSIT" | "DELIVERED" | "CANCELLED";

const STATUS_ORDER: PackageStatus[] = [
  "PENDING",
  "PICKED_UP",
  "IN_TRANSIT",
  "DELIVERED",
];

const STATUS_NOTES: Record<PackageStatus, string> = {
  PENDING: "Package is awaiting pickup.",
  PICKED_UP: "Package has been picked up by the rider.",
  IN_TRANSIT: "Package is in transit.",
  DELIVERED: "Package has been delivered successfully.",
  CANCELLED: "Package has been cancelled.",
};

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    const body = await req.json();

    const { status, note, state, lga } = body as {
      status?: PackageStatus;
      note?: string;
      state?: string;
      lga?: string;
    };

    const pkg = await Package.findById(id);
    if (!pkg) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    // Determine new status
    let newStatus: PackageStatus;
    if (status) {
      newStatus = status;
    } else {
      // Advance to next status automatically
      const currentIndex = STATUS_ORDER.indexOf(pkg.status as PackageStatus);
      if (currentIndex === -1 || currentIndex === STATUS_ORDER.length - 1) {
        return NextResponse.json(
          { error: "Package is already in its final state" },
          { status: 400 }
        );
      }
      newStatus = STATUS_ORDER[currentIndex + 1];
    }

    pkg.status = newStatus;
    if (state) pkg.currentState = state;
    if (lga) pkg.currentLga = lga;

    pkg.updates.push({
      status: newStatus,
      note: note ?? STATUS_NOTES[newStatus],
      state: state ?? pkg.currentState,
      lga: lga ?? pkg.currentLga,
      createdAt: new Date(),
    });

    await pkg.save();

    return NextResponse.json({
      id: pkg._id.toString(),
      trackingNumber: pkg.trackingNumber,
      status: pkg.status,
    });
  } catch (error) {
    console.error("[PATCH /api/packages/[id]/status]", error);
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}
