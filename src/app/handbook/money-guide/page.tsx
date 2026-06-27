import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("money-guide");

export default function MoneyGuidePage() {
  return <HandbookArticlePage slug="money-guide" />;
}
