import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Monotheist Prism",
  description: "Our mission and what The Monotheist Prism stands for.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Opening invocation */}
      <blockquote className="font-heading mb-16 text-center text-xl font-semibold leading-relaxed text-gold sm:text-2xl">
        In the name of The Absolute One, The Most Gracious, The Most Merciful
      </blockquote>

      <section className="mb-12">
        <h1 className="font-heading mb-6 text-3xl font-bold text-white">
          Our Mission
        </h1>
        <p className="text-gray-300 leading-relaxed">
          The Monotheist Prism exists to clarify the confusion of our age through
          the lens of pure Tawhid—absolute monotheism. In a world of competing
          narratives and ideological noise, we offer a grounded, scripture-based
          perspective that centers the oneness of Allah and the clarity of
          prophetic guidance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-heading mb-6 text-2xl font-bold text-white">
          What is The Monotheist Prism?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          The Monotheist Prism is an Islamic educational brand that analyzes
          current events, cultural trends, and contemporary questions through
          the framework of absolute monotheism. Like light passing through a
          prism separates into clear spectrum, we aim to separate clarity from
          confusion—showing how a consistent commitment to Tawhid illuminates
          modern issues with wisdom and balance.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Our content includes videos, articles, and commentary designed for
          thoughtful seekers who want to understand the world through the
          timeless principles of Islam, without the distortion of partisan
          politics or cultural compromise.
        </p>
      </section>

      <section>
        <p className="text-gray-400">
          May Allah guide us to what is true and protect us from what is false.
        </p>
      </section>
    </div>
  );
}
