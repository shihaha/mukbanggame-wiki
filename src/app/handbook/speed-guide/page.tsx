import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("speed-guide");

export default function SpeedGuidePage() {
  return <HandbookArticlePage slug="speed-guide" />;
}
