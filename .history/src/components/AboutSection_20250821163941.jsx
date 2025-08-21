// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Images */}
        <div className="flex justify-center items-center gap-6">
          <img
            src="/chef-1.jpeg"
            alt="Chef serving"
            className="rounded-lg shadow-lg object-cover h-[280px] w-[220px] lg:h-[320px] lg:w-[250px]"
          />
          <img
            src="/chef-3.jpeg"
            alt="Cooking food"
            className="rounded-lg shadow-lg object-cover h-[280px] w-[220px] lg:h-[320px] lg:w-[250px] mt-10"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-lg font-serif italic text-[#CDA45E] relative mb-3">
            <span className="absolute -left-8 -top-4 text-6xl font-serif text-gray-200 opacity-40 select-none">
              About
            </span>
            About Us
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Feliciano Restaurant
          </h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <p className="text-gray-700 mb-2">
            Mon - Fri <span className="font-bold">8 AM - 11 PM</span>
          </p>
          <p className="text-2xl font-bold text-[#CDA45E] mb-6">
            +1-978-123-4567
          </p>

         {/* Stats Section */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 border-t border-gray-200 pt-10">
  <div className="text-center">
    <h4 className="text-3xl font-bold text-[#CDA45E]">18</h4>
    <p className="text-sm text-gray-600">Years of Experience</p>
  </div>
  <div className="text-center">
    <h4 className="text-3xl font-bold text-[#CDA45E]">100</h4>
    <p className="text-sm text-gray-600">Menus/Dish</p>
  </div>
  <div className="text-center">
    <h4 className="text-3xl font-bold text-[#CDA45E]">50</h4>
    <p className="text-sm text-gray-600">Staffs</p>
  </div>
  <div className="text-center">
    <h4 className="text-3xl font-bold text-[#CDA45E]">15,000</h4>
    <p className="text-sm text-gray-600">Happy Customers</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
