import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("beginners-guide");

export default function BeginnersGuidePage() {
  return <HandbookArticlePage slug="beginners-guide" />;
}
