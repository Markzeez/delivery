import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { fullName, email, password, role } = await req.json();

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, password" },
        { status: 400 }
      );
    }

    const normalEmail = email.toLowerCase().trim();

    // Check existing
    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("email", normalEmail)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const { data: user, error } = await supabase
      .from("users")
      .insert({
        full_name: fullName.trim(),
        email: normalEmail,
        password: hashedPassword,
        role: role || "SENDER",
      })
      .select()
      .single();

    if (error || !user) {
      console.error("[POST /api/auth/register]", error);
      return NextResponse.json(
        { error: "Failed to create account" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Account created successfully",
        user: {
          id: user.id,
          email: user.email,
          fullName: user.full_name,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/auth/register]", error);
    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 }
    );
  }
}
