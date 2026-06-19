"use client"

import AnimatedSection from "./AnimatedSection"

const includedFeatures = [
  "All AI video generation tools",
  "Text to video and photo to video",
  "Viral dance templates",
  "Save to your camera roll and share anywhere",
  "Free daily credits, refreshed every day",
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-surface-100">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            100% Free
          </span>
          <h2 className="heading-lg mb-4">Free to use. No subscriptions.</h2>
          <p className="body-lg mx-auto max-w-2xl">
            AI Video is completely free. Every day you get free credits to create
            videos. There are no subscriptions and no in-app purchases.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-surface-200 bg-white p-8">
            <h3 className="mb-6 text-lg font-semibold text-text-primary">
              Everything included, for free
            </h3>
            <ul className="space-y-3">
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <div className="mt-8 text-center text-xs leading-relaxed text-text-tertiary">
          <p>
            AI Video is free to download and use. Free credits are provided daily,
            have no monetary value, and cannot be purchased.
          </p>
          <p className="mt-2">
            <a href="/privacy" className="underline hover:text-text-secondary">
              Privacy Policy
            </a>
            {" · "}
            <a href="/terms" className="underline hover:text-text-secondary">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
