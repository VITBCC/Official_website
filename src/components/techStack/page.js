import React from "react";
import Marquee from "../magicui/marquee";

const logos = [
  "/Accelchain1.png", // Replace with your logo URLs
  "/avalanche.png",
  "/stark.png",
  "/logo_blue1.png",
  "/tpg.png",
];

export default function Companies() {
  return (
    <div className="bg-black text-white w-screen pb-16 font-mono pt-10">
      <div className="flex md:flex-row flex-col justify-around p-6 items-center md:gap-0 gap-6">
        <div className="text-4xl font-bold flex flex-col gap-y-2">
          Why? <br />
          <span className="text-3xl">VIT Blockchain Community</span>
        </div>
        <div className="font-thin max-w-[30rem] text-sm">
          Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet
          tellus purus sit odio eget. Diam morbi faucibus vitae neque id in.
          Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-10">
        <Marquee pauseOnHover className="[--duration:10s]">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-24 h-auto mx-7" // Added some spacing with `mx-4`
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}