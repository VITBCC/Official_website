// components/Navbar.js
"use client";
import React from "react";

const Navbar = () => {
  async function handleClick() {
    // Redirect the user to GitHub's OAuth URL
    window.location.href = "http://localhost:8002/api/v1/users/auth";
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold text-gradient">BCC-VIT</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <div className="group relative">
            <button className="hover:text-gray-400 lg:p-2">Club</button>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white text-black shadow-md group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Events
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Leaderboard
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Projects
              </a>
            </div>
          </div>
          <a
            href="#"
            className="whitespace-pre-wrap text-center lg:p-2 rounded-full bg-[#FFA800]"
          >
            Hackathon
          </a>
          <a href="#" className="hover:text-gray-400 lg:p-2">
            Resources
          </a>
        </div>
        <button
          onClick={handleClick}
          className=" bg-transparent text-[#FFA800] border-separate z-10 whitespace-pre-wrap text-left p-2 lg:p-3 border-[#FFA800] border-2 border-spacing-0 rounded-full"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
