"use client";

import Link from "next/link";

const navLinks: { href: string; label: string }[] = [
  { href: "/#about", label: "About Me" },
  { href: "/#experience", label: "Work Experience" },
  { href: "/#work", label: "Projects" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1FHCjLk-L367kzPA0KwZU3x6ogWSD7FBb/view?usp=sharing";

const linkBase =
  "px-4 py-2 rounded-full text-ink no-underline transition-colors duration-200 hover:bg-ink/8";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-paper-soft border-b border-line">
      <div className="h-full grid grid-cols-3 items-center px-6 lg:px-14">
        {/* Left — wordmark */}
        <Link
          href="/"
          aria-label="Home"
          className="display justify-self-start text-ink font-bold text-xl tracking-tight no-underline"
        >
          Saran
        </Link>

        {/* Center — nav */}
        <nav className="justify-self-center flex items-center gap-x-1 text-[17px] font-semibold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkBase}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right — resume */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`justify-self-end text-[17px] font-semibold ${linkBase}`}
        >
          Resume
        </a>
      </div>
    </header>
  );
}
