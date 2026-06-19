import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Support — AI Video Platform",
  description: "Support for the AI Video Platform, Chaty, and UV Index iOS applications.",
}

export default function Support() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Link
          href="/"
          className="mb-12 inline-block text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          &larr; Back to home
        </Link>

        <h1 className="mb-4 text-4xl font-semibold tracking-apple-tight text-text-primary">
          Support
        </h1>
        <p className="mb-12 text-sm text-text-tertiary">
          Help for the AI Video Platform, Chaty, and UV Index apps.
        </p>

        <div className="prose-legal space-y-8 text-text-secondary [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-text-primary [&_p]:leading-relaxed [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_li]:leading-relaxed">

          <section>
            <h2>Contact us</h2>
            <p>
              Need a hand or found a problem in any of our apps? Email us at{" "}
              <a href="mailto:admin@aivideoplatform.ai" className="text-brand-500 hover:underline">
                admin@aivideoplatform.ai
              </a>{" "}
              and we will get back to you. Including the app name, your device model, and your iOS version helps us help you faster.
            </p>
          </section>

          <section>
            <h2>UV Index</h2>

            <h3>The app cannot find my location</h3>
            <p>
              UV Index works with or without location access. If location is off or unavailable, pick any city with the search button or one of the quick picks on the home screen. To turn location back on, open the iOS Settings app, find UV Index, and set Location to &ldquo;While Using the App&rdquo;.
            </p>

            <h3>How do I connect or disconnect Apple Health?</h3>
            <p>
              The app asks to connect during onboarding. You can change access at any time in the Health app under your profile picture, then Privacy, then Apps. UV Index only writes your finished sun sessions (time in daylight and UV exposure); it never reads your Health data.
            </p>

            <h3>How do I add the widget?</h3>
            <p>
              Touch and hold your Home Screen until the apps jiggle, tap Edit then Add Widget (on iOS 17, tap the plus button in the top left), search for &ldquo;UV Index&rdquo;, pick a size, and tap Add Widget.
            </p>

            <h3>Where does the UV data come from?</h3>
            <p>
              Forecasts come from the Open-Meteo weather service and account for cloud cover. If Open-Meteo is temporarily unavailable, the app automatically falls back to Apple Weather and shows a small note under the forecast. Like any forecast these are estimates; conditions on the ground can differ.
            </p>
          </section>

          <section>
            <h2>AI Video Platform</h2>
            <p>
              AI Video Platform is free to use, with free daily credits and no subscriptions or in-app purchases. For questions about credits or video generation, or to report content in the app, email us with your anonymous user ID (available in the app&rsquo;s settings).
            </p>
          </section>

          <section>
            <h2>Privacy and legal</h2>
            <p>
              Read our <Link href="/privacy" className="text-brand-500 hover:underline">Privacy Policy</Link> and{" "}
              <Link href="/terms" className="text-brand-500 hover:underline">Terms of Use</Link>. Both cover all of our apps, with app-specific sections for Chaty and UV Index.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
