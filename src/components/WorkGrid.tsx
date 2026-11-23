import Link from "next/link";
import Sheet from "./Sheet";
import WorkCard from "./WorkCard";
import { projects } from "~/data/projects";

export default function WorkGrid() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Sheet id="work" title="Selected work" intro="Live sites for real businesses and organisations, plus demos and tools.">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <li key={p.id}>
            <WorkCard project={p} />
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link href="/work" className="btn btn-secondary">
          All projects
        </Link>
      </div>
    </Sheet>
  );
}
