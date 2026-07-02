import React, { useState } from "react";
import File from "../assets/file.png";
import resume from "../assets/resume.pdf";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#pro" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 px-5 sm:px-10 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-mono font-bold text-2xl sm:text-3xl tracking-tighter">
          PORTFOLIO.
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 px-6 py-2 border-2 border-black rounded-2xl font-bold text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className="hover:text-blue-500 relative transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Download Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href={resume}
            download
            className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-500 transition-all duration-300 hover:scale-105"
          >
            Download CV
            <img src={File} alt="download" className="w-4 h-4 invert" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-black z-50" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 shadow-xl" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-10 font-bold text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                onClick={() => setIsOpen(false)} // This closes the menu so you can see the section scroll!
                className="hover:text-blue-500 transition-colors"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resume}
              download
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-medium"
            >
              Download CV
              <img src={File} alt="download" className="w-4 h-4 invert" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;