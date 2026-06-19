"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

const faqs = [
  {
    question: "Is AI Video free?",
    answer:
      "Yes. AI Video is completely free to download and use. You get free credits every day to generate videos. There are no subscriptions and no in-app purchases.",
  },
  {
    question: "How do credits work?",
    answer:
      "Credits are used each time you generate a video. You receive free credits daily, and a credit is refunded automatically if a generation fails. Credits have no monetary value and cannot be purchased.",
  },
  {
    question: "What can I create?",
    answer:
      "Put yourself in a viral dance from a single photo, turn a text prompt into a video, or animate a photo. You can create clips in portrait, square, or widescreen and share them anywhere.",
  },
  {
    question: "What devices are supported?",
    answer:
      "AI Video is available on iPhone running iOS 17 or later.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. The app uses anonymous sign-in and does not collect your name, email, or phone number. Generated videos are automatically deleted from our servers after 7 days, and uploaded images within 24 hours. Read our Privacy Policy for details.",
  },
  {
    question: "How are videos generated?",
    answer:
      "Videos are generated using third-party AI (OpenAI). Your prompts and images are sent securely for generation and are not used to train AI models.",
  },
  {
    question: "How do I save or share my videos?",
    answer:
      "Tap a finished video to view it full screen, then save it to your Camera Roll or share it to social platforms from within the app.",
  },
  {
    question: "Who do I contact for help?",
    answer:
      "Email admin@aivideoplatform.ai with your anonymous user ID (available in the app's settings). You can also report any video right inside the app.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4">Questions? Answers.</h2>
        </AnimatedSection>
        <div className="divide-y divide-surface-200 rounded-2xl border border-surface-200 bg-white">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-8"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="pr-4 text-base font-medium text-text-primary">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-5 w-5 shrink-0 text-text-tertiary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
