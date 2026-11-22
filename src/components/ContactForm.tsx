"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactFormState } from "~/actions/contact";

const initial: ContactFormState = { status: "idle", message: "" };

const field =
  "block w-full rounded-[4px] border border-line-strong bg-ink px-4 py-3 text-fg placeholder:text-fg-3 transition-colors hover:border-fg-3 focus-visible:border-redline focus-visible:outline-none aria-[invalid=true]:border-error";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initial);
  const err = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="sheet-frame bg-ink-raised p-8">
        <p className="font-display-wide text-2xl">Message sent</p>
        <p className="mt-3 text-fg-2">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="sheet-frame space-y-5 bg-ink-raised p-6 sm:p-8">
      {(["name", "email"] as const).map((n) => (
        <div key={n}>
          <label htmlFor={`contact-${n}`} className="mb-2 block text-sm font-medium">
            {n === "name" ? "Your name" : "Email"}
          </label>
          <input
            id={`contact-${n}`}
            name={n}
            type={n === "email" ? "email" : "text"}
            autoComplete={n}
            required
            maxLength={n === "name" ? 100 : 200}
            aria-invalid={!!err[n]}
            aria-describedby={err[n] ? `contact-${n}-error` : undefined}
            className={`${field} h-12`}
          />
          {err[n] && (
            <p id={`contact-${n}-error`} className="mt-2 text-sm text-error">
              {err[n]}
            </p>
          )}
        </div>
      ))}
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          About your business and the site you need
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          aria-invalid={!!err.message}
          aria-describedby={err.message ? "contact-message-error" : undefined}
          className={`${field} min-h-40 resize-y`}
        />
        {err.message && (
          <p id="contact-message-error" className="mt-2 text-sm text-error">
            {err.message}
          </p>
        )}
      </div>
      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -start-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={pending} className="btn btn-primary w-full sm:w-auto">
        {pending ? "Sending…" : "Send message"}
      </button>
      <p aria-live="polite" className={`text-sm ${state.status === "error" ? "text-error" : "sr-only"}`}>
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  );
}
