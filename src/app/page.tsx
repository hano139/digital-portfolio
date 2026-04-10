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

      {/* Statement — bottom, full width, bold, artistic */}
      <div className="absolute bottom-14 left-0 right-0 z-20 px-6 overflow-hidden">
        <p
          className="text-[2.8vw] md:text-[2.2vw] lg:text-[1.8vw] font-bold uppercase tracking-[0.12em] text-center whitespace-nowrap"
          style={{ fontFamily: "var(--font-serif)", color: "#2a2220" }}
        >
          <span className="text-[#C8A96E]">Market Insights</span>
          <span className="mx-3 text-[#d4c0b0]">+</span>
          <span className="text-[#7BA7BC]">Strategic Advisory</span>
          <span className="mx-3 text-[#d4c0b0]">+</span>
          <span className="text-[#8FAE7E]">Cultural Passion</span>
          <span className="mx-3 text-[#d4c0b0]">=</span>
          <span className="text-[#C4907A]">O Gia Han</span>
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
