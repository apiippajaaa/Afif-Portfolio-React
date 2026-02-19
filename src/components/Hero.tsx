import { useRef } from "react";
import { heroAnimation } from "../animations/hero.animation";
import { useGsapContext } from "../hooks/useGsapContext";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGsapContext(heroRef, heroAnimation);

  return (
    <section ref={heroRef} id="hero" className="snap-section relative px-6">
      <div className="min-h-[calc(var(--vh)*100)] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div
            className="
              max-w-3xl
              space-y-6 md:space-y-8

              flex flex-col
              items-center text-center
              md:items-start md:text-left
            "
          >
            <span className="hero-item text-xs md:text-sm tracking-[0.25em] text-blue-400 uppercase">
              Creative Engineer
            </span>

            <h1 className="hero-item text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Nur Afif Misbahuddin
            </h1>

            <p className="hero-item text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
              I build reliable, scalable systems and craft clean digital
              experiences. Focused on performance, maintainability, and modern
              backend architecture.
            </p>

            <div className="hero-item flex gap-3 md:gap-4 pt-2 md:pt-4 flex-wrap justify-center md:justify-start">
              <a
                href="#portfolio"
                className="
                  px-5 py-2.5 md:px-6 md:py-3
                  rounded-xl
                  bg-blue-500 hover:bg-blue-400
                  transition font-medium
                  shadow-lg shadow-blue-500/20
                  text-sm md:text-base
                "
              >
                Portfolio
              </a>

              <a
                href="/resume.pdf"
                className="
                  px-5 py-2.5 md:px-6 md:py-3
                  rounded-xl
                  border border-neutral-700
                  hover:border-blue-400 hover:text-blue-400
                  transition font-medium
                  text-sm md:text-base
                "
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition">
          <div className="w-5 h-9 rounded-full border-2 border-white/70 flex justify-center pt-1">
            <div className="w-1 h-1 bg-white rounded-full animate-[scroll-dot-slide_2s_ease-in-out_infinite]" />
          </div>

          <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
