import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { PackageStatus } from "@/lib/database.types";

const STATUS_ORDER: PackageStatus[] = [
  "PENDING",
  "PICKED_UP",
  "IN_TRANSIT",
  "DELIVERED",
];

const STATUS_NOTES: Record<string, string> = {
  PENDING: "Package is awaiting pickup.",
  PICKED_UP: "Package has been picked up by the rider.",
  IN_TRANSIT: "Package is in transit.",
  DELIVERED: "Package has been delivered successfully.",
  CANCELLED: "Package has been cancelled.",
};

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, note, state, lga } = body as {
      status?: PackageStatus;
      note?: string;
      state?: string;
      lga?: string;
    };

    const { data: pkg, error: fetchErr } = await supabase
      .from("packages")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchErr || !pkg) {
      return NextResponse.json(
        { error: "Package not found" },
        { status: 404 }
      );
    }

    let newStatus: PackageStatus;
    if (status) {
      newStatus = status;
    } else {
      const currentIndex = STATUS_ORDER.indexOf(pkg.status as PackageStatus);
      if (currentIndex === -1 || currentIndex === STATUS_ORDER.length - 1) {
        return NextResponse.json(
          { error: "Package is already in its final state" },
          { status: 400 }
        );
      }
      newStatus = STATUS_ORDER[currentIndex + 1];
    }

    const { data: updated, error: updateErr } = await supabase
      .from("packages")
      .update({
        status: newStatus,
        ...(state && { current_state: state }),
        ...(lga && { current_lga: lga }),
      })
      .eq("id", id)
      .select()
      .single();

    if (updateErr || !updated) throw updateErr;

    await supabase.from("tracking_updates").insert({
      package_id: id,
      status: newStatus,
      note: note ?? STATUS_NOTES[newStatus] ?? "",
      state: state ?? pkg.current_state ?? null,
      lga: lga ?? pkg.current_lga ?? null,
    });

    return NextResponse.json({
      id: updated.id,
      trackingNumber: updated.tracking_number,
      status: updated.status,
    });
  } catch (error) {
    console.error("[PATCH /api/packages/[id]/status]", error);
    return NextResponse.json(
      { error: "Failed to update status" },
      { status: 500 }
    );
  }
}
