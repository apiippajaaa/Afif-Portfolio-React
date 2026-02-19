import { services } from "../config/services";
import { useServicesCarousel } from "../hooks/useServicesCarousel";
import ServiceCard from "./ui/CardServices";

export default function Services() {
  const { trackRef, next, prev, index, maxIndex, isCarousel } =
    useServicesCarousel();

  return (
    <section
      id="services"
      className="snap-section flex items-center py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
        {/* ================= HEADER ================= */}
        <div className="mb-10 md:mb-14">
          <p className="relative inline-block mb-4">
            <span className="tracking-[0.35em] uppercase text-xs font-semibold text-white/70">
              What I Do
            </span>
            <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl leading-tight">
            I craft high-performance digital products — engineered for scale,
            designed for impact.
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="
              flex gap-4
              md:grid md:grid-cols-2 md:gap-6
              lg:grid-cols-3 lg:gap-10
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
                  transition-all duration-300
                "
              >
                <ServiceCard service={service} />
              </article>
            ))}
          </div>

          {/* ================= MOBILE CONTROLS ================= */}
          {isCarousel && (
            <>
              <button
                onClick={prev}
                disabled={index === 0}
                className={`
                  absolute left-2 top-1/2 -translate-y-1/2
                  h-10 w-10 rounded-full
                  backdrop-blur-md border
                  flex items-center justify-center
                  transition
                  ${
                    index === 0
                      ? "bg-white/5 border-white/5 text-white/20"
                      : "bg-neutral-900/70 border-white/10 text-white hover:bg-white/10"
                  }
                `}
              >
                ‹
              </button>

              <button
                onClick={next}
                disabled={index === maxIndex}
                className={`
                  absolute right-2 top-1/2 -translate-y-1/2
                  h-10 w-10 rounded-full
                  backdrop-blur-md border
                  flex items-center justify-center
                  transition
                  ${
                    index === maxIndex
                      ? "bg-white/5 border-white/5 text-white/20"
                      : "bg-neutral-900/70 border-white/10 text-white hover:bg-white/10"
                  }
                `}
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
