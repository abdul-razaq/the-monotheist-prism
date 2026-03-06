import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | The Monotheist Prism",
  description:
    "Our mission, what we do, and who The Monotheist Prism is for. Viewing modern confusion through absolute monotheism.",
};

export default function AboutPage() {
  return <AboutContent />;
}
