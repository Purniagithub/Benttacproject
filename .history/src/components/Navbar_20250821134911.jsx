import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="flex justify-between items-center bg-black bg-opacity-70 text-white text-sm px-6 py-2">
        <div className="flex space-x-6">
          <span>📞 +1235 2355 98</span>
          <span>✉️ youremail@email.com</span>
        </div>
        <span>Open hours: Monday - Sunday 8:00AM - 9:00PM</span>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center bg-black bg-opacity-60 text-white px-8 py-4">
        <h1 className="text-xl font-bold">Feliciano</h1>
        <ul className="flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
          <li><a href="#" className="hover:text-yellow-400">Menu</a></li>
          <li><a href="#" className="hover:text-yellow-400">Stories</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>
        <button className="bg-yellow-600 hover:bg-yellow-700 px-5 py-2 rounded text-black font-semibold">
          Book a table
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
