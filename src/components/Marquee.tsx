"use client";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Vercel Postgres",
  "Drizzle ORM",
  "Clerk",
  "Uploadthing",
];

export default function Marquee() {
  return (
    <section className="relative overflow-hidden bg-black py-12 text-white">
      <div className="animate-marquee flex w-[200%]">
        {/* Render the list twice for a seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex w-1/2 shrink-0 items-center justify-center sm:w-1/4 md:w-1/6 lg:w-[11.11%]"
          >
            <span className="text-xl font-medium tracking-tighter whitespace-nowrap opacity-80 transition-opacity duration-300 hover:opacity-100 md:text-3xl">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
