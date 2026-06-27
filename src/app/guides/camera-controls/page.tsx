import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Camera Controls (June 2026)`,
  description: "Mukbang Game camera and chair setup status with verified feature labels and live-check gaps.",
  alternates: { canonical: `${siteConfig.domain}/guides/camera-controls` }
};

export default function CameraControlsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Camera Controls", href: "/guides/camera-controls" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Camera Controls", href: "/guides/camera-controls" }]} />
      <PageIntro
        eyebrow="Controls status"
        title={`${siteConfig.gameName} Camera Controls`}
        description="Camera controllers and chair adjustments are verified features from the official description. Exact keybinds and UI steps still need live gameplay confirmation."
      />

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-xl font-bold text-white">Camera controllers exist</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Use camera setup as a real guide topic, but do not publish exact control buttons until checked in-game.</p>
        </article>
        <article className="content-card">
          <span className="status-pill">Source-backed</span>
          <h2 className="mt-4 text-xl font-bold text-white">Chair adjustments exist</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Use chair setup in ASMR and collab checklists while exact interaction flow remains Needs check.</p>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/guides/asmr-setup" className="button-secondary">ASMR setup</Link>
        <Link href="/wiki/locations" className="button-secondary">Locations</Link>
        <Link href="/sources" className="button-secondary">Source checks</Link>
      </div>
    </main>
  );
}
