import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { generateTrackingCode } from "@/lib/generateTrackingCode";

export async function GET() {
  try {
    const { data: packages, error } = await supabase
      .from("packages")
      .select("*, tracking_updates(*)")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(packages);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      senderName, senderPhone, senderAddress, senderLga, senderState,
      receiverName, receiverPhone, receiverAddress, receiverLga, receiverState,
      description, weight, fee, itemName, senderId, receiverId,
    } = body;

    if (!senderName || !receiverName || !weight) {
      return NextResponse.json(
        { error: "Missing required fields: senderName, receiverName, weight" },
        { status: 400 }
      );
    }

    const trackingNumber = generateTrackingCode(senderState || "PKG");

    const { data: pkg, error: pkgError } = await supabase
      .from("packages")
      .insert({
        tracking_number: trackingNumber,
        item_name: itemName || description || "Package",
        description: description ?? null,
        weight: Number(weight),
        delivery_fee: Number(fee ?? body.deliveryFee ?? 0),
        status: "PENDING",
        sender_name: senderName,
        sender_phone: senderPhone ?? "",
        sender_address: senderAddress ?? "",
        sender_lga: senderLga ?? "",
        sender_state: senderState ?? "",
        receiver_name: receiverName,
        receiver_phone: receiverPhone ?? "",
        receiver_address: receiverAddress ?? "",
        receiver_lga: receiverLga ?? "",
        receiver_state: receiverState ?? "",
        sender_id: senderId ?? null,
        receiver_id: receiverId ?? null,
      })
      .select()
      .single();

    if (pkgError || !pkg) {
      console.error("[POST /api/packages]", pkgError);
      return NextResponse.json(
        { error: "Failed to create package" },
        { status: 500 }
      );
    }

    // Insert initial tracking update
    await supabase.from("tracking_updates").insert({
      package_id: pkg.id,
      status: "PENDING",
      note: "Package registered and awaiting pickup.",
      state: senderState ?? null,
      lga: senderLga ?? null,
    });

    return NextResponse.json(
      { trackingCode: pkg.tracking_number, id: pkg.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/packages]", error);
    return NextResponse.json(
      { error: "Failed to create package" },
      { status: 500 }
    );
  }
}
