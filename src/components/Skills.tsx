import { useState } from "react";
import { skillGroups } from "../config/skills";

const Skills = () => {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handleChange = (index: number) => {
    if (index === active) return;

    setAnimate(false);

    setTimeout(() => {
      setActive(index);
      setAnimate(true);
    }, 150);
  };

  return (
    <section
      id="skills"
      className="snap-section flex items-center py-24 md:py-0"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-16 w-full">
        {/* ================= HEADER ================= */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <p className="relative inline-block mb-3">
            <span className="tracking-[0.4em] uppercase text-xs font-semibold text-white/70">
              Tech Stack
            </span>

            <span className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0"></span>
          </p>

          {/* DYNAMIC DESCRIPTION */}
          {/* <h2
            key={active}
            className="
              text-xl sm:text-2xl md:text-4xl
              font-semibold
              max-w-2xl
              leading-snug md:leading-tight
              mx-auto md:mx-0
              transition-all duration-500
              animate-[fadeUp_.4s_ease]
            "
          >
            {skillGroups[active].description}
          </h2> */}
        </div>

        {/* ================= CATEGORY TABS ================= */}
        <div className="flex justify-center md:justify-start gap-3 mb-10 flex-wrap">
          {skillGroups.map((group, index) => (
            <button
              key={group.title}
              onClick={() => handleChange(index)}
              className={`
                px-4 py-2 text-sm rounded-full transition-all duration-300
                ${
                  active === index
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {skillGroups.map((group, index) => (
              <div key={group.title} className="min-w-full px-1">
                <div
                  className={`
                    rounded-2xl border border-white/10
                    bg-white/4
                    backdrop-blur-xl
                    p-6 md:p-8
                    transition-all duration-500
                    ${
                      animate && index === active
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }
                  `}
                >
                  {/* DESCRIPTION SMALL */}
                  <p className="text-white/50 mb-8 text-sm md:text-base text-center md:text-left">
                    {group.description}
                  </p>
                  {/* SKILLS GRID */}
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-6 gap-x-3 md:gap-6">
                    {group.skills.map((skill, i) => (
                      <div
                        key={skill.name}
                        className={`
                          flex flex-col items-center justify-center
                          text-center group
                          transition-all duration-500
                          ${
                            animate && index === active
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-3"
                          }
                        `}
                        style={{
                          transitionDelay:
                            animate && index === active ? `${i * 40}ms` : "0ms",
                        }}
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                          <i
                            className={`
                              ${skill.icon}
                              text-2xl md:text-3xl
                              text-white/80
                              transition-transform duration-300
                              group-hover:scale-110
                            `}
                          />
                        </div>

                        <span className="text-[10px] md:text-xs mt-2 text-white/60 leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= CTA BUTTON ================= */}
          <div className="mt-6 flex justify-center md:justify-end">
            <a
              href="/projects"
              className="
                group inline-flex items-center gap-2
                px-5 py-2.5 rounded-lg
                text-sm font-medium
                bg-blue-600/90 text-white
                hover:bg-blue-500
                transition-all duration-300
                hover:-translate-y-1
                shadow-lg shadow-blue-500/20
              "
            >
              View Projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
