"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

const leaderboardData = [
  { rank: 1, name: "John Doe", score: 1500 },
  { rank: 2, name: "Jane Smith", score: 1450 },
  { rank: 3, name: "Sam Wilson", score: 1400 },
  { rank: 4, name: "Chris Evans", score: 1350 },
  { rank: 5, name: "Tony Stark", score: 1300 },
];

export default function Leaderboard() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <Navbar />
      <motion.div
        className="mt-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">Leaderboard</h1>
        <div className="border border-yellow-500 rounded-lg p-6">
          <table className="w-full table-auto text-center bg-black">
            <thead className="border-b border-grey-600">
              <tr>
                <th className="p-4 text-lg">Rank</th>
                <th className="p-4 text-lg">Name</th>
                <th className="p-4 text-lg">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-grey-600"
                >
                  <td className="p-4">{user.rank}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.score}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
