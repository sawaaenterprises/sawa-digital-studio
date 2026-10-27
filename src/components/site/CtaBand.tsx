import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Asterisk } from 'lucide-react';
import { SITE } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Reveal } from './Reveal';
import { PageDirectory } from './PageDirectory';
export function CtaBand() {return <><PageDirectory/><section className="cta-band"><div className="site-container"><Reveal><span className="eyebrow">A better website. A bigger future.</span><h2>Let’s make<br/><em>your next move.</em><Asterisk className="cta-star slow-rotate"/></h2><div className="cta-bottom"><p>{SITE.cta}</p><Button asChild className="studio-button" variant="secondary"><Link to="/contact">Let's Talk <ArrowUpRight/></Link></Button></div></Reveal></div></section></>;}
