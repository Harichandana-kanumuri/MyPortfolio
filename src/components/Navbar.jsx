// src/components/Navbar.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo removed */}
      <div></div> {/* Keeps the spacing if needed, or remove this div if unnecessary */}
      <div className="flex items-center gap-6 text-white">
        <a href="https://www.linkedin.com/in/harichandana-kanumuri" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Harichandana-Kanumuri" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://medium.com/@chandu.k6798" target="_blank" rel="noopener noreferrer">
          <FaMedium size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
