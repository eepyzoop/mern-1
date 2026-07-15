import type { Metadata } from "next";
import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const TITLE = "Tools & Skills";
const DESCRIPTION = "Languages, frameworks, and tools Izma Qamar builds with.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tools" },
  openGraph: { title: `${TITLE} — Izma Qamar`, description: DESCRIPTION, url: `${SITE_URL}/tools`, type: "website" },
  twitter: { title: `${TITLE} — Izma Qamar`, description: DESCRIPTION },
};

export default function ToolsPage() {
  return (
    <>
      <main>
        <section>
          <p className="eyebrow" style={{ color: "var(--pink-deep)" }}>
            Tools &amp; skills
          </p>
          <h1>My toolbox</h1>
          <p className="section-lead">
            From x86 Assembly to LLM APIs; everything here has shipped in a real project, not just
            a course.
          </p>
          <div className="skill-groups">
            <div className="skill-card reveal in">
              <h3>
                <span className="sq" style={{ background: "var(--pink)" }} />
                Languages
              </h3>
              <div className="pills">
                <span className="pill">C++</span>
                <span className="pill">Python</span>
                <span className="pill">JavaScript</span>
                <span className="pill">TypeScript</span>
                <span className="pill">HTML</span>
                <span className="pill">CSS</span>
                <span className="pill">x86 Assembly</span>
              </div>
            </div>
            <div className="skill-card reveal in">
              <h3>
                <span className="sq" style={{ background: "var(--blue)" }} />
                Frameworks &amp; libraries
              </h3>
              <div className="pills">
                <span className="pill">React</span>
                <span className="pill">Node.js</span>
                <span className="pill">Express</span>
                <span className="pill">PyTorch</span>
                <span className="pill">Tailwind</span>
                <span className="pill">Socket.IO</span>
                <span className="pill">OpenCV</span>
                <span className="pill">MediaPipe</span>
                <span className="pill">Streamlit</span>
                <span className="pill">Mongoose</span>
                <span className="pill">scikit-learn</span>
              </div>
            </div>
            <div className="skill-card reveal in">
              <h3>
                <span className="sq" style={{ background: "var(--lav)" }} />
                Databases
              </h3>
              <div className="pills">
                <span className="pill">MongoDB</span>
                <span className="pill">PostgreSQL</span>
                <span className="pill">Supabase</span>
              </div>
            </div>
            <div className="skill-card reveal in">
              <h3>
                <span className="sq" style={{ background: "var(--pink)" }} />
                AI &amp; APIs
              </h3>
              <div className="pills">
                <span className="pill">Gemini API</span>
                <span className="pill">Groq / LLaMA 3.1</span>
                <span className="pill">Resend</span>
                <span className="pill">Edge Functions</span>
                <span className="pill">Cron scheduling</span>
              </div>
            </div>
            <div className="skill-card reveal in">
              <h3>
                <span className="sq" style={{ background: "var(--blue)" }} />
                Tools &amp; platforms
              </h3>
              <div className="pills">
                <span className="pill">Git</span>
                <span className="pill">GitHub</span>
                <span className="pill">Vercel</span>
                <span className="pill">Jupyter</span>
                <span className="pill">Postman</span>
                <span className="pill">Visual Studio</span>
                <span className="pill">DOSBox</span>
              </div>
            </div>
          </div>
        </section>

        <ContactBox
          heading="Want to build with these?"
          text="If your project overlaps with my toolbox, or pushes me to learn a new one, let's talk."
          tightTop
        />
      </main>
      <Footer active="tools" />
    </>
  );
}
