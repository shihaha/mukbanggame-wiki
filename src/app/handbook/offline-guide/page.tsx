import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("offline-guide");

export default function OfflineGuidePage() {
  return <HandbookArticlePage slug="offline-guide" />;
}
