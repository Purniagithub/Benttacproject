// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/chef-1.jpg"
            alt="Chef serving"
            className="rounded-lg shadow-md object-cover h-[350px] w-full"
          />
          <img
            src="/chef-2.jpg"
            alt="Cooking food"
            className="rounded-lg shadow-md object-cover h-[350px] w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-xl font-serif italic text-gray-500 relative">
            <span className="absolute -left-6 text-5xl text-gray-300 opacity-30">
              About
            </span>
            About Us
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Feliciano Restaurant
          </h2>
          <p className="text-gray-600 mb-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <p className="text-gray-700 mb-4">
            Mon - Fri <span className="font-bold">8 AM - 11 PM</span>
          </p>
          <p className="text-2xl font-bold text-yellow-600 mb-6">
            +1-978-123-4567
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-yellow-600">18</h4>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-yellow-600">100</h4>
              <p className="text-sm text-gray-600">Menus/Dish</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-yellow-600">50</h4>
              <p className="text-sm text-gray-600">Staffs</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-yellow-600">15,000</h4>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
