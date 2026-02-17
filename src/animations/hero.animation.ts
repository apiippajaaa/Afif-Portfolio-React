import { gsap } from "gsap";

export const heroAnimation = () => {
  gsap.from(".hero-item", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
  });
};
