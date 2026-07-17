"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { verifyRecaptcha } from "@/lib/recaptcha";

const MAX_ATTEMPTS = 5;
const BLOCK_MINUTES = 15;

async function getClientIp() {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
}

async function recordFailedAttempt(ip: string, currentAttempts: number) {
  const attempts = currentAttempts + 1;
  const blockedUntil = attempts > MAX_ATTEMPTS ? new Date(Date.now() + BLOCK_MINUTES * 60_000) : null;
  await prisma.loginAttempt.upsert({
    where: { ipAddress: ip },
    update: { attempts, lastAttemptAt: new Date(), blockedUntil },
    create: { ipAddress: ip, attempts, blockedUntil },
  });
}

export async function login(formData: FormData): Promise<string | null> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const recaptchaToken = String(formData.get("recaptchaToken") ?? "");
  if (!email || !password) return "Email and password are required.";

  const ip = await getClientIp();
  const record = await prisma.loginAttempt.findUnique({ where: { ipAddress: ip } });

  if (record?.blockedUntil && record.blockedUntil > new Date()) {
    const minutesLeft = Math.ceil((record.blockedUntil.getTime() - Date.now()) / 60_000);
    return `Too many attempts. Try again in ${minutesLeft} minute${minutesLeft === 1 ? "" : "s"}.`;
  }

  const recaptchaOk = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaOk) {
    await recordFailedAttempt(ip, record?.attempts ?? 0);
    return "reCAPTCHA verification failed. Please try again.";
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    await recordFailedAttempt(ip, record?.attempts ?? 0);
    return "Invalid email or password.";
  }

  await prisma.loginAttempt.deleteMany({ where: { ipAddress: ip } });
  redirect("/admin");
}
