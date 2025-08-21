import React from "react";

// Customer avatars
const AV1 = "/customer-1.jpeg";
const AV2 = "/customer-2.jpeg";
const AV3 = "/customer-3.png";

/* Accent word behind headings */
function Accent({ text, className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -top-8 text-center ${className}`}
    >
      <span className="select-none font-serif italic leading-none tracking-wide text-amber-700/50 text-[56px] sm:text-[64px]">
        {text}
      </span>
    </div>
  );
}

/* Inputs */
function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-10 w-full rounded border border-zinc-200 bg-white px-3 text-[14px] text-zinc-700 outline-none placeholder:text-zinc-400 focus:border-amber-400"
    />
  );
}
function Select({ placeholder }) {
  return (
    <select
      defaultValue=""
      className="h-10 w-full rounded border border-zinc-200 bg-white px-3 text-[14px] text-zinc-700 outline-none focus:border-amber-400"
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

/* Reservation card */
function ReservationCard() {
  return (
    <div className="relative mx-auto w-[640px] max-w-[92vw] rounded-md bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
      <h3 className="mb-4 text-center text-[26px] font-extrabold leading-none text-zinc-900">
        Make Reservation
      </h3>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
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
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Date</label>
          <Input type="date" />
        </div>

        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Time</label>
          <Input type="time" />
        </div>
        <div>
          <label className="mb-1 block text-[12px] font-medium text-zinc-700">Person</label>
          <Select placeholder="Person" />
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="h-9 rounded bg-[#C8A45D] px-5 text-[12px] font-semibold text-white shadow hover:bg-[#b28d4f]">
          Make a Reservation
        </button>
      </div>
    </div>
  );
}

/* Testimonial card */
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

/* Main section */
export default function ReservationTestimonials() {
  return (
    <section className="bg-white">
      {/* Top: hero with centered card */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/dish-13.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* slight dark overlay for readability */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Constrained container and vertical space like screenshot */}
        <div className="relative mx-auto max-w-[1080px] px-4">
          <div className="relative flex justify-center py-16 sm:py-20" style={{ minHeight: 360 }}>
            <div className="absolute inset-x-0 -top-6 text-center">
              <Accent text="Book a table" />
            </div>
            <ReservationCard />
          </div>
        </div>
      </div>

      {/* Bottom: Testimonials */}
      <div className="relative mx-auto max-w-[980px] px-4 py-20 sm:py-24">
        <div className="relative text-center mb-12">
          <Accent text="Testimony" />
          <h2 className="relative text-[30px] sm:text-[34px] font-bold text-zinc-900">
            Happy Customer
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
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

        {/* Dots */}
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
