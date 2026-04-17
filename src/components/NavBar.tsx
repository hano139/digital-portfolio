"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/career", label: "Career Journey" },
  { href: "/projects", label: "Side Projects" },
  { href: "/global", label: "Global Engagement" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const currentY = window.pageYOffset;
      const vh = window.innerHeight;

      if (currentY <= vh * 0.3) {
        setHidden(false);
      } else if (currentY > lastY + 5) {
        setHidden(true);
      } else if (currentY < lastY - 5) {
        setHidden(false);
      }

      lastY = currentY;
    };

    // Try multiple scroll targets
    window.addEventListener("scroll", onScroll);

    // Also check if scroll happens on html/body
    const root = document.documentElement;
    const body = document.body;
    root.addEventListener("scroll", onScroll);
    body.addEventListener("scroll", onScroll);

    // Force initial check
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      root.removeEventListener("scroll", onScroll);
      body.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: hidden ? "-80px" : "16px",
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "16px 0",
        background: "transparent",
        fontFamily: "var(--font-sans)",
        opacity: hidden ? 0 : 1,
        transition: "top 0.4s ease, opacity 0.3s ease",
      }}
    >
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
              isActive
                ? "text-[#1a1a1a] font-semibold"
                : "text-[#6b5d4d] hover:text-[#1a1a1a]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
