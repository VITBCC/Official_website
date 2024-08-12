"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import WordRotate from "../magicui/word-rotate";

const Landing = () => {
  return (
    <div className="bg-gradient dark relative flex w-full items-center justify-center overflow-hidden bg-background p-20 md:shadow-xl h-screen">
      <div>
        <p className="z-10 whitespace-pre-wrap text-center text-xl lg:text-5xl m-5 font-medium tracking-tighter text-black dark:text-white">
          Effortless Deployment with
        </p>
        <h1 className="z-10 text-gradient whitespace-pre-wrap text-center text-xl lg:text-9xl font-bold tracking-normal text-black dark:text-white"> 
          GvAutomata
        </h1>
        <div className="z-10 whitespace-pre-wrap text-center text-5xl m-5 font-medium tracking-tighter text-black dark:text-white">
          <WordRotate
            className="text-xl lg:text-5xl font-bold text-black dark:text-white"
            words={["Upload", "Publish", "Deploy"]}
          />
        </div>
        <p className="z-10 whitespace-pre-wrap text-center text-5xl m-5 font-medium tracking-tighter text-black dark:text-white">
          in One Click!
        </p>      
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
