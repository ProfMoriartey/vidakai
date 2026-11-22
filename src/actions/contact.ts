"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { env } from "~/env";
import { contactEmailHtml, contactSchema, isRateLimited } from "~/lib/contact";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name") ?? "",
    email: formData.get("email") ?? "",
    message: formData.get("message") ?? "",
    company: formData.get("company") ?? "",
  });

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    // A filled honeypot gets a quiet fake success so bots learn nothing.
    if (errors.company) return { status: "success", message: "Thanks, your message is on its way." };
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors: { name: errors.name?.[0], email: errors.email?.[0], message: errors.message?.[0] },
    };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? h.get("x-real-ip") ?? "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", message: "Too many messages in a short time. Please try again in a few minutes." };
  }

  if (!env.EMAIL_USER || !env.EMAIL_PASS) {
    console.error("Contact form: EMAIL_USER or EMAIL_PASS is not set");
    return { status: "error", message: "The form isn't working right now. Please email me directly instead." };
  }

  const { name, email, message } = parsed.data;
  try {
    await nodemailer
      .createTransport({ service: "gmail", auth: { user: env.EMAIL_USER, pass: env.EMAIL_PASS } })
      .sendMail({
        from: env.EMAIL_USER,
        to: env.EMAIL_USER,
        replyTo: email,
        subject: `New enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: contactEmailHtml(parsed.data),
      });
    return { status: "success", message: "Thanks, your message is on its way. I'll reply by email." };
  } catch (error) {
    console.error("Contact form: send failed", error);
    return { status: "error", message: "Sending failed. Please try again, or email me directly." };
  }
}
