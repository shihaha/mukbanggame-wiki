import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { getHandbookArticle } from "./_content";

const handbookLinks = [
  { href: "/handbook/beginners-guide", slug: "beginners-guide" },
  { href: "/handbook/event-pass-guide", slug: "event-pass-guide" },
  { href: "/handbook/luck-guide", slug: "luck-guide" },
  { href: "/handbook/money-guide", slug: "money-guide" },
  { href: "/handbook/offline-guide", slug: "offline-guide" },
  { href: "/handbook/rebirth-guide", slug: "rebirth-guide" },
  { href: "/handbook/routes-guide", slug: "routes-guide" },
  { href: "/handbook/speed-guide", slug: "speed-guide" }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Handbook`,
  description: "Mukbang Game handbook for beginner setup, events, passes, Bites, Cash, route choice, and source-boundary claims.",
  alternates: { canonical: `${siteConfig.domain}/handbook` }
};

export default function HandbookPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Handbook", href: "/handbook" }]} />
      <Breadcrumbs items={[{ label: "Handbook", href: "/handbook" }]} />
      <PageIntro
        eyebrow="Guide handbook"
        title={`${siteConfig.gameName} Handbook`}
        description="Use these guides for source-aware setup decisions. Several common Roblox mechanics are marked Not verified because Mukbang Game is a scene and ASMR roleplay experience, not a generic combat or gacha game."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Guides"
          title="Choose a handbook guide"
          copy="Each guide explains what is verified, what is still unknown, and where to continue before spending Robux or planning a recording session."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {handbookLinks.map((link) => {
            const article = getHandbookArticle(link.slug);
            return (
              <Link key={link.href} href={link.href} className="content-card">
                <span className="mini-label">{article.difficulty}</span>
                <h2 className="mt-3 text-lg font-bold text-white">{article.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/66">{article.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
