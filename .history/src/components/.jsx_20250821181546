import React from "react";

const items = [
  // Row 1 (4 cols)
  { type: "image", src: "/images/menu-1.jpg", alt: "Dish 1" },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, bullets: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "image", src: "/images/menu-2.jpg", alt: "Dish 2" },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, bullets: ["Meat, Potatoes, Rice,", "Tomatoe"] },

  // Row 2 (4 cols)
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, bullets: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "image", src: "/images/menu-3.jpg", alt: "Dish 3" },
  { type: "image", src: "/images/menu-4.jpg", alt: "Dish 4" },
  { type: "image", src: "/images/menu-5.jpg", alt: "Dish 5" },

  // Row 3 (4 cols)
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, bullets: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, bullets: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "image", src: "/images/menu-6.jpg", alt: "Dish 6" },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, bullets: ["Meat, Potatoes, Rice,", "Tomatoe"] },
];

function Price({ value }) {
  return <span className="text-[16px] font-semibold text-amber-600">{`$${value}`}</span>;
}

function OrderBtn({ className = "" }) {
  return (
    <button
      className={
        "inline-flex h-8 items-center rounded bg-amber-500 px-3 text-xs font-semibold text-white shadow-sm hover:bg-amber-600 " +
        className
      }
    >
      Order now
    </button>
  );
}

function Card({ title, price, bullets }) {
  return (
    <article className="relative flex h-[190px] flex-col justify-between rounded-md border border-zinc-100 bg-white p-4 shadow-sm">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="whitespace-pre-line text-[16px] font-semibold leading-6 text-zinc-900">
            {title}
          </h3>
          <Price value={price} />
        </div>
        <ul className="mt-2 space-y-0.5 text-[13px] leading-6 text-zinc-600">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
      <OrderBtn className="mt-3 w-[96px]" />
    </article>
  );
}

function TileImage({ src, alt }) {
  return (
    <div className="h-[190px] overflow-hidden rounded-md">
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

export default function MenuSection4Col({
  id = "menu",
  heading = "Our Menu",
  accent = "Specialties",
  data = items,
}) {
  return (
    <section id={id} className="relative isolate bg-white py-20">
      {/* Accent script behind the heading */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-3 text-center">
        <span className="select-none font-serif italic text-[60px] md:text-[72px] leading-none tracking-wide text-amber-900/20">
          {accent}
        </span>
      </div>

      {/* Container width kept small like screenshot */}
      <div className="mx-auto max-w-[980px] px-4">
        <h2 className="text-center text-[30px] md:text-[34px] font-extrabold leading-tight text-zinc-900">
          {heading}
        </h2>

        {/* 4-column compact grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((it, i) =>
            it.type === "card" ? (
              <Card key={i} title={it.title} price={it.price} bullets={it.bullets} />
            ) : (
              <TileImage key={i} src={it.src} alt={it.alt} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
