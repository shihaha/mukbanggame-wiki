import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates (June 2026)`,
  description: "Mukbang Game update status with Roblox API checked date, testing label, and source boundaries.",
  alternates: { canonical: `${siteConfig.domain}/updates` },
  openGraph: {
    title: `${siteConfig.gameName} Updates (June 2026)`,
    description: "Mukbang Game update status with Roblox API checked date, testing label, and source boundaries.",
    url: `${siteConfig.domain}/updates`,
    images: ["/updates/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Updates (June 2026)`,
    description: "Mukbang Game update status with Roblox API checked date, testing label, and source boundaries.",
    images: ["/updates/opengraph-image"]
  }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />

      <PageIntro
        eyebrow="Checked date June 27, 2026"
        title={`${siteConfig.gameName} Updates`}
        description="Track confirmed update signals separately from rumors. The strongest current signal is the Roblox API updated timestamp, not a detailed patch note."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Update log"
          title="Confirmed update signals"
          copy="Add patch notes only after a creator-owned source, official Roblox description update, or direct in-game verification confirms the details."
        />
        <article className="content-card mt-6">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-xl font-extrabold text-white">Roblox experience updated on June 26, 2026</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">
            Roblox game details API reported an updated timestamp of 2026-06-26T23:58:13Z. This confirms the experience changed, but not the exact patch contents.
          </p>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Codes status</Link>
        <Link href="/trello" className="button-secondary">Trello and Discord status</Link>
        <Link href="/sources" className="button-secondary">Source checks</Link>
      </div>
    </main>
  );
}
