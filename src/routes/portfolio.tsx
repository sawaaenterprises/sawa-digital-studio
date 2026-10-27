import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, Reveal } from '@/components/site/Reveal';
import { CtaBand } from '@/components/site/CtaBand';
import { WorkArtwork } from '@/components/site/WorkArtwork';
import { WORK } from '@/lib/site';
import { seo } from '@/lib/seo';
export const Route = createFileRoute('/portfolio')({head:()=>({meta:seo('Selected Work — Websites by Sawaa Enterprises','Explore websites built by Sawaa Enterprises for Raahe Hidayath, Islamic Authentic Knowledge and founder Syed Abdul Wahab.')}),component:Portfolio});
function Portfolio(){return <><PageHero eyebrow="02 / Selected work" title={<>Good ideas.<br/><em className="text-gradient">Beautifully realised.</em></>} text="Three of the 30+ websites we have delivered. Independent brands, communities and people — each with a story of their own."/><section className="site-container">{WORK.map((w,i)=><Reveal key={w.url}><article className="portfolio-item"><WorkArtwork index={i}/><div><span className="eyebrow">0{i+1} / {w.kind}</span><h2>{w.title}</h2><p>Designed and developed for <strong>{w.client}</strong>.</p><a href={w.url} target="_blank" rel="noopener noreferrer" className="text-link">Visit live website <ArrowUpRight/></a></div></article></Reveal>)}</section><CtaBand/></>;}
