import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `How To Play ${siteConfig.gameName} Roblox (June 2026)`,
  description: "Beginner guide for Mukbang Game on Roblox with source checks, setup choices, codes status, and first-session planning.",
  alternates: { canonical: `${siteConfig.domain}/guides/beginner-guide` }
};

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Beginner Guide", href: "/guides/beginner-guide" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Beginner Guide", href: "/guides/beginner-guide" }]} />
      <PageIntro
        eyebrow="Beginner route"
        title={`How To Play ${siteConfig.gameName} Roblox`}
        description="Start from official sources, then choose a scene setup. Mukbang Game is best understood as a Roblox mukbang and ASMR roleplay experience, not a combat progression game."
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-4">
        {["Open official Roblox page", "Check codes status", "Pick free starter setup", "Use scene planner"].map((item, index) => (
          <article key={item} className="content-card">
            <span className="tier-badge">{index + 1}</span>
            <h2 className="mt-4 text-lg font-bold text-white">{item}</h2>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="First session"
          title="Recommended beginner path"
          copy="Start with a solo ASMR or public seating setup. Avoid planning around unverified codes, rebirths, luck systems, or exact Bites/Cash rates until source checks confirm them."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/codes" className="button-secondary">Codes status</Link>
          <Link href="/guides/asmr-setup" className="button-secondary">ASMR setup</Link>
          <Link href="/calculator" className="button-secondary">Scene planner</Link>
        </div>
      </section>
    </main>
  );
}
