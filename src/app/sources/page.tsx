import type { Metadata } from "next";
import Link from "next/link";
import { officialLinks, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const boundaryLinks = [
  { href: "/events", title: "Events status", description: "Event calendar and event reward claims stay Not verified until source-backed." },
  { href: "/bases", title: "Rooms and bases status", description: "Rooms are treated as scene setups, not a base-building system." },
  { href: "/brainrots", title: "Brainrots status", description: "Brainrot collection is not verified for Mukbang Game." },
  { href: "/lucky-blocks", title: "Lucky blocks status", description: "Lucky blocks, spins, and gacha are not verified systems." },
  { href: "/handbook", title: "Handbook", description: "Read guide-status pages for Bites, Cash, routes, speed, and held mechanics." }
];

const policyLinks = [
  { href: "/contact", title: "Contact", description: "Send correction details with page URL, source, and checked date." },
  { href: "/privacy", title: "Privacy", description: "Review account, ad, analytics, and third-party link boundaries." },
  { href: "/disclosure", title: "Disclosure", description: "Read the unofficial fan-made status and official-source priority rule." }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Sources`,
  description: `Source and verification notes for ${siteConfig.gameName} codes, guides, wiki claims, and tier-list updates.`,
  alternates: { canonical: `${siteConfig.domain}/sources` }
};

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Sources", href: "/sources" }]} />
      <Breadcrumbs items={[{ label: "Sources", href: "/sources" }]} />
      <PageIntro
        eyebrow="Verification"
        title={`${siteConfig.gameName} Sources`}
        description="Use this page to see where code, tier-list, update, Trello, Discord, wiki, and guide claims are checked. Official Roblox pages should win when sources disagree."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where claims should be checked"
          copy="Start with official Roblox and creator-owned links, then use dated community references only when official details are unavailable."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{link.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Boundary pages"
          title="Where unverified claims are handled"
          copy="Use these pages when a common Roblox phrase appears in search demand but the Mukbang Game source set does not verify the mechanic."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {boundaryLinks.map((item) => (
            <Link key={item.href} href={item.href} className="content-card">
              <span className="mini-label">Boundary</span>
              <h2 className="mt-3 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Site policies"
          title="Correction, privacy, and disclosure"
          copy="These pages explain how to handle corrections, accounts, ads, and unofficial fan-site boundaries."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {policyLinks.map((item) => (
            <Link key={item.href} href={item.href} className="content-card">
              <span className="mini-label">Policy</span>
              <h2 className="mt-3 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
