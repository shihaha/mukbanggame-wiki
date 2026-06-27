import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Collab Guide (June 2026)`,
  description: "Plan a Mukbang Game collab setup with player count, privacy, seating, Private Room, and source confidence notes.",
  alternates: { canonical: `${siteConfig.domain}/guides/collab-mukbang` }
};

export default function CollabMukbangPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Collab Mukbang", href: "/guides/collab-mukbang" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Collab Mukbang", href: "/guides/collab-mukbang" }]} />
      <PageIntro
        eyebrow="Group setup"
        title={`${siteConfig.gameName} Collab Mukbang Guide`}
        description="Plan collab scenes around player count, privacy, seating, camera order, and whether Private Rooms are worth using for the session."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Checklist"
          title="Collab setup flow"
          copy="Coordinate the group before recording. Private Rooms are source-backed, but public seating can be enough for casual collabs."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {["Pick who leads the camera angle", "Seat players before selecting food", "Use Private Room only when privacy matters", "Check ASMR guide for audio-focused scenes"].map((item) => (
            <article key={item} className="content-card">
              <h2 className="text-lg font-bold text-white">{item}</h2>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Plan collab setup</Link>
        <Link href="/wiki/gamepasses" className="button-secondary">Private Rooms pass</Link>
        <Link href="/tier-list" className="button-secondary">Compare setups</Link>
      </div>
    </main>
  );
}
