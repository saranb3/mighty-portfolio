import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-sans text-4xl lg:text-6xl font-medium -tracking-[0.04em] leading-[0.95] mb-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-sans text-2xl lg:text-3xl font-medium -tracking-[0.02em] mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif italic text-xl mt-8 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="font-serif text-lg leading-relaxed text-ink mb-6">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="font-serif text-lg leading-relaxed text-ink mb-6 pl-6 list-disc">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="font-serif text-lg leading-relaxed text-ink mb-6 pl-6 list-decimal">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em className="ital">{children}</em>,
    hr: () => <hr className="border-t border-line my-12" />,
    a: ({ children, href }) => (
      <a href={href} className="text-rust underline underline-offset-4">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="font-mono text-sm bg-paper-deep px-1.5 py-0.5 rounded">{children}</code>
    ),
    ...components,
  };
}
