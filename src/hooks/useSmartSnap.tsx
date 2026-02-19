import { useEffect, useRef } from "react";

export function useSmartSnap() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const overflow = el.scrollHeight > el.clientHeight + 4;

      if (overflow) {
        el.classList.add("allow-inner-scroll");
      } else {
        el.classList.remove("allow-inner-scroll");
      }
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  return ref;
}
