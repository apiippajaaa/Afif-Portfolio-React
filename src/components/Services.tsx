import { services } from "../config/services";
import { useServicesCarousel } from "../hooks/useServicesCarousel";
import ServiceCard from "./ui/CardServices";
import { motion } from "framer-motion";

export default function Services() {
  const {
    trackRef,
    x,
    motion: mv,
    index,
    isFirst,
    isLast,
    isCarousel,
    next,
    prev,
  } = useServicesCarousel(services);

  return (
    <section
      id="services"
      className="snap-section flex items-center py-24 md:py-0"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* HEADER */}
        <div className="mb-12">
          <p className="relative inline-block mb-3">
            <span className="tracking-[0.4em] uppercase text-xs font-semibold text-white/70">
              What I Do
            </span>

            <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0"></span>
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl">
            High-performance digital products, crafted with care.
          </h2>
        </div>

        {/* CAROUSEL / GRID */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="
              flex gap-4
              md:grid md:grid-cols-2 lg:grid-cols-3
              will-change-transform
            "
          >
            {services.map((service, i) => {
              const isActive = i === index;

              return (
                <motion.article
                  key={service.title}
                  style={
                    isCarousel
                      ? {
                          scale: isActive ? mv.scale : 0.94,
                          opacity: isActive ? mv.opacity : 0.5,
                        }
                      : undefined
                  }
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                  }}
                  className="
                    min-w-[80%] sm:min-w-[65%]
                    md:min-w-0 shrink-0
                    bg-neutral-900/70 rounded-2xl
                  "
                >
                  <ServiceCard service={service} />
                </motion.article>
              );
            })}
          </motion.div>

          {/* CONTROLS (mobile only) */}
          {isCarousel && (
            <>
              {/* PREV */}
              <button
                onClick={prev}
                disabled={isFirst}
                className={`
        absolute left-2 top-1/2 -translate-y-1/2
        h-10 w-10 rounded-full border
        transition-all
        ${
          isFirst
            ? "bg-neutral-900/40 border-white/5 text-white/30 cursor-not-allowed"
            : "bg-neutral-900/70 border-white/10 hover:bg-neutral-800"
        }
      `}
              >
                ‹
              </button>

              {/* NEXT */}
              <button
                onClick={next}
                disabled={isLast}
                className={`
        absolute right-2 top-1/2 -translate-y-1/2
        h-10 w-10 rounded-full border
        transition-all
        ${
          isLast
            ? "bg-neutral-900/40 border-white/5 text-white/30 cursor-not-allowed"
            : "bg-neutral-900/70 border-white/10 hover:bg-neutral-800"
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
