import { Metadata } from "next";
import VideosContent from "@/components/VideosContent";

export const metadata: Metadata = {
  title: "Videos | The Monotheist Prism",
  description:
    "Current events, theology, and modern contradictions through the lens of absolute monotheism.",
};

export default function VideosPage() {
  return <VideosContent />;
}
