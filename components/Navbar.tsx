export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="text-xl font-bold">AI Video Platform</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
            Pricing
          </a>
        </div>
        <a
          href="https://apps.apple.com"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium transition-colors hover:bg-primary-dark"
        >
          Download App
        </a>
      </div>
    </nav>
  )
}
