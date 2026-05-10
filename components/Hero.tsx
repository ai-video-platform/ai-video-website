"use client"

import { motion } from "framer-motion"
import AppStoreBadge from "./AppStoreBadge"
import DeviceMockup from "./DeviceMockup"
import GradientOrb from "./GradientOrb"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background orbs */}
      <GradientOrb color="blue" size="xl" className="-left-48 -top-24" />
      <GradientOrb color="purple" size="lg" className="-right-24 top-1/3" />
      <GradientOrb color="pink" size="md" className="bottom-24 left-1/4" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-surface-200 bg-surface-50 px-4 py-1.5 text-sm font-medium text-text-secondary"
          >
            Available on the App Store
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-xl mb-6"
          >
            The only AI video app you&rsquo;ll ever need.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-lg mx-auto mb-10 max-w-xl lg:mx-0"
          >
            Create stunning videos from text. Edit with powerful AI tools.
            Export in 4K. All on your iPhone.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-3 lg:items-start"
          >
            <AppStoreBadge />
            <p className="text-sm text-text-tertiary">
              Also available on iPad &middot; Requires iOS 16+
            </p>
          </motion.div>
        </div>

        {/* Device mockup */}
        <div className="hidden lg:block">
          <DeviceMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="h-6 w-6 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
