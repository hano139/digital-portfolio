"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import NavBar from "@/components/NavBar";
import DeskScene from "@/components/DeskScene";

/* ─── Animation Helper ─── */
function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-8 md:px-16 lg:px-56">
      <div className="w-full max-w-6xl">
        {/* ── Main row: Photo + Text, aligned at bottom ── */}
        <div className="flex flex-col md:flex-row items-end gap-40 lg:gap-64">
          {/* Left: Photo + Frame + Slogan */}
          <div className="relative shrink-0">
            <FadeIn>
              <div className="relative w-[280px] md:w-[320px] lg:w-[360px]">
                {/* Saigon frame - offset behind, tilted */}
                <div
                  className="absolute z-0 w-[105%] h-[105%] overflow-hidden opacity-35"
                  style={{
                    top: "-16px",
                    left: "-20px",
                    transform: "rotate(-4deg)",
                  }}
                >
                  <Image
                    src="/about/saigon-frame.jpg"
                    alt="Ho Chi Minh City skyline"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Profile photo - 4:5 ratio */}
                <div className="relative z-10 w-full aspect-[3/5] overflow-hidden shadow-lg">
                  <Image
                    src="/about/profile.jpg"
                    alt="O Gia Han"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

              </div>
            </FadeIn>

            {/* Slogan - below left of photo, tilted */}
            <FadeIn delay={0.4}>
              <p
                className="mt-6 text-xl md:text-2xl text-[#2a2420] -rotate-3 origin-left"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Vibrant Soul,
                <br />
                Mindful Observer
              </p>
            </FadeIn>
          </div>

        {/* Right: Description + Signature */}
        <div className="flex flex-col justify-end flex-1 pb-0">
          <FadeIn delay={0.2}>
            <p
              className="text-sm md:text-base leading-[1.85] text-[#2a2420] text-justify"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              H&acirc;n bridges the gap between complex, hidden market data and
              actionable product strategy. I solve core business challenges by
              uncovering the human insights and market needs that internal data
              alone might miss.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p
              className="mt-5 text-sm md:text-base leading-[1.85] text-[#2a2420] text-justify"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              My expertise lies in full-stack research and product advisory —
              from providing the comprehensive lens of macro, competitive
              landscape, to the hands-on precision of UI/UX testing and funnel
              optimization. I transform raw insights into executive-ready
              strategies that don&rsquo;t just inform, but actively drive
              acquisition and retention.
            </p>
          </FadeIn>

          {/* Signature — no divider line, just spacing */}
          <FadeIn delay={0.5}>
            <div className="mt-10 -ml-2">
              <Image
                src="/about/signature.png"
                alt="O Gia Han signature"
                width={130}
                height={48}
                className="opacity-80"
                unoptimized
              />
            </div>
          </FadeIn>
        </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SVG Illustrations (gold palette) ─── */
function CompassIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <circle cx="32" cy="32" r="24" stroke={color} />
      <circle cx="32" cy="32" r="4" stroke={color} fill={color} fillOpacity="0.15" />
      <path d="M32 12v6M32 46v6M12 32h6M46 32h6" stroke={color} />
      <path d="M28 28l-8-12 12 8M36 36l8 12-12-8" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.25" />
    </svg>
  );
}

function EvalIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <circle cx="26" cy="26" r="14" stroke={color} />
      <path d="M36 36l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 24h12M20 30h8" stroke={color} strokeLinecap="round" />
    </svg>
  );
}

function MindMapIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <circle cx="32" cy="32" r="6" stroke={color} fill={color} fillOpacity="0.2" />
      <circle cx="14" cy="16" r="4" stroke={color} fill={color} fillOpacity="0.1" />
      <circle cx="50" cy="14" r="4" stroke={color} fill={color} fillOpacity="0.1" />
      <circle cx="12" cy="48" r="4" stroke={color} fill={color} fillOpacity="0.1" />
      <circle cx="52" cy="46" r="4" stroke={color} fill={color} fillOpacity="0.1" />
      <circle cx="32" cy="54" r="4" stroke={color} fill={color} fillOpacity="0.1" />
      <circle cx="52" cy="28" r="3" stroke={color} fill={color} fillOpacity="0.1" />
      <path d="M28 28l-10-8M36 28l10-10M28 36l-12 8M36 36l12 6M32 38v12M38 30l11 0" stroke={color} />
    </svg>
  );
}

function KanbanIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <rect x="8" y="12" width="48" height="40" rx="2" stroke={color} />
      <path d="M24 12v40M40 12v40" stroke={color} />
      <rect x="12" y="18" width="8" height="6" rx="1" stroke={color} fill={color} fillOpacity="0.2" />
      <rect x="12" y="28" width="8" height="6" rx="1" stroke={color} fill={color} fillOpacity="0.12" />
      <rect x="28" y="18" width="8" height="6" rx="1" stroke={color} fill={color} fillOpacity="0.2" />
      <rect x="28" y="28" width="8" height="6" rx="1" stroke={color} fill={color} fillOpacity="0.12" />
      <rect x="28" y="38" width="8" height="6" rx="1" stroke={color} fill={color} fillOpacity="0.08" />
      <rect x="44" y="18" width="8" height="6" rx="1" stroke={color} fill={color} fillOpacity="0.2" />
    </svg>
  );
}

function ChartIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <path d="M10 50h44" stroke={color} strokeLinecap="round" />
      <path d="M10 50V14" stroke={color} strokeLinecap="round" />
      <path d="M16 42l10-8 8 4 12-18" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="20" r="3" stroke={color} fill={color} fillOpacity="0.25" />
    </svg>
  );
}

function CodeIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <path d="M22 20l-12 12 12 12" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 20l12 12-12 12" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 14l-8 36" stroke={color} strokeLinecap="round" />
      <path d="M46 10l2-2M50 16l2-2" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function AIIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <polygon points="32,8 52,20 52,44 32,56 12,44 12,20" stroke={color} fill={color} fillOpacity="0.06" />
      <circle cx="32" cy="32" r="8" stroke={color} fill={color} fillOpacity="0.12" />
      <circle cx="32" cy="32" r="3" stroke={color} fill={color} fillOpacity="0.25" />
      <path d="M32 24v-8M32 40v8M24.5 28l-7-4M39.5 36l7 4M24.5 36l-7 4M39.5 28l7-4" stroke={color} />
    </svg>
  );
}

function DataIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" strokeWidth="1.5">
      <ellipse cx="24" cy="18" rx="14" ry="6" stroke={color} fill={color} fillOpacity="0.1" />
      <path d="M10 18v12c0 3.3 6.3 6 14 6s14-2.7 14-6V18" stroke={color} />
      <path d="M10 24c0 3.3 6.3 6 14 6s14-2.7 14-6" stroke={color} />
      <path d="M40 32l10-8 10 8M42 34v12h16V34" stroke={color} strokeLinejoin="round" />
      <path d="M48 46v-6h4v6" stroke={color} />
    </svg>
  );
}

const skills = [
  { name: "Strategy Advisory", Icon: CompassIcon, color: "#B38600", bg: "#FFF8E0" },
  { name: "Product Evaluation", Icon: EvalIcon, color: "#B38600", bg: "#FFF8E0" },
  { name: "Market Research", Icon: MindMapIcon, color: "#B38600", bg: "#FFF8E0" },
  { name: "Project Management", Icon: KanbanIcon, color: "#B38600", bg: "#FFF8E0" },
  { name: "Campaign Evaluation", Icon: ChartIcon, color: "#B38600", bg: "#FFF8E0" },
  { name: "Vibe Coding", Icon: CodeIcon, color: "#B38600", bg: "#FFF8E0" },
  { name: "AI Workflows", Icon: AIIcon, color: "#B38600", bg: "#FFF8E0" },
  { name: "Data Query & Analytics", Icon: DataIcon, color: "#B38600", bg: "#FFF8E0" },
];

/* Cloud SVG components - different shapes */
function Cloud1({ size = 80, opacity = 0.25 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 120 60" fill="none">
      <path d="M 5 48 Q 5 44, 15 42 Q 18 32, 32 28 Q 38 18, 55 15 Q 65 8, 75 15 Q 85 10, 95 18 Q 105 15, 112 26 Q 118 32, 115 42 Q 118 46, 115 48 Z" stroke="#5C3A20" strokeWidth="2" fill="#5C3A20" fillOpacity={opacity * 0.4} strokeOpacity={opacity} />
    </svg>
  );
}
function Cloud2({ size = 80, opacity = 0.25 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size * 0.45} viewBox="0 0 100 45" fill="none">
      <path d="M 3 40 Q 3 36, 12 34 Q 15 26, 28 24 Q 32 14, 50 12 Q 62 8, 72 14 Q 82 12, 90 22 Q 97 28, 97 36 Q 98 39, 97 40 Z" stroke="#5C3A20" strokeWidth="2" fill="#5C3A20" fillOpacity={opacity * 0.3} strokeOpacity={opacity} />
    </svg>
  );
}
function Cloud3({ size = 80, opacity = 0.25 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 130 72" fill="none">
      <path d="M 5 62 Q 5 56, 18 52 Q 22 40, 38 36 Q 42 22, 58 18 Q 68 10, 80 18 Q 88 14, 98 22 Q 108 18, 115 28 Q 125 34, 122 48 Q 126 55, 122 58 Q 128 62, 125 62 Z" stroke="#5C3A20" strokeWidth="2" fill="#5C3A20" fillOpacity={opacity * 0.5} strokeOpacity={opacity} />
      <path d="M 42 36 Q 48 30, 58 28" stroke="#5C3A20" strokeWidth="1" fill="none" strokeOpacity={opacity * 0.5} />
    </svg>
  );
}
function Cloud4({ size = 80, opacity = 0.25 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 90 36" fill="none">
      <path d="M 3 32 Q 3 28, 15 26 Q 20 18, 35 16 Q 42 10, 52 16 Q 60 14, 68 20 Q 78 18, 85 26 Q 88 30, 85 32 Z" stroke="#5C3A20" strokeWidth="2" fill="#5C3A20" fillOpacity={opacity * 0.35} strokeOpacity={opacity} />
    </svg>
  );
}

const CloudComponents = [Cloud1, Cloud2, Cloud3, Cloud4];

/* Floating skill positions - spread across viewport */
const floatConfigs = [
  { x: 3, y: 15, dx: 15, dy: 8, dur: 12, delay: 0 },
  { x: 15, y: 60, dx: -10, dy: 10, dur: 14, delay: 1.5 },
  { x: 28, y: 28, dx: 12, dy: -8, dur: 11, delay: 0.8 },
  { x: 42, y: 62, dx: -10, dy: 7, dur: 13, delay: 2.2 },
  { x: 55, y: 20, dx: 12, dy: 10, dur: 12.5, delay: 0.5 },
  { x: 68, y: 58, dx: -12, dy: -6, dur: 14.5, delay: 1.8 },
  { x: 5, y: 42, dx: 10, dy: -9, dur: 11.5, delay: 3 },
  { x: 55, y: 45, dx: -8, dy: 8, dur: 13.5, delay: 2.5 },
];

/* Cloud positions - varied sizes, spread out, more movement */
const cloudConfigs = [
  { x: 2, y: 2, size: 120, dx: 40, dy: 6, dur: 16, delay: 0, opacity: 0.55, type: 2 },
  { x: 15, y: 12, size: 55, dx: -30, dy: -4, dur: 20, delay: 3, opacity: 0.25, type: 3 },
  { x: 28, y: 0, size: 95, dx: 35, dy: 5, dur: 18, delay: 1.5, opacity: 0.4, type: 0 },
  { x: 42, y: 8, size: 45, dx: -25, dy: -3, dur: 22, delay: 5, opacity: 0.2, type: 1 },
  { x: 55, y: 3, size: 110, dx: 30, dy: 4, dur: 17, delay: 2, opacity: 0.45, type: 2 },
  { x: 68, y: 10, size: 65, dx: -35, dy: -5, dur: 19, delay: 4, opacity: 0.3, type: 0 },
  { x: 80, y: 1, size: 90, dx: 25, dy: 3, dur: 21, delay: 1, opacity: 0.5, type: 3 },
  { x: 92, y: 7, size: 50, dx: -28, dy: -4, dur: 23, delay: 3.5, opacity: 0.2, type: 1 },
];

function ExpertiseSection() {
  return (
    <section className="flex flex-col items-center overflow-hidden py-20">
      <div className="w-full" style={{ maxWidth: "1180px" }}>
        <FadeIn className="mb-8">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#5C3A20" }} />
            <span
              className="text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-sans)", color: "#5C3A20" }}
            >
              Expertise
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Floating skills area */}
      <div className="relative w-full overflow-hidden" style={{ maxWidth: "1180px", height: "350px" }}>
        {/* Floating clouds - varied shapes */}
        {cloudConfigs.map((cc, i) => {
          const CloudComp = CloudComponents[cc.type];
          return (
            <motion.div
              key={`cloud-${i}`}
              className="absolute pointer-events-none"
              style={{ left: `${cc.x}%`, top: `${cc.y}%` }}
              animate={{
                x: [0, cc.dx, -cc.dx * 0.3, 0],
                y: [0, cc.dy, -cc.dy * 0.5, 0],
              }}
              transition={{ duration: cc.dur, repeat: Infinity, ease: "easeInOut", delay: cc.delay }}
            >
              <CloudComp size={cc.size} opacity={cc.opacity} />
            </motion.div>
          );
        })}

        {/* Floating skills */}
        {skills.map((skill, i) => {
          const fc = floatConfigs[i];
          return (
            <motion.div
              key={skill.name}
              className="absolute flex items-center gap-2 cursor-default"
              style={{ left: `${fc.x}%`, top: `${fc.y}%` }}
              animate={{
                x: [0, fc.dx, -fc.dx * 0.5, 0],
                y: [0, fc.dy, -fc.dy * 0.6, 0],
              }}
              transition={{
                duration: fc.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: fc.delay,
              }}
            >
              <skill.Icon color={skill.color} />
              <span
                className="text-sm whitespace-nowrap"
                style={{ fontFamily: "var(--font-sans)", color: "#2a2420" }}
              >
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Scroll Line ─── */
/* ─── Page ─── */
export default function About() {
  const [sunsetMode, setSunsetMode] = useState(false);

  return (
    <main className="relative" style={{ backgroundColor: sunsetMode ? "#E8DCCF" : "#FFFFFF", transition: "background-color 0.6s ease" }}>
      <NavBar />
      <HeroSection />
      <ExpertiseSection />
      <DeskScene sunsetMode={sunsetMode} setSunsetMode={setSunsetMode} />
    </main>
  );
}
