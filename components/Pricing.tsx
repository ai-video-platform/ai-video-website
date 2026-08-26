"use client"

import AnimatedSection from "./AnimatedSection"

const includedFeatures = [
  "All AI video generation tools",
  "Text to video and photo to video",
  "Viral dance templates",
  "Save to your camera roll and share anywhere",
  "Free starter credits plus a free daily gift",
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-surface-100">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            Try It Free
          </span>
          <h2 className="heading-lg mb-4">Start for free. Upgrade when you want more.</h2>
          <p className="body-lg mx-auto max-w-2xl">
            AI Video is free to download and try. You get free credits when you
            sign in, plus a free daily gift in the app. Want more? Choose an
            optional subscription or a one-time credit pack.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-2xl border border-surface-200 bg-white p-8">
            <h3 className="mb-6 text-lg font-semibold text-text-primary">
              Start creating for free
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
            AI Video is free to download and try. Optional auto-renewing
            subscriptions and one-time credit packs are available in the app, with
            prices always shown before you buy. Subscriptions renew automatically
            unless cancelled at least 24 hours before the current period ends; manage
            or cancel anytime in your App Store account settings. Credits have no
            monetary value outside the app.
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
