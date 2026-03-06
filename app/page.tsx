"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PrismHero from "@/components/PrismHero";

export default function HomePage() {
  return (
    <>
      {/* Hero - full viewport height */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-primary px-4">
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-gray-900/50"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <PrismHero />
          </motion.div>
          <motion.h1
            className="font-heading mb-4 text-3xl font-bold tracking-wide text-gold sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            THE MONOTHEIST PRISM
          </motion.h1>
          <motion.p
            className="mb-10 max-w-xl text-base text-gray-400 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Viewing modern confusion through absolute monotheism
          </motion.p>
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/videos"
              className="rounded-md bg-gold px-8 py-3 font-semibold text-primary transition-colors hover:bg-gold-hover"
            >
              Watch Latest
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-gold px-8 py-3 font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest content - 3-column grid placeholder */}
      <section className="border-t border-gray-800 bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-10 text-2xl font-bold text-white sm:text-3xl">
            Latest Content
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="rounded-lg border border-gray-800 bg-gray-900/30 p-6 transition-colors hover:border-gold/50"
              >
                <div className="mb-3 h-40 rounded bg-gray-800" />
                <h3 className="font-heading mb-2 font-semibold text-white">
                  Content placeholder {i}
                </h3>
                <p className="text-sm text-gray-500">
                  Articles and videos will appear here from Sanity CMS.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
