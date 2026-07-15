"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME", icon: "🏠" },
  { href: "/projects", label: "PROJECTS", icon: "🛠️" },
  { href: "/tools", label: "TOOLS & SKILLS", icon: "🧰" },
  { href: "/contact", label: "CONTACT", icon: "💌" },
];

export default function Rail() {
  const pathname = usePathname();
  return (
    <nav className="rail" aria-label="Pages">
      {links.map(({ href, label, icon }) => (
        <Link key={href} href={href} className={pathname === href ? "active" : undefined}>
          {icon}
          <span className="tip">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
