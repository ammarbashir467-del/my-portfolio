import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },  //items
    { name: "Projects", path: "/project" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="w-full h-16 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-xl
      bg-gradient-to-r from-[#0f0c29]/90 via-[#302b63]/90 to-[#24243e]/90 
      shadow-[0_0_30px_rgba(236,72,153,0.25)]
      text-white relative"
    >
      {/* LOGO */}
      <h1
        className="text-2xl font-extrabold
        bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
        bg-clip-text text-transparent"
      >
        Ammar
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 font-medium relative">
        {links.map((item, index) => (
          <div key={index} className="relative group">
            <Link
              to={item.path}
              className={`transition-all duration-300
              ${
                location.pathname === item.path ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent" : "text-white"
              }`}
            >
              {item.name}
            </Link>

            {/* Animated Underline */}
            <span
              className={`absolute left-0 -bottom-2 h-[2px]
              bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
              transition-all duration-300
              ${
                location.pathname === item.path
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </div>
        ))}
      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-3xl text-pink-400 cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full md:hidden 
          bg-gradient-to-r from-[#1f1c2c] to-[#928dab]
          p-4 flex flex-col gap-3 shadow-xl"
        >
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`cursor-pointer text-lg px-4 py-3 rounded-xl
              transition-all duration-300 block
              ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white shadow-lg"
                  : "bg-black/30 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;