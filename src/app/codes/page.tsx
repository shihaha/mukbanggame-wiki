import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { CopyButton } from "@/components/ui/CopyButton";

type CodeRow = {
  code: string;
  reward: string;
  status: string;
  addedDate: string;
  sourceNote: string;
};

const lastVerifiedIso = "2026-06-27";
const lastVerifiedLabel = "June 27, 2026";

function getCurrentMonthYear() {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${lastVerifiedIso}T00:00:00Z`));
}

function buildFaqSchema(items: typeof faqs.codes) {
  return items;
}

const codes: CodeRow[] = activeCodes
  .filter((code) => code.status === "Verified")
  .map((code) => ({
    ...code,
    sourceNote: "Verified from an official or trusted source."
  }));

const reportedCodes: CodeRow[] = activeCodes
  .filter((code) => code.status !== "Verified")
  .map((code) => ({
    ...code,
    sourceNote: "Reported in search/community results, but not confirmed as active in the current source set."
  }));

const expiredCodes: CodeRow[] = [];

const pageTitle = `${siteConfig.gameName} Codes (${getCurrentMonthYear()})`;
const pageDescription = `Checked ${siteConfig.gameName} codes for ${getCurrentMonthYear()}, with reported strings separated from verified active codes.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.domain}/codes`,
    images: ["/codes/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/codes/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={buildFaqSchema(faqs.codes)} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow={`Last verified ${lastVerifiedLabel}`}
        title={`${siteConfig.gameName} Codes (${getCurrentMonthYear()})`}
        description="This page separates verified active codes from reported strings. Mukbang Game is still moving quickly, so codes stay marked as Needs check until an official source or live redemption test confirms them."
      >
        <div className="grid gap-3 text-sm text-white/66 sm:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-white/6 p-4">
            <strong className="block text-2xl text-white">{codes.length}</strong>
            verified active codes
          </div>
          <div className="rounded-md border border-white/10 bg-white/6 p-4">
            <strong className="block text-2xl text-white">{reportedCodes.length}</strong>
            reported strings to check
          </div>
          <div className="rounded-md border border-white/10 bg-white/6 p-4">
            <strong className="block text-2xl text-white">{expiredCodes.length}</strong>
            confirmed expired codes
          </div>
        </div>
      </PageIntro>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active codes"
          title="Verified active Mukbang Game codes"
          copy="Only codes with a current official source or a successful live test appear here. That keeps reward claims clean for players checking before they record, buy passes, or plan a collab scene."
        />
        <div className="mt-6 grid gap-4">
          {codes.length > 0 ? (
            codes.map((code) => (
              <article key={code.code} className="content-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                  <CopyButton code={code.code} />
                </div>
                <p className="mt-3 text-white/72">{code.reward}</p>
                <p className="mt-2 text-sm text-white/48">
                  Last verified: {lastVerifiedLabel}. {code.sourceNote}
                </p>
              </article>
            ))
          ) : (
            <article className="content-card border-[color:var(--accent)]/45">
              <h2 className="text-2xl font-extrabold text-white">No verified active codes yet</h2>
              <p className="mt-3 max-w-3xl text-white/70">
                The current source set does not confirm any active Mukbang Game codes. Reported strings are listed below so players
                can see what still needs checking without mistaking them for guaranteed rewards.
              </p>
              <p className="mt-3 text-sm text-white/48">Last verified: {lastVerifiedLabel}</p>
            </article>
          )}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Needs check"
          title="Reported Mukbang Game codes"
          copy="Use these only as leads for verification. If one works in-game, update the status, reward, source note, and checked date before moving it into the active list."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reportedCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-white">{code.code}</h2>
                <div className="flex items-center gap-2">
                  <span className="status-pill">{code.status}</span>
                  <CopyButton code={code.code} />
                </div>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/46">{code.sourceNote}</p>
              <p className="mt-2 text-sm text-white/46">Added or checked: {code.addedDate}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem Mukbang Game codes"
            copy="The exact panel should be rechecked after each Roblox update because testing builds can move menus."
          />
          <ol className="mt-5 grid gap-3 text-white/72">
            <li>1. Open Mukbang Game from the official Roblox page.</li>
            <li>2. Finish any tutorial or loading step that hides the main menu.</li>
            <li>3. Look for a Codes, Rewards, Shop, Settings, or event panel.</li>
            <li>4. Paste the code exactly, then claim before recording or starting a group scene.</li>
          </ol>
        </article>

        <article className="content-card">
          <SectionHeader
            eyebrow="Why these codes matter"
            title="Rewards should support scene setup"
            copy="Mukbang Game rewards are most useful when they help you test food, seating, camera angles, or a private recording setup. Until exact rewards are verified, avoid planning around a code as if it grants Bites, Cash, or a paid feature."
          />
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Expired list"
          title="Expired Mukbang Game codes"
          copy="A code moves here only after a failed live check or a reliable source marks it expired."
        />
        <div className="mt-6 overflow-hidden rounded-md border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/8 text-white">
              <tr>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Previous reward</th>
                <th className="px-4 py-3">Source note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/8 text-white/62">
              {expiredCodes.length > 0 ? (
                expiredCodes.map((code) => (
                  <tr key={code.code}>
                    <td className="px-4 py-3 font-mono line-through">{code.code}</td>
                    <td className="px-4 py-3">{code.reward}</td>
                    <td className="px-4 py-3">{code.sourceNote}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3" colSpan={3}>
                    No expired Mukbang Game codes are confirmed in the current source set.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card lg:col-span-2">
          <SectionHeader
            eyebrow="Use your rewards well"
            title="Where to go after checking codes"
            copy="When a code is verified, treat the reward as part of your setup plan rather than a standalone shortcut. Compare whether it helps a solo ASMR table, a collab room, or a custom background scene."
          />
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Next checks</h2>
          <div className="mt-4 grid gap-3 text-sm font-semibold">
            <Link href="/tier-list" className="rounded-md border border-white/10 bg-white/7 px-4 py-3 text-white hover:border-[color:var(--accent)]">
              Compare setup tier list
            </Link>
            <Link href="/trello" className="rounded-md border border-white/10 bg-white/7 px-4 py-3 text-white hover:border-[color:var(--accent)]">
              Check Trello and Discord status
            </Link>
            <Link href="/guides/asmr-setup" className="rounded-md border border-white/10 bg-white/7 px-4 py-3 text-white hover:border-[color:var(--accent)]">
              Plan an ASMR scene
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="Mukbang Game codes FAQ" />
        <div className="mt-6 grid gap-3">
          {faqs.codes.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-2 text-white/66">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
