export interface Project {
  id: string;
  title: string;
  /** Kind of business, shown on cards */
  sector: string;
  /** One line for cards */
  summary: string;
  /** Case study paragraphs */
  content: string[];
  /** In display order; cards show the first three */
  tags: string[];
  /** Shown in Selected Work on the home page */
  featured: boolean;
  link: string;
  desktopImages: string[];
  mobileImages: string[];
}

export const projects: Project[] = [
  {
    id: "winbrella",
    title: "Winbrella Fabrics",
    sector: "Fabrics · B2B",
    summary: "A B2B fabric catalogue used by buyers in 53+ countries",
    content: [
      "Winbrella is the fabric brand of Tüzemen Textile in Bursa. Its buyers are spread across the world and needed a way to browse a large collection and request samples without waiting for a sales call.",
      "The result is a multilingual catalogue of 160+ designs and 800+ variants that buyers can filter, sort and browse. Fabrics go into a sample cart, and a single request reaches the sales team directly. An admin dashboard keeps stock and sample orders up to date. Buyers in 53+ countries use it today.",
    ],
    tags: ["Next.js", "Next-Intl", "Clerk", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    featured: true,
    link: "https://winbrellafabrics.com",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6hhk8LZW1V6h0mfOs9wBgnatvoeHTuc8MGdyN",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6UnbkJrX9jbJyWH8qsh1QKl26fOVYFM3kECZz",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6C4e2FDjkHF5M2NqOBtmQUhdGyp7LbTwfDPiA",
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6cG2EwDLUCAzFEP0x382uHjsgptkOlSRZfQ95",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6ZCZFJ8GH6blSrFBjX0I74KRY21NCuEwGynkm",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6WLbplmDUpbZgFx2eQzit65h7vUE8XMGnV3PL",
    ],
  },
  {
    id: "menupedia",
    title: "Menupedia",
    sector: "Restaurants",
    summary: "QR-code menus that restaurants update themselves, in the guest’s language",
    content: [
      "Printed menus are slow and costly to change. With Menupedia, restaurant managers update prices and availability from a dashboard, and guests who scan the QR code at the table see the current menu straight away.",
      "Guests read the menu in their own language: English, Arabic, Turkish, Spanish or Russian, with a full right-to-left layout for Arabic. Owners can run several branches, invite staff, set their brand colours, print QR codes and see how often the menu is scanned.",
    ],
    tags: ["Next.js", "Next-Intl", "PostgreSQL", "TypeScript", "Drizzle ORM", "Tailwind CSS", "Clerk"],
    featured: true,
    link: "https://menu-pedia.com",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6arEBhkOT8EJpl2U7DryNeo4S65AQ1KHFYfgt",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6LLVJP4HTpQsWwvaSBXVxiIHjChtYbKc7ODlP",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6yyUac6itp9XzaeP71OfEL2qj4B0RNbkQJIGF",
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6wTl5NE0NEUSiHrD6tfKc0ZGxhykzjnbQJRuP",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6boRCDyv54Oe53XDuH1kr9RosdqA8vUGTfPFm",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6h0p99UW1V6h0mfOs9wBgnatvoeHTuc8MGdyN",
    ],
  },
  {
    id: "hangflow",
    title: "Hangflow",
    sector: "Organisations",
    summary: "The official website of a youth organisation in Finland, maintained since 2024",
    content: [
      "Hangflow is a youth organisation in Finland. It needed one place where young people and partners can see what it does, find upcoming events, meet the board and get in touch, in Finnish and English.",
      "The site has been maintained and updated since 2024, alongside the organisation’s designers, as its needs change. It is their main website today.",
    ],
    tags: ["Next.js", "Next-Intl", "PostgreSQL", "Drizzle ORM", "TypeScript", "Tailwind CSS"],
    featured: true,
    link: "https://www.hangflow.org/en",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6OJMlmDKNKG6ckqyvRHalXJp5git4hIezrE2o",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6zkBcxesqKxupshmRtWILo36frlczNZM7DFHk",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6H75LW1CbAFpuQTcd0YD5lRSx3C7eLjKzW42P",
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Ar1xjEef48pv2jlJf3IMg9wBrLncisk0RoxD",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Ap3CA3f48pv2jlJf3IMg9wBrLncisk0RoxDY",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6M0qkU8h4KC3usBz2P4nThki6NQbfSXJdgc58",
    ],
  },
  {
    id: "tuzemen",
    title: "Tüzemen Group",
    sector: "Companies",
    summary: "A bilingual corporate website for a textile manufacturer and exporter",
    content: [
      "Tüzemen Group makes and exports fabrics from Bursa. It needed a corporate website that presents the group and its brands to international buyers, in English and Turkish.",
      "The result is a fast, bilingual site with the group’s story, brands and contact details, alongside the Winbrella catalogue built for the same group.",
    ],
    tags: ["Next.js", "Next-Intl", "PostgreSQL", "Tailwind CSS", "Drizzle ORM", "TypeScript"],
    featured: false,
    link: "https://www.tuzemengroup.com/en",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6IsWhBfdtZghsSzjUqFN95mVfWxr4J0Cyo8ic",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6L01EIOHTpQsWwvaSBXVxiIHjChtYbKc7ODlP",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6nAYTUQV6szxVLyhoRcTJr1SNUbPH7Kjp5B40",
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp67AruEHFo8Fmc0PYWVtegwBa31LoivzqfAM4C",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6h0pSndW1V6h0mfOs9wBgnatvoeHTuc8MGdyN",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6LndylSHTpQsWwvaSBXVxiIHjChtYbKc7ODlP",
    ],
  },
  {
    id: "hayat-goz",
    title: "Hayat Goz Clinic (demo)",
    sector: "Clinics · Demo",
    summary: "Demo: online appointment booking for an eye clinic, in three languages",
    content: [
      "A demo of how a clinic can take bookings online. Patients choose a doctor, service, date and time in six short steps, in English, Arabic or Turkish, with a full right-to-left layout for Arabic.",
      "Only free slots are shown, and the server checks again before saving, so two patients can’t book the same time. Staff manage doctors, services, working hours and days off from an admin panel.",
    ],
    tags: ["Next.js", "Next-Intl", "date-fns", "Zod", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    featured: false,
    link: "https://hayat-goz.vercel.app/en",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6XbNg54uL4Sy3IBubENxGr0TPAio2deaWFLlp",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6UHoKDw7X9jbJyWH8qsh1QKl26fOVYFM3kECZ",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Gfh8NzIXR2Y4jlcJVuWOz1D9eTpIdqQkhi6K",
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp676xFdKo8Fmc0PYWVtegwBa31LoivzqfAM4CR",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Xboh6qTL4Sy3IBubENxGr0TPAio2deaWFLlp",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6hxSfZYW1V6h0mfOs9wBgnatvoeHTuc8MGdyN",
    ],
  },
  {
    id: "hastory",
    title: "Hastory (demo)",
    sector: "Healthcare · AI demo",
    summary: "Demo: record a consultation and get a structured patient history",
    content: [
      "A demo of AI in a clinic’s daily work. The doctor records the consultation in the browser, and Hastory transcribes it and turns it into a structured patient history.",
      "Every AI answer is checked against a strict format before it is saved, so incomplete or malformed output never reaches a patient’s record. Each session can be reviewed and downloaded as a PDF, and the app can be installed on a phone or computer.",
    ],
    tags: ["Next.js", "PostgreSQL", "Clerk", "TypeScript", "Drizzle ORM", "Tailwind CSS"],
    featured: false,
    link: "https://hastory.vercel.app",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6I4CvD9WdtZghsSzjUqFN95mVfWxr4J0Cyo8i",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6UUC0O5X9jbJyWH8qsh1QKl26fOVYFM3kECZz",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Pifr3gilmOLdBSMXptnZqxDECUzFJlhyV9ew",
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp62o4A5NCYLsanEH6K1Cr34ld5eJSwik8hDjbq",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6jmmmLhVnaH5gx8cEKCkieY1M4BLsXFR6pOnJ",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6pa4A3QNjVEeAYildJ0SHn6UCrw5X3KObZQ9L",
    ],
  },
  {
    id: "qr-code",
    title: "QR Code Generator",
    sector: "Tool",
    summary: "QR codes you can edit after printing, with scan counts and link-in-bio pages",
    content: [
      "A printed QR code usually can’t be changed. This tool creates dynamic QR codes that point to a short link, so the destination can be edited after printing, and every scan is counted.",
      "It also builds link-in-bio pages with custom colours and icons, and makes plain QR codes for text, links, email, phone, SMS and Wi-Fi. Users sign in with Google or GitHub to save and manage their codes.",
    ],
    tags: ["Next.js", "Next-Auth", "PostgreSQL", "TypeScript", "Drizzle ORM", "Tailwind CSS"],
    featured: false,
    link: "https://code-cooker.vercel.app",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Piv9tGhlmOLdBSMXptnZqxDECUzFJlhyV9ew",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6kdzZbmTtpZRUKJAd9hoFy6jwe8suDLXVHlzS",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6rEgMAqY4Q50MYnCatwXkTviSZldp98LDxchg",
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Bcyy0LqCJY8USG4eHir5AphZ0FomNQgWsbX9",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6ZQFkZRGH6blSrFBjX0I74KRY21NCuEwGynkm",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp65SNLCu27BZMp03FJeIwV2TEr8l6HtdiOkNjG",
    ],
  },
];
