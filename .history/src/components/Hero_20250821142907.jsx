import React from "react";

const dishes = [
  { id: 1, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish1.jpg" },
  { id: 2, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish2.jpg" },
  { id: 3, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish3.jpg" },
  { id: 4, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish4.jpg" },
];

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/img-4.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-4xl italic text-yellow-200">Feliciano</h2>
        <h1 className="text-6xl font-bold mt-3">BEST RESTAURANT</h1>
      </div>

      {/* Dish Cards */}
      <div className="relative z-10 flex justify-center space-x-28 mt-32 mb-8">
        {dishes.map((dish) => (
          <div key={dish.id} className="text-center">
            <img
              src={dish.img}
              alt={dish.name}
              className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-gray-200"
            />
            <h3 className="mt-4 font-semibold">{dish.name}</h3>
            <p className="text-sm text-gray-300">{dish.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
