import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mighty.so";
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), priority: 1 },
  ];

  projects.forEach((project) => {
    routes.push({
      url: `${base}${project.ctaHref}`,
      lastModified: new Date(),
      priority: 0.8,
    });
  });

  return routes;
}
