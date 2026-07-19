import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing name, email, or message" },
        { status: 400 }
      );
    }

    const { data: record, error } = await supabase
      .from("contacts")
      .insert({
        name: String(name).trim(),
        email: String(email).trim(),
        message: String(message).trim(),
      })
      .select("id")
      .single();

    if (error || !record) {
      console.error("[POST /api/contact]", error);
      return NextResponse.json(
        { error: "Failed to submit message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: record.id }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json(
      { error: "Failed to submit message" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data: messages, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) throw error;
    return NextResponse.json(messages);
  } catch (error) {
    console.error("[GET /api/contact]", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
