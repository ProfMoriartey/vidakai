import Link from "next/link";
import Image from "next/image";
import type { Project } from "~/data/projects";

/** Project card: screenshot, sector, title, one line, three tags. */
export default function WorkCard({ project: p, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <Link href={`/work/${p.id}`} className="group sheet-frame block bg-ink-raised p-3 transition-colors hover:bg-ink-sheet">
      <div className="relative aspect-[16/10] overflow-hidden border border-line bg-ink">
        {p.desktopImages[0] && (
          <Image
            src={p.desktopImages[0]}
            alt={`${p.title} website, home page`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        )}
      </div>
      <div className="px-2 pt-5 pb-3">
        <p className="text-sm text-fg-3">{p.sector}</p>
        <Heading className="mt-1 text-xl font-medium">{p.title}</Heading>
        <p className="mt-2 text-[15px] text-fg-2">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
          {p.tags.slice(0, 3).map((t) => (
            <li key={t} className="border border-line px-2 py-0.5 text-[13px] text-fg-3">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
