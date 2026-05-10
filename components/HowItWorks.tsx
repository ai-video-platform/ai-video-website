const steps = [
  {
    step: "01",
    title: "Describe Your Vision",
    description:
      "Type a text prompt or upload a reference image. Describe the style, mood, and content you want.",
  },
  {
    step: "02",
    title: "AI Generates Your Video",
    description:
      "Our AI engine processes your input and generates a high-quality video in seconds.",
  },
  {
    step: "03",
    title: "Edit & Enhance",
    description:
      "Fine-tune with AI editing tools — adjust pacing, add effects, fix colors, remove objects.",
  },
  {
    step: "04",
    title: "Export & Share",
    description:
      "Export in 4K and share directly to social media or save to your camera roll.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            From idea to finished video in four simple steps.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-white/10 bg-dark-card p-8"
            >
              <span className="mb-4 block text-5xl font-bold text-primary/30">
                {item.step}
              </span>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
