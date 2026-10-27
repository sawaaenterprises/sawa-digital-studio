import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Github, Globe, Triangle, ArrowUpRight } from "lucide-react";
import { Logo } from "./Header";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-muted-foreground">
            {SITE.tagline} Websites, web apps, stores and dashboards for clients worldwide. Founded and owned by {SITE.owner}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Triangle, label: "Vercel", href: "https://vercel.com" },
              { icon: Globe, label: "Domains", href: "/services" },
              { icon: Mail, label: "Email", href: `mailto:${SITE.email}` },
            ].map(({ icon: I, label, href }) => (
              <a key={label} href={href} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Company</h3>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Our work</Link></li>
            <li><Link to="/about" className="hover:text-primary">About & team</Link></li>
            <li><Link to="/reviews" className="hover:text-primary">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Reach us</h3>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-primary">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.location} · Serving worldwide</li>
          </ul>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-1 font-bold text-primary">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Est. {SITE.founded}. Owner: {SITE.owner}.</p>
          <p>Made in Hyderabad, for the world.</p>
        </div>
      </div>
    </footer>
  );
}
