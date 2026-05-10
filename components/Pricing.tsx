"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

const plans = [
  {
    name: "Weekly",
    price: "$4.99",
    period: "/week",
    credits: "10 credits",
    perCredit: "$0.50 per credit",
    badge: "Best Value",
    highlighted: true,
    gradient: "from-brand-500 to-blue-600",
    features: [
      "All AI video generation tools",
      "Up to 4K export quality",
      "No watermark",
      "Priority processing",
      "All editing tools included",
    ],
  },
  {
    name: "Monthly",
    price: "$11.99",
    period: "/month",
    credits: "20 credits",
    perCredit: "$0.60 per credit",
    badge: "Most Popular",
    highlighted: false,
    gradient: "",
    features: [
      "All AI video generation tools",
      "Up to 4K export quality",
      "No watermark",
      "Priority processing",
      "All editing tools included",
    ],
  },
  {
    name: "Yearly",
    price: "$69.99",
    period: "/year",
    credits: "100 credits",
    perCredit: "$0.70 per credit",
    badge: "Best for Creators",
    highlighted: false,
    gradient: "",
    features: [
      "All AI video generation tools",
      "Up to 4K export quality",
      "No watermark",
      "Priority processing",
      "All editing tools included",
    ],
  },
]

const creditPacks = [
  { credits: "5 credits", price: "$4.99", perCredit: "$1.00/credit" },
  { credits: "15 credits", price: "$11.99", perCredit: "$0.80/credit" },
  { credits: "30 credits", price: "$19.99", perCredit: "$0.67/credit" },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-surface-100">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4">Simple, transparent pricing.</h2>
          <p className="body-lg mx-auto max-w-2xl">
            Choose the plan that works for you. Cancel anytime.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden rounded-2xl border bg-white p-8 transition-shadow duration-300 ${
                plan.highlighted
                  ? "border-brand-500 shadow-xl shadow-brand-500/10"
                  : "border-surface-200 hover:shadow-lg hover:shadow-black/5"
              }`}
            >
              {plan.highlighted && (
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.gradient}`} />
              )}
              {plan.badge && (
                <span
                  className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.highlighted
                      ? "bg-brand-50 text-brand-600"
                      : "bg-surface-100 text-text-secondary"
                  }`}
                >
                  {plan.badge}
                </span>
              )}
              <h3 className="mb-1 text-xl font-semibold text-text-primary">
                {plan.name}
              </h3>
              <div className="mb-1">
                <span className="text-4xl font-semibold tracking-apple-tight text-text-primary">
                  {plan.price}
                </span>
                <span className="text-text-secondary">{plan.period}</span>
              </div>
              <p className="mb-1 text-sm font-medium text-brand-500">
                {plan.credits}
              </p>
              <p className="mb-6 text-xs text-text-tertiary">
                {plan.perCredit}
              </p>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-full py-3 text-sm font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/30"
                    : "border border-surface-300 text-text-primary hover:bg-surface-50"
                }`}
              >
                Subscribe
              </button>
            </motion.div>
          ))}
        </div>

        {/* Credit packs */}
        <AnimatedSection className="mt-16">
          <div className="rounded-2xl border border-surface-200 bg-white p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-2.5">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Need more credits?
                </h3>
                <p className="text-sm text-text-secondary">
                  One-time purchases that never expire.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {creditPacks.map((pack, index) => (
                <motion.div
                  key={pack.credits}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-surface-200 bg-surface-50 p-5 text-center transition-colors hover:border-brand-200 hover:bg-brand-50/30"
                >
                  <p className="text-sm font-medium text-text-primary">
                    {pack.credits}
                  </p>
                  <p className="text-2xl font-semibold text-text-primary">
                    {pack.price}
                  </p>
                  <p className="text-xs text-text-tertiary">{pack.perCredit} · Never expires</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* How credits work */}
        <AnimatedSection className="mt-8">
          <div className="rounded-2xl border border-surface-200 bg-white p-8">
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              How credits work
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                Each video generation costs 1 credit. Higher quality or longer outputs may cost additional credits.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                AI editing operations (style transfer, enhancement, captions) cost 1 credit each.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                Subscription credits refresh at the start of each billing cycle. Unused subscription credits expire at the end of the billing period.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                One-time credit pack purchases never expire and can be used alongside your subscription.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                Credits have no monetary value and are non-refundable, non-transferable.
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Apple compliance */}
        <div className="mt-8 text-center text-xs leading-relaxed text-text-tertiary">
          <p>
            Payment will be charged to your Apple ID account at confirmation of purchase.
            Subscription automatically renews unless it is canceled at least 24 hours before
            the end of the current period. Your account will be charged for renewal within
            24 hours prior to the end of the current period. You can manage and cancel your
            subscriptions by going to Settings &gt; [your name] &gt; Subscriptions on your
            iPhone. Any unused portion of a free trial period will be forfeited when
            purchasing a subscription.
          </p>
          <p className="mt-2">
            <a href="/privacy" className="underline hover:text-text-secondary">Privacy Policy</a>
            {" · "}
            <a href="/terms" className="underline hover:text-text-secondary">Terms of Use</a>
          </p>
        </div>
      </div>
    </section>
  )
}
