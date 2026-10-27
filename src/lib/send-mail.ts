import { SITE } from "./site";

/** Sends a form straight to the studio Gmail inbox using the free FormSubmit service. */
export async function sendToInbox(fields: Record<string, string>) {
  const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New enquiry — ${fields['name'] ?? "Website visitor"}`,
      _template: "table",
      _captcha: "false",
      ...fields,
    }),
  });
  return res.ok;
}
