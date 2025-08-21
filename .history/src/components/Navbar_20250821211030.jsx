import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-black bg-opacity-70 text-white text-sm px-6 py-2 space-y-2 sm:space-y-0">
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          <span>📞 +1235 2355 98</span>
          <span>✉️ youremail@email.com</span>
        </div>
        <span className="text-center sm:text-right">
          Open hours: Monday - Sunday 8:00AM - 9:00PM
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black bg-opacity-60 text-white px-6 sm:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Feliciano</h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-400">Stories</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>

          {/* Book a table button (desktop only) */}
          <button className="hidden md:block bg-yellow-600 hover:bg-yellow-700 px-5 py-2 rounded text-black font-semibold">
            Book a table
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About</a>
            <a href="#" className="hover:text-yellow-400">Menu</a>
            <a href="#" className="hover:text-yellow-400">Stories</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
            <button className="bg-yellow-600 hover:bg-yellow-700 px-5 py-2 rounded text-black font-semibold">
              Book a table
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
