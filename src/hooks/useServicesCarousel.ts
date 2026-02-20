import { useLayoutEffect, useRef, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

const MOBILE_MAX = 768;

export function useServicesCarousel<T>(data: readonly T[]) {
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(1);

  const cardSize = useRef(0);
  const centerOffset = useRef(0);

  const [index, setIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const isFirst = index === 0;
  const isLast = index === data.length - 1;

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const parent = track.parentElement!;
    const cards = Array.from(track.children) as HTMLElement[];
    if (!cards.length) return;

    const setup = () => {
      const mobile = window.innerWidth < MOBILE_MAX;
      setIsCarousel(mobile);

      if (!mobile) return;

      const gap = parseFloat(getComputedStyle(track).gap || "16");
      const cardWidth = cards[0].getBoundingClientRect().width;

      cardSize.current = cardWidth + gap;
      centerOffset.current =
        parent.getBoundingClientRect().width / 2 -
        cardWidth / 2;

      // posisi awal → card 0 di tengah
      x.set(centerOffset.current);
      scale.set(1);
      opacity.set(1);
      setIndex(0);
    };

    setup();
    const ro = new ResizeObserver(setup);
    ro.observe(parent);

    return () => ro.disconnect();
  }, [x, scale, opacity]);

  const goTo = (nextIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    animate(
      x,
      -nextIndex * cardSize.current + centerOffset.current,
      {
        type: "spring",
        stiffness: 220,
        damping: 30,
        mass: 0.9,
      }
    );

    // zoom HALUS, BERSAMAAN (bukan patah)
    animate(scale, 0.97, { duration: 0.15 });
    animate(opacity, 0.9, { duration: 0.15 });

    animate(scale, 1, {
      delay: 0.15,
      type: "spring",
      stiffness: 180,
      damping: 24,
    });
    animate(opacity, 1, { delay: 0.15, duration: 0.25 }).then(
      () => setIsAnimating(false)
    );

    setIndex(nextIndex);
  };

  const next = () => {
    if (!isCarousel) return;
    goTo(Math.min(index + 1, data.length - 1));
  };

  const prev = () => {
    if (!isCarousel) return;
    goTo(Math.max(index - 1, 0));
  };

  return {
    trackRef,
    x,
    motion: { scale, opacity },
    index,
    isFirst,
    isLast,
    isCarousel,
    next,
    prev,
  };
}