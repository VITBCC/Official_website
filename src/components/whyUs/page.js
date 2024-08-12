import React from "react";
import Image from "next/image";
export default function ChooseUs() {
    return (
        <div className="bg-black w-screen flex flex-row items-center justify-center h-[30rem]">
            <div className="w-1/2">
                <img src="/choose.svg" />
            </div>
            <div className="w-1/2 text-white space-y-11">
                <div className="font-bold text-2xl">Why Choose Us</div>
                <div className="font-thin text-sm max-w-[30rem]">Our solution streamlines the deployment process, saving you time and effort. With just one click, your project is live, allowing you to focus on development rather than tedious setup tasks.</div>
                <button className="p-2 text-sm rounded-full text-[#FFA800] border border-solid-2px border-[#FFA800]">
                    LET'S CONNECT
                </button>
            </div>
        </div>
    )
}