import Navbar from "./Navbar";

/**
 * Layout
 * - Wraps every page with navbar, background, container and footer.
 * - `full`  → removes the max-width container (use for landing pages / hero sections).
 */
export default function Layout({ page, setPage, full = false, children }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-white">
      {/* Background: faint grid + top glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-0 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
      />

      <Navbar page={page} setPage={setPage} />

      {/* Page content */}
      <main className="flex-1">
        {full ? (
          children
        ) : (
          <div className="mx-auto w-full max-w-7xl px-6 py-10 md:py-14">
            {children}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-5 font-mono text-[11px] uppercase tracking-widest text-slate-600 sm:flex-row sm:items-center">
          <span>ProdOpt / AI</span>
          <span>© {new Date().getFullYear()} · All systems normal</span>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable page pieces ---------- */

/** Consistent page title block. `index` matches the navbar numbering. */
export function PageHeader({ index, title, description, actions }) {
  return (
    <div className="mb-10 flex flex-col gap-4 border-b border-white/5 pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {index && (
          <p className="mb-2 font-mono text-xs text-blue-400">{index}</p>
        )}
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex gap-3">{actions}</div>}
    </div>
  );
}

/** Content block with optional label. */
export function Card({ title, className = "", children }) {
  return (
    <section
      className={`rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10 ${className}`}
    >
      {title && (
        <h2 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-slate-500">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

/** Buttons that match the style. */
export function Button({ variant = "primary", className = "", ...props }) {
  const styles =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-400"
      : "border border-white/10 text-slate-300 hover:border-white/20 hover:text-white";
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${styles} ${className}`}
      {...props}
    />
  );
}