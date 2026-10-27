import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "Studio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${SITE.name} home`}>
      <img src={logo} alt="" width={40} height={40} className="h-10 w-10 transition-transform duration-1000 group-hover:rotate-[360deg]" />
      <span className="leading-none">
        <span className="block font-display text-2xl text-ink">Sawaa</span>
        <span className="eyebrow block !text-[0.55rem]">Enterprises</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 transition-all duration-700 ${scrolled ? "glass h-16 border shadow-soft" : "h-20"}`}>
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-ink data-[status=active]:text-ink"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="group hidden items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-sm text-primary-foreground lg:inline-flex">
          Let's Talk
          <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-ink transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          className="relative z-[60] flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`h-px w-5 bg-primary-foreground transition-all duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-primary-foreground transition-all duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className="fixed inset-0 z-50 bg-background lg:hidden"
        style={{
          clipPath: open ? "circle(150% at calc(100% - 3rem) 3rem)" : "circle(0% at calc(100% - 3rem) 3rem)",
          transition: "clip-path 0.9s cubic-bezier(0.7,0,0.2,1)",
        }}
      >
        <nav className="flex h-full flex-col justify-center px-8">
          <span className="eyebrow mb-6">Menu</span>
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 overflow-hidden border-b py-3"
            >
              <span className="text-xs text-muted-foreground">0{i + 1}</span>
              <span
                className="font-display text-5xl text-ink transition-transform duration-700"
                style={{ transform: open ? "none" : "translateY(110%)", transitionDelay: open ? `${300 + i * 70}ms` : "0ms" }}
              >
                {n.label}
              </span>
            </Link>
          ))}
          <a href={`mailto:${SITE.email}`} className="mt-10 text-sm text-muted-foreground">{SITE.email}</a>
        </nav>
      </div>
    </header>
  );
}
