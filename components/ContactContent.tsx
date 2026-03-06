"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactCard from "@/components/ContactCard";

const socialLinks = [
  { name: "YouTube", href: "https://youtube.com", icon: "▶" },
  { name: "Twitter", href: "https://twitter.com/MonotheistPrism", icon: "𝕏" },
  { name: "Instagram", href: "https://instagram.com/monotheist.prism", icon: "📷" },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Opening invocation */}
      <motion.blockquote
        className="font-heading mb-12 text-center text-xl font-semibold text-[#D4AF37] sm:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label="Opening invocation"
      >
        In the name of The Absolute One, The Most Gracious, The Most Merciful
      </motion.blockquote>

      <motion.h1
        className="font-heading mb-10 text-3xl font-bold text-white md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Get In Touch
      </motion.h1>

      {/* Contact cards */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <ContactCard icon="✉" label="Email">
            <a
              href="mailto:contact@themonotheistprism.com"
              className="text-[#D4AF37] transition-colors hover:text-white"
            >
              contact@themonotheistprism.com
            </a>
          </ContactCard>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <ContactCard icon="🔗" label="Follow Us">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#D4AF37] transition-colors hover:text-white"
                >
                  <span aria-hidden>{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </ContactCard>
        </motion.div>
      </div>

      {/* Message section */}
      <motion.section
        className="mt-12 rounded-lg border border-[#1F2937] bg-[#111827] p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
      >
        <h2 className="font-heading mb-4 text-xl font-semibold text-white">
          We Welcome Honest Engagement
        </h2>
        <p className="text-[#9CA3AF] leading-relaxed">
          Test our ideas. Challenge our reasoning. Ask hard questions. Offer critiques. Seek truth together. We&apos;re here for thoughtful discourse, not echo chambers.
        </p>
      </motion.section>

      {/* Optional contact form */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="font-heading mb-6 text-xl font-semibold text-white">
          Send a Message
        </h2>
        {submitted ? (
          <div className="rounded-lg border border-[#1F2937] bg-[#111827] p-8 text-center">
            <p className="text-lg font-semibold text-[#D4AF37]">Message sent!</p>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              We&apos;ll get back to you as soon as we can.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg border border-[#1F2937] bg-[#111827] p-6"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                Name <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-[#1F2937] bg-[#000000] px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Email <span className="text-[#D4AF37]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-[#1F2937] bg-[#000000] px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                Message <span className="text-[#D4AF37]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-[#1F2937] bg-[#000000] px-4 py-3 text-white placeholder-[#6B7280] focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#D4AF37] py-3 font-semibold text-[#000000] transition-all duration-300 hover:scale-[1.02] hover:bg-white sm:w-auto sm:px-8"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.section>
    </div>
  );
}
