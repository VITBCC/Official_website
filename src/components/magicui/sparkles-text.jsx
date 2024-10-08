"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const SparklesText = ({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
  ...props
}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateStar = () => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar);
      setSparkles(newSparkles);
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        })
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 100);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div
      className={cn("text-6xl font-bold relative inline-block", className)}
      {...props}
      style={{
        "--sparkles-first-color": `${colors.first}`,
        "--sparkles-second-color": `${colors.second}`,
      }}
    >
      <span className="relative">
        {text}
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
      </span>
    </div>
  );
};

const Sparkle = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-10"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [0, 360, 0],
      }}
      transition={{ duration: 1.5, repeat: Infinity, delay }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0 L15 9 H24 L18 15 L21 24 L12 18 L3 24 L6 15 L0 9 H9 L12 0 Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default SparklesText;
