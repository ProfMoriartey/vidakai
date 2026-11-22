// Everything the owner still has to fill in is marked TODO.
// Empty strings hide the matching link instead of rendering a dead one.

export const site: {
  name: string;
  url: string;
  description: string;
  owner: string;
  email: string;
  whatsapp: string;
  social: { label: string; href: string }[];
} = {
  name: "Vidakai Studio",
  // TODO: confirm the production domain
  url: "https://vidakai.com",
  description:
    "Websites for restaurants, clinics, shops and schools, designed and built by one developer.",
  // TODO: owner's name for the About section and title blocks
  owner: "TODO: your name",
  // TODO: public contact email, e.g. "hello@vidakai.com"
  email: "",
  // TODO: WhatsApp number in international format, digits only, e.g. "905551234567"
  whatsapp: "",
  // TODO: add real profile URLs or leave empty to hide
  social: [],
};

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Templates", href: "/#templates" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
] as const;

export type TemplateLayout = "menu" | "booking" | "catalogue" | "showcase";

export const templates: {
  id: string;
  title: string;
  summary: string;
  layout: TemplateLayout;
}[] = [
  { id: "fine-dining", title: "Fine dining", summary: "Menu, reservations and the room", layout: "menu" },
  { id: "cafe", title: "Cafe", summary: "Today’s menu, opening hours and directions", layout: "menu" },
  { id: "coffee-shop", title: "Coffee shop", summary: "Drinks, beans and a map to the counter", layout: "showcase" },
  { id: "local-restaurant", title: "Local restaurant", summary: "Full menu with prices and a call button", layout: "menu" },
  { id: "clinic", title: "Clinic", summary: "Services, doctors and appointment requests", layout: "booking" },
  { id: "fabrics", title: "Fabrics company", summary: "Collections, swatches and trade enquiries", layout: "catalogue" },
  { id: "automotive", title: "Automotive", summary: "Stock, services and a booking form", layout: "catalogue" },
  { id: "digital-company", title: "Digital company", summary: "Services, case studies and contact", layout: "showcase" },
  { id: "school", title: "School", summary: "Programmes, admissions and news", layout: "booking" },
  // TODO: owner to name the tenth template
  { id: "tenth", title: "TODO: tenth template", summary: "TODO: one line", layout: "showcase" },
];

export const steps = [
  {
    title: "Brief",
    // TODO: confirm durations
    duration: "TODO: day 1",
    body: "We talk about your business, your customers and what the site has to do. You send your logo, photos and text, or I help you write them.",
  },
  {
    title: "Design",
    duration: "TODO: days",
    body: "I start from the template for your kind of business, or a blank sheet for a custom build, and show you the pages before I build them.",
  },
  {
    title: "Build",
    duration: "TODO: days",
    body: "I build the site, make it work on phones first, and add your content. You review it on a private link.",
  },
  {
    title: "Launch",
    duration: "TODO: day",
    body: "The site goes live on your domain and I walk you through updating it.",
  },
] as const;

// TODO: owner to confirm every item; remove anything not offered
export const included = [
  "Design and build by the same person",
  "Works on phones, tablets and desktops",
  "Contact form, email and WhatsApp buttons",
  "Basic search setup: titles, descriptions, sitemap",
  "Arabic and other right-to-left languages on request",
  "TODO: domain and hosting setup (confirm)",
] as const;

// TODO: owner to supply real timelines; no prices are shown
export const timelines = [
  { label: "Template site", value: "TODO: from N weeks" },
  { label: "Custom build", value: "TODO: from N weeks" },
] as const;
