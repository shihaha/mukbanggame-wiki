import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const guideLinks = [
  {
    href: "/guides/asmr-setup",
    eyebrow: "Guide",
    title: "ASMR setup guide",
    description: "Plan a clean recording setup around camera, chair, food, and location choices."
  },
  {
    href: "/guides/beginner-guide",
    eyebrow: "Guide",
    title: "Beginner guide",
    description: "Start from official sources, check codes, and choose a free starter setup."
  },
  {
    href: "/guides/camera-controls",
    eyebrow: "Guide",
    title: "Camera controls",
    description: "See what is verified about camera controllers and chair adjustments."
  },
  {
    href: "/guides/collab-mukbang",
    eyebrow: "Guide",
    title: "Collab mukbang guide",
    description: "Plan player count, seating, privacy, Private Rooms, and group recording flow."
  }
];

const handbookSupportLinks = [
  { href: "/handbook/beginners-guide", title: "Start guide" },
  { href: "/handbook/event-pass-guide", title: "Event and pass checks" },
  { href: "/handbook/luck-guide", title: "Luck claim status" },
  { href: "/handbook/money-guide", title: "Bites and Cash guide" },
  { href: "/handbook/offline-guide", title: "Offline reward status" },
  { href: "/handbook/rebirth-guide", title: "Rebirth claim status" },
  { href: "/handbook/routes-guide", title: "Scene route guide" },
  { href: "/handbook/speed-guide", title: "Faster setup guide" }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Beginner, ASMR, camera, collab, and setup guides for ${siteConfig.gameName}.`,
  alternates: { canonical: `${siteConfig.domain}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this hub for first-session help, ASMR recording setup, camera and chair notes, collab planning, and source-aware setup decisions."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that match real player questions"
          copy="Pick the guide that matches your current setup goal, then check codes, tier-list notes, planner output, or wiki details before spending Robux or recording time."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideLinks.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Handbook"
          title="Source-boundary guides"
          copy="Use these pages when a common Roblox phrase needs a clear Mukbang Game status check."
        />
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {handbookSupportLinks.map((item) => (
            <Link key={item.href} href={item.href} className="row-link">
              <span>
                <strong>{item.title}</strong>
                <small>Check what is verified and what is held.</small>
              </span>
              <span aria-hidden="true">-&gt;</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
