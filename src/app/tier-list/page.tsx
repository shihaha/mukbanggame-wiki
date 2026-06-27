import type { Metadata } from "next";
import Link from "next/link";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { TierListClient } from "./TierListClient";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Tier List (June 2026) - Best Setups & Locations`,
  description:
    "Compare Mukbang Game setups for solo ASMR, collab rooms, apartments, Studio Place, Private Rooms, food showcases, and economy routes.",
  alternates: { canonical: `${siteConfig.domain}/tier-list` },
  openGraph: {
    title: `${siteConfig.gameName} Tier List (June 2026) - Best Setups & Locations`,
    description:
      "Role-first Mukbang Game tier list for solo ASMR, collab rooms, apartments, Studio Place, Private Rooms, and verified source notes.",
    url: `${siteConfig.domain}/tier-list`,
    images: ["/tier-list/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Tier List (June 2026) - Best Setups & Locations`,
    description:
      "Role-first Mukbang Game tier list for solo ASMR, collab rooms, apartments, Studio Place, Private Rooms, and verified source notes.",
    images: ["/tier-list/opengraph-image"]
  }
};

const criteria = [
  "ASMR and recording fit",
  "Privacy and interruption risk",
  "Beginner setup effort",
  "Unlock cost and paid pass dependency",
  "Food showcase value",
  "Bites and Cash farming evidence",
  "Replacement risk after updates"
];

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List", href: "/tier-list" }]} />
      <ItemListJsonLd />
      <FaqJsonLd items={faqs.tierList} />
      <Breadcrumbs items={[{ label: "Tier List", href: "/tier-list" }]} />

      <PageIntro
        eyebrow="Checked date June 27, 2026"
        title={`${siteConfig.gameName} Tier List (June 2026)`}
        description="This is a role-first setup ranking, not a combat unit list. Mukbang Game does not have verified characters, weapons, or boss meta, so the useful tier list compares scene setups, locations, paid options, and source confidence."
      />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Last updated:</span>
          <h2 className="mt-3 text-xl font-bold text-white">{siteConfig.lastUpdated}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Refresh after Roblox description changes, new gamepasses, working codes, or repeated creator/community reports.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Ranking criteria</span>
          <h2 className="mt-3 text-xl font-bold text-white">Setup value over rarity</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Criteria cover ASMR clarity, privacy, unlock cost, setup effort, source confidence, food-showcase value, and replacement risk.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source notes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Official source first</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Roblox page data and game-pass product text are strongest. Video trends and player reports stay labeled Early signal or Needs check.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Criteria"
          title="Ranking criteria for Mukbang Game setups"
          copy="The list ranks how useful a setup is for actual Mukbang Game sessions. It does not invent damage, survivability, boss clear speed, unit synergy, or rarity tiers that the source data does not support."
        />
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/7 p-4 text-sm font-semibold text-white/78">
              {item}
            </div>
          ))}
        </div>
      </section>

      <TierListClient />

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Beginner ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Free solo and public apartment setups rank higher for a first session because they avoid paid-pass dependency.
          </p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Collab ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Private Room rises when privacy matters. Public spaces can still work when the group accepts interruption risk.
          </p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Farming ranking hold</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Bites and Cash farming stays in Needs check until base earning rates and multiplier behavior are measured in-game.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Team combo handling"
          title="Collab setup is the team path here"
          copy="Mukbang Game is a social scene game, so team combo means player-count, privacy, seating, food showcase, and recording coordination. There is no verified combat team build route to rank."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Scene planner</span>
            <h3 className="mt-3 text-lg font-bold text-white">Plan a group setup</h3>
            <p className="mt-2 text-sm text-white/66">Pick player count, privacy, and scene goal before choosing Private Room or public apartment paths.</p>
          </Link>
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check gamepasses</h3>
            <p className="mt-2 text-sm text-white/66">Review Private Rooms, Studio Place, food passes, and multiplier pass status before spending Robux.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Sources</span>
            <h3 className="mt-3 text-lg font-bold text-white">Verify claims</h3>
            <p className="mt-2 text-sm text-white/66">Use source notes when codes, Discord links, wiki pages, or reported setup claims disagree.</p>
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Change log"
            title="Latest adjustment: economy route held"
            copy="The Bites and Cash route stays in C/Needs check because multiplier passes are verified but base earning rates are not. Solo ASMR remains S because it uses official camera, chair, and social-roleplay signals without requiring paid passes."
          />
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Confidence labels"
            title="How to read the labels"
            copy="Source-backed means the feature or pass exists in official Roblox/product data. Early signal means demand or use case is visible but exact performance needs checking. Needs check means the claim should not drive spending yet."
          />
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="Mukbang Game tier list FAQ" />
        <div className="mt-6 grid gap-3">
          {faqs.tierList.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-2 text-white/66">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Check codes</Link>
        <Link href="/guides/asmr-setup" className="button-secondary">ASMR guide</Link>
        <Link href="/trello" className="button-secondary">Trello and Discord status</Link>
        <Link href="/sources" className="button-secondary">Source checks</Link>
        <Link href="/calculator" className="button-secondary">Scene planner</Link>
      </div>
    </main>
  );
}
