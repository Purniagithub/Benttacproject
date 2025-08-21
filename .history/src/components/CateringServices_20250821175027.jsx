import React from "react";

function IconCake(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3" />
        <path d="M9 6a3 3 0 1 0 6 0" />
        <path d="M6 12h12" />
        <path d="M6 12v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7" />
      </g>
    </svg>
  );
}

function IconMeeting(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 7h10M7 12h7" />
        <path d="M3 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
      </g>
    </svg>
  );
}

function IconCloche(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        <path d="M4 16a8 8 0 1 1 16 0" />
        <path d="M4 16h16" />
      </g>
    </svg>
  );
}

const cards = [
  {
    title: "Birthday Party",
    text:
      "Even the all‑powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    Icon: IconCake,
  },
  {
    title: "Business Meetings",
    text:
      "Even the all‑powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    Icon: IconMeeting,
  },
  {
    title: "Wedding Party",
    text:
      "Even the all‑powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    Icon: IconCloche,
  },
];

export default function CateringServices({
  id = "services",
  heading = "Catering Services",
  accent = "Services",
}) {
  return (
    <section id={id} className="relative isolate bg-white py-24 sm:py-28">
      {/* Accent word behind heading */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-1 sm:top-0 text-center">
        <span className="select-none font-serif italic tracking-tighter text-amber-700/50 text-7xl sm:text-6xl md:text-[68px] leading-none">
          {accent}
        </span>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 -mt-12">
        {/* Main heading */}
        <h2 className="text-center text-[34px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-zinc-900">
          {heading}
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {cards.map(({ title, text, Icon }) => (
            <article key={title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 ring-1 ring-amber-100 text-amber-600">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-[20px] font-semibold text-zinc-900">{title}</h3>
              <p className="mt-3 mx-auto max-w-[340px] text-[15px] leading-7 text-zinc-500">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
