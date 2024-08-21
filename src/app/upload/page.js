import React from "react";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import FileUpload from "@/components/FileUpload";
import SecretUpload from "@/components/secretUpload";
export default function Upload() {
    return (
        <div className="w-screen h-screen bg-black flex flex-col gap-y-5 pt-5">
            <div className="flex flex-row gap-x-28 justify-center items-center">
                {/* three containers in top row */}
                {/* <div className="bg-white h-48 w-1/4 rounded-lg"></div>
                <div className="bg-white h-48 w-1/4 rounded-lg"></div>
                <div className="bg-white h-48 w-1/4 rounded-lg"></div> */}
                <NeonGradientCard className="max-w-sm items-center justify-center text-center h-48">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2929] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">

                    </span>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center h-48">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">

                    </span>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center h-48">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">

                    </span>
                </NeonGradientCard>
            </div>

            <div className="flex flex-row gap-x-14 justify-center p-10">
                <div className="bg-white rounded-xl w-1/2 h-52">
                    <FileUpload />
                </div>
                {/* for drag and drop */}
                <div className="bg-white rounded-xl w-1/2 h-52">
                    <SecretUpload/>
                </div>
                {/* for env file */}
            </div>

            <div className="flex flex-row gap-x-28 justify-center items-center">
                {/* three containers in top row */}
                {/* <div className="bg-white h-48 w-1/4 rounded-lg"></div>
                <div className="bg-white h-48 w-1/4 rounded-lg"></div>
                <div className="bg-white h-48 w-1/4 rounded-lg"></div> */}
                <NeonGradientCard className="max-w-sm items-center justify-center text-center h-48">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">

                    </span>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center h-48">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">

                    </span>
                </NeonGradientCard>
                <NeonGradientCard className="max-w-sm items-center justify-center text-center h-48">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">

                    </span>
                </NeonGradientCard>
            </div>
        </div>
    )
}