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
    id: "menupedia",
    title: "Menupedia",
    sector: "Restaurants",
    summary: "Digital menus that restaurant managers update themselves",
    content: [
      "Restaurants were stuck with slow update cycles on printed menus. I built Menupedia so managers change prices and availability from a dashboard, and customers who scan the QR code at the table get the current menu straight away.",
      "TODO: owner to confirm this wording",
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
    id: "winbrella",
    title: "Winbrella Fabrics",
    sector: "Fabrics",
    summary: "TODO: one or two lines from the owner",
    content: [
      "TODO: one or two lines from the owner",
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
    id: "hayat-goz",
    title: "Hayat Goz Clinic",
    sector: "Clinics",
    summary: "TODO: one or two lines from the owner",
    content: [
      "TODO: one or two lines from the owner",
    ],
    tags: ["Next.js", "Next-Intl", "date-fns", "Zod", "TypeScript", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    featured: true,
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
    id: "tuzemen",
    title: "Tuzemen Group",
    sector: "Companies",
    summary: "TODO: one or two lines from the owner",
    content: [
      "TODO: one or two lines from the owner",
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
    id: "hastory",
    title: "Hastory",
    sector: "Web app",
    summary: "An accessible platform with full right-to-left support",
    content: [
      "Hastory needed a strictly accessible interface that supports right-to-left languages. I built a layout that flips the whole interface based on the reader’s language, so it works the same for every audience.",
      "TODO: owner to confirm this wording",
    ],
    tags: ["Next.js", "PostgreSQL", "Clerk", "TypeScript", "Drizzle ORM", "Tailwind CSS"],
    featured: false,
    link: "https://hastory.vercel.app/",
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
    id: "hangflow",
    title: "Hangflow",
    sector: "Web app",
    summary: "TODO: one or two lines from the owner",
    content: [
      "TODO: one or two lines from the owner",
    ],
    tags: ["Next.js", "Next-Intl", "PostgreSQL", "Drizzle ORM", "TypeScript", "Tailwind CSS"],
    featured: false,
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
    id: "qr-code",
    title: "QR Code Generator",
    sector: "Tool",
    summary: "TODO: one or two lines from the owner",
    content: [
      "TODO: one or two lines from the owner",
    ],
    tags: ["Next.js", "Next-Auth", "PostgreSQL", "TypeScript", "Drizzle ORM", "Tailwind CSS"],
    featured: false,
    link: "https://code-cooker.vercel.app/",
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
