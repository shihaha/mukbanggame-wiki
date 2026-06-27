import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Mukbang Game",
  slug: "mukbanggame",
  domain: "https://www.mukbanggame.wiki",
  theme: {
    primaryColor: "#f4c542",
    accentColor: "#ff6b6b",
    surfaceColor: "#241b13",
    style: "warm-food-studio"
  },
  currency: {
    name: "Bite points",
    abbr: "Bites"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Weekly checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/74188431054457/Mukbang-Game",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense",
    usesRuntimeConfig: true
  }
};
