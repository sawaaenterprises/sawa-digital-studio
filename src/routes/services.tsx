import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Layout, ShoppingCart, LayoutDashboard, Code2, Globe2, Check } from "lucide-react";
import { PageHero, Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: seo("Services — Websites, Stores, Dashboards & Web Apps | Sawaa Enterprises", "Business websites, portfolios, e-commerce, admin dashboards, web applications and every type of website — designed and developed for clients worldwide.") }),
  component: Services,
});

const LIST = [
  { icon: Briefcase, t: "Business websites", f: ["Custom design for your brand", "Lead & enquiry forms", "Google-ready SEO", "Fast on every phone"] },
  { icon: Layout, t: "Portfolio websites", f: ["Showcase your work beautifully", "Personal branding", "Smooth animations", "Contact & social links"] },
  { icon: ShoppingCart, t: "E-commerce websites", f: ["Product catalogue", "Cart & secure checkout", "Order management", "Built to sell worldwide"] },
  { icon: LayoutDashboard, t: "Admin dashboards", f: ["Charts & reports", "User & role management", "Data tables & search", "Secure access"] },
  { icon: Code2, t: "Web applications", f: ["Custom features", "Logins & accounts", "Databases & APIs", "Scales with your growth"] },
  { icon: Globe2, t: "All types of websites", f: ["Schools, clinics, NGOs", "Blogs & communities", "Landing pages", "Domain, hosting & GitHub setup"] },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Whatever you need, <span className="text-gradient">we build it.</span></>} text="From a one-page site to a full web platform — every service includes domain setup, hosting on Vercel, code on GitHub, SEO and support." />
      <section className="site-container pb-12">
        {LIST.map((s, i) => (
          <Reveal key={s.t} delay={i * 60}>
            <div className="service-detail">
              <span className="eyebrow">0{i + 1}</span>
              <h2>{s.t}</h2>
              <ul>
                {s.f.map((x) => <li key={x} className="flex gap-2 text-muted-foreground"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{x}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
