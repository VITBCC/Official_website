import React from "react";
import Image from "next/image";
export default function ChooseUs() {
    return (
        <div className="bg-black w-screen flex md:flex-row flex-col items-center justify-center h-[30rem]">
            <div className="md:w-1/2">
                <img src="/choose.svg" />
            </div>
            <div className="md:w-1/2 text-white space-y-11 w-screen md:p-0 p-6">
                <div className="font-bold text-2xl">Why Choose Us</div>
                <div className="font-thin text-sm md:max-w-[30rem] max-w-screen">Our solution streamlines the deployment process, saving you time and effort. With just one click, your project is live, allowing you to focus on development rather than tedious setup tasks.</div>
                <button className="p-2 text-sm rounded-full text-[#FFA800] border border-solid-2px border-[#FFA800]">
                    LET'S CONNECT
                </button>
            </div>
        </div>
    )
}