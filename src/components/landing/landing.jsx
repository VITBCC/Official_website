"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import WordRotate from "../magicui/word-rotate";
import { useState } from "react";
const Landing = () => {
  const [email, setEmail] = useState("");

  
  return (
    <div className="bg-gradient dark relative flex w-full items-center justify-center overflow-hidden bg-background p-20 md:shadow-xl h-screen">
      <div>
        <p className="z-10 whitespace-pre-wrap text-center text-2axl lg:text-5xl m-2 lg:m-5 font-medium tracking-tighter text-black dark:text-white">
          Effortless Deployment with
        </p>
        <h1 className="z-10 text-gradient whitespace-pre-wrap text-center text-5xl lg:text-9xl font-bold tracking-normal text-black dark:text-white">
          GvAutomata
        </h1>
        <div className="z-10 whitespace-pre-wrap text-center text-5xl lg:m-5 font-medium  lg:tracking-tighter text-black dark:text-white">
          <WordRotate
            className="text-xl lg:text-5xl font-bold text-black dark:text-white"
            words={["Upload", "Publish", "Deploy"]}
          />
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-xl lg:text-5xl  lg:m-5 font-medium tracking-tighter text-black dark:text-white">
          in One Click!
        </p>
        <p className="z-10 whitespace-pre-wrap text-center text-sm lg:text-l m-5 font-light tracking-tighter text-black dark:text-white">
          Upload, publish to GitHub, and deploy to Vercel in one click with a quick, seamless setup.
        </p>
        <div className="flex items-center justify-center">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
            className=" bg-transparent dark:text-white border-separate z-10 whitespace-pre-wrap text-left p-2 lg:p-3 lg:w-96 border-white focus:outline-none focus:border-[#EF9364] border-2 border-spacing-0 rounded-full"></input>
          <button className="z-10 whitespace-pre-wrap text-center m-2 lg:m-5 p-2 lg:p-4 rounded-full bg-[#FFA800]">ATTRACT</button>
        </div>
      </div>
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default Landing;
