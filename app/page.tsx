import type { Metadata } from "next";
import Link from "next/link";
import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

const TITLE = "Izma Qamar — Full Stack Developer";
const DESCRIPTION =
  "Izma Qamar, full stack web developer exploring AI/ML. CS student at FAST-NUCES, Lahore.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SITE_URL, type: "website" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Izma Qamar",
  jobTitle: "Full Stack Developer",
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com/in/izma-qamar-2b04b3379/"],
  email: "mailto:izmaq004@gmail.com",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main>
        <section className="hero">
          <p className="hero-hello">hi, i&apos;m</p>
          <h1>
            Izma Qamar,
            <br />
            <span className="accent">turning curiosity into commits.</span>
          </h1>
          <p className="hero-sub">
            Full stack web developer exploring <strong>AI/ML</strong>; a CS student at FAST-NUCES,
            Lahore. I started with C++ and systems-level code, now I mostly live in React and Node,
            and I&apos;m going deeper into machine learning one project at a time.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/projects">
              View my work →
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Get in touch
            </Link>
          </div>
          <div className="hero-meta">
            <span>
              <b>3+</b>shipped projects
            </span>
            <span>
              <b>11</b>monthly active users on SpendSmart
            </span>
            <span>
              <b>99.4%</b>accuracy on my custom CNN
            </span>
          </div>
        </section>

        <section className="reveal" id="about">
          <p className="eyebrow" style={{ color: "var(--pink-deep)" }}>
            About
          </p>
          <h2>Building more than finished products</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m a computer science student at FAST National University of Computer &amp;
                Emerging Sciences, class of 2028. Most of what I know comes from building; every
                project is an excuse to learn something I don&apos;t know yet, and honestly, I
                enjoy the process more than the finished product.
              </p>
              <p>
                My foundation is full stack web development: React, Node, TypeScript, real deployed
                apps with real users. Lately I&apos;ve been steering toward AI/ML, training my own
                models in PyTorch, integrating LLMs into products people actually use, and picking
                up research experience along the way.
              </p>
              <p>
                Currently splitting time between two internships at Dafi Labs (DevOps and MERN
                stack), creating gen-AI content for PakLaunch, and always down to talk to other
                people building things.
              </p>
            </div>
            <div className="about-card">
              <h3>Quick facts</h3>
              <div className="fact">
                <span className="dot" style={{ background: "var(--pink)" }} />
                <span>BS Computer Science @ FAST-NUCES, expected 2028</span>
              </div>
              <div className="fact">
                <span className="dot" style={{ background: "var(--blue)" }} />
                <span>DevOps &amp; MERN Intern @ Dafi Labs</span>
              </div>
              <div className="fact">
                <span className="dot" style={{ background: "var(--lav)" }} />
                <span>Gen-AI Content Creator @ PakLaunch</span>
              </div>
              <div className="fact">
                <span className="dot" style={{ background: "var(--lav)" }} />
                <span>Research evaluation with UIUC&apos;s SRSE program</span>
              </div>
              <div className="fact">
                <span className="dot" style={{ background: "var(--pink)" }} />
                <span>Based in Lahore, Pakistan 🌸</span>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal" id="experience">
          <p className="eyebrow" style={{ color: "var(--blue-deep)" }}>
            Experience
          </p>
          <h2>Where I&apos;ve been learning</h2>
          <p className="section-lead">Real work, real stakes; the stuff that doesn&apos;t come from tutorials.</p>
          <div className="timeline">
            <div className="t-item">
              <span className="t-when">JUL 2026 — PRESENT</span>
              <h3>DevOps Intern</h3>
              <p className="t-org">Dafi Labs</p>
              <p>Maintaining deployment pipelines and infrastructure.</p>
            </div>
            <div className="t-item">
              <span className="t-when">JUL 2026 — PRESENT</span>
              <h3>MERN Stack Intern</h3>
              <p className="t-org">Dafi Labs</p>
              <p>Shipping features on a MERN stack product.</p>
            </div>
            <div className="t-item">
              <span className="t-when">JUL 2026 — PRESENT</span>
              <h3>Web Developer</h3>
              <p className="t-org">Niyyat-e-Khidmat</p>
              <p>Building the website for this welfare NGO from the ground up.</p>
            </div>
            <div className="t-item">
              <span className="t-when">JUN 2026 — PRESENT</span>
              <h3>Content Creator, Gen-AI</h3>
              <p className="t-org">PakLaunch</p>
              <p>Creating and editing content using generative AI tools.</p>
            </div>
            <div className="t-item">
              <span className="t-when">JUN 2026</span>
              <h3>Research Evaluation Task</h3>
              <p className="t-org">University of Illinois Urbana-Champaign — SRSE</p>
              <p>
                Critiqued five peer-reviewed papers on LLM sycophancy (CHI, ICLR, Science) for
                UIUC&apos;s Summer Research in Software Engineering program; identified
                methodological limitations like unproven causal claims and sampling bias, then
                designed an original longitudinal research proposal aimed at venues like CHI, CSCW,
                and FAccT.
              </p>
            </div>
            <div className="t-item">
              <span className="t-when">2026</span>
              <h3>AI Bootcamp</h3>
              <p className="t-org">Artificizen</p>
              <p>Deepening applied AI/ML skills and applying them directly to personal projects.</p>
            </div>
          </div>
        </section>

        <section className="reveal">
          <p className="eyebrow" style={{ color: "var(--lav-deep)" }}>
            Explore
          </p>
          <h2>See what I&apos;ve made</h2>
          <div className="teasers">
            <Link className="teaser tz-pink" href="/projects">
              <h3>Projects →</h3>
              <p>
                SpendSmart, Air-Draw, PocketPlate, and the low-level projects where it all started.
                Shipped, deployed, and used by real people.
              </p>
              <span className="go">Browse projects</span>
            </Link>
            <Link className="teaser tz-blue" href="/tools">
              <h3>Tools &amp; skills →</h3>
              <p>
                Languages, frameworks, databases, and the AI APIs I build with, from x86 Assembly
                all the way up to LLMs.
              </p>
              <span className="go">See my toolbox</span>
            </Link>
          </div>
        </section>

        <ContactBox
          heading="Let's build something together"
          text="Whether it's an opportunity, a collaboration, or you just want to nerd out about CS, my inbox is open."
        />
      </main>
      <Footer active="home" />
    </>
  );
}
