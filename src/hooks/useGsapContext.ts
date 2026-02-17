import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export function useGsapContext(
  scope: React.RefObject<HTMLElement | null>,
  animation: () => void
) {
  useLayoutEffect(() => {
    if (!scope.current) return;

    const ctx = gsap.context(animation, scope);
    return () => ctx.revert();
  }, []);
}
