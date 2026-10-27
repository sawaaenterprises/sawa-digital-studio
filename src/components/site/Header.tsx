import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
      <img src={logo} alt="" width={40} height={40} className="h-10 w-10" />
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold text-ink">Sawaa</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">Enterprises</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b shadow-soft" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary data-[status=active]:bg-accent data-[status=active]:text-accent-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 lg:inline-flex">
          Let's Talk <ArrowRight className="h-4 w-4" />
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border bg-card text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={`font-display text-4xl font-bold text-ink transition-all duration-500 hover:text-primary ${open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
            >
              {n.label}
            </Link>
          ))}
          <a href={`mailto:${SITE.email}`} className="mt-8 text-sm font-semibold text-primary">{SITE.email}</a>
        </nav>
      </div>
    </header>
  );
}
