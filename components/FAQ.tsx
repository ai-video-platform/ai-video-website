"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

const faqs = [
  {
    question: "How do credits work?",
    answer:
      "Credits are used each time you generate or edit a video. Video generation costs 1–5 credits depending on length and quality, while editing operations cost 0.5–2 credits. Your subscription includes a set number of credits that refresh each billing cycle.",
  },
  {
    question: "What happens when I run out of credits?",
    answer:
      "You can purchase additional credit packs at any time from within the app. One-time credit purchases never expire and can be used alongside your subscription credits. Alternatively, you can wait for your next billing cycle when your subscription credits refresh.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel anytime. Go to Settings > [your name] > Subscriptions on your iPhone or iPad. Your subscription will remain active until the end of the current billing period. No partial refunds are provided for unused time.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "Subscription credits do not roll over — they expire at the end of each billing period and are replaced with a fresh allotment. However, credits purchased as one-time packs never expire and remain in your account until used.",
  },
  {
    question: "What devices are supported?",
    answer:
      "AI Video Platform is available on iPhone and iPad running iOS 16 or later. Your projects sync seamlessly across all your Apple devices via iCloud.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. We take your privacy seriously. Your prompts and generated videos are processed securely and are not shared with third parties. Generated content is automatically deleted from our servers after 30 days. Read our full Privacy Policy for details.",
  },
  {
    question: "What video formats and quality can I export?",
    answer:
      "You can export videos in MP4 or MOV format at resolutions up to 4K (2160p). Videos can be saved directly to your Camera Roll or shared to social media platforms from within the app.",
  },
  {
    question: "How long can generated videos be?",
    answer:
      "Each generation produces up to 30 seconds of video. For longer videos, you can generate multiple clips and combine them using the built-in editor. Longer clips use more credits.",
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
