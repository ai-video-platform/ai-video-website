"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "./Logo"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-surface-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
            Pricing
          </a>
          <a
            href="https://apps.apple.com"
            className="text-sm font-medium text-brand-500 transition-opacity hover:opacity-70"
          >
            Get the App
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-surface-200/60 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm text-text-secondary">Features</a>
            <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-sm text-text-secondary">How It Works</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-sm text-text-secondary">Pricing</a>
            <a href="https://apps.apple.com" className="text-sm font-medium text-brand-500">Get the App</a>
          </div>
        </div>
      )}
    </nav>
  )
}
