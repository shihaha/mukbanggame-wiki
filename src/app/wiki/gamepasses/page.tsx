import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const gamepasses = [
  {
    name: "Private Rooms (REJOIN)",
    price: "120 Robux",
    type: "Private recording setup",
    status: "Source-backed",
    note: "Product text says it lets players claim a private room and may require rejoining."
  },
  {
    name: "Studio Place",
    price: "80 Robux",
    type: "Custom background setup",
    status: "Source-backed",
    note: "Product text describes a green baseplate area for editing mukbang backgrounds in 2D."
  },
  {
    name: "2x Bites",
    price: "250 Robux",
    type: "Bite point multiplier",
    status: "Source-backed",
    note: "Product text verifies Bite points, but base earning rates and spend uses still need checking."
  },
  {
    name: "2x Cash",
    price: "380 Robux",
    type: "Cash multiplier",
    status: "Source-backed",
    note: "Product text verifies Cash payouts, but payout triggers and use cases still need checking."
  },
  {
    name: "Seafood Boil",
    price: "150 Robux",
    type: "Paid food",
    status: "Source-backed",
    note: "Product text names Seafood Boil, Honey Seafood Boil, and Spicy Seafood Boil flavors."
  },
  {
    name: "2x Spicy Ramen",
    price: "50 Robux",
    type: "Paid food",
    status: "Source-backed",
    note: "Product text verifies the pass but the exact in-game food workflow still needs checking."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Gamepasses (June 2026)`,
  description: "Source-checked Mukbang Game gamepasses with Robux prices, verified product notes, and player-facing caveats.",
  alternates: { canonical: `${siteConfig.domain}/wiki/gamepasses` }
};

export default function GamepassesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Wiki", href: "/wiki" },
          { name: "Gamepasses", href: "/wiki/gamepasses" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Gamepasses", href: "/wiki/gamepasses" }]} />

      <PageIntro
        eyebrow="Checked date June 27, 2026"
        title={`${siteConfig.gameName} Gamepasses`}
        description="These passes are verified from Roblox product data. The page explains what the product text confirms and what still needs live gameplay checking before players treat a pass as best-in-slot."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Verified passes"
          title="Robux passes and known effects"
          copy="Use this as a spending reference, not a purchase recommendation. Exact value depends on your setup goal and the mechanics still marked Needs check."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {gamepasses.map((pass) => (
            <article key={pass.name} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-extrabold text-white">{pass.name}</h2>
                <span className="status-pill">{pass.status}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-[color:var(--accent)]">{pass.price} - {pass.type}</p>
              <p className="mt-3 text-sm leading-6 text-white/66">{pass.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Rankings</span>
          <h2 className="mt-3 text-lg font-bold text-white">Compare setup tiers</h2>
          <p className="mt-2 text-sm text-white/66">See where Private Rooms, Studio Place, food showcases, and economy routes sit in the setup tier list.</p>
        </Link>
        <Link href="/calculator" className="content-card">
          <span className="mini-label">Tool</span>
          <h2 className="mt-3 text-lg font-bold text-white">Use the scene planner</h2>
          <p className="mt-2 text-sm text-white/66">Check whether a paid setup matches your solo, collab, food, or custom-background goal.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Sources</span>
          <h2 className="mt-3 text-lg font-bold text-white">Review source status</h2>
          <p className="mt-2 text-sm text-white/66">Verify which facts are official Roblox data and which still need in-game confirmation.</p>
        </Link>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Spending boundary"
            title="Read product text before ranking value"
            copy="A verified gamepass name and price only prove that the product exists. It does not automatically prove the pass is worth buying for every player. Private Rooms can be useful when privacy matters, Studio Place can be useful when visual control matters, and food passes can be useful for showcase scenes. The multiplier passes need more data because base Bite and Cash rates are not known yet."
          />
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification plan"
            title="What to check after purchase or footage"
            copy="For each pass, record where the option appears in-game, whether rejoining is required, how the feature changes the setup flow, whether other players can interrupt it, and whether it affects rewards. This keeps the tier list and planner honest without turning a product description into a fake value formula."
          />
        </article>
      </section>
    </main>
  );
}
