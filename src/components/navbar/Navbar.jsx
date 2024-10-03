// components/Navbar.js
"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import the router hook

const Navbar = () => {
  const router = useRouter(); // Use the router hook

  function handleClick() {
    // Navigate to the Login page
    router.push("/Login"); // This will redirect to src/app/Login
  }

  function handleClickLeaderboard() {
    // Navigate to the Login page
    router.push("/Leaderboard"); // This will redirect to src/app/Login
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold text-gradient">BCC-VIT</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button href="#" className="hover:text-gray-400 lg:p-2">
            Blogs
          </button>
          <a href="#" className="hover:text-gray-400 lg:p-2">
            Events
          </a>
          <a
            href="#"
            className="whitespace-pre-wrap text-center lg:p-2 rounded-full bg-[#FFA800]"
          >
            Hackathon
          </a>
          <button
            onClick={handleClickLeaderboard}
            className="hover:text-gray-400 lg:p-2"
          >
            Leaderboard
          </button>
          <a href="#" className="hover:text-gray-400 lg:p-2">
            Projects
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
