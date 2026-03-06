import { Metadata } from "next";
import ArticlesContent from "@/components/ArticlesContent";

export const metadata: Metadata = {
  title: "Articles | The Monotheist Prism",
  description:
    "In-depth analysis, evidence-based reasoning, thought-provoking questions through the prism of absolute monotheism.",
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
