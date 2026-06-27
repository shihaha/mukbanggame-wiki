import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description:
    "Mukbang Game wiki with codes status, Trello and Discord source checks, best setup rankings, ASMR guides, and a Roblox scene planner.",
  valueProposition:
    "Plan solo ASMR, collab, apartment, Private Room, or Studio Place scenes with checked source notes before you spend time recording.",
  shortDisclosure:
    "MukbangGame.wiki is an unofficial fan-made resource. Roblox and the game creator remain the source of record for support, purchases, and moderation.",
  lastUpdated: "2026-06-27",
  freshnessLabel: "codes, source status, and setup planner checked",
  keywords: [
    "Mukbang Game",
    "Mukbang Game Roblox",
    "Mukbang Game codes",
    "Mukbang Game tier list",
    "Mukbang Game Trello",
    "Mukbang Game Discord",
    "Mukbang Game wiki",
    "Mukbang Game ASMR",
    "Mukbang Game best setup",
    "Roblox mukbang ASMR game"
  ],
  navGroups: [
    {
      label: "Planner",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Codes Status", href: "/codes", description: "Verified, reported, and disputed code checks." },
        { label: "Sources", href: "/sources", description: "Where code and update claims are checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Best Setups", href: "/tier-list", description: "Solo, collab, ASMR, and paid setup rankings." },
        { label: "Scene Planner", href: "/calculator", description: "Use the planner as a standalone tool page." }
      ]
    },
    {
      label: "Status",
      href: "/trello",
      items: [
        { label: "Trello / Discord / Wiki", href: "/trello", description: "Official source status with checked dates." },
        { label: "Sources", href: "/sources", description: "Official, community, reported, and disputed source notes." }
      ]
    },
    {
      label: "Guides",
      href: "/guides",
      items: [
        { label: "ASMR Setup", href: "/guides/asmr-setup", description: "Recording checklist and setup choices." },
        { label: "Wiki Hub", href: "/wiki", description: "Food, locations, and gamepass notes." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Check codes" },
  { href: "/tier-list", label: "Compare setups" },
  { href: "/trello", label: "Verify sources" },
  { href: "/guides/asmr-setup", label: "ASMR guide" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Roblox status", value: "Testing", note: "Official title still carries a testing label" },
  { label: "Visits", value: "36M+", note: "Roblox API snapshot on 2026-06-27" },
  { label: "Gamepasses", value: "6", note: "Private Rooms, Studio Place, 2x Bites, 2x Cash, and food passes" },
  { label: "Codes", value: "0 verified", note: "Reported strings stay separated until checked" }
];

export const activeCodes: GameCode[] = [
  { code: "FUKSHEET", reward: "Unknown reward", status: "Needs check", addedDate: "Reported only" },
  { code: "1500LIKES", reward: "Unknown reward", status: "Needs check", addedDate: "Needs source" },
  { code: "FREEHELLOKITTY", reward: "Unknown reward", status: "Needs check", addedDate: "Needs source" },
  { code: "UPDATE2", reward: "Unknown reward", status: "Needs check", addedDate: "Needs source" }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Solo ASMR table setup",
    tier: "S",
    role: "Solo recording",
    reason: "Best starting point when you want a simple recording setup without relying on paid features.",
    confidence: "Early signal",
    bestFor: ["solo", "ASMR", "new players"],
    sourceNote: "ASMR, camera controllers, and chair adjustments are official feature claims.",
    teamNote: "No team-combo route is needed; use collab setup notes for group scenes."
  },
  {
    name: "Private Room collab setup",
    tier: "A",
    role: "Group recording",
    reason: "Useful when privacy matters and the player owns the Private Rooms pass.",
    confidence: "Source-backed",
    bestFor: ["collab", "privacy", "paid setup"],
    sourceNote: "Private Rooms is verified through Roblox game-pass product text.",
    teamNote: "Best treated as a collab setup, not a character team."
  },
  {
    name: "Studio Place background setup",
    tier: "A",
    role: "Custom scene",
    reason: "Best fit when a player wants a cleaner 2D background for mukbang recording.",
    confidence: "Source-backed",
    bestFor: ["custom background", "recording", "paid setup"],
    sourceNote: "Studio Place product text says it grants green baseplate background access.",
    teamNote: "Use with solo or collab setups depending player count."
  },
  {
    name: "Public apartment table setup",
    tier: "B",
    role: "Beginner location",
    reason: "Useful for a first session because it does not depend on paid passes, but privacy and crowd control are weaker.",
    confidence: "Early signal",
    bestFor: ["beginner", "free setup", "location test"],
    sourceNote: "Apartment and seating concepts are verified from the Roblox description; exact best-room labels still need live checking.",
    teamNote: "Works for small collabs, but use Private Room when interruption risk matters."
  },
  {
    name: "Paid food showcase setup",
    tier: "B",
    role: "Food showcase",
    reason: "Seafood Boil and Spicy Ramen passes are verified, but full food value and reward loops need in-game testing.",
    confidence: "Source-backed",
    bestFor: ["food showcase", "paid food", "video idea"],
    sourceNote: "Paid food passes are verified through Roblox game-pass product text.",
    teamNote: "Best as a showcase segment inside a solo or collab recording."
  },
  {
    name: "Bites and Cash farming route",
    tier: "C",
    role: "Progression hold",
    reason: "2x Bites and 2x Cash passes exist, but exact earning rates are not verified enough for a farming ranking.",
    confidence: "Needs check",
    bestFor: ["farming hold", "economy test", "source gap"],
    sourceNote: "Multiplier passes are verified; base Bites and Cash rates still need live testing.",
    teamNote: "No team combo claim should be made until earning loops are measured."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: "Mukbang Scene Planner",
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "Pick solo, collab, food showcase, Private Room, or Studio Place goals and get a setup checklist."
  },
  {
    title: "Best Setup Tier List",
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Compare source-backed and early-signal setups without fake combat rankings."
  },
  {
    title: "Codes Status",
    href: "/codes",
    eyebrow: "Codes",
    description: "See why no active codes are verified and which reported strings still need checking."
  },
  {
    title: "Trello, Discord & Wiki Status",
    href: "/trello",
    eyebrow: "Sources",
    description: "Check which official links are verified and which community sources still need confirmation."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "ASMR setup guide",
    href: "/guides/asmr-setup",
    eyebrow: "Guide",
    description: "Plan a short, clean recording setup using camera, chair, and scene notes."
  },
  {
    title: "Beginner path",
    href: "/guides",
    eyebrow: "Guide",
    description: "Start from official links, check codes, then use the planner before recording."
  },
  {
    title: "Collab setup",
    href: "/tier-list",
    eyebrow: "Guide",
    description: "Use collab and private-room notes when recording with more than one player."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Gamepasses",
    href: "/wiki/gamepasses",
    eyebrow: "Wiki",
    description: "Private Rooms, Studio Place, 2x Bites, 2x Cash, Seafood Boil, and 2x Spicy Ramen."
  },
  {
    title: "Locations and seating",
    href: "/wiki/locations",
    eyebrow: "Wiki",
    description: "Apartments and seating areas are verified features, but exact location names still need checking."
  },
  {
    title: "Food list",
    href: "/wiki/food-list",
    eyebrow: "Wiki",
    description: "Paid food passes are verified; the full food list should stay marked as needs check."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Source of record for the game title, creator, description, and Roblox availability."
  },
  {
    title: "Trello, Discord, and wiki status",
    href: "/trello",
    eyebrow: "Status",
    description: "A checked page for official and unverified source links."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Checked date",
    description: "Shows which claims are official, community reported, disputed, or still unverified."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Source labels stay visible",
    body: "Codes, source links, and setup rankings use checked-date labels so players can see what is verified."
  },
  {
    title: "Setup rankings match the game",
    body: "Mukbang Game is a social ASMR roleplay experience, so rankings focus on scenes and setups."
  },
  {
    title: "Testing status matters",
    body: "The game can change quickly, so pages should keep update notes and avoid final-sounding claims."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "ASMR gameplay vocabulary",
    href: "#",
    eyebrow: "Video signal",
    description: "Recent videos support ASMR and recording topics, but do not replace official source checks."
  },
  {
    title: "Eating everything angle",
    href: "#",
    eyebrow: "Video signal",
    description: "Food-list demand is visible in video titles; exact food names still need in-game checking."
  },
  {
    title: "Collab and viral interest",
    href: "#",
    eyebrow: "Video signal",
    description: "Creator videos show interest in collab scenes and the current player-count surge."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: "What is MukbangGame.wiki?",
      a: "It is an unofficial player reference for Mukbang Game on Roblox, focused on codes status, source checks, setup rankings, and ASMR planning."
    },
    {
      q: "Is this the official Mukbang Game website?",
      a: "No. Use the Roblox game page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: "Does Mukbang Game have active codes?",
      a: "No active official code is verified in the current data. Reported code strings stay marked as Needs check until a trusted source confirms them."
    },
    {
      q: "Why is the tier list about setups?",
      a: "Mukbang Game does not have verified combat units or weapons. The useful ranking is about solo, collab, ASMR, apartment, and paid setup choices."
    }
  ],
  codes: [
    {
      q: "Where do Mukbang Game codes come from?",
      a: "Codes should come from creator-owned Roblox, group, Discord, or update sources when those are verified."
    },
    {
      q: "Why are reported codes marked Needs check?",
      a: "Some strings appear in third-party searches, but they are not verified as active Mukbang Game codes."
    }
  ],
  tierList: [
    {
      q: "How are setups ranked?",
      a: "Setups are ranked by solo usefulness, collab usefulness, ASMR fit, privacy, setup effort, paid-feature dependency, and source confidence."
    }
  ],
  calculator: [
    {
      q: "Is the planner a numeric calculator?",
      a: "No. It is a checklist-style scene planner because exact Bites and Cash rates are not verified yet."
    }
  ]
};
