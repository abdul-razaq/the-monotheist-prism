"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import InvertedPrismSVG from "./InvertedPrismSVG";

/**
 * Hero section for The Monotheist Prism.
 * Layout: inverted prism SVG (animated) + title + tagline + CTAs.
 * Responsive: mobile stacks vertically, SVG scales 300px / 400px / 500px.
 */
export default function PrismHero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#000000] px-4 py-12"
      aria-label="Hero: The Monotheist Prism"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000] to-[#111827]"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        {/* Opening invocation */}
        <motion.blockquote
          className="font-heading mb-6 text-lg font-semibold text-[#D4AF37] sm:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Opening invocation"
        >
          In the name of The Absolute One, The Most Gracious, The Most Merciful
        </motion.blockquote>

        {/* Big prism graphic: rays first, then prism, then white ray on right */}
        <motion.div
          className="mb-6 flex w-full justify-center md:mb-8"
          initial={false}
          animate={{
            scale: [1, 1, 1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            times: [0, 0.5, 3, 4.5, 6],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <InvertedPrismSVG />
        </motion.div>

        {/* Title — Montserrat 700, gold, responsive size */}
        <motion.h1
          className="font-heading mb-4 max-w-2xl text-[2.5rem] font-bold leading-tight tracking-[-0.02em] text-[#D4AF37] md:mb-5 md:text-4xl lg:text-[3.5rem]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          THE MONOTHEIST PRISM
        </motion.h1>

        {/* Tagline — Inter 400, gray */}
        <motion.p
          className="mb-8 max-w-xl text-base leading-relaxed text-[#9CA3AF] md:mb-10 md:text-lg lg:text-[1.25rem] lg:leading-[1.6]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Viewing modern confusion through absolute monotheism
        </motion.p>

        {/* Buttons — Primary: Learn More (/about), Secondary: Watch Latest (/videos) */}
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            href="/about"
            className="rounded-lg bg-[#D4AF37] px-8 py-4 text-center font-semibold text-[#000000] transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-[#FFFFFF] hover:text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#000000]"
            aria-label="Learn more about The Monotheist Prism"
          >
            Learn More
          </Link>
          <Link
            href="/videos"
            className="rounded-lg border-2 border-[#D4AF37] bg-transparent px-8 py-4 text-center font-semibold text-[#D4AF37] transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-[#D4AF37] hover:text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#000000]"
            aria-label="Watch latest videos"
          >
            Watch Latest
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
