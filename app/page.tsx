"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PrismHero from "@/components/PrismHero";
import VideoCard from "@/components/VideoCard";
import ArticleCard from "@/components/ArticleCard";

export default function HomePage() {
  return (
    <>
      <PrismHero />

      {/* Latest Content: Recent Videos (left) + Recent Articles (right) */}
      <section className="border-t border-[#1F2937] bg-[#000000] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-heading mb-10 text-2xl font-bold text-white sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Latest Content
          </motion.h2>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Recent Videos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="font-heading mb-6 text-xl font-semibold text-[#D4AF37]">
                Recent Videos
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <VideoCard
                    key={i}
                    title={`Video ${i}`}
                    comingSoon
                    placeholder
                  />
                ))}
              </div>
              <Link
                href="/videos"
                className="mt-6 inline-flex items-center gap-2 text-[#D4AF37] transition-colors duration-300 hover:text-white"
              >
                View All Videos
                <span aria-hidden>→</span>
              </Link>
            </motion.div>

            {/* Right: Recent Articles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="font-heading mb-6 text-xl font-semibold text-[#D4AF37]">
                Recent Articles
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <ArticleCard
                    key={i}
                    title={`Article ${i}`}
                    excerpt="In-depth analysis through the prism of absolute monotheism."
                    comingSoon
                    placeholder
                  />
                ))}
              </div>
              <Link
                href="/articles"
                className="mt-6 inline-flex items-center gap-2 text-[#D4AF37] transition-colors duration-300 hover:text-white"
              >
                View All Articles
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#1F2937] bg-gradient-to-b from-[#111827] to-[#000000] py-16 md:py-20">
        <motion.div
          className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-heading text-xl font-semibold text-white md:text-2xl">
            Ready to see the world through the prism of absolute monotheism?
          </p>
          <Link
            href="/videos"
            className="mt-8 inline-block rounded-lg bg-[#D4AF37] px-8 py-4 font-semibold text-[#000000] transition-all duration-300 hover:scale-[1.02] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#000000]"
          >
            Explore Content
          </Link>
        </motion.div>
      </section>
    </>
  );
}
