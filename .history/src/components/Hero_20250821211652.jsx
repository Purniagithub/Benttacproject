import React from "react";
import AboutSection from "../components/AboutSection";
import CateringServices from "./CateringServices";
import MenuTightGrid from "../components/MenuTightGrid";
import MasterChef from "../components/MasterChef";
import ReservationTestimonials from "../components/ReservationTestimonials";
import RecentPosts from "../components/RecentPosts";
import SiteFooter from "../components/SiteFooter";

const dishes = [
  { id: 1, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-1.jpeg" },
  { id: 2, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-2.jpeg" },
  { id: 3, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-3.jpeg" },
  { id: 4, name: "Grilled Beef with potatoes", desc: "Meat, Potatoes, Rice, Tomato", img: "/dish-4.jpeg" },
];

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] sm:h-[85vh] md:h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
        style={{ backgroundImage: "url('/img-4.jpeg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Headings */}
        <div className="relative z-10 text-center mt-28 sm:mt-32 md:mt-36 lg:mt-40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#CDA45E]">
            Feliciano
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide mt-3 md:mt-5 uppercase">
            Best Restaurant
          </h1>
        </div>

        {/* Dish Cards */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-14 lg:gap-20 mt-14 sm:mt-16 md:mt-20 lg:mt-28">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="text-center max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] mx-auto"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full mx-auto border-4 border-white shadow-lg"
              />
              <h3 className="mt-3 font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap">
                {dish.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other sections */}
      <AboutSection />
      <CateringServices />
      <MenuTightGrid tileHeight={210} containerWidth={980} />
      <MasterChef />
      <ReservationTestimonials />
      <RecentPosts />
      <SiteFooter />
    </>
  );
};

export default Hero;
