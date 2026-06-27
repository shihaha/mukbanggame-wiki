import { createRouteOgImage, routeOgContentType, routeOgSize } from "@/app/route-og";

export const dynamic = "force-static";
export const alt = "Mukbang Game codes status";
export const size = routeOgSize;
export const contentType = routeOgContentType;

export default function Image() {
  return createRouteOgImage({
    kicker: "Codes status",
    title: "Mukbang Game Codes",
    description: "Verified active codes, reported strings, and source labels for current Mukbang Game rewards."
  });
}
