import React from "react";

// Placeholder image paths
const AV1 = "/customer-1.jpeg";
const AV2 = "/customer-2.jpeg";
const AV3 = "/customer-3.png";

/**
 * Renders the large, italicized accent text for section headers.
 * @param {object} props - The component props.
 * @param {string} props.text - The text to display.
 * @param {string} [props.className=""] - Additional Tailwind CSS classes.
 * @returns {JSX.Element} The rendered component.
 */
function Accent({ text, className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -top-8 text-center sm:text-left ${className}`}
    >
      <span className="select-none font-serif italic text-amber-700/60 leading-none tracking-wide text-[52px] sm:text-[60px]">
        {text}
      </span>
    </div>
  );
}

/**
 * A reusable input component with Tailwind styling.
 * @param {object} props - The component props.
 * @param {string} props.placeholder - The input placeholder text.
 * @param {string} [props.type="text"] - The input type.
 * @returns {JSX.Element} The rendered component.
 */
function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-10 w-full rounded border border-zinc-200 bg-white px-3 text-[14px] text-zinc-700 outline-none placeholder:text-zinc-400 focus:border-amber-400"
    />
  );
}

/**
 * A reusable select dropdown component with Tailwind styling.
 * @param {object} props - The component props.
 * @param {string} props.placeholder - The select placeholder text.
 * @returns {JSX.Element} The rendered component.
 */
function Select({ placeholder }) {
  return (
    <select
      className="h-10 w-full rounded border border-zinc-200 bg-white px-3 text-[14px] text-zinc-700 outline-none focus:border-amber-400"
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

/**
 * The reservation form card component.
 * @returns {JSX.Element} The rendered component.
 */
function ReservationCard() {
  return (
    <div className="relative w-[540px] max-w-[92vw] rounded bg-white p-6 shadow-xl">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="mb-1 block text-[13px] font-medium text-zinc-700">
            Name
          </label>
          <Input placeholder="Your Name" />
        </div>
        <div>
          <label className="mb-1 block text-[13px] font-medium text-zinc-700">
            Email
          </label>
          <Input type="email" placeholder="Your Email" />
        </div>

        <div>
          <label className="mb-1 block text-[13px] font-medium text-zinc-700">
            Phone
          </label>
          <Input placeholder="Phone" />
        </div>
        <div>
          <label className="mb-1 block text-[13px] font-medium text-zinc-700">
            Date
          </label>
          <Input type="date" />
        </div>

        <div>
          <label className="mb-1 block text-[13px] font-medium text-zinc-700">
            Time
          </label>
          <Input type="time" />
        </div>
        <div>
          <label className="mb-1 block text-[13px] font-medium text-zinc-700">
            Person
          </label>
          <Select placeholder="Person" />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="h-10 rounded bg-[#C8A45D] px-6 text-[13px] font-semibold text-white shadow hover:bg-[#b28d4f]">
          Make a Reservation
        </button>
      </div>
    </div>
  );
}

/**
 * A single testimonial card component.
 * @param {object} props - The component props.
 * @param {string} props.img - The image URL for the customer.
 * @param {string} props.name - The customer's name.
 * @param {string} props.role - The customer's role.
 * @param {string} props.text - The testimonial text.
 * @returns {JSX.Element} The rendered component.
 */
function TestiCard({ img, name, role, text }) {
  return (
    <article className="shrink-0 snap-center text-center">
      <div className="mx-auto mb-4 h-[72px] w-[72px] rounded-full bg-amber-500 p-[3px]">
        <div className="h-full w-full overflow-hidden rounded-full ring-4 ring-amber-100">
          <img src={img} alt={name} className="h-full w-full object-cover" />
        </div>
      </div>
      <p className="mx-auto mb-4 max-w-[260px] text-[14px] leading-6 text-zinc-600">
        {text}
      </p>
      <h4 className="text-[15px] font-semibold text-zinc-900">{name}</h4>
      <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-400">
        {role}
      </p>
    </article>
  );
}

/**
 * The main component for the Reservation and Testimonials sections.
 * @returns {JSX.Element} The rendered component.
 */
export default function ReservationTestimonials() {
  return (
    <section className="bg-white">
      {/* Reservation Section */}
      <div
        className="relative bg-zinc-900"
        style={{
          backgroundImage: `url('/dish-13.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-[1080px] px-4 py-20 sm:py-24">
          {/* Text on top */}
          <div className="relative mb-1">
            <Accent className="text-zinc-900/30" text="Book a table" />
            <h2 className="relative text-center sm:text-left text-[36px] sm:text-[38px] font-extrabold text-white">
              Make Reservation
            </h2>
          </div>

          {/* Form aligned left */}
          <div className="relative flex justify-start">
            <ReservationCard />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative mx-auto max-w-[980px] px-4 py-20 sm:py-24">
        <div className="relative">
          <Accent className="ml-64 text-center" text="Testimony" />
          <h2 className="text-center text-[34px] sm:text-[38px] font-extrabold text-zinc-900">
            Happy Customer
          </h2>
        </div>

        {/* This div is made scrollable */}
        <div className="mt-14 flex snap-x snap-mandatory gap-12 overflow-x-auto sm:grid sm:grid-cols-3 sm:overflow-x-hidden">
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
        <div className="mt-10 flex justify-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        </div>
      </div>
    </section>
  );
}
