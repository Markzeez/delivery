import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Package from "@/lib/models/Package";
import { generateTrackingCode } from "@/lib/generateTrackingCode";

export async function GET() {
  try {
    await connectDB();
    const packages = await prrisma.package.findMany({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json(packages);
  } catch {
    return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
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

    const trackingNumber = generateTrackingCode(senderState || "PKG", Date.now());

    const pkg = await prisma.package.create({
      trackingNumber,
      itemName: itemName || description || "Package",
      description: description ?? undefined,
      weight: Number(weight),
      deliveryFee: Number(fee ?? body.deliveryFee ?? 0),
      status: "PENDING",
      paymentStatus: "PENDING",

      senderName,
      senderPhone: senderPhone ?? "",
      senderAddress: senderAddress ?? "",
      senderLga: senderLga ?? "",
      senderState: senderState ?? "",

      receiverName,
      receiverPhone: receiverPhone ?? "",
      receiverAddress: receiverAddress ?? "",
      receiverLga: receiverLga ?? "",
      receiverState: receiverState ?? "",

      senderId: senderId ?? undefined,
      receiverId: receiverId ?? undefined,

      updates: [
        {
          status: "PENDING",
          note: "Package registered and awaiting pickup.",
          state: senderState,
          lga: senderLga,
          createdAt: new Date(),
        },
      ],
    });

    return NextResponse.json(
      { trackingCode: pkg.trackingNumber, id: pkg._id.toString() },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/packages]", error);
    return NextResponse.json({ error: "Failed to create package" }, { status: 500 });
  }
}
