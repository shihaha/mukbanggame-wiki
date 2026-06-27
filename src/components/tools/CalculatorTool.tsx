"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, KeyRound, Lock, Sparkles, Users, Video } from "lucide-react";
import { SectionHeader } from "@/components/ui/content";

const goals = [
  { id: "solo-asmr", label: "Solo ASMR", icon: Sparkles },
  { id: "collab", label: "Collab", icon: Users },
  { id: "food-showcase", label: "Food Show", icon: Video },
  { id: "custom-background", label: "Studio", icon: KeyRound }
] as const;

const effortLevels = ["Quick", "Balanced", "Detailed"] as const;
const privacyLevels = ["Public", "Quieter Area", "Private Room"] as const;

type Goal = (typeof goals)[number]["id"];
type Effort = (typeof effortLevels)[number];
type Privacy = (typeof privacyLevels)[number];

type PlannerResult = {
  name: string;
  bestFor: string;
  confidence: "Source-backed" | "Early signal" | "Needs check";
  note: string;
  checklist: string[];
};

function confidenceClass(confidence: PlannerResult["confidence"]) {
  if (confidence === "Source-backed") {
    return "border-emerald-300/35 bg-emerald-300/14 text-emerald-100";
  }
  if (confidence === "Early signal") {
    return "border-yellow-300/35 bg-yellow-300/14 text-yellow-100";
  }
  return "border-orange-300/35 bg-orange-300/14 text-orange-100";
}

export function CalculatorTool() {
  const [goal, setGoal] = useState<Goal>("solo-asmr");
  const [players, setPlayers] = useState(1);
  const [privacy, setPrivacy] = useState<Privacy>("Public");
  const [effort, setEffort] = useState<Effort>("Balanced");
  const [ownsPrivateRooms, setOwnsPrivateRooms] = useState(false);
  const [ownsStudioPlace, setOwnsStudioPlace] = useState(false);

  const result = useMemo<PlannerResult>(() => {
    if (privacy === "Private Room" && ownsPrivateRooms) {
      return {
        name: players > 1 ? "Private Room collab setup" : "Private Room solo setup",
        bestFor: players > 1 ? "small group recording" : "quiet solo recording",
        confidence: "Source-backed",
        note: "Private Rooms is verified from Roblox game-pass product text. Rejoin may be needed after claiming a room.",
        checklist: [
          "Claim the room before inviting other players.",
          "Rejoin if the room claim does not appear.",
          "Pick one player to handle the camera angle.",
          "Use the setup tier list before spending time on a long recording."
        ]
      };
    }

    if (goal === "custom-background" && ownsStudioPlace) {
      return {
        name: "Studio Place background setup",
        bestFor: "custom 2D background scenes",
        confidence: "Source-backed",
        note: "Studio Place is verified from Roblox product text as a green baseplate area for editing mukbang backgrounds in 2D.",
        checklist: [
          "Choose the Studio Place option when you want a cleaner background.",
          "Set the camera before starting the food scene.",
          "Use a short test clip before recording the full mukbang.",
          "Link this setup to your best-scenes checklist."
        ]
      };
    }

    if (goal === "collab" || players > 1) {
      return {
        name: "Collab mukbang setup",
        bestFor: "duo or group roleplay",
        confidence: "Source-backed",
        note: "Collab mukbang is listed in the official Roblox description. Exact best seats still need in-game checking.",
        checklist: [
          "Seat everyone before starting the scene.",
          "Use one camera direction so players do not block each other.",
          effort === "Quick" ? "Pick the easiest open seating area." : "Compare seating and apartment spots before recording.",
          "Check Status if you need creator-owned community links."
        ]
      };
    }

    if (goal === "food-showcase") {
      return {
        name: "Food showcase setup",
        bestFor: "showing paid or unusual foods",
        confidence: "Early signal",
        note: "Seafood Boil and 2x Spicy Ramen are verified as game-pass products, but the full food list still needs checking.",
        checklist: [
          "Start with food items you can verify in-game.",
          "Label paid food clearly if it comes from a pass.",
          "Use a fixed camera angle before eating starts.",
          "Send food-list gaps to the Sources page when you find them."
        ]
      };
    }

    return {
      name: "Solo ASMR table setup",
      bestFor: "first solo recording",
      confidence: "Early signal",
      note: "ASMR, camera controllers, and chair adjustments are official feature claims, but exact controls still need checking.",
      checklist: [
        "Pick a quieter-looking seat or apartment area.",
        "Adjust the chair before choosing the camera angle.",
        "Keep the first recording short while the game is still in testing.",
        "Use the ASMR guide for a longer checklist."
      ]
    };
  }, [effort, goal, ownsPrivateRooms, ownsStudioPlace, players, privacy]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Planner" title="Choose your scene" />

        <div className="mt-5 grid gap-5">
          <div>
            <div className="mb-2 text-sm font-bold text-white">Session goal</div>
            <div className="grid grid-cols-2 gap-2">
              {goals.map((item) => {
                const Icon = item.icon;
                const active = goal === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={active ? "button-primary gap-2" : "button-secondary gap-2"}
                    onClick={() => setGoal(item.id)}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-white">Players</span>
              <input
                type="number"
                min={1}
                max={6}
                value={players}
                onChange={(event) => setPlayers(Math.max(1, Math.min(6, Number(event.target.value) || 1)))}
                className="rounded-lg border border-white/10 bg-[#17120d] px-3 py-3 text-white"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-white">Setup effort</span>
              <select
                value={effort}
                onChange={(event) => setEffort(event.target.value as Effort)}
                className="rounded-lg border border-white/10 bg-[#17120d] px-3 py-3 text-white"
              >
                {effortLevels.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Privacy</span>
            <select
              value={privacy}
              onChange={(event) => setPrivacy(event.target.value as Privacy)}
              className="rounded-lg border border-white/10 bg-[#17120d] px-3 py-3 text-white"
            >
              {privacyLevels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              className={ownsPrivateRooms ? "button-primary gap-2" : "button-secondary gap-2"}
              onClick={() => setOwnsPrivateRooms((value) => !value)}
            >
              <Lock className="h-4 w-4" aria-hidden="true" />
              Private Rooms
            </button>
            <button
              type="button"
              className={ownsStudioPlace ? "button-primary gap-2" : "button-secondary gap-2"}
              onClick={() => setOwnsStudioPlace((value) => !value)}
            >
              <Video className="h-4 w-4" aria-hidden="true" />
              Studio Place
            </button>
          </div>
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Recommendation" title={result.name} />
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-bold text-white">
            Best for {result.bestFor}
          </span>
          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${confidenceClass(result.confidence)}`}>
            {result.confidence}
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-white/68">{result.note}</p>
        <ul className="mt-5 grid gap-3">
          {result.checklist.map((item) => (
            <li key={item} className="flex gap-3 rounded-lg bg-white/[0.045] p-3 text-sm leading-6 text-white/76">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[color:var(--accent)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
