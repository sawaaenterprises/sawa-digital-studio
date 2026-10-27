import { useEffect, useRef, type ReactNode } from "react";
import { Asterisk } from "lucide-react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return (
    <section className="page-hero">
      <Asterisk className="hero-small-art slow-rotate" aria-hidden="true" />
      <div className="site-container">
        <Reveal>
          <span className="eyebrow">
            {eyebrow}
          </span>
          <h1>{title}</h1>
          <p>{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
