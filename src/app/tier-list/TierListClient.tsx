"use client";

import { useMemo, useState } from "react";
import { tierPreview } from "@/data/site";

const filters = [
  { label: "All setups", value: "all" },
  { label: "Solo", value: "solo" },
  { label: "Collab", value: "collab" },
  { label: "Paid", value: "paid" },
  { label: "Needs check", value: "needs-check" }
] as const;

export function TierListClient() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["value"]>("all");

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") {
      return tierPreview;
    }

    return tierPreview.filter((item) => {
      const haystack = [
        item.name,
        item.role,
        item.reason,
        item.confidence ?? "",
        item.sourceNote ?? "",
        item.teamNote ?? "",
        ...(item.bestFor ?? [])
      ]
        .join(" ")
        .toLowerCase();

      if (activeFilter === "needs-check") {
        return haystack.includes("needs check") || haystack.includes("source gap");
      }

      return haystack.includes(activeFilter);
    });
  }, [activeFilter]);

  return (
    <section className="mt-10">
      <div className="flex flex-wrap gap-2" aria-label="Tier filter">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
            className={activeFilter === filter.value ? "button-primary" : "button-secondary"}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4">
        {visibleItems.map((item) => (
          <article key={item.name} className="content-card">
            <div className="flex flex-wrap items-center gap-4">
              <span className="tier-badge">{item.tier}</span>
              <div>
                <h2 className="text-2xl font-extrabold text-white">{item.name}</h2>
                <p className="mt-1 text-sm text-white/50">{item.role}</p>
              </div>
              {item.confidence ? <span className="status-pill">{item.confidence}</span> : null}
            </div>

            {item.bestFor?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.bestFor.map((label) => (
                  <span key={label} className="mini-label">
                    {label}
                  </span>
                ))}
              </div>
            ) : null}

            <p className="mt-4 max-w-4xl text-white/70">{item.reason}</p>
            {item.teamNote ? <p className="mt-3 text-sm text-white/62">Team combo handling: {item.teamNote}</p> : null}
            {item.sourceNote ? <p className="mt-2 text-xs uppercase tracking-wide text-white/46">Source check: {item.sourceNote}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
