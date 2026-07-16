import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are all required." }, { status: 400 });
  }

  try {
    await prisma.contactMessage.create({ data: { name, email, message } });
  } catch (err) {
    console.error("Failed to save contact message:", err);
    return NextResponse.json({ error: "Could not save message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
