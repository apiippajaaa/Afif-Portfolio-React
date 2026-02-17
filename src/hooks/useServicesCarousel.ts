import { useLayoutEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/dist/Draggable";

gsap.registerPlugin(Draggable);

export function useServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidthRef = useRef(0);
  const maxIndexRef = useRef(0);
  const indexRef = useRef(0);
  const startOffsetRef = useRef(0);
  const cardsRef = useRef<HTMLElement[]>([]);

  // ===============================
  // UPDATE FOCUS (CENTER BASED)
  // ===============================
  const updateFocus = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = cardsRef.current;

    const currentX = gsap.getProperty(track, "x") as number;

    // center viewport (fix karena sekarang ada offset)
    const center =
      -currentX + track.parentElement!.offsetWidth / 2;

    cards.forEach((card) => {
      const cardCenter =
        card.offsetLeft + card.offsetWidth / 2;

      const dist = Math.abs(center - cardCenter);

      const scale = gsap.utils.clamp(0.9, 1, 1 - dist / 600);
      const blur = gsap.utils.clamp(0, 6, dist / 120);

      gsap.to(card, {
        scale,
        opacity: scale,
        filter: `blur(${blur}px)`,
        duration: 0.25,
        ease: "power2.out",
      });
    });
  }, []);

  // ===============================
  // INIT
  // ===============================
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.innerWidth >= 768) return;

    const cards = Array.from(track.children) as HTMLElement[];
    cardsRef.current = cards;

    const gap = 16; // gap-4 = 16px
    const cardWidth = cards[0].offsetWidth + gap;

    cardWidthRef.current = cardWidth;
    maxIndexRef.current = cards.length - 1;

    const containerWidth =
      track.parentElement!.offsetWidth;

    const singleCardWidth = cards[0].offsetWidth;

    // OFFSET supaya card pertama di tengah
    const startOffset =
      (containerWidth - singleCardWidth) / 2;

    startOffsetRef.current = startOffset;

    // ===============================
    // SNAP FUNCTION
    // ===============================
    const snapToClosest = () => {
      const currentX = gsap.getProperty(track, "x") as number;

      const rawIndex =
        (startOffsetRef.current - currentX) /
        cardWidthRef.current;

      const index = Math.round(rawIndex);

      const snapX =
        startOffsetRef.current -
        index * cardWidthRef.current;

      gsap.to(track, {
        x: snapX,
        duration: 0.5,
        ease: "power3.out",
        onUpdate: updateFocus,
      });

      indexRef.current = index;
    };

    // ===============================
    // DRAGGABLE
    // ===============================
    Draggable.create(track, {
      type: "x",
      inertia: true,
      bounds: {
        minX:
          startOffsetRef.current -
          maxIndexRef.current * cardWidthRef.current,
        maxX: startOffsetRef.current,
      },
      edgeResistance: 0.85,
      dragResistance: 0.15,
      onDrag: updateFocus,
      onThrowUpdate: updateFocus,
      onRelease: snapToClosest,
      onThrowComplete: snapToClosest,
    });

    // set start posisi tengah
    gsap.set(track, { x: startOffsetRef.current });

    updateFocus();

    return () => {
      Draggable.get(track)?.kill();
    };
  }, [updateFocus]);

  // ===============================
  // NEXT BUTTON
  // ===============================
  const next = () => {
    const track = trackRef.current;
    if (!track) return;

    const newIndex = Math.min(
      indexRef.current + 1,
      maxIndexRef.current
    );

    indexRef.current = newIndex;

    const newX =
      startOffsetRef.current -
      newIndex * cardWidthRef.current;

    gsap.to(track, {
      x: newX,
      duration: 0.5,
      ease: "power3.out",
      onUpdate: updateFocus,
    });
  };

  // ===============================
  // PREV BUTTON
  // ===============================
  const prev = () => {
    const track = trackRef.current;
    if (!track) return;

    const newIndex = Math.max(indexRef.current - 1, 0);

    indexRef.current = newIndex;

    const newX =
      startOffsetRef.current -
      newIndex * cardWidthRef.current;

    gsap.to(track, {
      x: newX,
      duration: 0.5,
      ease: "power3.out",
      onUpdate: updateFocus,
    });
  };

  return { trackRef, next, prev };
}
