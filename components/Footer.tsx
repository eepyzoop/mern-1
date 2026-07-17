import Link from "next/link";

type Page = "home" | "projects" | "tools" | "contact" | "none";

const pages: { key: Page; href: string; label: string }[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "projects", href: "/projects", label: "Projects" },
  { key: "tools", href: "/tools", label: "Tools" },
  { key: "contact", href: "/contact", label: "Contact" },
];

export default function Footer({ active }: { active: Page }) {
  if (active === "home") {
    return (
      <footer>
        © 2026 Izma Qamar · Lahore, Pakistan ·{" "}
        <a href="https://www.linkedin.com/in/izma-qamar-2b04b3379/" target="_blank" rel="noopener">
          LinkedIn
        </a>{" "}
        · <a href="mailto:izmaq004@gmail.com">Email</a>
      </footer>
    );
  }
  const others = pages.filter((p) => p.key !== active);
  return (
    <footer>
      © 2026 Izma Qamar{" "}
      {others.map((p) => (
        <span key={p.key}>
          {" "}
          · <Link href={p.href}>{p.label}</Link>
        </span>
      ))}
    </footer>
  );
}
