import type { Metadata } from "next";
import { HandbookArticlePage, handbookMetadata } from "../_content";

export const metadata: Metadata = handbookMetadata("routes-guide");

export default function RoutesGuidePage() {
  return <HandbookArticlePage slug="routes-guide" />;
}
