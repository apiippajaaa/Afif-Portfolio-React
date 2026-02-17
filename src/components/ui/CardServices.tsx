import type { JSX } from "react";

type Service = {
  title: string;
  items: readonly string[];
  icon: JSX.Element;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="carousel-item min-w-full md:min-w-0 relative group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-7 md:p-8 overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
        fill="currentColor"
        className="absolute -right-12 -top-12 w-52 h-52 text-blue-500/10 group-hover:text-blue-500/20 transition duration-500 blur-[1px]"
      >
        {service.icon}
      </svg>

      <div className="relative space-y-4">
        <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>

        <ul className="text-neutral-400 space-y-2 text-sm">
          {service.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
