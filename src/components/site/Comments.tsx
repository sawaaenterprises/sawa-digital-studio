import { useEffect, useState } from "react";
import { z } from "zod";
import { MessageSquare, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type C = { id: string; name: string; country: string | null; body: string; created_at: string };
const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(60),
  country: z.string().trim().max(60),
  body: z.string().trim().min(1, "Write a comment").max(500),
});

export function Comments() {
  const [list, setList] = useState<C[]>([]);
  const [form, setForm] = useState({ name: "", country: "", body: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.from("comments").select("*").order("created_at", { ascending: false }).limit(50).then(({ data }) => data && setList(data));
    const ch = supabase
      .channel(`comments-${Math.random().toString(36).slice(2)}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "comments" }, (p) =>
        setList((l) => (l.some((x) => x.id === (p.new as C).id) ? l : [p.new as C, ...l])),
      )
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) return setErr(r.error.issues[0]?.message ?? "Please check the form");
    setBusy(true); setErr("");
    const { data, error } = await supabase.from("comments").insert({ ...r.data, country: r.data.country || null }).select().single();
    setBusy(false);
    if (error) return setErr("Could not post right now. Please try again.");
    if (data) setList((l) => (l.some((x) => x.id === data.id) ? l : [data, ...l]));
    setForm({ name: "", country: "", body: "" });
  };

  const input = "w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";
  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <form onSubmit={submit} className="space-y-4 lux-card p-6 shadow-soft lg:col-span-2">
        <h3 className="flex items-center gap-2 text-xl font-bold"><MessageSquare className="h-5 w-5 text-primary" /> Leave a comment</h3>
        <p className="text-sm text-muted-foreground">Your comment appears live for visitors around the world.</p>
        <input className={input} placeholder="Your name" maxLength={60} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className={input} placeholder="Country (optional)" maxLength={60} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
        <textarea className={`${input} min-h-28`} placeholder="Share your thoughts…" maxLength={500} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} />
        {err && <p className="text-sm text-destructive">{err}</p>}
        <button disabled={busy} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-bold text-primary-foreground shadow-glow disabled:opacity-60">
          <Send className="h-4 w-4" /> {busy ? "Posting…" : "Post comment"}
        </button>
      </form>
      <div className="max-h-[560px] space-y-4 overflow-y-auto pr-2 lg:col-span-3">
        {list.map((c) => (
          <article key={c.id} className="lux-card p-5 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-bold text-primary-foreground">{c.name[0]?.toUpperCase()}</span>
              <div>
                <p className="font-bold text-ink">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.country ? `${c.country} · ` : ""}{new Date(c.created_at).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground">{c.body}</p>
          </article>
        ))}
        {!list.length && <p className="text-muted-foreground">Be the first to comment.</p>}
      </div>
    </div>
  );
}
