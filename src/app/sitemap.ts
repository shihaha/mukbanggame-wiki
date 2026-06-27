import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/codes", changeFrequency: "daily", priority: 0.95 },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.9 },
  { path: "/trello", changeFrequency: "weekly", priority: 0.72 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/asmr-setup", changeFrequency: "weekly", priority: 0.72 },
  { path: "/guides/beginner-guide", changeFrequency: "weekly", priority: 0.72 },
  { path: "/guides/camera-controls", changeFrequency: "weekly", priority: 0.68 },
  { path: "/guides/collab-mukbang", changeFrequency: "weekly", priority: 0.68 },
  { path: "/handbook", changeFrequency: "weekly", priority: 0.74 },
  { path: "/handbook/beginners-guide", changeFrequency: "weekly", priority: 0.66 },
  { path: "/handbook/event-pass-guide", changeFrequency: "weekly", priority: 0.62 },
  { path: "/handbook/luck-guide", changeFrequency: "weekly", priority: 0.58 },
  { path: "/handbook/money-guide", changeFrequency: "weekly", priority: 0.64 },
  { path: "/handbook/offline-guide", changeFrequency: "weekly", priority: 0.56 },
  { path: "/handbook/rebirth-guide", changeFrequency: "weekly", priority: 0.56 },
  { path: "/handbook/routes-guide", changeFrequency: "weekly", priority: 0.62 },
  { path: "/handbook/speed-guide", changeFrequency: "weekly", priority: 0.62 },
  { path: "/wiki", changeFrequency: "weekly", priority: 0.8 },
  { path: "/wiki/gamepasses", changeFrequency: "weekly", priority: 0.72 },
  { path: "/wiki/locations", changeFrequency: "weekly", priority: 0.72 },
  { path: "/wiki/food-list", changeFrequency: "weekly", priority: 0.66 },
  { path: "/updates", changeFrequency: "daily", priority: 0.75 },
  { path: "/events", changeFrequency: "weekly", priority: 0.58 },
  { path: "/bases", changeFrequency: "weekly", priority: 0.56 },
  { path: "/brainrots", changeFrequency: "monthly", priority: 0.35 },
  { path: "/lucky-blocks", changeFrequency: "monthly", priority: 0.35 },
  { path: "/sources", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/disclosure", changeFrequency: "monthly", priority: 0.3 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return routes
    .map((route) => ({
      url: `${siteConfig.domain}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}
