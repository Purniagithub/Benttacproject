import React from "react";

const items = [
  // Row 1
  { type: "image", src: "/dish-1.jpeg", alt: "Dish 1" },
  {
    type: "card",
    title: "Grilled Beef\nwith potatoes",
    price: 29,
    bullets: ["Meat, Potatoes, Rice,", "Tomatoe"],
  },
  { type: "image", src: "/images/menu-2.jpg", alt: "Dish 2" },

  // Row 1 col 4 in screenshot is actually col 4 of row 1; but our grid is 3 cols wide; start row 2:
  {
    type: "card",
    title: "Grilled Beef\nwith potatoes",
    price: 29,
    bullets: ["Meat, Potatoes, Rice,", "Tomatoe"],
  },
  { type: "image", src: "dish-2.jpeg", alt: "Dish 3" },
  { type: "image", src: "/dish-3.jpeg.jpg", alt: "Dish 4" },

  // Row 3
  { type: "image", src: "/images/menu-5.jpg", alt: "Dish 5" },
  {
    type: "card",
    title: "Grilled Beef\nwith potatoes",
    price: 29,
    bullets: ["Meat, Potatoes, Rice,", "Tomatoe"],
  },
  {
    type: "card",
    title: "Grilled Beef\nwith potatoes",
    price: 29,
    bullets: ["Meat, Potatoes, Rice,", "Tomatoe"],
  },
];

function PriceTag({ value }) {
  return (
    <span className="text-[18px] font-semibold text-amber-600">{`$${value}`}</span>
  );
}

function OrderBtn({ className = "" }) {
  return (
    <button
      className={
        "inline-flex h-9 items-center rounded bg-amber-500 px-4 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 " +
        className
      }
    >
      Order now
    </button>
  );
}

function MenuCard({ title, price, bullets }) {
  return (
    <article className="relative flex h-full flex-col justify-between rounded-md border border-zinc-100 bg-white p-6 shadow-sm">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="whitespace-pre-line text-[18px] font-semibold leading-6 text-zinc-900">
            {title}
          </h3>
          <PriceTag value={price} />
        </div>

        <ul className="mt-3 space-y-1 text-[14px] leading-6 text-zinc-600">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <OrderBtn className="mt-5 w-[110px]" />
    </article>
  );
}

function MenuImage({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-md">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default function MenuSection({
  id = "menu",
  heading = "Our Menu",
  accent = "Specialties",
  data = items,
}) {
  return (
    <section id={id} className="relative isolate bg-white py-24">
      {/* Accent script behind main heading */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-6 text-center"
      >
        <span className="select-none font-serif italic text-[64px] sm:text-[76px] md:text-[84px] leading-none tracking-wide text-amber-900/20">
          {accent}
        </span>
      </div>

      <div className="mx-auto max-w-[1040px] px-4">
        <h2 className="text-center text-[34px] sm:text-[36px] md:text-[38px] font-extrabold leading-tight text-zinc-900">
          {heading}
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((it, i) =>
            it.type === "card" ? (
              <MenuCard
                key={i}
                title={it.title}
                price={it.price}
                bullets={it.bullets}
              />
            ) : (
              <MenuImage key={i} src={it.src} alt={it.alt} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
