import type { Metadata } from "next";
import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const TITLE = "Projects";
const DESCRIPTION = "Projects by Izma Qamar: SpendSmart, Air-Draw, PocketPlate, and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: { title: `${TITLE} — Izma Qamar`, description: DESCRIPTION, url: `${SITE_URL}/projects`, type: "website" },
  twitter: { title: `${TITLE} — Izma Qamar`, description: DESCRIPTION },
};

export default function ProjectsPage() {
  return (
    <>
      <main>
        <section>
          <p className="eyebrow" style={{ color: "var(--lav-deep)" }}>
            Projects
          </p>
          <h1>Things I&apos;ve shipped</h1>
          <p className="section-lead">Built end to end: designed, coded, deployed, and used by real people.</p>
          <div className="proj-grid">
            <article className="proj p-pink reveal in">
              <div className="proj-top">
                <h3>SpendSmart</h3>
                <span className="proj-badge badge-pink">REAL USERS ♥</span>
              </div>
              <p className="proj-hook">
                AI-powered expense tracker with 11 active monthly users; reviews confirm it&apos;s
                helped people save money and build better habits.
              </p>
              <ul>
                <li>
                  Context-aware AI assistant (Gemini 2.5 Flash) that reads your actual transaction
                  data and gives personalised advice in real time
                </li>
                <li>Automated daily budget-alert emails via a serverless Edge Function on a cron schedule</li>
                <li>
                  Animated budget bars, recurring expense auto-carry, CSV export, and a public Wall
                  of Love with verified reviews
                </li>
              </ul>
              <div className="pills">
                <span className="pill">React</span>
                <span className="pill">Tailwind</span>
                <span className="pill">Supabase</span>
                <span className="pill">Gemini API</span>
                <span className="pill">Resend</span>
                <span className="pill">Vercel</span>
              </div>
              <div className="proj-links">
                <a href="https://spend-smart-peach.vercel.app" target="_blank" rel="noopener">
                  Live demo ↗
                </a>
                <a href="https://github.com/eepyzoop/spend-smart" target="_blank" rel="noopener">
                  GitHub ↗
                </a>
              </div>
            </article>

            <article className="proj p-blue reveal in">
              <div className="proj-top">
                <h3>Air-Draw</h3>
                <span className="proj-badge badge-blue">99.4% ACCURACY</span>
              </div>
              <p className="proj-hook">
                Draw digits in the air with your finger: a webcam, a custom CNN, and no keyboard or
                mouse required.
              </p>
              <ul>
                <li>
                  Custom CNN trained on 60,000 MNIST samples; 99.39% test accuracy, 0.99 macro F1
                  across all 10 digits
                </li>
                <li>MediaPipe tracks 21 hand landmarks in real time; three gesture modes control draw, pause, and clear</li>
                <li>
                  12-step preprocessing pipeline bridges the gap between air-drawn strokes and the
                  MNIST distribution
                </li>
              </ul>
              <div className="pills">
                <span className="pill">Python</span>
                <span className="pill">PyTorch</span>
                <span className="pill">OpenCV</span>
                <span className="pill">MediaPipe</span>
                <span className="pill">Streamlit</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/MustafaBasit521/Hand_Gesture_Recognition" target="_blank" rel="noopener">
                  GitHub ↗
                </a>
              </div>
            </article>

            <article className="proj p-lav reveal in">
              <div className="proj-top">
                <h3>PocketPlate</h3>
                <span className="proj-badge badge-lav">REAL-TIME</span>
              </div>
              <p className="proj-hook">
                Group food ordering that doesn&apos;t end in chaos: live shared rooms, AI meal
                combos, automatic bill splitting.
              </p>
              <ul>
                <li>AI meal-combo recommendations via Groq / LLaMA 3.1, budget-filtered per person, with a local greedy fallback</li>
                <li>Real-time group rooms with Socket.IO; every order update broadcasts instantly to all members</li>
                <li>Automatic per-person bill splitting so nobody argues over the total</li>
              </ul>
              <div className="pills">
                <span className="pill">React</span>
                <span className="pill">TypeScript</span>
                <span className="pill">Node</span>
                <span className="pill">MongoDB</span>
                <span className="pill">Socket.IO</span>
                <span className="pill">LLaMA 3.1</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/manalhameed127/Pocket-Plate" target="_blank" rel="noopener">
                  GitHub ↗
                </a>
              </div>
            </article>

            <article className="proj p-mix reveal in">
              <div className="proj-top">
                <h3>Low-level corner</h3>
                <span className="proj-badge badge-pink">FOUNDATIONS</span>
              </div>
              <p className="proj-hook">Where it all started: systems-level projects that taught me how computers actually work.</p>
              <ul>
                <li>
                  <strong>Obstacle Navigation Game</strong>, pure x86 Assembly: keyboard interrupts,
                  direct video-memory rendering, a timer-driven game loop in DOSBox
                </li>
                <li>
                  <strong>Banking System</strong>, C++ with a full OOP hierarchy: abstract classes,
                  runtime polymorphism, atomic file persistence, fraud detection, and card locking
                </li>
                <li>
                  <strong>Search Engine</strong>, C++ with a self-balancing AVL tree as an inverted
                  index; custom data structures with no STL containers, manual string ops for
                  multi-term query ranking
                </li>
              </ul>
              <div className="pills">
                <span className="pill">C++</span>
                <span className="pill">x86 Assembly</span>
                <span className="pill">OOP</span>
                <span className="pill">DSA</span>
                <span className="pill">DOSBox</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/eepyzoop/Moving-Asterisk-Obstacle-Game" target="_blank" rel="noopener">
                  ASM game ↗
                </a>
                <a href="https://github.com/eepyzoop/Banking-System-OOP" target="_blank" rel="noopener">
                  Banking system ↗
                </a>
                <a href="https://github.com/eepyzoop/search-engine-DSA" target="_blank" rel="noopener">
                  Search engine ↗
                </a>
              </div>
            </article>

            <article className="proj p-blue reveal in">
              <div className="proj-top">
                <h3>AI × Healthcare Agent</h3>
                <span className="proj-badge badge-blue">IN PROGRESS</span>
              </div>
              <p className="proj-hook">
                An AI agent living at the intersection of AI and healthcare: pulls public health
                data and turns it into a weekly report to support decision-making.
              </p>
              <ul>
                <li>Ingests public health datasets and synthesises them on a recurring schedule</li>
                <li>Exploring agentic workflows for automated weekly analysis and reporting</li>
              </ul>
              <div className="pills">
                <span className="pill">AI Agents</span>
                <span className="pill">Healthcare</span>
                <span className="pill">Python</span>
              </div>
            </article>
          </div>

          <p className="section-lead" style={{ marginTop: 34 }}>
            Also tinkering with a handful of other AI/ML projects behind the scenes; more to share
            soon.
          </p>
        </section>

        <ContactBox
          heading="Like what you see?"
          text="I'm always happy to walk through how any of these were built, or talk about what's next."
          tightTop
        />
      </main>
      <Footer active="projects" />
    </>
  );
}
