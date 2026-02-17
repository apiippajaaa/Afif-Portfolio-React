import { useRef } from "react";
import { heroAnimation } from "../animations/hero.animation";
import { useGsapContext } from "../hooks/useGsapContext";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGsapContext(heroRef, heroAnimation);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="snap-section h-screen flex items-center relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-8 ">
          <span className="hero-item text-sm tracking-widest text-blue-400 uppercase">
            CREATIVE ENGINEER
          </span>

          <h1 className="hero-item text-4xl md:text-6xl font-bold">
            Nur Afif Misbahuddin
          </h1>

          <p className="hero-item text-neutral-400 text-lg leading-relaxed">
            I build reliable, scalable systems and craft clean digital
            experiences. Focused on performance, maintainability, and modern
            backend architecture.
          </p>

          <div className="hero-item flex gap-4 pt-4 flex-wrap">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 transition font-medium shadow-lg shadow-blue-500/20"
            >
              View Portfolio
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-blue-400 hover:text-blue-400 transition font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-label="Scroll down">
        <span className="scroll-indicator__mouse"></span>
        <span className="scroll-indicator__text">Scroll</span>
      </div>
    </section>
  );
}
