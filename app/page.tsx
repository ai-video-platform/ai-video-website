import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Features from "@/components/Features"
import Showcase from "@/components/Showcase"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
