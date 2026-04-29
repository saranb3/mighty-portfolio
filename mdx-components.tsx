import type { MDXComponents } from "mdx/types";

const cx = (...c: (string | undefined)[]) => c.filter(Boolean).join(" ");

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, children, ...rest }) => (
      <h1
        className={cx(
          "font-sans text-4xl lg:text-6xl font-medium -tracking-[0.04em] leading-[0.95] mb-8",
          className
        )}
        {...rest}
      >
        {children}
      </h1>
    ),
    h2: ({ className, children, ...rest }) => (
      <h2
        className={cx(
          "font-sans text-2xl lg:text-3xl font-medium -tracking-[0.02em] mt-12 mb-4",
          className
        )}
        {...rest}
      >
        {children}
      </h2>
    ),
    h3: ({ className, children, ...rest }) => (
      <h3 className={cx("font-serif italic text-xl mt-8 mb-3", className)} {...rest}>
        {children}
      </h3>
    ),
    p: ({ className, children, ...rest }) => (
      <p
        className={cx("font-serif text-lg leading-relaxed text-ink mb-6", className)}
        {...rest}
      >
        {children}
      </p>
    ),
    ul: ({ className, children, ...rest }) => (
      <ul
        className={cx("font-serif text-lg leading-relaxed text-ink mb-6 pl-6 list-disc", className)}
        {...rest}
      >
        {children}
      </ul>
    ),
    ol: ({ className, children, ...rest }) => (
      <ol
        className={cx("font-serif text-lg leading-relaxed text-ink mb-6 pl-6 list-decimal", className)}
        {...rest}
      >
        {children}
      </ol>
    ),
    li: ({ className, children, ...rest }) => (
      <li className={cx("mb-2", className)} {...rest}>
        {children}
      </li>
    ),
    blockquote: ({ className, children, ...rest }) => (
      <blockquote
        className={cx(
          "font-serif text-lg leading-relaxed text-ink mb-6 border-l-2 border-rust pl-6 italic",
          className
        )}
        {...rest}
      >
        {children}
      </blockquote>
    ),
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
