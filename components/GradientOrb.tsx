"use client"

import { motion } from "framer-motion"

export default function GradientOrb({
  className = "",
  color = "blue",
  size = "lg",
  animate = true,
}: {
  className?: string
  color?: "blue" | "purple" | "pink" | "cyan"
  size?: "sm" | "md" | "lg" | "xl"
  animate?: boolean
}) {
  const colors = {
    blue: "from-blue-400/30 to-cyan-300/20",
    purple: "from-violet-400/25 to-purple-300/15",
    pink: "from-pink-400/20 to-rose-300/15",
    cyan: "from-cyan-400/25 to-teal-300/15",
  }

  const sizes = {
    sm: "h-48 w-48",
    md: "h-72 w-72",
    lg: "h-96 w-96",
    xl: "h-[500px] w-[500px]",
  }

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colors[color]} ${sizes[size]} blur-3xl ${className}`}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    />
  )
}
