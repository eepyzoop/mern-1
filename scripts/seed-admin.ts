import { createClient } from "@supabase/supabase-js";
import { PrismaClient } from "@prisma/client";

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!email || !password || !supabaseUrl || !serviceRoleKey) {
  console.error("Missing ADMIN_EMAIL, ADMIN_PASSWORD, NEXT_PUBLIC_SUPABASE_URL, or SUPABASE_SERVICE_ROLE_KEY in env.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});
const prisma = new PrismaClient();

async function findExistingUser(targetEmail: string) {
  let page = 1;
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw error;
    const found = data.users.find((u) => u.email === targetEmail);
    if (found) return found;
    if (data.users.length < 200) return null;
    page++;
  }
}

async function main() {
  let authUser = await findExistingUser(email!);

  if (!authUser) {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (error) throw error;
    authUser = data.user;
    console.log(`Created Supabase auth user for ${email}`);
  } else {
    console.log(`Supabase auth user for ${email} already exists, reusing it`);
  }

  await prisma.profile.upsert({
    where: { authUserId: authUser.id },
    update: { name: "Izma Qamar", email: email! },
    create: { authUserId: authUser.id, name: "Izma Qamar", email: email!, role: "Admin" },
  });

  console.log("Admin profile is ready.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
