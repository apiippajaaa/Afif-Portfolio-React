const GetInTouch = () => {
  return (
    <>
      <section
        id="get-in-touch"
        className="snap-section flex items-center py-24"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-16 w-full text-center">
          <div className="mb-10 md:mb-14">
            <p className="relative inline-block mb-4">
              <span className="tracking-[0.4em] uppercase text-xs font-semibold text-white/70">
                Get In Touch
              </span>
              <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Let’s build something
              <span className="text-blue-400"> great</span> together.
            </h2>

            <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
              Have a project, idea, or just want to say hello? I’m always open
              to discussing new opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 ">
            <a
              href="mailto:your@email.com"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-[0_10px_30px_rgba(37,99,235,0.35)] animate-[cta-bounce_3s_ease-in-out_infinite] hover:[animation-play-state:paused] transition-all duration-200 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(37,99,235,0.6)]"
            >
              Email Me
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/15 text-white/80 font-medium transition-all duration-200 hover:border-blue-400/60 hover:text-blue-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/628xxxxxxxxxx"
              target="_blank"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/15 text-white/80 font-medium transition-all duration-200 hover:border-blue-400/60 hover:text-blue-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
