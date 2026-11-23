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
  url: "https://vidakai.com",
  description:
    "Websites and web apps for restaurants, clinics, manufacturers and organisations: designed, built, hosted and maintained.",
  // Shown in each section's title block as "Drawn and built by"
  owner: "Vidakai Studio",
  email: "ahmed.a.alhusaini@gmail.com",
  // International format, digits only
  whatsapp: "905406987368",
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
  { id: "organisation", title: "Organisation", summary: "Events, team and a way to join", layout: "showcase" },
];

export const steps = [
  {
    title: "Brief",
    duration: "Day 1",
    body: "It starts with a conversation about your business, your customers and what the site has to do. You send your logo, photos and text, or get help writing them.",
  },
  {
    title: "Design",
    duration: "Days 2–3",
    body: "The design starts from the template for your kind of business, or from a blank sheet for a custom build. You see the pages before they’re built.",
  },
  {
    title: "Build",
    duration: "Days 3–6",
    body: "The site is built phone-first and filled with your content. You review it on a private link.",
  },
  {
    title: "Launch",
    duration: "Day 7",
    body: "The site goes live on your domain, with hosting set up, and you’re shown how to update it.",
  },
] as const;

export const included = [
  "Design, build, hosting and launch in one place",
  "Works on phones, tablets and desktops",
  "Contact form, plus email and WhatsApp buttons",
  "Each enquiry sent straight to your email",
  "Optional: an instant Telegram message when a customer writes",
  "Basic search setup: titles, descriptions, sitemap",
  "Arabic and other right-to-left languages on request",
  "Domain and hosting set up for you",
] as const;

// No prices are shown anywhere on the site.
export const timelines = [
  { label: "Template site", value: "from 1 week" },
  { label: "Custom build", value: "from 3 weeks" },
] as const;
