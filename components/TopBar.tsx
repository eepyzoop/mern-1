"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", page: "home" },
  { href: "/projects", label: "Projects", page: "projects" },
  { href: "/tools", label: "Tools", page: "tools" },
  { href: "/contact", label: "Contact", page: "contact" },
];

export default function TopBar() {
  const pathname = usePathname();
  const current = links.find((l) => l.href === pathname) ?? links[0];
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="logo" href="/">
          izma<em>.</em>dev
        </Link>
        <div className="top-links">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={pathname === href ? "active" : undefined}>
              {label}
            </Link>
          ))}
        </div>
        <span className="page-label" aria-hidden="true">
          · {current.page} ·
        </span>
      </div>
    </header>
  );
}
