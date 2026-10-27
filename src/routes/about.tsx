import { createFileRoute } from "@tanstack/react-router";
import { Award, MapPin, Calendar, Crown } from "lucide-react";
import { PageHero, Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { SITE, TEAM, CERTS } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: seo("About Sawaa Enterprises — Founded by Syed Abdul Wahab", "Sawaa Enterprises was founded in 2025 in Hyderabad, India by owner Syed Abdul Wahab, with Director Syed Basharath Ali, Co-Director Syed Ahmed Ali and Co-Founder Mohd Sufyaan Sayeed.") }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={<>A Hyderabad team, <span className="text-gradient">building for the world.</span></>} text={`Founded in ${SITE.founded} by ${SITE.owner}, Sawaa Enterprises exists for one reason: no business should lose clients because of a bad website.`} />
      <section className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-3">
        {[
          { icon: Crown, l: "Founder & Owner", v: SITE.owner },
          { icon: Calendar, l: "Founded", v: String(SITE.founded) },
          { icon: MapPin, l: "Headquarters", v: SITE.location },
        ].map((x, i) => (
          <Reveal key={x.l} delay={i * 80}>
            <div className="rounded-3xl border bg-card p-7 text-center shadow-soft">
              <x.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">{x.l}</p>
              <p className="mt-1 font-display text-xl font-bold text-ink">{x.v}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="text-center"><h2 className="text-4xl font-bold md:text-5xl">Leadership</h2></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className={`h-full rounded-3xl border bg-card p-8 text-center transition hover:-translate-y-2 hover:shadow-glow ${i === 0 ? "border-primary/50 shadow-glow" : ""}`}>
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-primary font-display text-2xl font-bold text-primary-foreground">
                  {m.name.split(" ").filter((p) => p.length > 2).slice(-2).map((p) => p[0]).join("")}
                </span>
                <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal><h2 className="text-4xl font-bold md:text-5xl">Certified expertise</h2></Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {CERTS.map((c, i) => (
              <Reveal key={c} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-full border bg-card px-6 py-4 font-bold text-ink shadow-soft"><Award className="h-5 w-5 text-primary" />{c}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
