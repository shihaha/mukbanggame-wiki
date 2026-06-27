import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const foodSignals = [
  {
    name: "Seafood Boil",
    status: "Source-backed paid food",
    note: "The Seafood Boil pass product text names Seafood Boil, Honey Seafood Boil, and Spicy Seafood Boil flavors."
  },
  {
    name: "2x Spicy Ramen",
    status: "Source-backed paid food",
    note: "The pass is verified through Roblox product text. Exact serving flow and food value still need in-game checking."
  },
  {
    name: "Full free food list",
    status: "Needs check",
    note: "Search and video vocabulary show demand for eating all foods, but a complete source-backed food list is not verified yet."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Food List (June 2026)`,
  description: "Mukbang Game food list status with verified paid foods and clear notes for unverified full food-list claims.",
  alternates: { canonical: `${siteConfig.domain}/wiki/food-list` }
};

export default function FoodListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Wiki", href: "/wiki" },
          { name: "Food List", href: "/wiki/food-list" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Food List", href: "/wiki/food-list" }]} />

      <PageIntro
        eyebrow="Checked date June 27, 2026"
        title={`${siteConfig.gameName} Food List`}
        description="This page separates verified paid food signals from unverified full-food-list claims. It should not publish exact all-food coverage until the game is checked directly."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Food status"
          title="Verified and pending food notes"
          copy="Paid foods are source-backed when named in Roblox product text. Free foods, menu order, rewards, and bite values still need live verification."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {foodSignals.map((food) => (
            <article key={food.name} className="content-card">
              <span className="status-pill">{food.status}</span>
              <h2 className="mt-4 text-xl font-extrabold text-white">{food.name}</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">{food.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Use case"
            title="Food showcase setup"
            copy="Food choices matter most for video ideas, ASMR scenes, and paid-food showcases. Exact earning or progression value is not verified enough for a numeric calculator."
          />
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Next source check"
            title="What to verify in-game"
            copy="Collect the full menu, free food names, bite rewards, Cash triggers, and whether paid food changes recording or progression value."
          />
        </article>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Verified boundary</span>
          <h2 className="mt-3 text-lg font-bold text-white">Paid food is not the whole menu</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            The Seafood Boil and Spicy Ramen passes prove some named foods exist, but they do not prove every free food, menu order, serving size, bite reward, or unlock path. Keep the paid-food list separate from a complete food index.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Recording value</span>
          <h2 className="mt-3 text-lg font-bold text-white">Use foods as scene props first</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Until exact rewards are known, food choices are safest to describe as ASMR and video-scene choices. A food can be good for a showcase without being proven as the best way to earn Bites or Cash.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Next pass</span>
          <h2 className="mt-3 text-lg font-bold text-white">What to collect in-game</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            A useful food data pass should record free foods, paid foods, where each appears, whether any are limited, what rewards trigger after bites, and whether food affects chair, camera, or collab recording flow.
          </p>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/tier-list" className="button-secondary">Food setup tier</Link>
        <Link href="/calculator" className="button-secondary">Scene planner</Link>
        <Link href="/sources" className="button-secondary">Source notes</Link>
      </div>
    </main>
  );
}
