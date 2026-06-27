import { createRouteOgImage, routeOgContentType, routeOgSize } from "@/app/route-og";

export const dynamic = "force-static";
export const alt = "Mukbang Game Trello Discord and wiki status";
export const size = routeOgSize;
export const contentType = routeOgContentType;

export default function Image() {
  return createRouteOgImage({
    kicker: "Source status",
    title: "Trello, Discord & Wiki",
    description: "Official Roblox source checks, unverified board status, community links, and current update boundaries."
  });
}
