"use client";
import React from "react";

const Company = () => {
  const logo = "/stark.png";
  return (
    <div
      id="timeline"
      className="w-full flex flex-col items-center justify-between mt-[60px] p-4"
    >
      {/* Section Title */}
      <div className="w-full flex flex-row items-center justify-between mb-[30px]">
        <div className="w-full text-white font-extrabold text-[84px] my-2">
          Memories
        </div>
        <div className="text-white font-regular text-lg w-4/5 text-right text-balance">
          Organizations and individuals who have supported Web3Conf in the past.
          They have been vital to our success.
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full flex flex-wrap items-center justify-between mb-2 gap-[2px] p-4 border-[1px] border-solid border-white rounded-3xl">
        {/* Example of Image Rendering */}
        <img
          className="max-h-[80px] max-w-[160px] p-4"
          src={logo}
          alt="Image 1"
        />
        <img
          className="max-h-[80px] max-w-[160px] p-4"
          src={logo}
          alt="Image 2"
        />
        <img
          className="max-h-[80px] max-w-[160px] p-4"
          src={logo}
          alt="Base64 encoded image"
        />
        <img
          className="max-h-[80px] max-w-[160px] p-4"
          src={logo}
          alt="Image 2"
        />
        <img
          className="max-h-[80px] max-w-[160px] p-4"
          src={logo}
          alt="Image 2"
        />
      </div>
    </div>
  );
};

export default Company;