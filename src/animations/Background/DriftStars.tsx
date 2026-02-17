import { useEffect, useRef } from "react";

const STAR_COUNT = 80;
const STAR_TYPES = ["small", "medium", "big"] as const;

type StarType = (typeof STAR_TYPES)[number];

export default function DriftStars() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // create once
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement("div");

      const type: StarType =
        STAR_TYPES[Math.floor(Math.random() * STAR_TYPES.length)];

      star.classList.add("star", type);

      // position
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.pow(Math.random(), 1.6) * 100 + "%";

      // timing
      star.style.animationDuration = 40 + Math.random() * 80 + "s";
      star.style.animationDelay = -Math.random() * 80 + "s";

      container.appendChild(star);
    }

    // cleanup on unmount
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="drift-stars" />;
}
