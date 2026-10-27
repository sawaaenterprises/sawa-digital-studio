import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-primary px-8 py-16 text-center shadow-glow">
          <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-primary-foreground/15 blur-2xl animate-blob" />
          <h2 className="relative text-3xl font-bold text-primary-foreground md:text-5xl">{SITE.tagline}</h2>
          <p className="relative mt-6 text-lg font-semibold text-primary-foreground/90">{SITE.cta}</p>
          <Link to="/contact" className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 font-bold text-primary transition-transform hover:-translate-y-1">
            Let's Talk <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
