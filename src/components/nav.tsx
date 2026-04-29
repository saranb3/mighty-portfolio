"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/", label: "Work" },
  { href: "/fun", label: "Fun" },
  { href: "/about", label: "About" },
  {
    href: "https://drive.google.com/file/d/162x_Y-QUYPsCNMgDSRVPLfLzzrN9YhZ8/view?usp=sharing",
    label: "Resume",
    external: true,
  },
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

      <nav className="absolute top-6 right-6 lg:right-16 z-50 flex items-center gap-x-2 font-sans font-semibold text-xl -tracking-[0.005em]">
        {navLinks.map((link) => {
          const active = isActive(link.href, pathname);
          return (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={
                active
                  ? "px-5 py-2 rounded-full bg-neutral-300 text-ink no-underline font-bold transition-colors"
                  : "px-3 py-2 text-ink no-underline font-semibold transition-colors hover:text-ink-soft"
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
