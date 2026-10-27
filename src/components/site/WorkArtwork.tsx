import { ArrowUpRight, Asterisk, BookOpen, Globe2 } from 'lucide-react';
import { WORK } from '@/lib/site';
export function WorkArtwork({ index }: { index: number }) {
 const work = WORK[index];
 if (!work) return null;
 return <div className={`work-art work-art-${index}`}><span className="work-art-label">SAWAA / SELECTED PROJECT {String(index + 1).padStart(2,'0')}</span><div className="work-art-center">{index === 0 ? <Globe2/> : index === 1 ? <BookOpen/> : <Asterisk className="slow-rotate"/>}<span>{index === 0 ? 'Raahe\nHidayath.' : index === 1 ? 'Knowledge.\nWithout limits.' : 'Syed\nAbdul Wahab.'}</span></div><div className="work-art-bottom"><span>{work.kind}</span><ArrowUpRight/></div></div>;
}
