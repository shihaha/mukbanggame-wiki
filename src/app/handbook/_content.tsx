import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

type HandbookArticle = {
  slug: string;
  title: string;
  action: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  quickAnswer: string;
  requirements: string[];
  steps: { title: string; body: string }[];
  mistakes: { title: string; fix: string }[];
  faq: { q: string; a: string }[];
  related: { href: string; title: string; description: string }[];
};

export const handbookArticles: HandbookArticle[] = [
  {
    slug: "beginners-guide",
    title: "How to Start Mukbang Game",
    action: "Start Mukbang Game",
    description: "First-session guide for joining the official Roblox experience, checking source status, and picking a safe setup.",
    difficulty: "Easy",
    estimatedTime: "5-10 minutes",
    quickAnswer:
      "Start from the official Roblox page, check code and source status, then use a free solo ASMR or public table setup before spending Robux.",
    requirements: ["Roblox account", "Official game page", "No paid pass required"],
    steps: [
      { title: "Open the official experience", body: "Use the Mukbang Game Roblox page so you avoid copycat pages or outdated source links." },
      { title: "Check current source status", body: "Review Trello, Discord, wiki, and codes status before trusting outside claims." },
      { title: "Pick a starter setup", body: "Begin with a solo ASMR table or public apartment scene because those do not require paid passes." },
      { title: "Use the scene planner", body: "Choose solo, collab, food showcase, private room, or Studio Place goals and follow the checklist." }
    ],
    mistakes: [
      { title: "Buying before checking", fix: "Read the gamepass page first because exact value depends on your recording goal." },
      { title: "Trusting reported codes", fix: "Only treat a code as active after it appears in the verified active list." },
      { title: "Looking for combat tiers", fix: "Use setup tiers; no combat unit or weapon ranking is verified." }
    ],
    faq: [
      { q: "Is Mukbang Game hard to start?", a: "No. The safest start is a free solo or public setup with source checks before any paid feature." },
      { q: "Do beginners need Private Rooms?", a: "No. Private Rooms can help privacy, but free locations should be tested first." },
      { q: "Should beginners use codes first?", a: "Check the codes page, but no active official code is verified right now." },
      { q: "What is the best first guide?", a: "Use the ASMR setup guide if you want a recording-focused first session." }
    ],
    related: [
      { href: "/guides/asmr-setup", title: "ASMR setup", description: "Plan a clean recording session." },
      { href: "/codes", title: "Codes", description: "Check active and reported code status." },
      { href: "/calculator", title: "Scene planner", description: "Get a setup checklist." }
    ]
  },
  {
    slug: "event-pass-guide",
    title: "How to Check Events and Passes",
    action: "Check Events and Passes",
    description: "Guide to separating verified gamepass product text from unverified event claims.",
    difficulty: "Easy",
    estimatedTime: "3-6 minutes",
    quickAnswer:
      "Gamepasses are source-backed through Roblox product data, but no official event calendar is verified. Treat event claims as Needs check.",
    requirements: ["Gamepass page", "Events status page", "Source checks"],
    steps: [
      { title: "Start with verified passes", body: "Private Rooms, Studio Place, 2x Bites, 2x Cash, Seafood Boil, and 2x Spicy Ramen are verified products." },
      { title: "Separate pass value from pass existence", body: "A pass can exist while its exact gameplay value still needs live testing." },
      { title: "Check event status", body: "Use the events page for event calendar and event-code status before sharing a claim." },
      { title: "Link back to sources", body: "If a claim affects spending or rewards, keep the source note visible." }
    ],
    mistakes: [
      { title: "Calling a rumor an event", fix: "Wait for creator-owned or in-game confirmation." },
      { title: "Overstating pass value", fix: "Describe product text and mark unknown mechanics clearly." },
      { title: "Mixing codes with events", fix: "Keep code checks on the codes page." }
    ],
    faq: [
      { q: "Does Mukbang Game have verified events?", a: "No official event calendar is verified in the current source set." },
      { q: "Are gamepasses verified?", a: "Yes, six gamepasses are verified through Roblox product data." },
      { q: "Can events add new codes?", a: "They can in Roblox games generally, but no Mukbang Game event code is verified right now." },
      { q: "Where should event claims go?", a: "Put them on the events page with a Needs check label until confirmed." }
    ],
    related: [
      { href: "/events", title: "Events status", description: "See verified and unverified event notes." },
      { href: "/wiki/gamepasses", title: "Gamepasses", description: "Read source-backed pass details." },
      { href: "/sources", title: "Sources", description: "Review source confidence labels." }
    ]
  },
  {
    slug: "luck-guide",
    title: "How to Handle Luck Claims",
    action: "Handle Luck Claims",
    description: "Guide to avoiding unverified luck, spin, gacha, and drop-rate assumptions.",
    difficulty: "Easy",
    estimatedTime: "2-5 minutes",
    quickAnswer:
      "No luck stat, gacha pool, lucky block, pity, or drop-rate system is verified for Mukbang Game. Do not build strategy around luck claims yet.",
    requirements: ["Source status page", "No gacha assumption", "Verified mechanic list"],
    steps: [
      { title: "Look for official wording", body: "The verified source data covers roleplay, ASMR, camera, chair, collab, apartments, seating, and gamepasses." },
      { title: "Reject generic drop tables", body: "A generic Roblox luck page does not prove Mukbang Game has luck mechanics." },
      { title: "Use setup decisions instead", body: "Spend planning effort on privacy, background, food showcase, and recording quality." },
      { title: "Revisit after updates", body: "If a future update adds chance mechanics, add source-backed details then." }
    ],
    mistakes: [
      { title: "Importing another game's meta", fix: "Only use Mukbang Game source data." },
      { title: "Treating rumors as rates", fix: "No percentage should be published without a source." },
      { title: "Creating spin calculators", fix: "Hold spin/gacha tools until the system exists." }
    ],
    faq: [
      { q: "Does Mukbang Game have luck?", a: "No verified luck stat or roll system is present in the current source set." },
      { q: "Are lucky blocks verified?", a: "No. The lucky-block status page marks that system as not verified." },
      { q: "Should I save resources for luck?", a: "There is no verified luck resource to plan around right now." },
      { q: "What should I optimize instead?", a: "Optimize setup quality, privacy, camera flow, and food showcase choices." }
    ],
    related: [
      { href: "/lucky-blocks", title: "Lucky blocks status", description: "See why the system is not verified." },
      { href: "/tier-list", title: "Setup tiers", description: "Compare real setup choices." },
      { href: "/sources", title: "Sources", description: "Check evidence boundaries." }
    ]
  },
  {
    slug: "money-guide",
    title: "How to Read Bites and Cash",
    action: "Read Bites and Cash",
    description: "Economy guide for verified Bites and Cash signals without inventing rates.",
    difficulty: "Medium",
    estimatedTime: "5-8 minutes",
    quickAnswer:
      "2x Bites and 2x Cash prove those currencies exist, but base rates and spend sinks are not verified. Use them as economy signals, not a calculator yet.",
    requirements: ["2x Bites product note", "2x Cash product note", "Live rate verification pending"],
    steps: [
      { title: "Confirm what is official", body: "2x Bites says players earn Bite points each time they bite food. 2x Cash says players earn Cash when paid in game." },
      { title: "Mark what is unknown", body: "Base earning amounts, payout triggers, food multipliers, and spend sinks still need in-game verification." },
      { title: "Avoid numeric claims", body: "Do not publish an earning calculator until base rates and use cases are measured." },
      { title: "Use non-numeric planning", body: "For now, decide whether your goal is recording, food showcase, privacy, or progression checking." }
    ],
    mistakes: [
      { title: "Assuming pass ROI", fix: "A multiplier is verified, but return value is not." },
      { title: "Inventing Bite rates", fix: "Wait for live gameplay measurements." },
      { title: "Mixing roleplay value with economy value", fix: "Separate recording benefits from earning benefits." }
    ],
    faq: [
      { q: "Are Bites verified?", a: "Bite points are verified through the 2x Bites product text." },
      { q: "Is Cash verified?", a: "Cash is verified through the 2x Cash product text." },
      { q: "Can the site calculate earnings?", a: "Not yet. Base rates and spend sinks are not verified." },
      { q: "Where should economy notes appear?", a: "Use the gamepasses page, tier-list hold, and future explainer once data is collected." }
    ],
    related: [
      { href: "/wiki/gamepasses", title: "Gamepasses", description: "Read 2x Bites and 2x Cash notes." },
      { href: "/tier-list", title: "Economy hold", description: "See why farming stays Needs check." },
      { href: "/calculator", title: "Scene planner", description: "Plan without fake rates." }
    ]
  },
  {
    slug: "offline-guide",
    title: "How to Check Offline Rewards",
    action: "Check Offline Rewards",
    description: "Guide to offline reward claims and why they are not verified for Mukbang Game.",
    difficulty: "Easy",
    estimatedTime: "2-4 minutes",
    quickAnswer:
      "No offline earnings, offline rewards, or away-progress system is verified. Treat offline reward claims as Not verified until official or live evidence exists.",
    requirements: ["Source checks", "Updates page", "No offline assumption"],
    steps: [
      { title: "Check official data first", body: "Current verified data covers active roleplay and recording systems, not offline accrual." },
      { title: "Look for exact wording", body: "Offline rewards should have creator-owned wording or live UI proof before publication." },
      { title: "Keep the claim out of calculators", body: "Do not let offline claims affect Bites, Cash, or setup recommendations." },
      { title: "Recheck after updates", body: "If a future update adds offline earnings, add it to updates and economy notes." }
    ],
    mistakes: [
      { title: "Assuming idle rewards", fix: "Mukbang Game is currently documented as active roleplay/recording." },
      { title: "Adding offline ROI", fix: "No numeric offline data is verified." },
      { title: "Using another game as proof", fix: "Only Mukbang Game evidence counts." }
    ],
    faq: [
      { q: "Does Mukbang Game have offline rewards?", a: "No offline reward system is verified." },
      { q: "Can I earn Bites offline?", a: "No source-backed evidence confirms offline Bite earnings." },
      { q: "Where should offline updates be tracked?", a: "Use the updates page if a future patch confirms it." },
      { q: "Should I plan around offline progress?", a: "No. Plan around verified active-session setup choices." }
    ],
    related: [
      { href: "/updates", title: "Updates", description: "Track confirmed changes." },
      { href: "/sources", title: "Sources", description: "Review verification status." },
      { href: "/wiki/gamepasses", title: "Gamepasses", description: "See verified economy signals." }
    ]
  },
  {
    slug: "rebirth-guide",
    title: "How to Check Rebirth Claims",
    action: "Check Rebirth Claims",
    description: "Guide to rebirth or prestige claims and why they are not verified yet.",
    difficulty: "Easy",
    estimatedTime: "2-4 minutes",
    quickAnswer:
      "No rebirth, prestige, reset, or ascension system is verified for Mukbang Game. Keep progression claims tied to Bites, Cash, and passes only when source-backed.",
    requirements: ["Verified mechanic list", "Source boundary labels", "No prestige assumption"],
    steps: [
      { title: "Check the verified mechanics", body: "The current verified loop is mukbang roleplay, camera/chair setup, collab, apartments, seating, Bites, Cash, and gamepasses." },
      { title: "Look for rebirth UI proof", body: "Do not add rebirth requirements without official text or live UI evidence." },
      { title: "Avoid prestige tier advice", body: "No reset optimization, rebirth cost, or progression milestone is verified." },
      { title: "Track changes carefully", body: "If a future update adds rebirths, update the guide, tier list, and money guide together." }
    ],
    mistakes: [
      { title: "Writing a prestige route", fix: "Hold that content until the system exists." },
      { title: "Treating Bites as rebirth currency", fix: "Bites are verified as Bite points, not rebirth cost." },
      { title: "Using another game's progression words", fix: "Use Mukbang Game source terms only." }
    ],
    faq: [
      { q: "Does Mukbang Game have rebirths?", a: "No rebirth system is verified in the current source set." },
      { q: "Are Bites used for rebirth?", a: "No verified source connects Bites to rebirths." },
      { q: "Should the site publish a rebirth guide?", a: "Only as a status page explaining that rebirths are not verified." },
      { q: "Where will rebirth updates appear?", a: "On updates and source pages if future evidence confirms them." }
    ],
    related: [
      { href: "/updates", title: "Updates", description: "Check future patch signals." },
      { href: "/wiki/gamepasses", title: "Gamepasses", description: "Review verified progression signals." },
      { href: "/tier-list", title: "Setup tiers", description: "Use current real rankings." }
    ]
  },
  {
    slug: "routes-guide",
    title: "How to Choose a Mukbang Scene Route",
    action: "Choose a Scene Route",
    description: "Guide to choosing solo ASMR, collab, public apartment, Private Room, Studio Place, or food showcase routes.",
    difficulty: "Medium",
    estimatedTime: "5-10 minutes",
    quickAnswer:
      "Choose solo ASMR for a free starter session, Private Room for privacy, Studio Place for custom backgrounds, and food showcase when paid foods or menu testing matter.",
    requirements: ["Scene goal", "Player count", "Privacy need", "Owned passes"],
    steps: [
      { title: "Choose the session goal", body: "Pick solo ASMR, collab, food showcase, apartment scene, or custom background before comparing setup value." },
      { title: "Set privacy level", body: "Public is fastest, quieter areas reduce noise, and Private Rooms are the paid privacy path." },
      { title: "Check paid features", body: "Studio Place and Private Rooms are source-backed, but their exact filming value still depends on your scene." },
      { title: "Use the planner output", body: "The scene planner turns goal, player count, privacy, and pass ownership into a checklist." }
    ],
    mistakes: [
      { title: "Ranking every setup by price", fix: "Free setup can be best when the goal is quick solo ASMR." },
      { title: "Ignoring player count", fix: "Collab routes need seating and coordination." },
      { title: "Skipping source checks", fix: "Use confidence labels before spending." }
    ],
    faq: [
      { q: "What is the best Mukbang Game route?", a: "Solo ASMR is the safest free starter route; paid routes depend on privacy and background needs." },
      { q: "Is Private Room always best?", a: "No. It helps privacy but free setups may be enough." },
      { q: "Is Studio Place for earning?", a: "It is verified as a custom background area, not an earnings boost." },
      { q: "Where can I compare routes?", a: "Use the tier list and scene planner." }
    ],
    related: [
      { href: "/calculator", title: "Scene planner", description: "Get a route checklist." },
      { href: "/tier-list", title: "Tier list", description: "Compare setup rankings." },
      { href: "/wiki/locations", title: "Locations", description: "Review scene choices." }
    ]
  },
  {
    slug: "speed-guide",
    title: "How to Set Up Faster",
    action: "Set Up Faster",
    description: "Guide to reducing setup time without inventing speed stats or boost mechanics.",
    difficulty: "Easy",
    estimatedTime: "3-7 minutes",
    quickAnswer:
      "There is no verified speed stat. To set up faster, preselect the scene goal, use a known seating path, keep camera and chair checks short, and avoid unverified code or pass assumptions.",
    requirements: ["Scene goal", "Known setup route", "Short checklist"],
    steps: [
      { title: "Pick one goal", body: "Choose solo ASMR, collab, food showcase, or custom background before entering a session." },
      { title: "Use a short checklist", body: "Check seating, camera angle, chair position, food choice, and recording flow." },
      { title: "Avoid unnecessary source hunts", body: "Use the codes and source pages before the session so you do not stop mid-setup." },
      { title: "Keep paid decisions outside the session", body: "Review passes before recording instead of deciding under time pressure." }
    ],
    mistakes: [
      { title: "Looking for speed boosts", fix: "No speed boost or movement stat is verified." },
      { title: "Changing goals mid-session", fix: "Restart the planner if the goal changes." },
      { title: "Testing every reported code", fix: "Only use reported codes as leads, not guaranteed rewards." }
    ],
    faq: [
      { q: "Does Mukbang Game have a speed stat?", a: "No speed stat is verified in the current source set." },
      { q: "What makes setup faster?", a: "A clear scene goal, known location, and short camera/chair checklist." },
      { q: "Should I buy passes to save time?", a: "Only after checking whether the pass matches your setup goal." },
      { q: "Where is the fastest checklist?", a: "Use the scene planner and ASMR setup guide." }
    ],
    related: [
      { href: "/calculator", title: "Scene planner", description: "Use the quick setup checklist." },
      { href: "/guides/asmr-setup", title: "ASMR setup", description: "Prepare a recording flow." },
      { href: "/codes", title: "Codes", description: "Check codes before a session." }
    ]
  }
];

export function getHandbookArticle(slug: string) {
  const article = handbookArticles.find((item) => item.slug === slug);
  if (!article) {
    throw new Error(`Unknown handbook slug: ${slug}`);
  }
  return article;
}

export function handbookMetadata(slug: string): Metadata {
  const article = getHandbookArticle(slug);
  return {
    title: `${article.title} in ${siteConfig.gameName} (June 2026)`,
    description: article.description,
    alternates: { canonical: `${siteConfig.domain}/handbook/${article.slug}` }
  };
}

function HowToJsonLd({ article }: { article: HandbookArticle }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: `${article.title} in ${siteConfig.gameName}`,
          description: article.description,
          totalTime: article.estimatedTime,
          step: article.steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.body
          }))
        })
      }}
    />
  );
}

export function HandbookArticlePage({ slug }: { slug: string }) {
  const article = getHandbookArticle(slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Handbook", href: "/handbook" },
          { name: article.title, href: `/handbook/${article.slug}` }
        ]}
      />
      <FaqJsonLd items={article.faq} />
      <HowToJsonLd article={article} />
      <Breadcrumbs items={[{ label: "Handbook", href: "/handbook" }, { label: article.title, href: `/handbook/${article.slug}` }]} />

      <PageIntro
        eyebrow={`${article.difficulty} - ${article.estimatedTime} - June 2026`}
        title={`${article.title} in ${siteConfig.gameName}`}
        description={article.description}
      />

      <section className="mt-10 content-card">
        <span className="mini-label">Quick answer</span>
        <p className="mt-3 text-lg leading-8 text-white/76">{article.quickAnswer}</p>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        {article.requirements.map((requirement) => (
          <article key={requirement} className="content-card">
            <span className="mini-label">Requirement</span>
            <h2 className="mt-3 text-lg font-bold text-white">{requirement}</h2>
          </article>
        ))}
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Steps" title={`How to ${article.action}`} />
        <ol className="mt-6 grid gap-4">
          {article.steps.map((step, index) => (
            <li key={step.title} className="content-card">
              <span className="tier-badge">{index + 1}</span>
              <h2 className="mt-4 text-xl font-extrabold text-white">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/68">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Common mistakes" title="Avoid these assumptions" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {article.mistakes.map((mistake) => (
            <article key={mistake.title} className="content-card">
              <h2 className="text-lg font-bold text-white">{mistake.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/66">{mistake.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title={`${article.title} FAQ`} />
        <div className="mt-6 grid gap-3">
          {article.faq.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-2 text-white/66">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Related guides" title="Continue with source-aware pages" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {article.related.map((item) => (
            <Link key={item.href} href={item.href} className="content-card">
              <span className="mini-label">Next</span>
              <h2 className="mt-3 text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-white/66">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
