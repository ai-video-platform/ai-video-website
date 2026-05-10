export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-accent">
          Now available on iOS
        </div>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Create Stunning Videos{" "}
          <span className="gradient-text">with AI</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
          Generate videos from text prompts, edit with powerful AI tools, and
          export in seconds. The future of video creation is in your pocket.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://apps.apple.com"
            className="glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold transition-all hover:bg-primary-dark hover:scale-105"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-medium transition-all hover:bg-white/5"
          >
            Learn More
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
