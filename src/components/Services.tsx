import { services } from "../config/services";
import { useServicesCarousel } from "../hooks/useServicesCarousel";
import ServiceCard from "./ui/CardServices";

export default function Services() {
  const { trackRef, next, prev } = useServicesCarousel();

  return (
    <section
      id="services"
      className="snap-section min-h-screen flex items-center relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
        {/* HEADER */}
        <div className="mb-10 md:mb-14">
          <p className="relative inline-block mb-4">
            <span className="tracking-[0.35em] uppercase text-xs font-semibold text-white/70">
              What I Do
            </span>
            <span className="absolute left-0 -bottom-2 h-[3px] w-full overflow-hidden">
              <span className="block h-full w-full bg-gradient-to-r from-transparent via-blue-400/70 to-transparent animate-[slideLine_4s_linear_infinite]" />
            </span>
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl leading-tight">
            I craft high-performance digital products — engineered for scale,
            designed for impact.
          </h2>
        </div>

        {/* CAROUSEL / GRID */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="
              flex gap-4 
              touch-pan-x
              cursor-grab active:cursor-grabbing
              md:grid md:grid-cols-3 md:gap-10
              md:transform-none
            "
          >
            {services.map((service) => (
              <article
                key={service.title}
                className="
                  min-w-[80%] sm:min-w-[65%]
                  md:min-w-0
                  bg-neutral-900/70
                  backdrop-blur-xl
                  rounded-2xl
                  will-change-transform
                  transition-all duration-300
                "
              >
                <ServiceCard service={service} />
              </article>
            ))}
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex justify-between items-center mt-6 px-2">
            <button
              onClick={prev}
              className="
                h-10 w-10 rounded-full
                bg-white/10 backdrop-blur
                flex items-center justify-center
                text-white
                active:scale-95
              "
            >
              ←
            </button>

            <button
              onClick={next}
              className="
                h-10 w-10 rounded-full
                bg-white/10 backdrop-blur
                flex items-center justify-center
                text-white
                active:scale-95
              "
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
