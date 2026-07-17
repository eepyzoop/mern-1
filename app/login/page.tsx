import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <>
      <main>
        <section style={{ maxWidth: 420, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "var(--pink-deep)" }}>
            Admin
          </p>
          <h1 style={{ fontSize: "clamp(30px,5vw,44px)" }}>Sign in</h1>
          <div className="form-card" style={{ marginTop: 28 }}>
            <LoginForm />
          </div>
        </section>
      </main>
      <Footer active="none" />
    </>
  );
}
