import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("luck-guide");

export default function LuckGuidePage() {
  return <HandbookArticlePage slug="luck-guide" />;
}
