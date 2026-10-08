import { useState } from "react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "create", label: "Create Line" },
  { id: "analysis", label: "Analysis" },
  { id: "optimization", label: "Optimization" },
];

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setPage(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Wordmark */}
        <button
          onClick={() => go("dashboard")}
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </span>
          ProdOpt
          <span className="font-mono text-xs font-normal text-slate-500">/ai</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ id, label }, i) => {
            const active = page === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                aria-current={active ? "page" : undefined}
                className="group relative flex items-baseline gap-1.5 py-1 text-sm"
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${
                    active ? "text-blue-400" : "text-slate-600 group-hover:text-slate-400"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`transition-colors ${
                    active ? "text-white" : "text-slate-400 group-hover:text-white"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`absolute -bottom-3 left-0 h-px bg-blue-400 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full group-hover:bg-slate-600"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-slate-600 md:block">
            AI Engineer · soon
          </span>

          <button
            onClick={() => setOpen(!open)}
            className="font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-white md:hidden"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile: large type list */}
      {open && (
        <nav className="border-t border-white/5 px-6 py-6 md:hidden">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ id, label }, i) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className={`flex w-full items-baseline gap-3 py-2 text-2xl font-medium tracking-tight transition-colors ${
                    page === id ? "text-white" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <span className="font-mono text-xs text-blue-400">0{i + 1}</span>
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-slate-600">
            AI Engineer · soon
          </p>
        </nav>
      )}
    </header>
  );
}

export default Navbar;