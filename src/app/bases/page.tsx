import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Bases and Rooms Status`,
  description: "Mukbang Game bases status with room, apartment, Private Room, and Studio Place setup notes.",
  alternates: { canonical: `${siteConfig.domain}/bases` }
};

export default function BasesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Bases", href: "/bases" }]} />
      <Breadcrumbs items={[{ label: "Bases", href: "/bases" }]} />

      <PageIntro
        eyebrow="Rooms and setup bases"
        title={`${siteConfig.gameName} Bases and Rooms Status`}
        description="Mukbang Game does not have a verified base-building system. For this game, base-like decisions mean where to stage a scene: public seating, apartments, Private Rooms, or Studio Place."
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-lg font-bold text-white">Apartments and seating</h2>
          <p className="mt-2 text-sm text-white/66">Official description confirms apartments and many seating areas, but exact names need checking.</p>
        </article>
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-lg font-bold text-white">Private Rooms</h2>
          <p className="mt-2 text-sm text-white/66">Verified paid setup for privacy and collab recording decisions.</p>
        </article>
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-lg font-bold text-white">Studio Place</h2>
          <p className="mt-2 text-sm text-white/66">Verified paid setup for a custom 2D background workflow.</p>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/wiki/locations" className="button-secondary">Locations</Link>
        <Link href="/tier-list" className="button-secondary">Setup tiers</Link>
        <Link href="/guides/asmr-setup" className="button-secondary">ASMR guide</Link>
      </div>
    </main>
  );
}
