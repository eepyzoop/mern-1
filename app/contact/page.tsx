import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const TITLE = "Contact";
const DESCRIPTION = "Get in touch with Izma Qamar, full stack developer exploring AI/ML.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: `${TITLE} — Izma Qamar`, description: DESCRIPTION, url: `${SITE_URL}/contact`, type: "website" },
  twitter: { title: `${TITLE} — Izma Qamar`, description: DESCRIPTION },
};

export default function ContactPage() {
  return (
    <>
      <main>
        <section>
          <p className="eyebrow" style={{ color: "var(--pink-deep)" }}>
            Contact
          </p>
          <h1 style={{ fontSize: "clamp(34px,6vw,54px)" }}>Say hello 👋</h1>
          <p className="section-lead">
            Got an opportunity, a collaboration idea, or just want to talk about building things?
            I&apos;d love to hear from you; I usually reply within a day or two.
          </p>

          <div className="contact-grid">
            <div className="form-card">
              <ContactForm />
            </div>

            <aside className="side">
              <a className="side-card" href="mailto:izmaq004@gmail.com">
                <span className="icon i-pink">✉️</span>
                <span>
                  <b>Email</b>
                  <span>izmaq004@gmail.com</span>
                </span>
              </a>
              <a className="side-card" href="https://www.linkedin.com/in/izma-qamar-2b04b3379/" target="_blank" rel="noopener">
                <span className="icon i-blue">💼</span>
                <span>
                  <b>LinkedIn</b>
                  <span>linkedin.com/in/izma-qamar</span>
                </span>
              </a>
              <a className="side-card" href="https://github.com/eepyzoop" target="_blank" rel="noopener">
                <span className="icon i-lav">🐙</span>
                <span>
                  <b>GitHub</b>
                  <span>github.com/eepyzoop</span>
                </span>
              </a>
              <div className="availability">
                <b>
                  <span className="pulse" aria-hidden="true" />
                  Open to opportunities
                </b>
                <p>
                  Internships, collaborations, research, or a good conversation about CS; based in
                  Lahore, working with teams anywhere.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer active="contact" />
    </>
  );
}
