"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

const steps = [
  {
    number: "01",
    title: "Describe",
    description:
      "Type what you want to see. A sunset over Tokyo, a product demo, anything you can imagine.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    number: "02",
    title: "Generate",
    description:
      "AI creates your video in seconds. No rendering queues, no waiting around.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "Edit with AI tools. Adjust timing, add effects, perfect every single frame.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    number: "04",
    title: "Share",
    description:
      "Export in up to 4K. Post directly to social media or save to your Camera Roll.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4">How it works.</h2>
          <p className="body-lg mx-auto max-w-2xl">
            From idea to finished video in minutes.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-blue-200 via-violet-200 via-pink-200 to-emerald-200 md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-block rounded-2xl ${step.bg} px-6 py-4`}>
                    <span className={`block text-sm font-bold ${step.color}`}>
                      STEP {step.number}
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-8 hidden md:left-1/2 md:block md:-translate-x-1/2">
                  <motion.div
                    className={`h-4 w-4 rounded-full ${step.bg} ring-4 ring-white`}
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  />
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
