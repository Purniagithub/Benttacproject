import React from "react";

const dishes = [
  { id: 1, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-1.jpeg" },
  { id: 2, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-2.jpeg" },
  { id: 3, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-3.jpeg" },
  { id: 4, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-4.jpeg" },
];

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/img-4.jpeg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Headings */}
      <div className="relative z-10 text-center -mt-10">
        <h2 className="text-5xl font-serif italic text-[#CDA45E]">Feliciano</h2>
        <h1 className="text-7xl font-extrabold tracking-wide mt-4 uppercase">
          Best Restaurant
        </h1>
      </div>

      {/* Dish Cards */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-16 mt-28">
        {dishes.map((dish) => (
          <div key={dish.id} className="text-center max-w-[180px] mx-auto">
            <img
              src={dish.img}
              alt={dish.name}
              className="w-28 h-28 object-cover rounded-full mx-auto border-4 border-white shadow-lg"
            />
            <h3 className="mt-4 font-semibold text-lg">{dish.name}</h3>
            <p className="text-sm text-gray-300">{dish.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
