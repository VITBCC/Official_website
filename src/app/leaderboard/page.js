"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FaUser } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";


const obj = [
    "Add maximum details to your answer",
    "There should be no plagiarism and negative content about the college",
    "Review should be written only for the courses offered by the college",
    "Mention facts and figures as per your best knowledge",
    "A good validated review will also lead to better reward",
]
export default function Leaderboard() {
    const [ranking, setRanking] = useState([]);

    async function getRankings() {
        try {
            const response = await fetch("http://localhost:8003/api/v1/score/leaderboard");
            const data = await response.json();
            if (data) {
                console.log(data?.data?.leaderboardEntries);
                setRanking(data?.data?.leaderboardEntries);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRankings();
    }, []);

    return (
        <div className="bg-gradient-to-bl from-purple-700 to-slate-900 flex flex-col pt-5 justify-between items-center h-screen w-full bg-no-repeat">
            <h2 className="text-3xl font-bold font-mono bg-gradient-to-bl from-amber-500 via-slate-50 to-yellow-100 bg-clip-text text-transparent">
                Top 10 Performers in VIT BCC
            </h2>
            <div className="flex flex-col gap-6 w-[80rem] mt-10">
                {ranking.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full max-w-7xl h-20 rounded-lg bg-gradient-to-bl from-violet-300 to-violet-50 text-black flex items-center justify-between px-5 font-mono overflow-hidden"
                    >
                        <AnimatedGridPattern
                            numSquares={30}
                            maxOpacity={0.1}
                            duration={3}
                            repeatDelay={1}
                            className={cn(
                                "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                                "absolute inset-x-0 inset-y-[-30%] h-[200%]"
                            )}
                        />
                        <div className="flex flex-row gap-5 items-center justify-start w-1/4 z-10">
                            <div className="w-10 text-center">
                                <p className="text-2xl font-bold text-black">{item?.rank}</p>
                            </div>
                            <div className="w-14 h-14 bg-violet-300 rounded-full flex items-center justify-center">
                                <FaUser className="text-xl" />
                            </div>
                        </div>
                        <div className="w-1/4 text-left z-10">
                            <p className="font-bold tracking-widest">{item.name}</p>
                        </div>
                        <div className="w-1/4 text-left z-10">
                            <p className="font-bold tracking-widest">{item.email}</p>
                        </div>
                        <div className="w-1/4 text-right z-10">
                            <p className="font-bold">{item?.score}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="leader mt-36 w-full text-black">
                <div className="mt-14 flex flex-col items-center justify-center w-full">
                    <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
                    <div className="flex flex-row gap-8 mt-6 w-full">
                        <div className="w-1/2">
                            <img src="/rules.svg" alt="Rules" className="h-[30rem] w-full object-fill" />
                        </div>
                        <div className="w-1/2 mt-8">
                            <h2 className="text-xl font-semibold mb-4">Key Points</h2>
                            <div className="space-y-8 pt-6">
                                {obj.map((item, index) => (
                                    <div className="flex flex-row items-center gap-3">
                                        <FaRegCircleCheck className="text-blue-700 font-extrabold text-2xl" />
                                        <p className="font-extralight">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
