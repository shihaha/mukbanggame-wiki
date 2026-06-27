import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("event-pass-guide");

export default function EventPassGuidePage() {
  return <HandbookArticlePage slug="event-pass-guide" />;
}
