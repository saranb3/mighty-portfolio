import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1a1a1a] text-paper/85 px-8 lg:px-12 py-8"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-sans text-[15px] -tracking-[0.005em]">
          © 2026 · Designed & built while listening to John Summit
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/saran-burapachaisri/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="opacity-85 hover:opacity-100 transition-opacity"
          >
            <Linkedin size={20} strokeWidth={1.75} />
          </a>
          <a
            href="mailto:saranb3@illinois.edu"
            aria-label="Email"
            className="opacity-85 hover:opacity-100 transition-opacity"
          >
            <Mail size={20} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
