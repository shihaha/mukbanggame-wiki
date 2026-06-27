import { createRouteOgImage, routeOgContentType, routeOgSize } from "@/app/route-og";

export const dynamic = "force-static";
export const alt = "Mukbang Game update status";
export const size = routeOgSize;
export const contentType = routeOgContentType;

export default function Image() {
  return createRouteOgImage({
    kicker: "Update checks",
    title: "Mukbang Game Updates",
    description: "Roblox API update timestamp, testing status, and verified-source boundaries for patch claims."
  });
}
