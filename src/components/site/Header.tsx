import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowUpRight, X, Menu, Asterisk } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';
const NAV = [{to:'/',label:'Home'},{to:'/services',label:'Services'},{to:'/portfolio',label:'Work'},{to:'/about',label:'Studio'},{to:'/reviews',label:'Reviews'},{to:'/contact',label:'Contact'}] as const;
export function Logo() { return <Link to="/" className="brand" aria-label={`${SITE.name} home`}><span className="brand-mark"><span>S</span><Asterisk className="brand-spark"/></span><span className="brand-word"><span className="brand-name">Sawaa</span><span className="brand-sub">Enterprises</span></span></Link>; }
export function Header() {
 const [open,setOpen] = useState(false);
 const pathname = useRouterState({select:s=>s.location.pathname});
 useEffect(()=>setOpen(false),[pathname]);
 useEffect(()=>{if(!open)return; const previous=document.body.style.overflow;document.body.style.overflow='hidden'; const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};document.addEventListener('keydown',close);return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',close)}},[open]);
 return <><header className="site-header"><div className="header-inner"><Logo/><nav aria-label="Main navigation" className="desktop-nav">{NAV.slice(1,5).map(n=><Link key={n.to} to={n.to} activeProps={{className:'nav-active'}}>{n.label}</Link>)}</nav><div className="header-actions"><Button asChild className="header-cta"><Link to="/contact">Let’s Talk <ArrowUpRight/></Link></Button><Button variant="ghost" className="menu-trigger" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="studio-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div></div></header>{open&&<div id="studio-menu" className="menu-panel"><nav aria-label="All pages">{NAV.map((n,i)=><Link key={n.to} to={n.to} onClick={()=>setOpen(false)}><span className="eyebrow">0{i+1}</span><span>{n.label}</span><ArrowUpRight/></Link>)}</nav><a className="menu-email" href={`mailto:${SITE.email}`}>{SITE.email}</a><p className="eyebrow">Hyderabad, India · Worldwide</p></div>}</>;
}
