import type { Metadata } from "next";
import Link from "next/link";
import {
  activeCodes,
  editorialSignals,
  faqs,
  heroMetrics,
  officialLinks,
  siteConfig,
  tierPreview,
  toolCards,
  videoGuides,
} from "@/data/site";
import { FaqJsonLd, SoftwareApplicationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SectionHeader, TrustNote } from "@/components/ui/content";
import { BrandHero } from "@/components/home/BrandHero";

const homepageGuideLinks = [
  {
    href: "/guides/asmr-setup",
    title: "ASMR setup guide",
    description: "Plan a short, clean recording setup using camera, chair, and scene notes."
  },
  {
    href: "/guides/beginner-guide",
    title: "Beginner path",
    description: "Start from official links, check codes, then use the planner before recording."
  },
  {
    href: "/guides/camera-controls",
    title: "Camera controls",
    description: "Track verified camera and chair feature status before recording."
  },
  {
    href: "/guides/collab-mukbang",
    title: "Collab setup",
    description: "Use collab and private-room notes when recording with more than one player."
  },
  {
    href: "/handbook",
    title: "Handbook",
    description: "Read source-aware status guides for passes, Bites, Cash, routes, and held mechanics."
  }
];

const homepageWikiLinks = [
  {
    href: "/wiki/gamepasses",
    title: "Gamepasses",
    description: "Private Rooms, Studio Place, 2x Bites, 2x Cash, Seafood Boil, and 2x Spicy Ramen."
  },
  {
    href: "/wiki/locations",
    title: "Locations and seating",
    description: "Apartments and seating areas are verified features, but exact location names still need checking."
  },
  {
    href: "/wiki/food-list",
    title: "Food list",
    description: "Paid food passes are verified; the full food list should stay marked as needs check."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki, Codes, Tier List and Tools`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: `${siteConfig.gameName} Wiki, Codes and Tools`,
    description: siteConfig.description,
    url: siteConfig.domain,
    type: "website",
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki, Codes and Tools`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function HomePage() {
  return (
    <main>
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.home} />

      <BrandHero />

      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="bg-white/[0.03] px-4 py-4">
              <div className="text-2xl font-bold text-[color:var(--accent)]">{metric.value}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.label}</div>
              <div className="mt-1 text-sm text-white/60">{metric.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Freshness center"
            title={`${siteConfig.gameName} codes and update status`}
            copy="Codes are the highest-repeat Roblox search intent, so the homepage surfaces the latest verified set and sends players into the dedicated codes page."
          />
          <Link className="button-secondary" href="/codes">
            View all codes
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {activeCodes.slice(0, 4).map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex items-center justify-between gap-3">
                <span className="status-pill">{code.status}</span>
                <span className="text-xs text-white/50">{code.addedDate}</span>
              </div>
              <h3 className="mt-4 font-mono text-xl font-bold text-[color:var(--accent)]">{code.code}</h3>
              <p className="mt-2 text-sm text-white/65">{code.reward}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Tier preview"
            title={`${siteConfig.gameName} tier list preview`}
            copy="Start with the strongest current picks, then use the full tier list when you need ranking notes, substitutes, and update dates."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {tierPreview.map((item) => (
              <Link key={item.name} href="/tier-list" className="content-card">
                <div className="flex items-center justify-between">
                  <span className="tier-badge">{item.tier}</span>
                  <span className="text-sm text-white/50">{item.role}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-white/65">{item.reason}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Core tools"
          title="Tools players can use immediately"
          copy="Start with codes, setup rankings, the scene planner, and source checks before spending Robux or recording time."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {toolCards.map((tool) => (
            <Link key={tool.href} href={tool.href} className="content-card">
              <span className="mini-label">{tool.eyebrow}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm text-white/65">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Guides"
              title="Pick the next problem to solve"
              copy="Use these guides when you need first-session help, ASMR recording setup, camera and chair notes, collab planning, or source checks."
            />
            <div className="mt-6 grid gap-3">
              {homepageGuideLinks.map((guide) => (
                <Link key={guide.href} href={guide.href} className="row-link">
                  <span>
                    <strong>{guide.title}</strong>
                    <small>{guide.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Wiki coverage"
              title="Food, locations, and pass notes"
              copy="Use the wiki branch for source-backed Mukbang Game topics: paid foods, recording locations, gamepasses, and status boundaries."
            />
            <div className="mt-6 grid gap-3">
              {homepageWikiLinks.map((item) => (
                <Link key={item.href} href={item.href} className="row-link">
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Source check"
          title="Official and community sources"
          copy="Use these links and notes to see what is official, what is community reported, and what still needs checking."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{link.title}</h3>
                <p className="mt-2 text-sm text-white/65">{link.description}</p>
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
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {editorialSignals.map((signal) => (
            <TrustNote key={signal.title} title={signal.title} body={signal.body} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader
            eyebrow="Community research"
            title="Video and creator references"
            copy="Recent creator videos help players understand gameplay, updates, rankings, and strategy. Treat videos as supporting references, not official patch notes."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {videoGuides.map((video) => (
              <a key={video.href} href={video.href} className="content-card" target="_blank" rel="noreferrer">
                <span className="mini-label">{video.source ?? video.eyebrow}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{video.title}</h3>
                <p className="mt-2 text-sm text-white/65">{video.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="FAQ"
          title={`${siteConfig.gameName} quick answers`}
          copy="Quick answers for codes, sources, rankings, and the next page to check."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.home.map((faq) => (
            <article key={faq.q} className="content-card">
              <h3 className="text-lg font-bold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-6 text-white/68">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
