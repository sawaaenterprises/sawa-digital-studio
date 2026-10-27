import { useState } from 'react';
import { z } from 'zod';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { sendToInbox } from '@/lib/send-mail';
import { Reveal } from './Reveal';

const schema = z.object({
  name: z.string().trim().min(1, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  message: z.string().trim().min(1, 'Tell us what you need').max(2000),
});

export function QuickContact({ title = 'Tell us your idea.' }: { title?: string }) {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [err, setErr] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) return setErr(r.error.issues[0]?.message ?? 'Please check the form');
    setErr(''); setState('busy');
    const [mailed] = await Promise.all([
      sendToInbox({ ...r.data, project_type: 'Quick enquiry' }).catch(() => false),
      supabase.from('contact_messages').insert({ ...r.data, project_type: 'Quick enquiry', country: null }),
    ]);
    if (!mailed) { setState('idle'); return setErr('Could not send. Please email sawaaenterprises@gmail.com'); }
    setState('done');
  };
  return (
    <section className="quick-contact section-space">
      <div className="site-container quick-grid">
        <Reveal>
          <span className="eyebrow">Free · Straight to our inbox</span>
          <h2>{title}<br /><em>We reply within a day.</em></h2>
          <p className="intro-copy">No forms to fill twice, no fees to start. Write a line about your website and it lands directly with our team.</p>
        </Reveal>
        <Reveal delay={100}>
          {state === 'done' ? (
            <div className="quick-done"><CheckCircle2 /><h3>Message sent!</h3><p>Thank you, {f.name}. Check {f.email} for our reply soon.</p></div>
          ) : (
            <form onSubmit={submit} className="quick-form">
              <input placeholder="Your name *" maxLength={100} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
              <input type="email" placeholder="Your email *" maxLength={255} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
              <textarea placeholder="What website do you need? *" maxLength={2000} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
              {err && <p className="text-sm text-destructive">{err}</p>}
              <Button type="submit" disabled={state === 'busy'} className="studio-button"><Send /> {state === 'busy' ? 'Sending…' : "Let's Talk"}</Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
