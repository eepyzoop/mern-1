import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

  if (resend) {
    try {
      await resend.emails.send({
        from: "Portfolio contact <onboarding@resend.dev>",
        to: "izmaq004@gmail.com",
        replyTo: email,
        subject: `Portfolio contact from ${name}`,
        text: `${message}\n\n— ${name} (${email})`,
      });
    } catch (err) {
      console.error("Failed to send contact notification email:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
