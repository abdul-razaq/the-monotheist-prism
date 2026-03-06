import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | The Monotheist Prism",
  description:
    "Get in touch. We welcome thoughtful questions, critiques, and engagement.",
};

export default function ContactPage() {
  return <ContactContent />;
}
