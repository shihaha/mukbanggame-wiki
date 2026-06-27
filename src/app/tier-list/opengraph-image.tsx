import { createRouteOgImage, routeOgContentType, routeOgSize } from "@/app/route-og";

export const dynamic = "force-static";
export const alt = "Mukbang Game setup tier list";
export const size = routeOgSize;
export const contentType = routeOgContentType;

export default function Image() {
  return createRouteOgImage({
    kicker: "Setup rankings",
    title: "Mukbang Game Tier List",
    description: "Role-first rankings for solo ASMR, collab, Private Room, Studio Place, food showcase, and economy holds."
  });
}
