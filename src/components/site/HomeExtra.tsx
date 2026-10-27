import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { GraduationCap, HeartPulse, Store, Building2, Plane, UtensilsCrossed, Landmark, Sparkles, Check, X, Plus, Minus, Quote, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Comments } from "./Comments";
import { SITE, TEAM } from "@/lib/site";

const INDUSTRIES = [
  { icon: Store, t: "Retail & shops" }, { icon: HeartPulse, t: "Clinics & health" },
  { icon: GraduationCap, t: "Schools & courses" }, { icon: Building2, t: "Real estate" },
  { icon: UtensilsCrossed, t: "Restaurants" }, { icon: Plane, t: "Travel & tours" },
  { icon: Landmark, t: "NGOs & faith" }, { icon: Sparkles, t: "Startups & creators" },
];

const QUOTES = [
  { q: "Our website finally feels like a real brand. Enquiries started coming in the first week.", n: "Mohd Sufyaan Sayeed", r: "raahehidayath.online" },
  { q: "Smooth on every phone, fast everywhere, and the team was always there for us.", n: "Mohammed Ibrahim", r: "islamicauthenticknowledge.online" },
  { q: "We build every site as if our own name is on it — because it is.", n: "Syed Abdul Wahab", r: "Founder & Owner" },
  { q: "Clean design, honest work, delivered on time. Exactly what a business needs.", n: "Sawaa client", r: "Business website" },
];

const FAQ = [
  ["Do you work with clients outside India?", "Yes. We work with clients in every country, fully online, across time zones."],
  ["How much does a website cost?", "Every project is unique, so we don't use a price list. Book a free consultation and we'll suggest the best plan for your goals."],
  ["How long does it take?", "Simple sites can launch in days. Larger stores, dashboards and web apps are planned in clear milestones."],
  ["Do you handle domain and hosting?", "Yes — domain setup, global hosting on Vercel, code on GitHub, SSL security and SEO are all included."],
  ["Will my site work on mobile?", "Always. Every site is tested on phones, tablets, laptops and large screens."],
  ["Do you support after launch?", "Yes. We stay with you for updates, fixes and growth."],
];

export function HomeExtra() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Industries we <span className="text-gradient">power</span></h2>
          <p className="mt-4 text-muted-foreground">If your customers are online, we can build for you.</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {INDUSTRIES.map((x, i) => (
            <Reveal key={x.t} delay={i * 50}>
              <div className="group flex items-center gap-3 rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground transition group-hover:rotate-6 group-hover:bg-gradient-primary group-hover:text-primary-foreground"><x.icon className="h-5 w-5" /></span>
                <span className="font-bold text-ink">{x.t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/70 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center"><h2 className="text-4xl font-bold md:text-5xl">Why clients choose <span className="text-gradient">Sawaa</span></h2></Reveal>
          <Reveal delay={100}>
            <div className="mt-12 overflow-hidden rounded-3xl border bg-card shadow-soft">
              <div className="grid grid-cols-3 border-b bg-muted px-6 py-4 text-sm font-bold text-ink"><span>What you get</span><span className="text-center text-primary">Sawaa Enterprises</span><span className="text-center text-muted-foreground">Typical agency</span></div>
              {["Free consultation", "Custom design, no templates", "Works on every device", "SEO & Google indexing", "Domain + hosting setup", "Support after launch"].map((r, i) => (
                <div key={r} className="grid grid-cols-3 items-center border-b px-6 py-4 last:border-0">
                  <span className="text-sm font-semibold text-ink">{r}</span>
                  <Check className="mx-auto h-5 w-5 text-success" />
                  {i % 2 ? <X className="mx-auto h-5 w-5 text-muted-foreground" /> : <Minus className="mx-auto h-5 w-5 text-muted-foreground" />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <Reveal className="mx-auto max-w-2xl px-6 text-center"><h2 className="text-4xl font-bold md:text-5xl">Words from <span className="text-gradient">our people</span></h2></Reveal>
        <div className="mt-12 overflow-hidden">
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...QUOTES, ...QUOTES].map((q, i) => (
              <figure key={i} className="w-[340px] shrink-0 rounded-3xl border bg-card p-7 shadow-soft">
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-4 text-ink">{q.q}</blockquote>
                <figcaption className="mt-5 text-sm"><strong className="text-ink">{q.n}</strong><span className="block text-muted-foreground">{q.r}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Leadership</span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Led by <span className="text-gradient">{SITE.owner}</span></h2>
            <p className="mt-5 text-muted-foreground">Founder & owner {SITE.owner} started Sawaa Enterprises in {SITE.founded} in {SITE.location}, with a team that treats every client's website like its own.</p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-bold text-primary">Meet the team <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="rounded-3xl border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-glow">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-primary font-display font-bold text-primary-foreground">{m.name.split(" ").slice(-1)[0]?.[0]}</span>
                  <p className="mt-3 font-bold text-ink">{m.name}</p>
                  <p className="text-xs font-semibold text-primary">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center"><h2 className="text-4xl font-bold md:text-5xl">Questions, answered</h2></Reveal>
          <div className="mt-12 space-y-3">
            {FAQ.map(([q, a], i) => (
              <Reveal key={q} delay={i * 40}>
                <div className="rounded-2xl border bg-card">
                  <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left font-bold text-ink" aria-expanded={open === i}>
                    {q}{open === i ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-primary" />}
                  </button>
                  <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <p className="overflow-hidden px-6 text-muted-foreground"><span className="block pb-6">{a}</span></p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-12 text-center"><h2 className="text-4xl font-bold md:text-5xl">Live from <span className="text-gradient">around the world</span></h2><p className="mt-4 text-muted-foreground">Comments here are saved and shown to every visitor instantly.</p></Reveal>
        <Comments />
      </section>
    </>
  );
}
