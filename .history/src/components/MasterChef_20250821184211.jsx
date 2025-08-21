import React from "react";

// tiny SVG icons (Twitter, Facebook, Google, Instagram)
const Tw = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.87-2.35 8.47 8.47 0 0 1-2.69 1.03 4.23 4.23 0 0 0-7.25 3.86A12 12 0 0 1 3.16 4.9a4.23 4.23 0 0 0 1.31 5.64 4.18 4.18 0 0 1-1.92-.53v.05a4.23 4.23 0 0 0 3.39 4.15 4.27 4.27 0 0 1-1.91.07 4.24 4.24 0 0 0 3.95 2.94A8.49 8.49 0 0 1 2 19.54 12 12 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z"/>
  </svg>
);
const Fb = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.87v-6.98h-2.6V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.79-1.68 1.6V12h2.85l-.46 2.89h-2.39v6.98A10 10 0 0 0 22 12z"/>
  </svg>
);
const Gp = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M21.5 10.5h-2v2h-1.5v-2h-2v-1.5h2v-2H19.5v2h2zM8.5 10.75v2.5h3.6c-.15.95-1.08 2.78-3.6 2.78-2.17 0-3.94-1.8-3.94-4.03s1.77-4.03 3.94-4.03c1.24 0 2.06.53 2.53.98l1.73-1.67C11.82 7 10.36 6.25 8.5 6.25c-3.46 0-6.25 2.8-6.25 6.25S5.04 18.75 8.5 18.75c3.7 0 6.15-2.6 6.15-6.27 0-.42-.05-.83-.12-1.23z"/>
  </svg>
);
const Ig = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18.25 6.5a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75z"/>
  </svg>
);

const chefs = [
  {
    name: "John Smooth",
    role: "Restaurant Owner",
    src: "/chef-7.jpeg",
    alt: "Chef John Smooth",
  },
  {
    name: "Rebeca Welson",
    role: "Head Chef",
    src: "/chef-12.jpeg",
    alt: "Chef Rebeca Welson",
  },
  {
    name: "Kharl Branyt",
    role: "Chef",
    src: "/chef-10.jpeg",
    alt: "Chef Kharl Branyt",
  },
  {
    name: "Luke Simon",
    role: "Chef",
    src: "/chef-1.jpeg",
    alt: "Chef Luke Simon",
  },
];

function SocialRow() {
  const cls = "h-3.5 w-3.5 text-amber-600";
  return (
    <div className="mt-3 flex items-center gap-3 text-amber-600">
      <Tw className={cls} />
      <Fb className={cls} />
      <Gp className={cls} />
      <Ig className={cls} />
    </div>
  );
}

function ChefCard({ name, role, src, alt }) {
  return (
    <article className="w-full">
      <div className="overflow-hidden rounded-md">
        <img
          src={src}
          alt={alt}
          className="h-[260px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="mt-4 text-[16px] font-semibold text-zinc-900">{name}</h3>
      <p className="mt-1 text-[13px] text-zinc-500">{role}</p>
      <SocialRow />
    </article>
  );
}

export default function MasterChef({
  id = "chefs",
  heading = "Our Master Chef",
  accent = "Chef",
}) {
  return (
    <section id={id} className="relative isolate bg-white py-20 sm:py-24">
      {/* Accent script behind the heading */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-3 text-center">
        <span className="select-none font-serif italic text-[64px] sm:text-[72px] leading-none tracking-wide text-amber-900/20">
          {accent}
        </span>
      </div>

      {/* Compact container matching screenshot width */}
      <div className="mx-auto max-w-[980px] px-4">
        <h2 className="text-center text-[34px] sm:text-[36px] font-extrabold leading-tight text-zinc-900 -mt-8">
          {heading}
        </h2>

        {/* 4-column grid, equal cards */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {chefs.map((c) => (
            <ChefCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
