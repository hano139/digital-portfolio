"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import LoadingWords from "@/components/LoadingWords";

const GalleryScene = dynamic(() => import("@/components/GalleryScene"), {
  ssr: false,
  loading: () => <LoadingWords />,
});

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      {/* Signature — top left */}
      <div className="absolute top-6 left-10 z-20">
        <Image
          src="/signature.png"
          alt="O Gia Han"
          width={160}
          height={58}
          className="opacity-90 hover:opacity-100 transition-opacity"
          priority
        />
      </div>

      {/* "Digital Portfolio" — top right */}
      <p
        className="absolute top-8 right-10 z-20 text-[10px] tracking-[0.12em] uppercase text-[#6b5d4d]"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        Digital Portfolio
      </p>

      {/* 3D Gallery Scene */}
      <GalleryScene />

      {/* Statement — bottom, 2 lines: name on top, formula below */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6 text-center">
        <p
          className="text-[5vw] md:text-[4.5vw] lg:text-[4vw] font-bold uppercase italic tracking-[0.06em] text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-serif)", lineHeight: 2 }}
        >
          Ô Gia Hân
        </p>
        <p
          className="text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] font-semibold uppercase tracking-[0.06em] whitespace-nowrap"
          style={{ fontFamily: "var(--font-serif)", lineHeight: 2 }}
        >
          <span className="text-[#1a1a1a]">Market Insights</span>
          <span className="mx-1 md:mx-2 text-[#1a1a1a]/30">+</span>
          <span className="text-[#1a1a1a]">Strategic Advisory</span>
          <span className="mx-1 md:mx-2 text-[#1a1a1a]/30">+</span>
          <span className="text-[#1a1a1a]">Cultural Passion</span>
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-center">
        <p
          className="text-[10px] tracking-[0.2em] uppercase text-[#6b5d4d]/60"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Drag to explore &middot; Scroll to zoom &middot; Click to enter
        </p>
      </div>
    </div>
  );
}
