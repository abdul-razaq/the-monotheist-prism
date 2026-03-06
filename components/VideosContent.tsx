"use client";

import { motion } from "framer-motion";
import VideoCard from "@/components/VideoCard";

export default function VideosContent() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Page header */}
      <motion.header
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Videos
        </h1>
        <p className="mt-3 text-lg text-[#9CA3AF]">
          Current events, theology, and modern contradictions through the lens of absolute monotheism
        </p>
      </motion.header>

      {/* Empty state card */}
      <motion.div
        className="mb-12 flex flex-col items-center justify-center rounded-lg border border-[#1F2937] bg-[#111827] py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <span className="mb-4 text-5xl text-[#D4AF37]" aria-hidden>
          ▶
        </span>
        <p className="text-xl font-semibold text-white">
          Coming soon
        </p>
        <p className="mt-2 text-[#9CA3AF]">
          Subscribe on YouTube to be notified when we publish
        </p>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-[#000000] transition-all duration-300 hover:scale-[1.02] hover:bg-white"
        >
          Subscribe on YouTube
        </a>
      </motion.div>

      {/* Placeholder grid - 6 video cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + i * 0.05 }}
          >
            <VideoCard
              title={`Video ${i}`}
              comingSoon
              placeholder
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
