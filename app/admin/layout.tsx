import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import AdminNav from "@/components/AdminNav";
import { logout } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: { template: "%s · Admin", default: "Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <section style={{ padding: "48px 0 88px" }}>
          <div className="admin-shell">
            <aside className="admin-sidebar">
              <AdminNav />
              <form action={logout}>
                <button className="admin-logout" type="submit">
                  Log out
                </button>
              </form>
            </aside>
            <div>{children}</div>
          </div>
        </section>
      </main>
      <Footer active="none" />
    </>
  );
}
