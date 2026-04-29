"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Work" },
  { href: "/fun", label: "Fun" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume" },
];

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        aria-label="Home"
        className="absolute top-6 left-6 lg:left-16 z-50 w-10 h-10 bg-ink rounded-full flex items-center justify-center text-paper font-serif italic font-medium text-lg"
      >
        M
      </Link>

      <nav className="absolute top-6 right-6 lg:right-16 z-50 flex items-center gap-x-2 font-sans text-base">
        {navLinks.map((link) => {
          const active = isActive(link.href, pathname);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                active
                  ? "px-5 py-2 rounded-full bg-paper-soft text-ink no-underline font-normal transition-colors"
                  : "px-3 py-2 text-ink no-underline font-normal transition-colors hover:text-ink-soft"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
