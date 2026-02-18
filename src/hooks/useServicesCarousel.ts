import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function useServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidthRef = useRef(0);
  const startOffsetRef = useRef(0);
  const cardsRef = useRef<HTMLElement[]>([]);

  const indexRef = useRef(0);

  // ✅ gunakan state untuk rendering
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // ===============================
  // ACTIVE CARD STYLE
  // ===============================
  const setActiveCard = (activeIndex: number) => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      const active = i === activeIndex;

      gsap.to(card, {
        scale: active ? 1 : 0.92,
        opacity: active ? 1 : 0.6,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  };

  // ===============================
  // INIT
  // ===============================
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.innerWidth >= 768) return;

    const cards = Array.from(track.children) as HTMLElement[];
    cardsRef.current = cards;

    const gap = 16;
    const cardWidth = cards[0].offsetWidth + gap;
    cardWidthRef.current = cardWidth;

    setMaxIndex(cards.length - 1);

    const containerWidth =
      track.parentElement!.offsetWidth;

    const singleCardWidth = cards[0].offsetWidth;

    const startOffset =
      (containerWidth - singleCardWidth) / 2;

    startOffsetRef.current = startOffset;

    gsap.set(track, { x: startOffset });

    setActiveCard(0);
    setIndex(0);
  }, []);

  // ===============================
  // MOVE
  // ===============================
  const moveTo = (newIndex: number) => {
    const track = trackRef.current;
    if (!track) return;

    indexRef.current = newIndex;
    setIndex(newIndex);

    const newX =
      startOffsetRef.current -
      newIndex * cardWidthRef.current;

    gsap.to(track, {
      x: newX,
      duration: 0.45,
      ease: "power3.out",
    });

    setActiveCard(newIndex);
  };

  const next = () => {
    moveTo(Math.min(indexRef.current + 1, maxIndex));
  };

  const prev = () => {
    moveTo(Math.max(indexRef.current - 1, 0));
  };

  return {
    trackRef,
    next,
    prev,
    index,
    maxIndex,
  };
}
