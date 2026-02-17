import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/dist/Draggable";

gsap.registerPlugin(Draggable);

export function useServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // desktop = grid
    if (window.innerWidth >= 768) return;

    const cards = Array.from(track.children) as HTMLElement[];

    const cardWidth = cards[0].offsetWidth + 24;
    const maxX = -(cardWidth * (cards.length - 1));

    const updateFocus = () => {
      const center =
        -gsap.getProperty(track, "x") + track.offsetWidth / 2;

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
    };

    const snapToClosest = () => {
      const currentX = gsap.getProperty(track, "x") as number;
      const index = Math.round(Math.abs(currentX) / cardWidth);
      const snapX = -index * cardWidth;

      gsap.to(track, {
        x: snapX,
        duration: 0.5,
        ease: "power3.out",
        onUpdate: updateFocus,
      });
    };

    Draggable.create(track, {
      type: "x",
      inertia: true,
      bounds: { minX: maxX, maxX: 0 },
      edgeResistance: 0.85,
      dragResistance: 0.15,
      onDrag: updateFocus,
      onThrowUpdate: updateFocus,
      onRelease: snapToClosest,
      onThrowComplete: snapToClosest,
    });

    gsap.set(track, { x: 0 });
    updateFocus();

    return () => {
      Draggable.get(track)?.kill();
    };
  }, []);

  return trackRef;
}
