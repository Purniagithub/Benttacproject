import React from "react";

const BG_IMG = "/images/food-bg.jpg";          // full-width background for reservation
const AV1 = "/customer-1.jpeg";
const AV2 = "/customer-2.jpeg";
const AV3 = "/customer-3.png";

function Accent({ text, className = "" }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 -top-4 text-center ${className}`}>
      <span className="select-none font-serif italic text-amber-700/60 leading-none tracking-wide text-[54px] sm:text-[64px]">
        {text}
      </span>
    </div>
  );
}

function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-9 w-full rounded border border-zinc-200 bg-white px-3 text-[13px] text-zinc-700 outline-none placeholder:text-zinc-400 focus:border-amber-400"
    />
  );
}

function Select({ placeholder }) {
  return (
    <select
      className="h-9 w-full rounded border border-zinc-200 bg-white px-3 text-[13px] text-zinc-700 outline-none focus:border-amber-400"
      defaultValue=""
    >
      <option value="" disabled>
        {placeholder}
      </option>
      <option>1 Person</option>
      <option>2 Person</option>
      <option>3 Person</option>
      <option>4 Person</option>
      <option>5+ Person</option>
    </select>
  );
}

function ReservationCard() {
  return (
    <div className="relative mx-auto w-[540px] max-w-[92vw] rounded bg-white p-4 shadow-lg ml-12">
      <h3 className="mb-3 text-center text-[26px] font-extrabold text-zinc-900">
        Make Reservation
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Name</label>
          <Input placeholder="Your Name" />
        </div>
        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Email</label>
          <Input type="email" placeholder="Your Email" />
        </div>

        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Phone</label>
          <Input placeholder="Phone" />
        </div>
        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Phone</label>
          <Input placeholder="Date" type="date" />
        </div>

        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Time</label>
          <Input placeholder="Time" type="time" />
        </div>
        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Person</label>
          <Select placeholder="Person" />
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="h-9 rounded bg-amber-500 px-5 text-[12px] font-semibold text-white shadow hover:bg-amber-600">
          Make a Reservation
        </button>
      </div>
    </div>
  );
}

function TestiCard({ img, name, role, text }) {
  return (
    <article className="text-center">
      <div className="mx-auto mb-4 h-[64px] w-[64px] overflow-hidden rounded-full ring-4 ring-amber-100">
        <img src={img} alt={name} className="h-full w-full object-cover" />
      </div>
      <p className="mx-auto mb-4 max-w-[260px] text-[13px] leading-6 text-zinc-600">{text}</p>
      <h4 className="text-[14px] font-semibold text-zinc-900">{name}</h4>
      <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-400">{role}</p>
    </article>
  );
}

export default function ReservationTestimonials() {
  return (
    <section className="bg-white">
      {/* Top: reservation over image */}
      <div
        className="relative bg-zinc-900"
        style={{
          backgroundImage: `url(${'/dish-13.jpg'})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto max-w-[1080px] px-4 py-16 sm:py-20">
          <div className="relative">
            <Accent text="Book a table" />
            <ReservationCard />
          </div>
        </div>
      </div>

      {/* Bottom: testimonials */}
      <div className="relative mx-auto max-w-[980px] px-4 py-16 sm:py-20">
        <div className="relative">
          <Accent text="Testimony" />
          <h2 className="text-center text-[32px] sm:text-[36px] font-extrabold text-zinc-900">
            Happy Customer
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <TestiCard
            img={AV1}
            name="Ian Boner"
            role="Customer"
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <TestiCard
            img={AV2}
            name="Jason McClean"
            role="Customer"
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
          <TestiCard
            img={AV3}
            name="Mark Stevenson"
            role="Customer"
            text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          />
        </div>

        {/* dots */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
        </div>
      </div>
    </section>
  );
}
