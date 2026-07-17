"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

const STATUSES = ["Pending", "Done", "Completed", "Resolved"];

export async function updateStatus(id: string, status: string) {
  if (!STATUSES.includes(status)) return;
  await prisma.contactMessage.update({ where: { id }, data: { status } });
  revalidatePath("/admin/queries");
  revalidatePath("/admin");
}
