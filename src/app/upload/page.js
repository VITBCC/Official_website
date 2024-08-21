import React from "react";
import FileUpload from "@/components/FileUpload";
import RetroGrid from "@/components/magicui/retro-grid";
import SecretUpload from "@/components/secretUpload";
import WordRotate from "@/components/magicui/word-rotate";
import ShineBorder from "@/components/magicui/shine-border";

export default function Upload() {
    return (
        <div className="flex h-screen w-screen flex-row items-start justify-center overflow-hidden gap-x-5 p-4 pt-5 bg-gradient">
            <RetroGrid className="h-screen" />
            {/* <div className="w-screen h-screen bg-black flex flex-row gap-x-5 p-4 pt-5 items-start "> */}
            <div className="flex flex-col gap-y-10 justify-center items-start mt-6">
                {/* three containers in top row */}
                <div className="z-10 text-center text-3xl flex flex-row items-center gap-x-4">
                    <p className="text-white font-bold font-mono line">From Your Machine to GitHub & Vercel</p>
                    <WordRotate
                        className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-4xl font-bold leading-none tracking-normal text-transparent"
                        words={["Fast", "Easy", "Seamless"]}
                    />

                </div>
                <div className="flex flex-row gap-x-6 mt-2 opacity-60">
                    <div className="bg-zinc-900 h-48 w-[20rem] rounded-lg p-4">
                        <p className="text-white text-center mb-4 font-bold font-mono">
                            Enter a fancy name for your project.
                        </p>
                    </div>
                    <div className="bg-zinc-900 h-48 w-[20rem] rounded-lg p-4">
                        <p className="text-white text-center mb-4 font-bold font-mono">
                            Enter a description for the project.
                        </p>
                    </div>
                    <div className="bg-zinc-900 h-48 w-[20rem] rounded-lg p-4">
                        <p className="text-white text-center mb-4 font-bold font-mono">
                            Do you want other's to see your project?
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-x-6">
                    <div className="bg-zinc-900 rounded-xl w-1/2 h-52 opacity-60">
                        <FileUpload />
                    </div>
                    <div className="bg-zinc-900 h-52 w-[30rem] rounded-lg opacity-60 p-4 flex flex-col justify-center items-center">
                        <p className="text-white text-center mb-4 font-mono">
                            Have any doubts or questions? Ask our AI directly for instant help and clarification!
                        </p>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">
                            Ask AI Now
                        </button>
                    </div>

                </div>

                <div className="flex flex-row gap-x-6">
                    {/* for drag and drop */}
                    <div className="bg-white rounded-xl w-1/2 h-52 opacity-60">
                        <SecretUpload />
                    </div>
                    {/* for env file */}

                    <div className="bg-zinc-900 h-52 w-[20rem] rounded-lg opacity-60 p-4">
                        <p className="text-white text-center mb-4 font-bold font-mono">
                            Do you want to give a URL that explains your project?
                        </p>
                    </div>
                    <div className="bg-zinc-900 h-52 w-[20rem] rounded-lg opacity-60 p-4">
                        <p className="text-white text-center mb-4 font-bold font-mono">
                            Choose a license for your project?
                        </p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col gap-y-4">
                <div className="bg-zinc-900 h-[35rem] w-[25rem] rounded-lg opacity-60 p-4">
                    <p className="text-white text-center mb-4 font-bold font-mono">
                        Get the complete log report in GvAutomata CLI.
                    </p>
                </div>
                <div className="bg-zinc-900 h-56 w-[25rem] rounded-lg opacity-60 p-3 flex flex-col justify-center gap-y-3">
                    <p className="text-white text-center mb-4 font-bold font-mono">
                        Are you sure that all the information you have entered is correct and you want to move to the next steps?
                    </p>
                    <ShineBorder
                        borderWidth={4}
                        borderRadius={100}
                        className="hover:cursor-pointer relative flex w-full flex-col items-center justify-center overflow-hidden rounded-full border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <button className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-orange-400 to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            Proceed
                        </button>
                    </ShineBorder>
                </div>

            </div>

        </div>
    )
}