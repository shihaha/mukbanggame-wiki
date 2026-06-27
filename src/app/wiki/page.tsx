import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const wikiLinks = [
  {
    href: "/wiki/gamepasses",
    eyebrow: "Wiki",
    title: "Gamepasses",
    description: "Private Rooms, Studio Place, 2x Bites, 2x Cash, Seafood Boil, and 2x Spicy Ramen."
  },
  {
    href: "/wiki/locations",
    eyebrow: "Wiki",
    title: "Locations and seating",
    description: "Apartments and seating areas are verified features, but exact location names still need checking."
  },
  {
    href: "/wiki/food-list",
    eyebrow: "Wiki",
    title: "Food list",
    description: "Paid food passes are verified; the full food list should stay marked as needs check."
  }
];

const statusLinks = [
  { href: "/events", title: "Events status", description: "Check whether event calendars or event rewards are verified." },
  { href: "/bases", title: "Rooms and bases status", description: "Understand how rooms, apartments, Private Rooms, and Studio Place fit the game." },
  { href: "/brainrots", title: "Brainrots status", description: "See why brainrot collection is not a verified Mukbang Game system." },
  { href: "/lucky-blocks", title: "Lucky blocks status", description: "See why lucky blocks, spins, and gacha pages are held as not verified." }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki`,
  description: `${siteConfig.gameName} wiki hub for gamepasses, food, locations, seating, source checks, and setup decisions.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this hub for source-checked Mukbang Game topics: gamepasses, paid foods, apartments, seating areas, and what still needs live verification."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Choose the wiki topic you need"
          copy="Start with the topics that affect setup choices, Robux decisions, food showcases, or recording locations."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiLinks.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Status pages"
          title="Check held or unverified systems"
          copy="Some common Roblox search terms do not match Mukbang Game. These pages explain the boundary instead of inventing mechanics."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statusLinks.map((item) => (
            <Link key={item.href} href={item.href} className="content-card">
              <span className="mini-label">Status</span>
              <h2 className="mt-3 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
