import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Brainrots Status`,
  description: "Mukbang Game brainrots status page explaining that no brainrot collection system is verified.",
  alternates: { canonical: `${siteConfig.domain}/brainrots` }
};

export default function BrainrotsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Brainrots", href: "/brainrots" }]} />
      <Breadcrumbs items={[{ label: "Brainrots", href: "/brainrots" }]} />

      <PageIntro
        eyebrow="Not a verified Mukbang Game system"
        title={`${siteConfig.gameName} Brainrots Status`}
        description="No brainrot collection, mutation, or value-list system is verified for Mukbang Game. This page exists to prevent generic Roblox wiki assumptions from being treated as game facts."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Source boundary"
          title="What players should use instead"
          copy="For Mukbang Game, the useful verified surfaces are scene setups, locations, gamepasses, food notes, codes status, and official-source checks."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/tier-list" className="button-secondary">Setup tier list</Link>
          <Link href="/wiki/food-list" className="button-secondary">Food list status</Link>
          <Link href="/sources" className="button-secondary">Source checks</Link>
        </div>
      </section>
    </main>
  );
}
