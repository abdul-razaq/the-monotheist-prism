"use client";

import { motion } from "framer-motion";

/**
 * Sequence: 1) Left rays appear one after the other, entering the prism gradually.
 *           2) Prism fades in.  3) White line draws out from the point last.
 */

const RAINBOW_RAYS = [
  { color: "#FF0000", label: "Red" },
  { color: "#FF7F00", label: "Orange" },
  { color: "#FFFF00", label: "Yellow" },
  { color: "#00FF00", label: "Green" },
  { color: "#0000FF", label: "Blue" },
  { color: "#8B00FF", label: "Violet" },
] as const;

// ViewBox: extend left so rays can be long (minX negative), extend right so white ray is long
const VIEWBOX_MIN_X = -180;
const VIEWBOX_MIN_Y = 0;
const VIEWBOX_WIDTH = 900;
const VIEWBOX_HEIGHT = 320;

const PRISM_LEFT_X = 120;
const PRISM_LEFT_TOP_Y = 60;
const PRISM_LEFT_BOTTOM_Y = 260;
const PRISM_RIGHT_POINT_X = 320;
const PRISM_RIGHT_POINT_Y = 160;

// Ray origin X: far left so rays are LONG (240 units from -120 to 120)
const RAY_ORIGIN_X = -120;

// Each ray: [originY, targetY on prism left face] — different angles
const RAY_ANGLES: Array<[number, number]> = [
  [30, 68],
  [65, 98],
  [100, 128],
  [140, 168],
  [185, 212],
  [270, 242],
];

// Stroke size: same for rainbow and white
const RAY_STROKE_WIDTH = 6;

// Left rays: one after the other, each draws in then next starts (gradual entry into prism)
const RAY_DRAW_DURATION = 0.5;
const RAY_DELAYS = [0, 0.45, 0.9, 1.35, 1.8, 2.25]; // sequential

function getRainbowPath(i: number): string {
  const [originY, targetY] = RAY_ANGLES[i];
  return `M ${RAY_ORIGIN_X} ${originY} L ${PRISM_LEFT_X} ${targetY}`;
}

// White ray: from prism point to far right (draws out from point last)
const WHITE_BEAM_END_X = VIEWBOX_MIN_X + VIEWBOX_WIDTH - 40;
const whiteBeamPath = `M ${PRISM_RIGHT_POINT_X} ${PRISM_RIGHT_POINT_Y} L ${WHITE_BEAM_END_X} ${PRISM_RIGHT_POINT_Y}`;

// Timing: prism after last ray has entered; white ray after prism
const PRISM_DELAY = 2.85;
const PRISM_DURATION = 0.5;
const WHITE_RAY_DELAY = 3.45;
const WHITE_RAY_DURATION = 0.9;

export default function InvertedPrismSVG() {
  return (
    <motion.svg
      viewBox={`${VIEWBOX_MIN_X} ${VIEWBOX_MIN_Y} ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      className="h-auto w-full min-w-[300px] max-w-[380px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[600px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Prism: rainbow rays enter left, white light exits right"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0, delayChildren: 0 },
        },
      }}
    >
      {/* 1. RAINBOW RAYS — long length, different angles, pathLength draw-in */}
      <g strokeLinecap="round">
        {RAINBOW_RAYS.map((ray, i) => (
          <motion.path
            key={ray.label}
            d={getRainbowPath(i)}
            stroke={ray.color}
            strokeWidth={RAY_STROKE_WIDTH}
            variants={{
              hidden: { pathLength: 0, opacity: 1 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: {
                    duration: RAY_DRAW_DURATION,
                    ease: "easeOut",
                    delay: RAY_DELAYS[i],
                  },
                },
              },
            }}
          />
        ))}
      </g>

      {/* 2. PRISM — fades in after rays */}
      <motion.polygon
        points={`${PRISM_LEFT_X},${PRISM_LEFT_TOP_Y} ${PRISM_LEFT_X},${PRISM_LEFT_BOTTOM_Y} ${PRISM_RIGHT_POINT_X},${PRISM_RIGHT_POINT_Y}`}
        fill="rgba(15,15,15,0.5)"
        stroke="#D4AF37"
        strokeWidth={4}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: PRISM_DELAY, duration: PRISM_DURATION, ease: "easeOut" },
          },
        }}
      />

      {/* 3. WHITE RAY — draws out FROM THE POINT last (pathLength so it grows from prism) */}
      <motion.path
        d={whiteBeamPath}
        stroke="#FFFFFF"
        strokeWidth={RAY_STROKE_WIDTH}
        strokeLinecap="round"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 1 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay: WHITE_RAY_DELAY, duration: WHITE_RAY_DURATION, ease: "easeOut" },
            },
          },
        }}
      />
    </motion.svg>
  );
}
