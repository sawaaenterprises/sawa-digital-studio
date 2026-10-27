import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { WORK } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: seo("Our Work — 30+ Websites Delivered | Sawaa Enterprises", "See websites built by Sawaa Enterprises, including Raahe Hidayath, Islamic Authentic Knowledge and the portfolio of founder Syed Abdul Wahab.") }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHero eyebrow="Our work" title={<>30+ websites. <span className="text-gradient">Here are our top 3.</span></>} text="Real projects, live on the internet, used by real people every day." />
      <section className="mx-auto max-w-6xl space-y-8 px-6">
        {WORK.map((w, i) => (
          <Reveal key={w.url} delay={i * 80}>
            <a href={w.url} target="_blank" rel="noopener" className="group grid overflow-hidden lux-card transition hover:shadow-glow md:grid-cols-2">
              <div className="relative min-h-64 overflow-hidden bg-hero">
                <div className="absolute inset-0 grid-bg" />
                <div className="absolute inset-8 lux-card p-6 shadow-soft transition duration-700 group-hover:scale-105 group-hover:-rotate-1">
                  <div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-border" /><span className="h-3 w-3 rounded-full bg-border" /><span className="h-3 w-3 rounded-full bg-border" /></div>
                  <p className="mt-8 font-display text-2xl text-ink">{w.title}</p>
                  <div className="mt-4 space-y-2"><div className="h-2 w-3/4 rounded bg-accent" /><div className="h-2 w-1/2 rounded bg-accent" /></div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-10">
                <p className="text-xs uppercase tracking-widest text-primary">{w.kind}</p>
                <h2 className="mt-3 text-3xl">{w.title}</h2>
                <p className="mt-3 text-muted-foreground">Built for <strong className="text-ink">{w.client}</strong>.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-primary">Visit {w.url.replace(/^https?:\/\//, "").replace(/\/.*$/, "")} <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </div>
            </a>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
