import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Please keep your name under 100 characters."),
  email: z.string().trim().email("That email address doesn't look right.").max(200),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a sentence about your project.")
    .max(5000, "Please keep the message under 5,000 characters."),
  // Honeypot: hidden from people, bots tend to fill it.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function contactEmailHtml({ name, email, message }: ContactInput): string {
  const body = escapeHtml(message).replace(/\r?\n/g, "<br>");
  return `<h3>New enquiry from vidakai studio</h3>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${body}</p>`;
}

// shortcut: in-memory, per server instance; resets on redeploy and isn't shared
// across serverless instances. Upgrade to a shared store (e.g. Upstash) if spam gets through.
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, now = Date.now(), limit = 5, windowMs = 10 * 60_000): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}
