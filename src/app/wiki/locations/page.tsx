import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const locations = [
  {
    name: "Apartments",
    status: "Source-backed feature",
    bestFor: "Controlled solo or small-group scene planning",
    note: "Apartments are named in the official Roblox description. Exact apartment names, limits, and unlock logic still need checking."
  },
  {
    name: "Seating areas",
    status: "Source-backed feature",
    bestFor: "Public mukbang scenes and fast first-session testing",
    note: "The official description says there are many seating areas for blogging or roleplay."
  },
  {
    name: "Private Rooms",
    status: "Source-backed paid option",
    bestFor: "Collab recording when privacy and interruption control matter",
    note: "Verified through product text. The actual filming advantage over public areas still needs live testing."
  },
  {
    name: "Studio Place",
    status: "Source-backed paid option",
    bestFor: "Custom 2D background and cleaner visual setup",
    note: "Verified through product text. Use it as a background setup, not as a guaranteed earnings upgrade."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Best Locations (June 2026)`,
  description: "Mukbang Game location and seating notes for apartments, public seating, Private Rooms, and Studio Place.",
  alternates: { canonical: `${siteConfig.domain}/wiki/locations` }
};

export default function LocationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Wiki", href: "/wiki" },
          { name: "Locations", href: "/wiki/locations" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Locations", href: "/wiki/locations" }]} />

      <PageIntro
        eyebrow="Checked date June 27, 2026"
        title={`${siteConfig.gameName} Locations and Seating`}
        description="Use this page to choose a scene type while exact room names are still being verified. The safe ranking is by setup use case: solo ASMR, public testing, private collab, and custom background."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Locations"
          title="Best-known location and setup choices"
          copy="These are source-status notes, not a complete in-game map. Add exact room names only after live gameplay or official documentation confirms them."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <article key={location.name} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-extrabold text-white">{location.name}</h2>
                <span className="status-pill">{location.status}</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-[color:var(--accent)]">{location.bestFor}</p>
              <p className="mt-3 text-sm leading-6 text-white/66">{location.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="How to use this page"
            title="Choose by scene goal, not by final rank"
            copy="A public seating area is the fastest option when you only need a quick test, while apartments and quieter spaces are better for a longer solo ASMR scene. Private Rooms should be considered when interruption risk is the problem, not simply because the pass exists. Studio Place is different again: the verified product text points to a custom background workflow, so treat it as a visual-control option instead of a normal room upgrade."
          />
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Live checks still needed"
            title="What the location guide needs next"
            copy="The next verification pass should collect exact apartment names, seating limits, whether chairs can be adjusted in each area, how camera controllers behave around other players, and whether Private Rooms change recording reliability. Until those checks are done, the tier list should rank location types by use case and confidence rather than claiming one room is objectively best."
          />
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/tier-list" className="button-secondary">Compare setup tiers</Link>
        <Link href="/guides/asmr-setup" className="button-secondary">ASMR setup guide</Link>
        <Link href="/wiki/gamepasses" className="button-secondary">Gamepasses</Link>
      </div>
    </main>
  );
}
