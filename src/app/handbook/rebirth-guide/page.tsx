import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("rebirth-guide");

export default function RebirthGuidePage() {
  return <HandbookArticlePage slug="rebirth-guide" />;
}
