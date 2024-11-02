import React from 'react';

export default function Buildx() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      {/* Main Title */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mr-0">First Edition<br />6th - 11th Dec</h2>
        <h1 className="text-9xl font-bold mt-4">BUIDLX</h1>
        <p className="text-lg mt-4">
          VIT Vellore's first chain-agnostic conference connecting Web3 builders 
          with global opportunities, attracting attendees worldwide in 2022, 
          2023, and 2024.
        </p>
      </div>

      {/* Button */}
      {/* <button className="mt-8 px-8 py-4 bg-gray-200 rounded-full font-bold hover:bg-gray-300 transition duration-300">
        Register Now
      </button> */}
    </div>
  );
};

