import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Globe2, CheckCircle2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHero, Reveal } from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: seo("Contact Sawaa Enterprises — Let's Talk About Your Website", "Tell us about your website, store, dashboard or web app. Free consultation for clients worldwide. Email sawaaenterprises@gmail.com.") }),
  component: Contact,
});

const TYPES = ["Business website", "Portfolio website", "E-commerce store", "Admin dashboard", "Web application", "Something else"];
const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  country: z.string().trim().max(80),
  project_type: z.string().max(80),
  message: z.string().trim().min(1, "Tell us about your project").max(2000),
});

function Contact() {
  const [f, setF] = useState({ name: "", email: "", country: "", project_type: TYPES[0], message: "" });
  const [err, setErr] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) return setErr(r.error.issues[0]?.message ?? "Please check the form");
    setErr(""); setState("busy");
    const { error } = await supabase.from("contact_messages").insert({ ...r.data, country: r.data.country || null });
    if (error) { setState("idle"); return setErr("Something went wrong. Please email us directly."); }
    setState("done");
  };

  const input = "w-full rounded-xl border bg-background px-4 py-3.5 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let's build something <span className="text-gradient">great together.</span></>} text={SITE.cta} />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-2">
          {[
            { icon: Mail, l: "Email us", v: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, l: "Based in", v: SITE.location },
            { icon: Globe2, l: "We serve", v: "Clients in every country" },
          ].map((x) => (
            <a key={x.l} href={x.href} className="flex gap-4 rounded-2xl border bg-card p-6 transition hover:shadow-soft">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><x.icon className="h-5 w-5" /></span>
              <span><span className="block text-sm text-muted-foreground">{x.l}</span><span className="block break-all font-bold text-ink">{x.v}</span></span>
            </a>
          ))}
          <p className="px-2 text-sm text-muted-foreground">Free consultation. We reply to every message, usually within one day.</p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-3">
          {state === "done" ? (
            <div className="rounded-3xl border bg-card p-12 text-center shadow-soft">
              <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
              <h2 className="mt-4 text-3xl font-bold">Message received!</h2>
              <p className="mt-3 text-muted-foreground">Thank you, {f.name}. Our team will reply to {f.email} soon.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-4 rounded-3xl border bg-card p-8 shadow-soft sm:grid-cols-2">
              <input className={input} placeholder="Your name *" maxLength={100} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
              <input className={input} type="email" placeholder="Email *" maxLength={255} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
              <input className={input} placeholder="Country" maxLength={80} value={f.country} onChange={(e) => setF({ ...f, country: e.target.value })} />
              <select className={input} value={f.project_type} onChange={(e) => setF({ ...f, project_type: e.target.value })}>
                {TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
              <textarea className={`${input} min-h-40 sm:col-span-2`} placeholder="Tell us about your project *" maxLength={2000} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
              {err && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
              <button disabled={state === "busy"} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 font-bold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2">
                <Send className="h-5 w-5" /> {state === "busy" ? "Sending…" : "Let's Talk"}
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
