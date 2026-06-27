import Link from "next/link";
import Image from "next/image";
import { heroActions, siteConfig } from "@/data/site";
import { CalculatorTool } from "@/components/tools/CalculatorTool";

export function BrandHero() {
  return (
    <section className="hero-shell">
      <Image src="/game-cover.png" alt="mukbanggame official Roblox cover art" width={768} height={432} priority sizes="100vw" className="hero-bg" />
      <div className="hero-scrim" />
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-end gap-8 px-4 py-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative w-full min-w-0 pb-8">
          <p className="mb-4 block max-w-[21rem] whitespace-normal rounded-full border border-white/20 bg-black/45 px-3 py-1 text-xs font-semibold leading-5 text-[color:var(--accent)] sm:inline-flex sm:max-w-full sm:text-sm">
            Updated {siteConfig.lastUpdated} - {siteConfig.freshnessLabel}
          </p>
          <h1 className="max-w-[22rem] break-words text-4xl font-extrabold leading-tight text-white sm:max-w-4xl sm:text-5xl md:text-6xl">
            {siteConfig.gameName} Scene Planner
          </h1>
          <p className="mt-5 max-w-[21rem] text-lg leading-8 text-white/82 sm:max-w-3xl sm:text-xl md:text-2xl">
            {siteConfig.valueProposition}
          </p>
          <div className="mt-7 grid max-w-[21rem] gap-3 sm:flex sm:max-w-none sm:flex-wrap">
            {heroActions.map((action, index) => (
              <Link key={action.href} href={action.href} className={index === 0 ? "button-primary" : "button-secondary"}>
                {action.label}
              </Link>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-white/58">
            {siteConfig.shortDisclosure}
          </p>
        </div>
        <div className="relative mb-4 min-w-0">
          <CalculatorTool />
        </div>
      </div>
    </section>
  );
}
