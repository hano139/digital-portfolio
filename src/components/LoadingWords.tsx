"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Explore", "Culture", "Product", "Insights"];

export default function LoadingWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-3xl md:text-5xl tracking-wide text-[#8B7355]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
