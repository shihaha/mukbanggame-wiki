"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 text-sm font-semibold text-white transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
      aria-label={`Copy ${code}`}
    >
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
