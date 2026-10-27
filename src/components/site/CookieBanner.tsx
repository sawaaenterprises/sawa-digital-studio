import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("sawaa-cookies")) setShow(true);
  }, []);
  if (!show) return null;
  const choose = (v: string) => {
    localStorage.setItem("sawaa-cookies", v);
    setShow(false);
  };
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl animate-in slide-in-from-bottom-6 fade-in duration-500">
      <div className="glass flex flex-col gap-4 rounded-2xl border p-5 shadow-soft sm:flex-row sm:items-center">
        <Cookie className="h-6 w-6 shrink-0 text-primary" />
        <p className="flex-1 text-sm text-muted-foreground">We use essential cookies to keep this site fast and secure, and to remember your preferences.</p>
        <div className="flex gap-2">
          <button onClick={() => choose("essential")} className="rounded-full border px-4 py-2 text-sm">Essential only</button>
          <button onClick={() => choose("all")} className="rounded-full bg-gradient-primary px-4 py-2 text-sm text-primary-foreground">Accept</button>
        </div>
      </div>
    </div>
  );
}
