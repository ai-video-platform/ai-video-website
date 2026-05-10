const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with AI video creation",
    features: [
      "5 video generations per month",
      "720p export quality",
      "Basic editing tools",
      "Watermark included",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For creators who want more power",
    features: [
      "Unlimited video generations",
      "4K export quality",
      "Advanced AI editing suite",
      "No watermark",
      "Priority processing",
      "Style transfer library",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$24.99",
    period: "/month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "5 team members",
      "Shared project library",
      "Custom brand presets",
      "API access",
      "Priority support",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Start free, upgrade when you need more.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "glow border-primary bg-dark-card"
                  : "border-white/10 bg-dark-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="mb-1 text-xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-sm text-gray-400">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-full py-3 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary-dark"
                    : "border border-white/20 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
