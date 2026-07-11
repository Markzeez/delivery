import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing name, email, or message" },
        { status: 400 }
      );
    }

    const record = await Contact.create({
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
    });

    return NextResponse.json({ id: record._id.toString() }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json({ error: "Failed to submit message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const messages = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .lean();
    return NextResponse.json(messages);
  } catch (error) {
    console.error("[GET /api/contact]", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
