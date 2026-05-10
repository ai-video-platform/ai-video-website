import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Video Platform — AI Video Creation for iPhone & iPad",
  description:
    "The only AI video app you'll ever need. Generate stunning videos from text, edit with powerful AI tools, and export in 4K. Available on the App Store.",
  openGraph: {
    title: "AI Video Platform — AI Video Creation for iPhone & iPad",
    description:
      "Generate stunning videos from text, edit with powerful AI tools, and export in 4K.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
