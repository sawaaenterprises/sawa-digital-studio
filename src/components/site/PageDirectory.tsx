import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const pages = [
  { to: '/services', title: 'What we do', caption: 'Websites, stores & digital products', n: '01' },
  { to: '/portfolio', title: 'Selected work', caption: 'Ideas brought to life', n: '02' },
  { to: '/about', title: 'Meet the studio', caption: 'The people behind Sawaa', n: '03' },
  { to: '/reviews', title: 'Your words', caption: 'Clients, visitors & conversations', n: '04' },
  { to: '/contact', title: 'Start something', caption: 'Your next chapter starts here', n: '05' },
] as const;
export function PageDirectory() {
  return <section className="page-directory section-space"><div className="site-container"><Reveal><div className="section-top"><span className="eyebrow">The studio, at a glance</span><h2>There’s more to <em>Sawaa.</em></h2></div></Reveal><div className="directory-grid">{pages.map(p => <Link key={p.to} to={p.to} className="directory-link group"><span className="eyebrow">{p.n}</span><ArrowUpRight className="directory-arrow"/><h3>{p.title}</h3><p>{p.caption}</p></Link>)}</div></div></section>;
}
