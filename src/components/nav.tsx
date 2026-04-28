import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "/resume.pdf", label: "Resume" },
  { href: "#fun", label: "Fun" },
  { href: "#contact", label: "Say Hi" },
];

export function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 pl-3 pr-2 py-2 bg-paper-soft border border-line rounded-full shadow-[0_8px_32px_-8px_rgba(10,10,10,0.08)]">
      <Link
        href="/"
        className="w-9 h-9 mr-2 bg-ink rounded-full flex items-center justify-center text-paper font-serif italic font-medium text-lg"
      >
        M
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-ink no-underline px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-paper-deep"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
