"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/queries", label: "Contact Queries" },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="admin-nav">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className={pathname === href ? "active" : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
