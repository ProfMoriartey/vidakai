export interface Project {
  id: string
  title: string
  description: string
  content: string
  tags: string[]
  color: string
  display: boolean
  link: string
  desktopImages: string[]
  mobileImages: string[]
}

export const projects: Project[] = [
  {
    id: "hangflow",
    title: "Hangflow ry",
    description: "Freelance web application delivering accessible user experiences.",
    content: "Hastory required a strictly accessible interface supporting right-to-left languages. We engineered a custom layout engine that flips the UI based on user preference. The result is a highly inclusive platform that serves a diverse international audience.",
    tags: ["Next.js", "Drizzle ORM", "TypeScript"," Tailwind CSS", " PostgreSQL", "Next-Intl"],
    color: "bg-green-600",
    display: true,
    link: "https://www.hangflow.org/en",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6OJMlmDKNKG6ckqyvRHalXJp5git4hIezrE2o",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6zkBcxesqKxupshmRtWILo36frlczNZM7DFHk",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6H75LW1CbAFpuQTcd0YD5lRSx3C7eLjKzW42P"
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Ar1xjEef48pv2jlJf3IMg9wBrLncisk0RoxD",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Ap3CA3f48pv2jlJf3IMg9wBrLncisk0RoxDY",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6M0qkU8h4KC3usBz2P4nThki6NQbfSXJdgc58"
    ]
  },{
    id: "menupedia",
    title: "Menupedia",
    description: "Full lifecycle management for a custom restaurant application.",
    content: "We built Menupedia to solve the slow update cycles of traditional restaurant menus. The application features a real-time dashboard for managers to update pricing and availability. The frontend delivers lightning-fast load times for customers scanning QR codes at the table.",
    tags: ["Next.js"," PostgreSQL", "TypeScript", "Next-Intl", "Drizzle ORM", " Tailwind CSS", "Clerk" ],
    color: "bg-blue-600",
    display: true,
    link: "https://menu-pedia.com",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6arEBhkOT8EJpl2U7DryNeo4S65AQ1KHFYfgt",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6LLVJP4HTpQsWwvaSBXVxiIHjChtYbKc7ODlP",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6yyUac6itp9XzaeP71OfEL2qj4B0RNbkQJIGF"
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6wTl5NE0NEUSiHrD6tfKc0ZGxhykzjnbQJRuP",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6boRCDyv54Oe53XDuH1kr9RosdqA8vUGTfPFm",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6h0p99UW1V6h0mfOs9wBgnatvoeHTuc8MGdyN"
    ]
  },
  {
    id: "winbrella",
    title: "Winbrella Fabrics",
    description: "Freelance web application delivering accessible user experiences.",
    content: "Hastory required a strictly accessible interface supporting right-to-left languages. We engineered a custom layout engine that flips the UI based on user preference. The result is a highly inclusive platform that serves a diverse international audience.",
    tags: ["Next.js", "Clerk", "TypeScript"," Tailwind CSS", " PostgreSQL", "Drizzle ORM", "Next-Intl"],
    color: "bg-emerald-600",
    display: true,
    link: "https://winbrellafabrics.com",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6hhk8LZW1V6h0mfOs9wBgnatvoeHTuc8MGdyN",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6UnbkJrX9jbJyWH8qsh1QKl26fOVYFM3kECZz",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6C4e2FDjkHF5M2NqOBtmQUhdGyp7LbTwfDPiA"
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6cG2EwDLUCAzFEP0x382uHjsgptkOlSRZfQ95",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6ZCZFJ8GH6blSrFBjX0I74KRY21NCuEwGynkm",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6WLbplmDUpbZgFx2eQzit65h7vUE8XMGnV3PL"
    ]
  },
  {
    id: "hastory",
    title: "Hastory",
    description: "Freelance web application delivering accessible user experiences.",
    content: "Hastory required a strictly accessible interface supporting right-to-left languages. We engineered a custom layout engine that flips the UI based on user preference. The result is a highly inclusive platform that serves a diverse international audience.",
    tags: ["Next.js", " PostgreSQL", "TypeScript", "Drizzle ORM"," Tailwind CSS", "Clerk"],
    color: "bg-green-600",
    display: true,
    link: "https://hastory.vercel.app/",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6I4CvD9WdtZghsSzjUqFN95mVfWxr4J0Cyo8i",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6UUC0O5X9jbJyWH8qsh1QKl26fOVYFM3kECZz",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Pifr3gilmOLdBSMXptnZqxDECUzFJlhyV9ew"
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp62o4A5NCYLsanEH6K1Cr34ld5eJSwik8hDjbq",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6jmmmLhVnaH5gx8cEKCkieY1M4BLsXFR6pOnJ",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6pa4A3QNjVEeAYildJ0SHn6UCrw5X3KObZQ9L"
    ]
  },
  {
    id: "hayat-goz",
    title: "Hayat Goz Clinic",
    description: "Full lifecycle management for a custom restaurant application.",
    content: "We built Menupedia to solve the slow update cycles of traditional restaurant menus. The application features a real-time dashboard for managers to update pricing and availability. The frontend delivers lightning-fast load times for customers scanning QR codes at the table.",
    tags: ["Next.js", "Zod", "Next-Intl", "TypeScript", "date-fns", " PostgreSQL", "Drizzle ORM"," Tailwind CSS",  ],
    color: "bg-brown-600",
    display: true,
    link: "https://hayat-goz.vercel.app/en",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6XbNg54uL4Sy3IBubENxGr0TPAio2deaWFLlp",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6UHoKDw7X9jbJyWH8qsh1QKl26fOVYFM3kECZ",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Gfh8NzIXR2Y4jlcJVuWOz1D9eTpIdqQkhi6K"
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp676xFdKo8Fmc0PYWVtegwBa31LoivzqfAM4CR",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Xboh6qTL4Sy3IBubENxGr0TPAio2deaWFLlp",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6hxSfZYW1V6h0mfOs9wBgnatvoeHTuc8MGdyN"
    ]
  },
  {
    id: "qr-code",
    title: "QR Code Gen.",
    description: "Full lifecycle management for a custom restaurant application.",
    content: "We built Menupedia to solve the slow update cycles of traditional restaurant menus. The application features a real-time dashboard for managers to update pricing and availability. The frontend delivers lightning-fast load times for customers scanning QR codes at the table.",
    tags: ["Next.js", "TypeScript", "Drizzle ORM", " PostgreSQL"," Tailwind CSS", "Next-Auth"],
    color: "bg-blue-600",
    display: true,
    link: "https://code-cooker.vercel.app/",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Piv9tGhlmOLdBSMXptnZqxDECUzFJlhyV9ew",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6kdzZbmTtpZRUKJAd9hoFy6jwe8suDLXVHlzS",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6rEgMAqY4Q50MYnCatwXkTviSZldp98LDxchg"
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6Bcyy0LqCJY8USG4eHir5AphZ0FomNQgWsbX9",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6ZQFkZRGH6blSrFBjX0I74KRY21NCuEwGynkm",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp65SNLCu27BZMp03FJeIwV2TEr8l6HtdiOkNjG"
    ]
  },
  {
    id: "tuzemen",
    title: "Tuzemen Group",
    description: "Full lifecycle management for a custom restaurant application.",
    content: "We built Menupedia to solve the slow update cycles of traditional restaurant menus. The application features a real-time dashboard for managers to update pricing and availability. The frontend delivers lightning-fast load times for customers scanning QR codes at the table.",
    tags: ["Next.js", " Tailwind CSS", "Drizzle ORM", " PostgreSQL", "TypeScript", "Next-Intl"],
    color: "bg-grey-600",
    display: true,
    link: "https://www.tuzemengroup.com/en",
    desktopImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6IsWhBfdtZghsSzjUqFN95mVfWxr4J0Cyo8ic",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6L01EIOHTpQsWwvaSBXVxiIHjChtYbKc7ODlP",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6nAYTUQV6szxVLyhoRcTJr1SNUbPH7Kjp5B40"
    ],
    mobileImages: [
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp67AruEHFo8Fmc0PYWVtegwBa31LoivzqfAM4C",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6h0pSndW1V6h0mfOs9wBgnatvoeHTuc8MGdyN",
      "https://wch957nrmt.ufs.sh/f/ik8BkBvrcXp6LndylSHTpQsWwvaSBXVxiIHjChtYbKc7ODlP"
    ]
  }
]