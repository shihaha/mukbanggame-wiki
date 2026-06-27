import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Events Status`,
  description: "Mukbang Game events status with clear labels for verified updates, codes, and unverified event claims.",
  alternates: { canonical: `${siteConfig.domain}/events` }
};

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Events", href: "/events" }]} />
      <Breadcrumbs items={[{ label: "Events", href: "/events" }]} />

      <PageIntro
        eyebrow="Not verified"
        title={`${siteConfig.gameName} Events Status`}
        description="No official event calendar or event reward track is verified in the current source set. Use updates and codes pages for freshness checks until a creator-owned event source appears."
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="status-pill">Not verified</span>
          <h2 className="mt-4 text-lg font-bold text-white">Event calendar</h2>
          <p className="mt-2 text-sm text-white/66">No source-backed event calendar is available yet.</p>
        </article>
        <article className="content-card">
          <span className="status-pill">Needs check</span>
          <h2 className="mt-4 text-lg font-bold text-white">Event codes</h2>
          <p className="mt-2 text-sm text-white/66">Reported code strings remain separated on the codes page until verified.</p>
        </article>
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-lg font-bold text-white">Roblox update timestamp</h2>
          <p className="mt-2 text-sm text-white/66">The updates page tracks API-confirmed freshness without guessing patch contents.</p>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/updates" className="button-secondary">Updates</Link>
        <Link href="/codes" className="button-secondary">Codes</Link>
        <Link href="/sources" className="button-secondary">Sources</Link>
      </div>
    </main>
  );
}
