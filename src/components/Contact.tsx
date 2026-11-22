import Sheet from "./Sheet";
import ContactForm from "./ContactForm";
import { site } from "~/data/site";

export default function Contact() {
  const direct: { label: string; value: string; href: string }[] = [];
  if (site.email) direct.push({ label: "Email", value: site.email, href: "mailto:" + site.email });
  if (site.whatsapp) direct.push({ label: "WhatsApp", value: "+" + site.whatsapp, href: "https://wa.me/" + site.whatsapp });

  return (
    <Sheet
      id="contact"
      number="07"
      title="Start your website"
      intro="Tell me about your business and what the site needs to do. I read every message myself."
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <div className="md:col-span-5">
          {direct.length > 0 ? (
            <dl className="border-t border-line">
              {direct.map((d) => (
                <div key={d.label} className="border-b border-line py-4">
                  <dt className="text-sm text-fg-3">{d.label}</dt>
                  <dd className="mt-1">
                    <a href={d.href} className="text-lg underline decoration-line-strong hover:decoration-redline" dir="ltr">
                      {d.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            // TODO: set site.email and site.whatsapp in src/data/site.ts
            <p className="text-fg-3">TODO: email and WhatsApp links appear here once set in src/data/site.ts.</p>
          )}
        </div>
      </div>
    </Sheet>
  );
}
