import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Scene Planner`,
  description: `Use the ${siteConfig.gameName} Scene Planner to choose solo ASMR, collab, Private Room, Studio Place, and food showcase setups.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Scene Planner", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Scene Planner`}
        description="Choose a practical mukbang recording setup with source labels for solo ASMR, collab, Private Rooms, Studio Place, and food showcase goals."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
    </main>
  );
}
