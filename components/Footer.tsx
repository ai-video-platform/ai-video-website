"use client"

import { motion } from "framer-motion"
import AppStoreBadge from "./AppStoreBadge"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-white">
      {/* CTA banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-brand-500 to-blue-600 px-6 py-20">
        <motion.div
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-semibold tracking-apple-tight text-white md:text-4xl"
          >
            Ready to create something amazing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-lg text-white/80"
          >
            Download AI Video Platform and start creating today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <AppStoreBadge />
          </motion.div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3">
              <Logo />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              AI video creation and editing for iPhone and iPad. The only AI video app you&rsquo;ll ever need.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-text-secondary hover:text-text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-text-secondary hover:text-text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-text-secondary hover:text-text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/support"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@aivideoplatform.ai"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-surface-200 pt-8 flex flex-col items-center gap-2 text-center text-xs text-text-tertiary">
          <p>&copy; {new Date().getFullYear()} AI Video Platform. All rights reserved.</p>
          <p>
            Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
