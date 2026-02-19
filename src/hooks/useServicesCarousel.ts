import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MOBILE_MAX = 768;

export function useServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  const cardWidthRef = useRef(0);
  const startOffsetRef = useRef(0);
  const indexRef = useRef(0);

  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);

  // ===============================
  // ACTIVE CARD STYLE
  // ===============================
  const setActiveCard = (activeIndex: number) => {
    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        scale: i === activeIndex ? 1 : 0.92,
        opacity: i === activeIndex ? 1 : 0.6,
        duration: 0.3,
        overwrite: "auto",
      });
    });
  };

  // ===============================
  // INIT / REINIT
  // ===============================
  useLayoutEffect(() => {
    const init = () => {
      const track = trackRef.current;
      if (!track) return;

      const isMobile = window.innerWidth < MOBILE_MAX;
      setIsCarousel(isMobile);

      // ================= GRID MODE =================
      if (!isMobile) {
        gsap.set(track, { clearProps: "all" });
        cardsRef.current.forEach((c) =>
          gsap.set(c, { clearProps: "all" })
        );
        return;
      }

      // ================= CAROUSEL MODE =================
      const cards = Array.from(track.children) as HTMLElement[];
      cardsRef.current = cards;

      const gap = parseFloat(
        getComputedStyle(track).gap || "16"
      );

      const cardWidth =
        cards[0].getBoundingClientRect().width + gap;

      const containerWidth =
        track.parentElement!.getBoundingClientRect().width;

      const startOffset =
        (containerWidth - cards[0].offsetWidth) / 2;

      cardWidthRef.current = cardWidth;
      startOffsetRef.current = startOffset;

      setMaxIndex(cards.length - 1);
      indexRef.current = 0;
      setIndex(0);

      gsap.set(track, { x: startOffset });
      setActiveCard(0);
    };

    init();
    window.addEventListener("resize", init);
    window.addEventListener("orientationchange", init);

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("orientationchange", init);
    };
  }, []);

  // ===============================
  // MOVE
  // ===============================
  const moveTo = (newIndex: number) => {
    if (!isCarousel) return;

    const track = trackRef.current;
    if (!track) return;

    indexRef.current = newIndex;
    setIndex(newIndex);

    gsap.to(track, {
      x:
        startOffsetRef.current -
        newIndex * cardWidthRef.current,
      duration: 0.45,
      ease: "power3.out",
    });

    setActiveCard(newIndex);
  };

  const next = () => moveTo(Math.min(indexRef.current + 1, maxIndex));
  const prev = () => moveTo(Math.max(indexRef.current - 1, 0));

  return {
    trackRef,
    next,
    prev,
    index,
    maxIndex,
    isCarousel,
  };
}
