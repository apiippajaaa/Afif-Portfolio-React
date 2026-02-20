import type { JSX } from "react";

export type Service = {
  title: string;
  items: readonly string[];
  icon: JSX.Element;
};

export const services = [
  {
    title: "Fullstack Development",
    items: [
      "Backend Architecture",
      "API & Database Design",
      "Frontend Engineering",
      "Performance Optimization",
    ],
    icon: (
      <path d="M73.4 182.6C60.9 170.1 60.9 149.8 73.4 137.3C85.9 124.8 106.2 124.8 118.7 137.3L278.7 297.3C291.2 309.8 291.2 330.1 278.7 342.6L118.7 502.6C106.2 515.1 85.9 515.1 73.4 502.6C60.9 490.1 60.9 469.8 73.4 457.3L210.7 320L73.4 182.6z" />
    ),
  },
  {
    title: "Visual & UI Design",
    items: [
      "Interface Design",
      "Illustration",
      "Design Systems",
      "Brand Consistency",
    ],
    icon: (
      <path d="M432.5 82.3L382.4 132.4L507.7 257.7L557.8 207.6C579.7 185.7 579.7 150.3 557.8 128.4Z" />
    ),
  },
  {
    title: "Creative Production",
    items: [
      "Motion Graphics",
      "Video Editing",
      "Visual Storytelling",
      "Content Direction",
    ],
    icon: (
      <path d="M192 128C192 92.7 220.7 64 256 64L576 64C611.3 64 640 92.7 640 128Z" />
    ),
  },
] as const;
