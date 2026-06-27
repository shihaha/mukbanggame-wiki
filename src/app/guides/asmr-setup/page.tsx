import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const steps = [
  "Pick solo ASMR if you want the cleanest free starter setup.",
  "Choose a seating area or apartment-style scene before adjusting camera.",
  "Set camera angle and chair position before selecting food.",
  "Use paid Private Room only when interruption risk matters.",
  "Use Studio Place only when a custom 2D background is the goal."
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} ASMR Setup (June 2026)`,
  description: "Plan a Mukbang Game ASMR setup with camera, chair, location, food, Private Room, and Studio Place source notes.",
  alternates: { canonical: `${siteConfig.domain}/guides/asmr-setup` }
};

export default function AsmrSetupPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "ASMR Setup", href: "/guides/asmr-setup" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "ASMR Setup", href: "/guides/asmr-setup" }]} />
      <PageIntro
        eyebrow="Checked date June 27, 2026"
        title={`${siteConfig.gameName} ASMR Setup`}
        description="Use this recording checklist for a source-aware Mukbang Game ASMR scene. Camera controllers, chair adjustments, collab mukbang, apartments, and seating areas are verified feature signals; exact controls still need live confirmation."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Checklist"
          title="Best ASMR setup flow"
          copy="The safest ASMR path is a free solo setup first. Move to Private Room or Studio Place only when the paid feature matches your scene goal."
        />
        <ol className="mt-6 grid gap-4">
          {steps.map((step, index) => (
            <li key={step} className="content-card">
              <span className="tier-badge">{index + 1}</span>
              <p className="mt-4 text-lg leading-7 text-white/76">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="status-pill">Early signal</span>
          <h2 className="mt-4 text-lg font-bold text-white">Solo ASMR table</h2>
          <p className="mt-2 text-sm text-white/66">Best first setup because it avoids paid dependencies and keeps recording simple.</p>
        </article>
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-lg font-bold text-white">Private Room</h2>
          <p className="mt-2 text-sm text-white/66">Best when privacy matters, but exact filming value still needs gameplay verification.</p>
        </article>
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-lg font-bold text-white">Studio Place</h2>
          <p className="mt-2 text-sm text-white/66">Best when a custom 2D background matters more than a public apartment scene.</p>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Use scene planner</Link>
        <Link href="/tier-list" className="button-secondary">Compare setup tiers</Link>
        <Link href="/wiki/locations" className="button-secondary">Check locations</Link>
        <Link href="/codes" className="button-secondary">Check codes first</Link>
      </div>
    </main>
  );
}
