// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Grid (Images + Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Images */}
          <div className="flex justify-center gap-4">
            <img
              src="/chef-1.jpeg"
              alt="Chef serving"
              className="shadow-md object-cover h-[280px] w-[180px]"
            />
            <img
              src="/chef-5.jpeg"
              alt="Cooking food"
              className="shadow-md object-cover h-[280px] w-[180px] mt-8"
            />
          </div>

          {/* Right Content */}
          <div className="text-left lg:text-left">
            <h3 className="text-lg font-serif italic text-[#CDA45E] relative mb-2">
              <span className="absolute -left-6 top-0 text-5xl text-gray-200 opacity-40">
                About
              </span>
              About Us
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-wide">
              Feliciano Restaurant
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>

            <p className="text-gray-700 mb-2">
              Mon - Fri <span className="font-bold">8 AM - 11 PM</span>
            </p>
            <p className="text-2xl font-bold text-[#CDA45E]">
              +1-978-123-4567
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-16 pt-10">
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
          <div className="text-center text-xs line-clamp-4">
            <p className="text-xs text-gray-600">A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
