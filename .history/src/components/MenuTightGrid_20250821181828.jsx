import React from "react";

const tiles = [
  // Row 1
  { type: "image", src: "/dish-1.jpeg", alt: "Dish 1" },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, lines: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "image", src: "/dish-2.jpeg", alt: "Dish 2" },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, lines: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  // Row 2
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, lines: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "image", src: "/images/menu-3.jpg", alt: "Dish 3" },
  { type: "image", src: "/images/menu-4.jpg", alt: "Dish 4" },
  { type: "image", src: "/images/menu-5.jpg", alt: "Dish 5" },
  // Row 3
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, lines: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, lines: ["Meat, Potatoes, Rice,", "Tomatoe"] },
  { type: "image", src: "/images/menu-6.jpg", alt: "Dish 6" },
  { type: "card",  title: "Grilled Beef\nwith potatoes", price: 29, lines: ["Meat, Potatoes, Rice,", "Tomatoe"] },
];

function Price({ value }) {
  return <span className="text-[16px] font-semibold text-amber-600">{`$${value}`}</span>;
}

function OrderBtn() {
  return (
    <button className="inline-flex h-8 items-center rounded bg-amber-500 px-3 text-xs font-semibold text-white hover:bg-amber-600">
      Order now
    </button>
  );
}

function Card({ title, price, lines }) {
  return (
    // NO outer padding or margin; fill the grid cell entirely
    <div className="h-full w-full bg-white">
      {/* Internal spacing for the card content only */}
      <article className="flex h-full w-full flex-col justify-between p-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="whitespace-pre-line text-[16px] font-semibold leading-6 text-zinc-900">
              {title}
            </h3>
            <Price value={price} />
          </div>
          <ul className="mt-2 space-y-0.5 text-[13px] leading-6 text-zinc-600">
            {lines.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
        <OrderBtn />
      </article>
    </div>
  );
}

function TileImage({ src, alt }) {
  return (
    // NO padding/margin; image covers the tile
    <div className="h-full w-full">
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

export default function MenuTightGrid({
  id = "menu",
  heading = "Our Menu",
  accent = "Specialties",
  data = tiles,
  // Adjust these two to tune exact size
  tileHeight = 210,      // each tile’s fixed height (px)
  containerWidth = 980,  // overall section width (px)
}) {
  return (
    <section id={id} className="relative isolate bg-white py-14">
      {/* Accent script word behind heading */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1 text-center">
        <span className="select-none font-serif italic text-[60px] md:text-[72px] leading-none tracking-wide text-amber-900/20">
          {accent}
        </span>
      </div>

      <div className="mx-auto px-4" style={{ maxWidth: `${containerWidth}px` }}>
        <h2 className="text-center text-[30px] md:text-[34px] font-extrabold leading-tight text-zinc-900">
          {heading}
        </h2>

        {/* 4-column grid — zero gap, zero padding */}
        <div className="mt-8 grid grid-cols-4 gap-0">
          {data.map((t, i) => (
            <div key={i} className="m-0 p-0" style={{ height: `${tileHeight}px` }}>
              {t.type === "card" ? (
                <Card title={t.title} price={t.price} lines={t.lines} />
              ) : (
                <TileImage src={t.src} alt={t.alt} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
