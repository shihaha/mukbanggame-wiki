import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Lucky Blocks Status`,
  description: "Mukbang Game lucky blocks status page explaining that no lucky block system is verified.",
  alternates: { canonical: `${siteConfig.domain}/lucky-blocks` }
};

export default function LuckyBlocksPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Lucky Blocks", href: "/lucky-blocks" }]} />
      <Breadcrumbs items={[{ label: "Lucky Blocks", href: "/lucky-blocks" }]} />

      <PageIntro
        eyebrow="Not verified"
        title={`${siteConfig.gameName} Lucky Blocks Status`}
        description="No lucky block, spin, gacha, rarity pool, or pity system is verified for Mukbang Game. The site keeps that boundary visible instead of publishing a generic drop table."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Use verified pages"
          title="Current useful mechanics"
          copy="Known mechanics are roleplay recording, ASMR setup, camera and chair features, collab mukbang, apartments, seating areas, and verified gamepass products."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/wiki/gamepasses" className="button-secondary">Gamepasses</Link>
          <Link href="/calculator" className="button-secondary">Scene planner</Link>
          <Link href="/trello" className="button-secondary">Source status</Link>
        </div>
      </section>
    </main>
  );
}
