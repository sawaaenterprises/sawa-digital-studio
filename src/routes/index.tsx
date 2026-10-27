import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Layout, ShoppingCart, LayoutDashboard, Code2, Briefcase, Zap, ShieldCheck, Smartphone, Search, Github, Triangle, Server, Award, Rocket, Users, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { HomeExtra } from "@/components/site/HomeExtra";
import { SITE, WORK, CERTS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({ meta: seo("Sawaa Enterprises — Bad website? Lose clients. Let’s fix it.", "World-class websites, e-commerce stores, admin dashboards and web apps built by Sawaa Enterprises for clients worldwide. Founded by Syed Abdul Wahab.") }),
  component: Index,
});

const SERVICES = [
  { icon: Briefcase, t: "Business websites", d: "Credible, fast sites that turn visitors into paying clients." },
  { icon: Layout, t: "Portfolio websites", d: "Personal brands that open doors and win opportunities." },
  { icon: ShoppingCart, t: "E-commerce stores", d: "Beautiful shops with smooth checkout, built to sell." },
  { icon: LayoutDashboard, t: "Admin dashboards", d: "Clear, powerful control panels for your team." },
  { icon: Code2, t: "Web applications", d: "Custom software in the browser, engineered to scale." },
  { icon: Globe2, t: "Any website you need", d: "Blogs, schools, clinics, NGOs, startups — we build it all." },
];

const STACK = [
  { icon: Github, t: "GitHub", d: "Versioned, reviewed code" },
  { icon: Triangle, t: "Vercel", d: "Global edge hosting" },
  { icon: Globe2, t: "Domains", d: "Setup & DNS handled" },
  { icon: Search, t: "SEO", d: "Indexed & discoverable" },
  { icon: ShieldCheck, t: "Security", d: "HTTPS & hardened" },
  { icon: Smartphone, t: "Every device", d: "Phone to 4K screens" },
  { icon: Zap, t: "Speed", d: "Loads in a blink" },
  { icon: Server, t: "Scale", d: "Built for heavy traffic" },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-48">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b pb-6">
            <span className="eyebrow flex items-center gap-2"><Globe2 className="h-3.5 w-3.5" /> Est. {SITE.founded} — Hyderabad / Worldwide</span>
            <span className="eyebrow hidden md:block">Founder · {SITE.owner}</span>
          </div>
          <h1 className="mt-12 text-[13vw] leading-[0.92] md:text-[8.5rem]">
            <span className="line-reveal"><span>Bad website?</span></span><br />
            <span className="line-reveal"><span style={{ animationDelay: "0.15s" }} className="italic text-muted-foreground">Lose clients.</span></span><br />
            <span className="line-reveal"><span style={{ animationDelay: "0.3s" }}>Let’s fix it.</span></span>
          </h1>
          <div className="mt-14 grid items-end gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="text-lg text-muted-foreground">
                {SITE.name} designs and develops websites, stores, dashboards and web apps with the craft of a design house. Led by founder & owner {SITE.owner}.
              </p>
            </Reveal>
            <Reveal delay={150} className="md:col-span-4 md:col-start-9">
              <p className="text-ink">{SITE.cta}</p>
              <div className="mt-5 flex flex-wrap items-center gap-6">
                <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-ink py-3 pl-7 pr-3 text-primary-foreground transition-shadow hover:shadow-glow">
                  Let's Talk
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-background text-ink transition-transform duration-500 group-hover:rotate-45"><ArrowRight className="h-4 w-4 -rotate-45" /></span>
                </Link>
                <Link to="/portfolio" className="text-sm text-ink underline decoration-border underline-offset-8 transition hover:decoration-ink">See our work</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={250}>
            <div className="relative mt-20 grid place-items-center overflow-hidden border bg-card py-16">
              <img src={logo} alt="Sawaa Enterprises logo" width={1024} height={1024} className="h-48 w-48 animate-spin-slow md:h-64 md:w-64" />
              <div className="absolute left-6 top-6 text-left"><p className="font-display text-5xl text-ink">30+</p><p className="eyebrow">Websites delivered</p></div>
              <div className="absolute bottom-6 right-6 text-right"><div className="flex justify-end gap-0.5 text-ink">{[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div><p className="eyebrow mt-2">Loved by clients</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y py-6">
        <div className="overflow-hidden">
          <div className="flex w-max gap-16 animate-marquee">
            {[...CERTS, ...CERTS, ...CERTS, ...CERTS].map((c, i) => (
              <span key={i} className="flex items-center gap-16 whitespace-nowrap font-display text-3xl italic text-muted-foreground">{c}<span className="not-italic text-ink">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Rocket, n: "30+", l: "Websites completed" },
            { icon: Globe2, n: "Worldwide", l: "Clients in any country" },
            { icon: Users, n: "4", l: "Leaders on the team" },
            { icon: Award, n: "5", l: "Industry certificates" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="lux-card p-7 shadow-soft transition hover:-translate-y-1">
                <s.icon className="h-6 w-6 text-primary" />
                <p className="mt-4 font-display text-4xl font-extrabold text-ink">{s.n}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Every kind of website. <span className="text-gradient">One expert team.</span></h2>
          <p className="mt-4 text-muted-foreground">Whoever you are and wherever you are, tell us what you need and we will design and develop it.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <div className="group h-full lux-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary transition group-hover:bg-gradient-primary group-hover:text-primary-foreground"><s.icon className="h-6 w-6" /></span>
                <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold md:text-5xl">Built on the tools the <span className="text-gradient">biggest companies</span> trust.</h2>
            <p className="mt-4 text-muted-foreground">From code on GitHub to global hosting on Vercel and your own domain — we handle everything, end to end.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STACK.map((s, i) => (
              <Reveal key={s.t} delay={i * 50}>
                <div className="lux-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
                  <s.icon className="h-7 w-7 text-primary" />
                  <p className="mt-4 font-bold text-ink">{s.t}</p>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">Featured work</h2>
            <p className="mt-3 text-muted-foreground">Three of the 30+ websites we have launched.</p>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-primary">All work <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WORK.map((w, i) => (
            <Reveal key={w.url} delay={i * 100}>
              <a href={w.url} target="_blank" rel="noopener" className="group block h-full overflow-hidden lux-card transition hover:-translate-y-2 hover:shadow-glow">
                <div className="relative aspect-[4/3] overflow-hidden bg-hero">
                  <div className="absolute inset-0 grid-bg" />
                  <div className="absolute inset-6 rounded-xl border bg-card p-4 shadow-soft transition duration-700 group-hover:scale-105">
                    <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /><span className="h-2.5 w-2.5 rounded-full bg-border" /></div>
                    <p className="mt-6 font-display text-xl font-bold text-ink">{w.title}</p>
                    <p className="mt-1 truncate text-xs text-primary">{w.url.replace(/^https?:\/\//, "")}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{w.kind}</p>
                  <p className="mt-2 font-bold text-ink">For {w.client}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">No price tags. <span className="text-gradient">Just value.</span></h2>
          <p className="mt-4 text-muted-foreground">Every project is different. Instead of a price list, you get a free consultation, a custom plan for your goals, and a team that stays with you after launch.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Free consultation", d: "Tell us your idea. We listen, advise and plan — at no cost." },
            { n: "02", t: "Design & build", d: "We craft, develop and test your site on every device." },
            { n: "03", t: "Launch & support", d: "We go live on your domain and keep it running smoothly." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full lux-card p-8">
                <p className="font-display text-5xl font-extrabold text-gradient">{s.n}</p>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <HomeExtra />
      <CtaBand />
    </>
  );
}
