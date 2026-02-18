import { services } from "../config/services";
import { useServicesCarousel } from "../hooks/useServicesCarousel";
import ServiceCard from "./ui/CardServices";

export default function Services() {
  const { trackRef, next, prev, index, maxIndex } = useServicesCarousel();

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
            <span className="absolute left-0 -bottom-2 h-0.75 w-full overflow-hidden">
              <span className="block h-full w-full bg-linear-to-r from-transparent via-blue-400/70 to-transparent animate-[slideLine_4s_linear_infinite]" />
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
          <div className="md:hidden">
            {/* LEFT BUTTON */}
            <button
              onClick={prev}
              disabled={index === 0}
              className={`
                absolute left-2 top-1/2 -translate-y-1/2
                h-10 w-10 rounded-full
                backdrop-blur-md border
                flex items-center justify-center
                transition-all duration-300
                ${
                  index === 0
                    ? "bg-white/5 border-white/5 text-white/20 cursor-default"
                    : "bg-neutral-900/70 border-white/10 text-white hover:bg-white/10"
                }
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-left-icon lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={next}
              disabled={index === maxIndex}
              className={`
                absolute right-2 top-1/2 -translate-y-1/2
                h-10 w-10 rounded-full
                backdrop-blur-md border
                flex items-center justify-center
                transition-all duration-300
                ${
                  index === maxIndex
                    ? "bg-white/5 border-white/5 text-white/20 cursor-default"
                    : "bg-neutral-900/70 border-white/10 text-white hover:bg-white/10"
                }
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
