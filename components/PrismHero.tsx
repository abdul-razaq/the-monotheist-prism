"use client";

import { motion } from "framer-motion";

export default function PrismHero() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Rainbow rays (left side) */}
      <svg
        className="absolute left-1/4 top-1/2 h-32 w-32 -translate-y-1/2 opacity-60"
        viewBox="0 0 100 100"
        fill="none"
      >
        {["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#0088ff", "#8800ff"].map(
          (color, i) => (
            <line
              key={color}
              x1="80"
              y1="50"
              x2={20 - i * 4}
              y2={30 + i * 6}
              stroke={color}
              strokeWidth="1.5"
              className="opacity-70"
            />
          )
        )}
      </svg>

      {/* Prism - inverted triangle with glow */}
      <motion.svg
        viewBox="0 0 120 100"
        className="relative z-10 h-40 w-48 sm:h-52 sm:w-64"
        initial={{ scale: 0.95, filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))" }}
        animate={{
          scale: [0.95, 1.02, 0.95],
          filter: [
            "drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))",
            "drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))",
            "drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Inverted triangle (prism shape) */}
        <polygon
          points="60,5 115,95 5,95"
          fill="#000000"
          stroke="#D4AF37"
          strokeWidth="2"
        />
      </motion.svg>

      {/* White beam exiting right */}
      <svg
        className="absolute right-1/4 top-1/2 h-24 w-32 -translate-y-1/2 opacity-50"
        viewBox="0 0 80 60"
        fill="none"
      >
        <line
          x1="0"
          y1="30"
          x2="80"
          y2="30"
          stroke="#ffffff"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
