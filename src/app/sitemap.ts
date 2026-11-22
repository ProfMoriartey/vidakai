import type { MetadataRoute } from "next";
import { projects } from "~/data/projects";
import { site } from "~/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/work`, priority: 0.7 },
    ...projects.map((p) => ({ url: `${site.url}/work/${p.id}`, priority: 0.6 })),
  ];
}
