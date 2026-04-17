"use client";

import { useState } from "react";
import Image from "next/image";

const INK = "#5C3A20";
const HOVER = "#C4724E";
const PAPER = "#FFFFFF";

export default function DeskScene({ sunsetMode, setSunsetMode }: { sunsetMode: boolean; setSunsetMode: (v: boolean) => void }) {
  const [hov, setHov] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [hovBadge, setHovBadge] = useState<number | null>(null);

  const texts = [
    "Growing up in the vibrant Ho Chi Minh City taught me to move fast,",
    "yet research taught me the power of an observant pause,",
    "I use that energy to drive business forward, guided by user insights I uncover beneath the surface.",
    "Let's have a chat.\nHere is my email:\nogiahan88@gmail.com",
  ];

  const skillNames = [
    "Strategy Advisory", "Product Evaluation", "Market Research", "Project Management",
    "Campaign Evaluation", "Vibe Coding", "AI Workflows", "Data Query & Analytics",
  ];

  const c = (id: string) => hov === id ? HOVER : INK;

  return (
    <section className="pt-12 flex flex-col items-center relative overflow-hidden">
      <div className="relative" style={{ fontFamily: "var(--font-sans)", width: "1180px" }}>

        {/* Header */}
        <div className="mb-8 flex items-center gap-3 relative" style={{ marginTop: "200px", zIndex: 5 }}>
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: INK }} />
          <span className="text-sm uppercase tracking-widest" style={{ fontFamily: "var(--font-sans)", color: INK }}>
            My Workspace. Get to know more about me.
          </span>
        </div>

        {/* Main Illustration Container */}
        <div className="relative" style={{ width: "1180px", height: "700px", marginTop: "-80px" }}>

          {/* ═══ LADDER SHELF (Left of plant) ═══ */}
          <svg className="absolute" style={{ left: "-40px", top: "250px", width: "130px", height: "450px" }} viewBox="0 0 130 450" fill="none">
            {/* Back legs (for depth) */}
            <line x1="30" y1="10" x2="15" y2="440" stroke={INK} strokeWidth="2" opacity="0.4" />
            <line x1="100" y1="10" x2="115" y2="440" stroke={INK} strokeWidth="2" opacity="0.4" />
            {/* Front legs */}
            <line x1="25" y1="10" x2="10" y2="440" stroke={INK} strokeWidth="2.5" />
            <line x1="105" y1="10" x2="120" y2="440" stroke={INK} strokeWidth="2.5" />

            {/* Shelf 1 (top) - sits on legs, no gap */}
            {/* Calculate x positions at y=60: left leg at ~23, right leg at ~107 */}
            <rect x="23" y="58" width="84" height="7" fill="#C8A96E" stroke={INK} strokeWidth="1.5" />
            <rect x="25" y="65" width="80" height="3" fill={INK} opacity="0.12" />
            {/* Camera image placeholder - rendered outside SVG */}

            {/* Shelf 2 - Hat - legs at y=170: left ~19, right ~112 */}
            <rect x="19" y="168" width="93" height="7" fill="#C8A96E" stroke={INK} strokeWidth="1.5" />
            <rect x="21" y="175" width="89" height="3" fill={INK} opacity="0.12" />
            {/* Hat image placeholder - rendered outside SVG */}

            {/* Shelf 3 - Coffee & Cocoa bags - legs at y=290: left ~15, right ~117 */}
            <rect x="15" y="288" width="102" height="7" fill="#C8A96E" stroke={INK} strokeWidth="1.5" />
            <rect x="17" y="295" width="98" height="3" fill={INK} opacity="0.12" />
            {/* Coffee & Cocoa - rendered outside SVG */}

            {/* Shelf 4 (bottom) - Empty - legs at y=400: left ~12, right ~121 */}
            <rect x="12" y="398" width="109" height="7" fill="#C8A96E" stroke={INK} strokeWidth="1.5" />
            <rect x="14" y="405" width="105" height="3" fill={INK} opacity="0.12" />
          </svg>

          {/* ═══ Camera on ladder shelf 1 (shelf top at 308px) ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "-5px", top: "268px", width: "60px", height: "40px" }}
            onMouseEnter={() => setHov("cam")}
            onMouseLeave={() => setHov(null)}
          >
            {hov === "cam" && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-20 text-center whitespace-nowrap z-50 rounded-md" style={{ backgroundColor: INK, padding: "14px 16px" }}>
                <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>Capture random moments</p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK }} />
              </div>
            )}
            <Image src="/about/camera.png" alt="Camera" fill className="object-contain" unoptimized />
          </div>

          {/* ═══ Hat on ladder shelf 2 (shelf top at 418px) ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "-45px", top: "340px", width: "140px", height: "110px" }}
            onMouseEnter={() => setHov("hat")}
            onMouseLeave={() => setHov(null)}
          >
            {hov === "hat" && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 text-center whitespace-nowrap z-50 rounded-md" style={{ backgroundColor: INK, padding: "14px 16px" }}>
                <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>Favorite travel places:</p>
                <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>mountains and beaches</p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK }} />
              </div>
            )}
            <Image src="/about/hat.png" alt="Hat" fill className="object-contain" unoptimized />
          </div>

          {/* ═══ Coffee & Cocoa bags on ladder shelf 3 (shelf top at 538px) ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "-22px", top: "453px", width: "100px", height: "90px" }}
            onMouseEnter={() => setHov("coffee")}
            onMouseLeave={() => setHov(null)}
          >
            {hov === "coffee" && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 text-center whitespace-nowrap z-50 rounded-md" style={{ backgroundColor: INK, padding: "14px 16px" }}>
                <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>Chocolate & coffee lover</p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK }} />
              </div>
            )}
            {/* Coffee bag (behind) */}
            <div className="absolute" style={{ left: "12px", top: "33px", width: "48px", height: "62px", zIndex: 1 }}>
              <Image src="/about/coffee-bag.png" alt="Coffee" fill className="object-contain" unoptimized />
            </div>
            {/* Cocoa bag (in front, overlapping) */}
            <div className="absolute" style={{ left: "28px", top: "25px", width: "70px", height: "90px", zIndex: 2 }}>
              <Image src="/about/cocoa-bag.png" alt="Cocoa" fill className="object-contain" unoptimized />
            </div>
          </div>

          {/* ═══ PLANT (Left-center) ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "44px", top: "355px", width: "200px", height: "350px" }}
            onMouseEnter={() => setHov("plant")}
            onMouseLeave={() => setHov(null)}
          >
            {hov === "plant" && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 text-center whitespace-nowrap z-50 rounded-md" style={{ backgroundColor: INK, padding: "14px 16px" }}>
                <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>Trees: the world is</p>
                <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>better with me.</p>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK }} />
              </div>
            )}
            <svg className="w-full h-full" viewBox="0 0 200 350" fill="none">
              <path d="M60 280 L65 340 L135 340 L140 280 Z" stroke={c("plant")} strokeWidth="2" />
              <rect x="55" y="270" width="90" height="15" stroke={c("plant")} strokeWidth="2" />
              <circle cx="80" cy="285" r="6" fill={c("plant")} />
              <circle cx="100" cy="288" r="8" fill={c("plant")} />
              <circle cx="120" cy="285" r="5" fill={c("plant")} />
              <path d="M100 270 L100 180" stroke={c("plant")} strokeWidth="2" />
              {/* Left leaves */}
              <path d="M98 260 Q60 250 55 220 Q70 225 98 240" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M97 230 Q55 220 45 185 Q65 195 97 215" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M96 200 Q50 185 40 145 Q60 160 96 185" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M95 170 Q55 150 50 110 Q70 130 95 155" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M95 140 Q60 115 60 75 Q80 100 95 125" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M96 110 Q70 80 75 45 Q90 75 96 95" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              {/* Right leaves */}
              <path d="M102 255 Q140 245 150 215 Q130 225 102 240" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M103 225 Q145 210 155 175 Q135 190 103 210" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M104 195 Q150 175 160 135 Q140 155 104 180" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M105 165 Q150 140 155 100 Q135 125 105 150" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M105 135 Q145 105 145 65 Q125 95 105 120" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M104 105 Q135 70 130 35 Q115 65 104 90" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              {/* Top leaves */}
              <path d="M100 100 Q100 60 85 30 Q95 55 100 85" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
              <path d="M100 100 Q100 55 115 25 Q105 50 100 85" fill={c("plant")} stroke={c("plant")} strokeWidth="1" />
            </svg>
          </div>

          {/* ═══ CERTIFICATE FRAME ═══ */}
          <div
            className="absolute cursor-pointer group"
            style={{ left: "244px", top: "130px", width: "150px", height: "140px" }}
            onMouseEnter={() => setHov("cert")}
            onMouseLeave={() => setHov(null)}
          >
            {/* Tooltip */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-8 text-center whitespace-nowrap z-50 rounded-md transition-all duration-300 ${hov === "cert" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{ backgroundColor: INK, padding: "14px 16px", pointerEvents: "none" }}>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 600, marginBottom: "2px" }}>Education</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 400 }}>Bachelor of Digital Marketing</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 400 }}>RMIT University</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 500 }}>GPA: 3.6/4.0</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK, padding: "14px 16px" }} />
            </div>

            {/* Frame with image inside */}
            <svg width="150" height="140" viewBox="0 0 150 140" fill="none" className="absolute inset-0 z-10 pointer-events-none">
              <rect x="5" y="20" width="140" height="110" stroke={c("cert")} strokeWidth="2.5" fill="none" />
              <rect x="11" y="26" width="128" height="98" stroke={c("cert")} strokeWidth="1.5" fill="none" />
            </svg>
            <div className="absolute overflow-hidden" style={{ left: "11px", top: "26px", width: "128px", height: "98px" }}>
              <Image src="/about/grad-hat.png" alt="Graduation Hat" fill className="object-cover" unoptimized />
            </div>
          </div>

          {/* ═══ EXPERTISE SHELF ═══ */}
          <div
            className="absolute"
            style={{ left: "224px", top: "270px", width: "200px", height: "230px" }}
          >
            {/* Badge tooltip */}
            {hovBadge !== null && (() => {
              const bx = 12 + (hovBadge < 4 ? hovBadge : hovBadge - 4) * 46;
              const w = hovBadge < 4 ? [35, 33, 36, 34][hovBadge] : [36, 34, 35, 33][hovBadge - 4];
              const shelfY = hovBadge < 4 ? 100 : 210;
              const h = hovBadge < 4 ? [70, 65, 72, 68][hovBadge] : [72, 66, 78, 70][hovBadge - 4];
              return (
                <div className="absolute text-center whitespace-nowrap z-50 rounded-md" style={{ left: `${bx + w / 2}px`, top: `${shelfY - h - 50}px`, transform: "translateX(-50%)", backgroundColor: INK, padding: "14px 16px" }}>
                  <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>{skillNames[hovBadge]}</p>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK, padding: "14px 16px" }} />
                </div>
              );
            })()}

            <svg width="200" height="230" viewBox="0 0 200 230" fill="none">
              {/* Wood plaque title */}
              <rect x="35" y="0" width="130" height="22" rx="2" fill="#C8A96E" stroke={c("board")} strokeWidth="2" />
              <rect x="38" y="3" width="124" height="16" rx="1" fill="none" stroke={INK} strokeWidth="0.8" opacity="0.3" />
              <text x="100" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill={INK} style={{ fontFamily: "var(--font-sans)" }} letterSpacing="2">EXPERTISE</text>

              {/* ── Shelf 1 ── */}
              {/* Books on shelf 1 */}
              {[0, 1, 2, 3].map(i => {
                const bx = 12 + i * 46;
                const bc = hovBadge === i ? HOVER : c("board");
                const heights = [70, 65, 72, 68];
                const widths = [35, 33, 36, 34];
                const fills = ["#FFF3CC", "#FFE699", "#FFF8E0", "#FFD89A"];
                const tilts = [0, -4, 6, 0];
                const h = heights[i];
                const w = widths[i];
                const y = 100 - h;
                const labels = ["Strategy", "Product", "Research", "Project"];
                return (
                  <g key={`s1-${i}`}
                    onMouseEnter={(e) => { e.stopPropagation(); setHovBadge(i); }}
                    onMouseLeave={() => setHovBadge(null)}
                    style={{ cursor: "pointer" }}
                    transform={`rotate(${tilts[i]}, ${bx + w / 2}, ${100})`}
                  >
                    <rect x={bx} y={y} width={w} height={h} rx="2" fill={fills[i]} stroke={bc} strokeWidth="2" />
                    <line x1={bx + 4} y1={y} x2={bx + 4} y2={y + h} stroke={bc} strokeWidth="1" opacity="0.5" />
                    {/* Icon near top */}
                    {i === 0 && <g transform={`translate(${bx + 10}, ${y + 5}) scale(0.22)`}><circle cx="32" cy="32" r="24" stroke={bc} fill="none" strokeWidth="3" /><circle cx="32" cy="32" r="4" fill={bc} fillOpacity="0.3" /><path d="M32 12v6M32 46v6M12 32h6M46 32h6" stroke={bc} strokeWidth="2.5" /></g>}
                    {i === 1 && <g transform={`translate(${bx + 9}, ${y + 5}) scale(0.22)`}><circle cx="26" cy="26" r="14" stroke={bc} fill="none" strokeWidth="3" /><path d="M36 36l12 12" stroke={bc} strokeWidth="3.5" strokeLinecap="round" /></g>}
                    {i === 2 && <g transform={`translate(${bx + 10}, ${y + 5}) scale(0.22)`}><circle cx="32" cy="32" r="6" stroke={bc} fill={bc} fillOpacity="0.2" strokeWidth="2.5" /><circle cx="14" cy="16" r="4" stroke={bc} fill="none" strokeWidth="2" /><circle cx="50" cy="14" r="4" stroke={bc} fill="none" strokeWidth="2" /><circle cx="12" cy="48" r="4" stroke={bc} fill="none" strokeWidth="2" /><circle cx="52" cy="46" r="4" stroke={bc} fill="none" strokeWidth="2" /><path d="M28 28l-10-8M36 28l10-10M28 36l-12 8M36 36l12 6" stroke={bc} strokeWidth="2" /></g>}
                    {i === 3 && <g transform={`translate(${bx + 9}, ${y + 5}) scale(0.22)`}><rect x="8" y="12" width="48" height="40" rx="2" stroke={bc} fill="none" strokeWidth="3" /><path d="M24 12v40M40 12v40" stroke={bc} strokeWidth="2" /></g>}
                    {/* Title vertical - centered in book */}
                    <text x={bx + w / 2 + 2} y={y + h / 2 + 8} textAnchor="middle" fontSize="9" fill={bc} style={{ fontFamily: "var(--font-sans)" }} fontWeight="600" transform={`rotate(-90, ${bx + w / 2 + 2}, ${y + h / 2 + 8})`}>{labels[i]}</text>
                  </g>
                );
              })}
              {/* Shelf plank 1 */}
              <rect x="5" y="100" width="190" height="8" fill="#C8A96E" stroke={c("board")} strokeWidth="1.5" />
              {/* Shadow below shelf 1 */}
              <rect x="8" y="108" width="184" height="4" fill={INK} opacity="0.15" rx="1" />

              {/* ── Shelf 2 ── */}
              {/* Books on shelf 2 */}
              {[0, 1, 2, 3].map(i => {
                const bx = 12 + i * 46;
                const bc = hovBadge === i + 4 ? HOVER : c("board");
                const heights = [72, 66, 78, 70];
                const widths = [36, 34, 35, 33];
                const fills = ["#FFE699", "#FFF3CC", "#FFD89A", "#FFF8E0"];
                const tilts = [0, -5, -12, 0];
                const h = heights[i];
                const w = widths[i];
                const y = 210 - h;
                const labels = ["Campaign", "Coding", "AI Workflow", "Database"];
                return (
                  <g key={`s2-${i}`}
                    onMouseEnter={(e) => { e.stopPropagation(); setHovBadge(i + 4); }}
                    onMouseLeave={() => setHovBadge(null)}
                    style={{ cursor: "pointer" }}
                    transform={`rotate(${tilts[i]}, ${bx + w / 2}, ${210})`}
                  >
                    <rect x={bx} y={y} width={w} height={h} rx="2" fill={fills[i]} stroke={bc} strokeWidth="2" />
                    <line x1={bx + 4} y1={y} x2={bx + 4} y2={y + h} stroke={bc} strokeWidth="1" opacity="0.5" />
                    {/* Icon near top */}
                    {i === 0 && <g transform={`translate(${bx + 10}, ${y + 5}) scale(0.22)`}><path d="M10 50h44" stroke={bc} strokeLinecap="round" strokeWidth="3" /><path d="M10 50V14" stroke={bc} strokeLinecap="round" strokeWidth="3" /><path d="M16 42l10-8 8 4 12-18" stroke={bc} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></g>}
                    {i === 1 && <g transform={`translate(${bx + 10}, ${y + 5}) scale(0.22)`}><path d="M22 20l-12 12 12 12" stroke={bc} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" fill="none" /><path d="M42 20l12 12-12 12" stroke={bc} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" fill="none" /></g>}
                    {i === 2 && <g transform={`translate(${bx + 10}, ${y + 5}) scale(0.22)`}><polygon points="32,8 52,20 52,44 32,56 12,44 12,20" stroke={bc} fill={bc} fillOpacity="0.08" strokeWidth="2.5" /><circle cx="32" cy="32" r="8" stroke={bc} fill="none" strokeWidth="2" /></g>}
                    {i === 3 && <g transform={`translate(${bx + 6}, ${y + 4}) scale(0.3)`}><ellipse cx="24" cy="18" rx="14" ry="6" stroke={bc} fill={bc} fillOpacity="0.1" strokeWidth="2" /><path d="M10 18v12c0 3.3 6.3 6 14 6s14-2.7 14-6V18" stroke={bc} strokeWidth="2" fill="none" /><path d="M10 24c0 3.3 6.3 6 14 6s14-2.7 14-6" stroke={bc} strokeWidth="1.5" fill="none" /></g>}
                    {/* Title vertical - centered in book */}
                    <text x={bx + w / 2 + 2} y={y + h / 2 + 8} textAnchor="middle" fontSize="9" fill={bc} style={{ fontFamily: "var(--font-sans)" }} fontWeight="600" transform={`rotate(-90, ${bx + w / 2 + 2}, ${y + h / 2 + 8})`}>{labels[i]}</text>
                  </g>
                );
              })}
              {/* Shelf plank 2 */}
              <rect x="5" y="210" width="190" height="8" fill="#C8A96E" stroke={c("board")} strokeWidth="1.5" />
              {/* Shadow below shelf 2 */}
              <rect x="8" y="218" width="184" height="4" fill={INK} opacity="0.15" rx="1" />
            </svg>
          </div>

          {/* ═══ CEILING LAMP (above monitor) ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "610px", top: "-180px", width: "100px", height: "400px", zIndex: 3 }}
            onMouseEnter={() => setHov("lamp")}
            onMouseLeave={() => setHov(null)}
            onClick={() => setSunsetMode(!sunsetMode)}
          >
            <svg className="w-full h-full" viewBox="0 0 100 400" fill="none">
              {/* Wire */}
              <line x1="50" y1="0" x2="50" y2="275" stroke={c("lamp")} strokeWidth="2" />
              {/* Ceiling mount */}
              <rect x="44" y="0" width="12" height="8" rx="2" fill={c("lamp")} />
              {/* Lamp shade - wide, curved */}
              <path d="M 10 310 Q 20 285, 40 278 L 60 278 Q 80 285, 90 310" stroke={c("lamp")} strokeWidth="2.5" fill="none" />
              {/* Shade bottom curve */}
              <path d="M 10 310 Q 50 318, 90 310" stroke={c("lamp")} strokeWidth="2.5" fill="none" />
              {/* Bulb - half circle poking out below shade */}
              <path d="M 38 312 Q 38 330, 50 332 Q 62 330, 62 312" stroke={c("lamp")} strokeWidth="2" fill="none" />
              {/* Pull chain - starts from bottom of shade */}
              <line x1="72" y1="316" x2="72" y2={hov === "lamp" ? "355" : "335"} stroke={c("lamp")} strokeWidth="1.5" />
              <circle cx="72" cy={hov === "lamp" ? "358" : "338"} r="3" fill={c("lamp")} />
              {/* Extended chain when hover */}
              {hov === "lamp" && (
                <line x1="72" y1="338" x2="72" y2="355" stroke={c("lamp")} strokeWidth="1.5" />
              )}
            </svg>
            {/* Bubble chat - right side of lamp */}
            {hov === "lamp" && (
              <div className="absolute text-center whitespace-nowrap z-50 rounded-md" style={{ left: "105px", top: "300px", backgroundColor: INK, padding: "14px 16px" }}>
                <p style={{ color: PAPER, fontSize: "14px", fontFamily: "var(--font-sans)", fontWeight: 500 }}>Sunset mood? Click!</p>
                {/* Arrow pointing left */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-2.5 h-2.5 rotate-45" style={{ backgroundColor: INK }} />
              </div>
            )}
          </div>

          {/* ═══ MONITOR ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "466px", top: "275px", width: "380px", height: "250px" }}
            onClick={() => {
              if (hov === "mon") {
                // On dark screens: click cycles 1→2→3→4→1
                if (step === 0) setStep(1);
                else if (step === 1) setStep(2);
                else if (step === 2) setStep(3);
                else setStep(0); // step 3 → back to 0
              }
            }}
            onMouseEnter={() => { setHov("mon"); if (step === -1 || step === undefined) setStep(0); }}
            onMouseLeave={() => { setHov(null); setStep(0); }}
          >
            <svg width="380" height="250" viewBox="0 0 380 250" fill="none">
              {/* Shadow */}
              <rect x="16" y="16" width="360" height="200" rx="6" fill={INK} opacity="0.12" />
              {/* Monitor body */}
              <rect x="10" y="10" width="360" height="200" rx="6" stroke={INK} strokeWidth="2.5" fill={PAPER} />
              <circle cx="190" cy="14" r="2.5" fill={INK} />
              {/* Screen area */}
              <rect x="18" y="20" width="344" height="182" fill={hov === "mon" ? INK : PAPER} stroke={INK} strokeWidth="1" />
              {/* Glass reflection lines - only on screen 0 */}
              {hov !== "mon" && <>
                <line x1="45" y1="38" x2="65" y2="58" stroke={INK} strokeWidth="1.5" opacity="0.2" />
                <line x1="55" y1="38" x2="75" y2="58" stroke={INK} strokeWidth="1.5" opacity="0.2" />
                <line x1="310" y1="160" x2="330" y2="180" stroke={INK} strokeWidth="1.5" opacity="0.2" />
                <line x1="320" y1="160" x2="340" y2="180" stroke={INK} strokeWidth="1.5" opacity="0.2" />
              </>}
              {/* Stand */}
              <path d="M175 210 L175 232 L205 232 L205 210" stroke={INK} strokeWidth="2" fill={INK} />
              <line x1="170" y1="212" x2="210" y2="212" stroke={INK} strokeWidth="2" />
              <rect x="145" y="234" width="90" height="5" rx="1" fill={INK} stroke={INK} strokeWidth="1.5" />
            </svg>

            {/* Screen content */}
            {hov !== "mon" ? (
              /* Screen 0: About me? */
              <div className="absolute flex flex-col items-center justify-center" style={{ top: "20px", left: "18px", width: "344px", height: "182px" }}>
                <p className="text-2xl font-semibold" style={{ color: INK, fontFamily: "var(--font-sans)" }}>About me?</p>
                <p className="text-base mt-2 opacity-60" style={{ color: INK, fontFamily: "var(--font-sans)" }}>Click for more</p>
              </div>
            ) : (
              /* Screen 1/2/3: Dark background with white text */
              <div className="absolute flex flex-col items-center" style={{ top: "20px", left: "48px", width: "284px", height: "165px" }}>
                <div className="flex-1 flex items-center justify-center" style={{ minHeight: "115px" }}>
                  <p className="text-lg font-medium text-center leading-relaxed inline whitespace-pre-line" style={{ color: PAPER, fontFamily: "var(--font-sans)" }}>
                    {texts[step]}<span className="inline-block w-2 h-4 ml-1 align-middle" style={{ backgroundColor: PAPER, animation: "blink 1s step-end infinite" }} />
                  </p>
                </div>
                {/* Next button - fixed at bottom */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-5">
                  <circle cx="14" cy="14" r="12" stroke={PAPER} strokeWidth="1.5" />
                  <path d="M12 9l5 5-5 5" stroke={PAPER} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>

          {/* ═══ DESK/COUNTER ═══ */}
          <svg className="absolute" style={{ left: "179px", top: "495px", width: "1060px", height: "200px" }} viewBox="0 0 1060 200" fill="none">
            {/* Desk top outline */}
            <rect x="50" y="20" width="960" height="30" stroke={INK} strokeWidth="2.5" />
            <line x1="50" y1="35" x2="1010" y2="35" stroke={INK} strokeWidth="1" />
            {/* Shadow strip below desk top */}
            <rect x="50" y="50" width="960" height="10" fill={INK} />
            {/* Body (narrower than desk top) */}
            <rect x="90" y="60" width="880" height="140" stroke={INK} strokeWidth="2.5" />
            {/* Vertical slats */}
            {Array.from({ length: 17 }).map((_, i) => (
              <line key={i} x1={120 + i * 50} y1="60" x2={120 + i * 50} y2="200" stroke={INK} strokeWidth="1.5" />
            ))}
          </svg>

          {/* ═══ MOUSE ═══ */}
          <svg className="absolute" style={{ left: "776px", top: "491px", width: "40px", height: "28px" }} viewBox="0 0 40 28" fill="none">
            <ellipse cx="20" cy="14" rx="16" ry="12" stroke={INK} strokeWidth="2" />
            <line x1="20" y1="4" x2="20" y2="14" stroke={INK} strokeWidth="1.5" />
            <circle cx="20" cy="9" r="2.5" stroke={INK} strokeWidth="1" fill="none" />
          </svg>

          {/* ═══ RUBIK'S CUBE ═══ */}
          <svg className="absolute" style={{ left: "420px", top: "475px", width: "40px", height: "40px" }} viewBox="0 0 40 40" fill="none">
            <rect x="2" y="2" width="36" height="36" stroke={INK} strokeWidth="2" />
            <line x1="14" y1="2" x2="14" y2="38" stroke={INK} strokeWidth="1.5" />
            <line x1="26" y1="2" x2="26" y2="38" stroke={INK} strokeWidth="1.5" />
            <line x1="2" y1="14" x2="38" y2="14" stroke={INK} strokeWidth="1.5" />
            <line x1="2" y1="26" x2="38" y2="26" stroke={INK} strokeWidth="1.5" />
            <rect x="15" y="15" width="10" height="10" fill={INK} />
            <rect x="3" y="3" width="10" height="10" fill={INK} />
            <rect x="27" y="27" width="10" height="10" fill={INK} />
          </svg>

          {/* ═══ WORLD MAP ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "858px", top: "190px", width: "331px", height: "180px" }}
            onMouseEnter={() => setHov("map")}
            onMouseLeave={() => setHov(null)}
          >
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-8 text-center whitespace-nowrap z-50 rounded-md transition-all duration-300 ${hov === "map" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{ backgroundColor: INK, padding: "14px 16px", pointerEvents: "none" }}>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 600, marginBottom: "2px" }}>Location</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 400 }}>Based in Vietnam (20+ years)</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 400 }}>Been to Melbourne (1 year)</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK, padding: "14px 16px" }} />
            </div>

            {/* Shadow */}
            <div className="absolute" style={{ top: "5px", left: "5px", width: "100%", height: "100%", backgroundColor: INK, opacity: 0.12, borderRadius: "3px" }} />
            <div className="w-full h-full border-2 rounded-sm relative overflow-hidden p-2" style={{ borderColor: c("map"), backgroundColor: "#FFFFFF" }}>
              {/* Map image - inner wrapper with inner border */}
              <div className="relative w-full h-full">
                <Image
                  src="/about/world-map-brown.png"
                  alt="World Map"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              {/* Pin markers */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 180" fill="none">
                {/* Vietnam - pin */}
                <g>
                  <line x1="248" y1="88" x2="248" y2="72" stroke={c("map")} strokeWidth="1.5" />
                  <circle cx="248" cy="68" r="5" fill={c("map")} />
                  <text x="248" y="62" textAnchor="middle" fontSize="6" fontWeight="600" fill={c("map")} style={{ fontFamily: "var(--font-sans)" }}>VN</text>
                </g>
                {/* China - pin */}
                <g>
                  <line x1="240" y1="60" x2="240" y2="44" stroke={c("map")} strokeWidth="1.5" />
                  <circle cx="240" cy="40" r="5" fill={c("map")} />
                  <text x="240" y="34" textAnchor="middle" fontSize="6" fontWeight="600" fill={c("map")} style={{ fontFamily: "var(--font-sans)" }}>CN</text>
                </g>
                {/* Thailand - pin */}
                <g>
                  <line x1="240" y1="95" x2="240" y2="83" stroke={c("map")} strokeWidth="1.5" />
                  <circle cx="240" cy="79" r="5" fill={c("map")} />
                  <text x="240" y="73" textAnchor="middle" fontSize="6" fontWeight="600" fill={c("map")} style={{ fontFamily: "var(--font-sans)" }}>TH</text>
                </g>
                {/* Singapore - pin */}
                <g>
                  <line x1="248" y1="112" x2="248" y2="102" stroke={c("map")} strokeWidth="1.5" />
                  <circle cx="248" cy="98" r="4" fill={c("map")} />
                  <text x="248" y="93" textAnchor="middle" fontSize="5.5" fontWeight="600" fill={c("map")} style={{ fontFamily: "var(--font-sans)" }}>SG</text>
                </g>
                {/* Australia - pin */}
                <g>
                  <line x1="282" y1="148" x2="282" y2="133" stroke={c("map")} strokeWidth="1.5" />
                  <circle cx="282" cy="129" r="5" fill={c("map")} />
                  <text x="282" y="123" textAnchor="middle" fontSize="6" fontWeight="600" fill={c("map")} style={{ fontFamily: "var(--font-sans)" }}>AU</text>
                </g>
              </svg>
              {/* Sunset tint overlay on map */}
              {sunsetMode && (
                <div className="absolute inset-0 rounded-sm pointer-events-none" style={{ backgroundColor: "#E8DCCF", opacity: 0.35, zIndex: 10 }} />
              )}
            </div>
          </div>

          {/* ═══ LANGUAGE STICKY NOTES ═══ */}
          <div
            className="absolute cursor-pointer"
            style={{ left: "878px", top: "385px", width: "300px", height: "110px" }}
            onMouseEnter={() => setHov("lang")}
            onMouseLeave={() => setHov(null)}
          >
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 rounded-md whitespace-nowrap transition-all duration-300 ${hov === "lang" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{ backgroundColor: INK, padding: "14px 16px", pointerEvents: "none" }}>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 600, marginBottom: "4px" }}>Languages</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 400 }}>Vietnamese (native)</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 400 }}>English (proficient)</p>
              <p style={{ fontSize: "14px", fontFamily: "var(--font-sans)", color: PAPER, fontWeight: 400 }}>Chinese (basic)</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 -z-10" style={{ backgroundColor: INK, padding: "14px 16px" }} />
            </div>

            {/* Sticky Note 1: English — tilted, shadow behind, no fold */}
            <svg className="absolute" style={{ left: "15px", top: "12px", width: "80px", height: "90px", transform: "rotate(-5deg)" }}>
              {/* Shadow */}
              <path d="M 10 10 Q 11 9, 68 11 Q 69 12, 70 68 Q 69 69, 11 70 Q 10 69, 10 10" fill={INK} opacity="0.3" />
              {/* Note body - slightly wobbly edges */}
              <path d="M 6 6 Q 7 4, 64 5 Q 66 6, 66 63 Q 65 65, 7 65 Q 5 64, 6 6 Z" fill="#FFF3B0" stroke={c("lang")} strokeWidth="2.5" strokeLinecap="round" />
              {/* Push pin */}
              <ellipse cx="52" cy="14" rx="3.5" ry="1.5" fill={c("lang")} fillOpacity="0.2" />
              <path d="M 52 10 L 52 15" stroke={c("lang")} strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="52" cy="7" r="5" fill={c("lang")} />
              <circle cx="52" cy="7" r="2.5" fill={c("lang")} stroke={PAPER} strokeWidth="1" />
              {/* Text */}
              <text x="35" y="42" textAnchor="middle" fontSize="18" fontWeight="600" fill={c("lang")} style={{ fontFamily: "var(--font-script)" }} transform="rotate(2, 35, 40)">English</text>
            </svg>

            {/* Sticky Note 2: Vietnamese — tilted, shadow, no fold */}
            <svg className="absolute" style={{ left: "100px", top: "8px", width: "80px", height: "90px", transform: "rotate(3deg)" }}>
              {/* Shadow */}
              <path d="M 10 10 Q 11 9, 68 11 Q 69 12, 70 68 Q 69 69, 11 70 Q 10 69, 10 10" fill={INK} opacity="0.25" />
              {/* Note body */}
              <path d="M 6 6 Q 7 4, 64 5 Q 66 7, 65 63 Q 64 65, 7 65 Q 5 63, 6 6 Z" fill="#FFD89A" stroke={c("lang")} strokeWidth="2.5" strokeLinecap="round" />
              {/* Push pin - centered */}
              <ellipse cx="35" cy="14" rx="3.5" ry="1.5" fill={c("lang")} fillOpacity="0.2" />
              <path d="M 35 10 L 35 15" stroke={c("lang")} strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="35" cy="7" r="5" fill={c("lang")} />
              <circle cx="35" cy="7" r="2.5" fill={c("lang")} stroke={PAPER} strokeWidth="1" />
              {/* Text */}
              <text x="37" y="42" textAnchor="middle" fontSize="20" fontWeight="600" fill={c("lang")} style={{ fontFamily: "var(--font-script)" }} transform="rotate(-1, 37, 40)">Việt</text>
            </svg>

            {/* Sticky Note 3: Chinese — tilted, shadow, no fold */}
            <svg className="absolute" style={{ left: "185px", top: "15px", width: "80px", height: "90px", transform: "rotate(-2deg)" }}>
              {/* Shadow */}
              <path d="M 10 10 Q 11 9, 68 11 Q 69 12, 69 67 Q 68 69, 11 69 Q 10 68, 10 10" fill={INK} opacity="0.25" />
              {/* Note body */}
              <path d="M 6 6 Q 7 4, 64 5 Q 66 7, 65 63 Q 64 65, 7 65 Q 5 63, 6 6 Z" fill="#FFE7A8" stroke={c("lang")} strokeWidth="2.5" strokeLinecap="round" />
              {/* Push pin - center-right */}
              <ellipse cx="42" cy="14" rx="3.5" ry="1.5" fill={c("lang")} fillOpacity="0.2" />
              <path d="M 42 10 L 42 15" stroke={c("lang")} strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="42" cy="7" r="5" fill={c("lang")} />
              <circle cx="42" cy="7" r="2.5" fill={c("lang")} stroke={PAPER} strokeWidth="1" />
              {/* Text */}
              <text x="33" y="42" textAnchor="middle" fontSize="19" fontWeight="500" fill={c("lang")} style={{ fontFamily: "serif" }} transform="rotate(2, 33, 40)">中文</text>
            </svg>
          </div>



        </div>
      </div>

      {/* ═══ SUNSET MODE - white light shapes behind content ═══ */}
      {sunsetMode && (
        <>
          {/* Click anywhere to dismiss */}
          <div
            className="absolute inset-0"
            style={{ zIndex: 1 }}
            onClick={() => setSunsetMode(false)}
          />
          {/* White shapes = "light" areas on warm background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1400 1000"
            preserveAspectRatio="none"
            style={{ zIndex: 0 }}
          >
            {/* Window panes - 3 columns x 2 rows, behind headline, above ladder */}
            {[0, 1, 2].map(col =>
              [0, 1].map(row => (
                <rect
                  key={`wp-${col}-${row}`}
                  x={20 + col * 115}
                  y={50 + row * 200}
                  width="100"
                  height="180"
                  fill="#FFFFFF"
                  opacity="0.5"
                  transform="skewY(-4)"
                />
              ))
            )}

            {/* Light trapezoid from ceiling lamp - 2 edges from shade tips */}
            <polygon
              points="730,325 810,325 960,1000 570,1000"
              fill="#FFFFFF"
              opacity="0.5"
            />

          </svg>
        </>
      )}

      {/* ═══ CSS Animations ═══ */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-6px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

    </section>
  );
}
