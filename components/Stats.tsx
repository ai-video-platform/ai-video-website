"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { number: 500000, suffix: "+", label: "Videos Created" },
  { number: 50, suffix: "+", label: "Languages Supported" },
  { number: 4, suffix: "K", label: "Max Export Quality" },
  { number: 30, suffix: "s", label: "Generation Time" },
]

export default function Stats() {
  return (
    <section className="border-y border-surface-200 bg-surface-50 px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl font-bold tracking-apple-tight text-text-primary md:text-4xl">
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
