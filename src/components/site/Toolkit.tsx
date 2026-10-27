import { Link } from '@tanstack/react-router';
import { Globe, ShieldCheck, Search, Smartphone, Gauge, Server, Palette, ShoppingBag, LayoutDashboard, Code2, ArrowUpRight, Users } from 'lucide-react';
import { siGithub, siVercel } from 'simple-icons';
import { Reveal } from './Reveal';

function GithubLogo() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={siGithub.path} /></svg>; }
function VercelLogo() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={siVercel.path} /></svg>; }

const TOOLS = [
  { icon: GithubLogo, t: 'GitHub', d: 'Clean, versioned code you own forever.' },
  { icon: VercelLogo, t: 'Vercel', d: 'Lightning-fast global hosting & deploys.' },
  { icon: Globe, t: 'Your domain', d: 'Setup, connection and email-ready DNS.' },
  { icon: ShieldCheck, t: 'SSL & security', d: 'HTTPS, protection and safe forms.' },
  { icon: Search, t: 'SEO ready', d: 'Indexed on Google from day one.' },
  { icon: Smartphone, t: 'Every device', d: 'Phones, tablets, laptops, big screens.' },
  { icon: Gauge, t: 'Speed', d: 'Optimised to load in a blink.' },
  { icon: Server, t: 'Backend', d: 'Databases, logins and live data.' },
  { icon: Palette, t: 'UI / UX design', d: 'Brand-led, beautiful interfaces.' },
  { icon: ShoppingBag, t: 'E-commerce', d: 'Stores, carts and checkouts.' },
  { icon: LayoutDashboard, t: 'Dashboards', d: 'Admin panels that make sense.' },
  { icon: Code2, t: 'Web apps', d: 'Custom tools built for your workflow.' },
];

export function Toolkit() {
  return (
    <section className="section-space site-container">
      <Reveal><div className="section-top"><div><span className="eyebrow">Everything a website needs</span><h2>One studio.<br /><em>Every piece handled.</em></h2></div><Link to="/services" className="text-link">See all services <ArrowUpRight /></Link></div></Reveal>
      <div className="tool-grid">
        {TOOLS.map((x, i) => (
          <Reveal key={x.t} delay={(i % 4) * 60}>
            <div className="tool-card"><span className={`tool-icon${i < 2 ? ' tool-brand-icon' : ''}`}><x.icon /></span><h3>{x.t}</h3><p>{x.d}</p></div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="team-banner">
          <Users />
          <div><strong>20+ team members</strong><span>Designers, developers & strategists — led by founder Syed Abdul Wahab.</span></div>
          <Link to="/contact" className="studio-button team-banner-cta">Work with us <ArrowUpRight /></Link>
        </div>
      </Reveal>
    </section>
  );
}
