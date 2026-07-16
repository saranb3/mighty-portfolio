"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/", label: "Work" },
  {
    href: "https://drive.google.com/file/d/1RaWqsNq4lDRwzBSNSBBXOtucqTldhRCW/view?usp=sharing",
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
        className="display absolute top-6 left-6 lg:left-14 z-50 w-10 h-10 bg-ink rounded-full flex items-center justify-center text-ground font-semibold text-lg no-underline"
      >
        M
      </Link>

      <nav className="absolute top-6 right-6 lg:right-14 z-50 flex items-center gap-x-1 text-[17px] font-semibold">
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
                  ? "px-4 py-2 rounded-full bg-paper-deep text-ink no-underline"
                  : "px-4 py-2 rounded-full text-ink no-underline transition-colors duration-200 hover:bg-ink/8"
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
