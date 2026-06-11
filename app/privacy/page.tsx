import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — AI Video Platform",
  description: "Privacy Policy for the AI Video Platform, Chaty, and UV Index iOS applications.",
}

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-text-tertiary">
          Effective Date: May 10, 2026 &middot; Last Updated: June 11, 2026
        </p>

        <div className="prose-legal space-y-8 text-text-secondary [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-text-primary [&_p]:leading-relaxed [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_li]:leading-relaxed">

          <section>
            <h2>1. Introduction</h2>
            <p>
              AI Video Platform (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or the &ldquo;Company&rdquo;) operates the AI Video Platform mobile application (the &ldquo;App&rdquo;) and the associated website at aivideoplatform.ai (the &ldquo;Website&rdquo;) (collectively, the &ldquo;Services&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use our Services.
            </p>
            <p>
              This Privacy Policy also covers our other iOS applications: Chaty and UV Index. The disclosures specific to those apps appear in Section 15 (Chaty) and Section 16 (UV Index), and references to the &ldquo;Services&rdquo; in this policy include those applications. Where an app-specific section differs from the general statements in Sections 1 through 14, the app-specific section governs for that app.
            </p>
            <p>
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, you must discontinue use of our Services immediately.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &ldquo;Last Updated&rdquo; date of this Privacy Policy. Your continued use of the Services after such changes constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2>2. Account and Authentication</h2>
            <p>
              Our App uses anonymous authentication provided by Google Firebase Authentication. When you first open the App, an anonymous account is automatically created for you. This means:
            </p>
            <ul>
              <li>We do NOT require or collect your name, email address, phone number, or any other personally identifiable information to use the App.</li>
              <li>Your account is identified solely by an anonymous unique identifier (Firebase Anonymous UID) that cannot be traced back to your real-world identity.</li>
              <li>There is no sign-up, login, or registration process that collects personal data.</li>
            </ul>
          </section>

          <section>
            <h2>3. Information We Collect</h2>

            <h3>3.1 Information Collected Automatically</h3>
            <p>When you use our Services, we automatically collect certain non-personally identifiable information, including:</p>
            <ul>
              <li>Anonymous Firebase UID (not linked to any personal identity)</li>
              <li>Device type and model (e.g., &ldquo;iPhone 15 Pro&rdquo;)</li>
              <li>Operating system version</li>
              <li>App version</li>
              <li>Language and region settings</li>
              <li>Session duration and feature usage patterns (via Firebase Analytics)</li>
              <li>Crash and performance data</li>
              <li>IP address (collected by our servers during API requests; not stored long-term)</li>
            </ul>

            <h3>3.2 Content You Provide</h3>
            <p>When you use our AI video generation and editing features, we process:</p>
            <ul>
              <li>Text prompts you submit for video generation</li>
              <li>Images you upload for use in video generation (via Apple&rsquo;s built-in camera or photo picker)</li>
              <li>Generated video files and associated metadata (resolution, duration, style settings)</li>
            </ul>

            <h3>3.3 Purchase Information</h3>
            <p>
              Subscriptions and one-time credit purchases are managed through Adapty (our subscription management platform) and processed via Apple&rsquo;s In-App Purchase system. We receive:
            </p>
            <ul>
              <li>Transaction receipts and purchase history (subscription type, credit packs purchased)</li>
              <li>Subscription status (active, expired, canceled)</li>
              <li>Transaction identifiers</li>
            </ul>
            <p>
              We do NOT receive or store your credit card number, bank account details, Apple ID email, or any payment instrument information. All payment processing is handled exclusively by Apple.
            </p>

            <h3>3.4 Information We Do NOT Collect</h3>
            <p>For clarity, in the AI Video Platform App we do NOT collect:</p>
            <ul>
              <li>Your real name, email address, or phone number</li>
              <li>Your physical address or precise location</li>
              <li>Your contacts, calendar, or browsing history</li>
              <li>Biometric data</li>
              <li>Your photo library contents (we can only save files to your library; we cannot browse or read it)</li>
            </ul>
            <p>
              Sections 1 through 14 of this policy describe the AI Video Platform App and Website. Disclosures specific to our other applications appear in Section 15 (Chaty) and Section 16 (UV Index); where those sections differ from the general statements above, the app-specific section governs for that app. In particular, the UV Index app can use your device location as described in Section 16.2.
            </p>
          </section>

          <section>
            <h2>4. Third-Party Services and Data Sharing</h2>
            <p>We use the following third-party services in connection with our App. Each service may collect data as described below and in accordance with their own privacy policies:</p>

            <h3>4.1 AI Video Generation Providers</h3>
            <p>
              To generate and process video content, we transmit your text prompts and any uploaded images to the following third-party AI service providers:
            </p>
            <ul>
              <li><strong>OpenAI (Sora)</strong> &mdash; Text prompts and uploaded images are sent to OpenAI&rsquo;s API for video generation. Subject to <a href="https://openai.com/policies/privacy-policy" className="text-brand-500 hover:underline">OpenAI&rsquo;s Privacy Policy</a>.</li>
              <li><strong>Google (Veo)</strong> &mdash; Text prompts and uploaded images are sent to Google&rsquo;s API for video generation. Subject to <a href="https://policies.google.com/privacy" className="text-brand-500 hover:underline">Google&rsquo;s Privacy Policy</a>.</li>
              <li><strong>xAI (Grok)</strong> &mdash; Text prompts and uploaded images are sent to xAI&rsquo;s API for video generation. Subject to <a href="https://x.ai/legal/privacy-policy" className="text-brand-500 hover:underline">xAI&rsquo;s Privacy Policy</a>.</li>
            </ul>
            <p>
              We act as an intermediary between you and these providers. We send your prompts and images to enable video generation but do not control how these providers process, store, or use data once received. We strongly encourage you to review each provider&rsquo;s privacy policy. No personally identifiable information is sent to these providers — only your content (prompts and images) along with an anonymous request identifier.
            </p>

            <h3>4.2 Firebase (Google)</h3>
            <ul>
              <li><strong>Firebase Authentication:</strong> Provides anonymous sign-in. Generates and manages anonymous user IDs. Subject to <a href="https://firebase.google.com/support/privacy" className="text-brand-500 hover:underline">Firebase Privacy Policy</a>.</li>
              <li><strong>Firebase Analytics:</strong> Collects anonymous usage data including app opens, feature usage, session duration, device info, and crash events. This data is aggregated and cannot identify individual users. Subject to <a href="https://firebase.google.com/support/privacy" className="text-brand-500 hover:underline">Firebase Privacy Policy</a>.</li>
            </ul>

            <h3>4.3 Adapty</h3>
            <p>
              Adapty manages our subscription and in-app purchase infrastructure. Adapty receives transaction data from Apple to verify and manage your subscription status. Subject to <a href="https://adapty.io/privacy" className="text-brand-500 hover:underline">Adapty&rsquo;s Privacy Policy</a>.
            </p>

            <h3>4.4 Meta (Facebook) SDK</h3>
            <p>
              We use the Meta SDK solely for install attribution purposes — to understand which marketing campaigns lead to app installs. We do NOT show advertisements in the App. The Meta SDK may collect:
            </p>
            <ul>
              <li>App install and open events</li>
              <li>Device identifiers (subject to Apple&rsquo;s App Tracking Transparency)</li>
              <li>Attribution data (which ad or campaign led to the install)</li>
            </ul>
            <p>
              If you have opted out of tracking via Apple&rsquo;s App Tracking Transparency prompt, the Meta SDK will not track you across other apps and websites. Subject to <a href="https://www.facebook.com/privacy/policy/" className="text-brand-500 hover:underline">Meta&rsquo;s Privacy Policy</a>.
            </p>

            <h3>4.5 Apple</h3>
            <p>
              Apple processes all payment transactions through the App Store In-App Purchase system and may collect data in accordance with <a href="https://www.apple.com/legal/privacy/" className="text-brand-500 hover:underline">Apple&rsquo;s Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2>5. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide the Services: processing your prompts and images through AI providers to generate video content</li>
              <li>To manage your credit balance and subscription status via Adapty</li>
              <li>To store your generation history so you can re-download recent videos</li>
              <li>To send push notifications (e.g., when your video generation is complete) — only if you have granted notification permission</li>
              <li>To analyze aggregated, anonymous usage patterns to improve the App (via Firebase Analytics)</li>
              <li>To measure the effectiveness of our marketing campaigns (via Meta SDK attribution)</li>
              <li>To detect and prevent fraud, abuse, and violations of our Terms of Use</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>6. Data Storage and Retention</h2>
            <h3>6.1 Our Backend Servers</h3>
            <p>We store the following data on our servers:</p>
            <ul>
              <li><strong>Anonymous user metadata:</strong> Firebase Anonymous UID, account creation date, credit balance, subscription status. Retained for as long as the anonymous account exists.</li>
              <li><strong>Text prompts:</strong> Stored to maintain your generation history. Retained for as long as the anonymous account exists.</li>
              <li><strong>Generated videos:</strong> Stored temporarily to allow re-download. <strong>Automatically and permanently deleted after 7 days.</strong> You should save any videos you wish to keep to your device.</li>
              <li><strong>Uploaded images:</strong> Processed for video generation and deleted from our servers within 24 hours after processing is complete.</li>
            </ul>

            <h3>6.2 Third-Party Retention</h3>
            <p>
              Data shared with third-party services (OpenAI, Google, xAI, Firebase, Adapty, Meta) is retained according to each provider&rsquo;s own data retention policies. We encourage you to review their respective privacy policies linked in Section 4 above.
            </p>

            <h3>6.3 Account Deletion</h3>
            <p>
              Since accounts are anonymous, you can effectively &ldquo;delete&rdquo; your account by uninstalling the App. Upon uninstallation, your anonymous Firebase UID becomes inaccessible. Any data associated with that UID on our servers will be automatically purged within 90 days of the last activity, or you can request immediate deletion by contacting us at admin@aivideoplatform.ai with your anonymous UID (available in the App&rsquo;s settings).
            </p>
          </section>

          <section>
            <h2>7. Device Permissions</h2>
            <p>Our App may request the following iOS permissions:</p>
            <ul>
              <li><strong>Push Notifications:</strong> To notify you when video generation is complete. You can disable this in iOS Settings at any time.</li>
              <li><strong>Save to Photo Library:</strong> To save generated videos to your Camera Roll. We use Apple&rsquo;s built-in save functionality and cannot browse or access other items in your photo library.</li>
              <li><strong>Camera (via Apple Picker):</strong> To capture images for use as video generation input. We use Apple&rsquo;s built-in camera picker — the App does not have direct, persistent camera access.</li>
            </ul>
            <p>
              All permissions are optional. The App will function without these permissions, though certain features will be limited (e.g., you cannot save videos without photo library save access).
            </p>
          </section>

          <section>
            <h2>8. App Tracking Transparency</h2>
            <p>
              In compliance with Apple&rsquo;s App Tracking Transparency (ATT) framework, we will request your permission before tracking your activity across other companies&rsquo; apps and websites. This applies to the Meta SDK used for attribution.
            </p>
            <p>
              If you decline the ATT prompt or disable tracking in iOS Settings, we will not track you across other apps and websites. Core App functionality (video generation, editing, exporting) is not affected by your ATT choice.
            </p>
          </section>

          <section>
            <h2>9. Children&rsquo;s Privacy</h2>
            <p>
              Our App is rated 17+ on the Apple App Store. The Services are not intended for use by individuals under the age of 17. We do not knowingly collect any information from children under 17. Since our App uses anonymous authentication and collects no personally identifiable information, we cannot determine the age of our users. If you believe a child under 17 is using our Services inappropriately, please contact us at admin@aivideoplatform.ai.
            </p>
          </section>

          <section>
            <h2>10. Your Rights</h2>

            <h3>10.1 General Rights</h3>
            <p>Because our App operates on a fully anonymous basis and collects no personally identifiable information, traditional data subject rights (access, rectification, portability) have limited applicability — there is no personal data to access, correct, or port. However:</p>
            <ul>
              <li><strong>Deletion:</strong> You may request deletion of all data associated with your anonymous UID by contacting us at admin@aivideoplatform.ai.</li>
              <li><strong>Opt-out of Analytics:</strong> You may disable Firebase Analytics data collection by contacting us.</li>
              <li><strong>Opt-out of Tracking:</strong> You can decline the ATT prompt or revoke tracking permission at any time in iOS Settings.</li>
            </ul>

            <h3>10.2 GDPR (European Economic Area)</h3>
            <p>
              If you are in the EEA, UK, or Switzerland: our legal basis for processing is legitimate interest (providing the service you requested) and consent (for ATT-governed tracking). You retain the right to lodge a complaint with your local data protection authority.
            </p>

            <h3>10.3 CCPA (California)</h3>
            <p>
              If you are a California resident: we do NOT sell personal information. We do NOT share personal information for cross-context behavioral advertising beyond what is governed by your ATT consent. You have the right to request deletion of data associated with your anonymous identifier.
            </p>
          </section>

          <section>
            <h2>11. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your information, including:
            </p>
            <ul>
              <li>Encryption of data in transit (TLS/HTTPS)</li>
              <li>Encrypted storage on our servers</li>
              <li>Access controls limiting who can access server data</li>
              <li>Automatic deletion of generated videos after 7 days</li>
            </ul>
            <p>
              Despite our efforts, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security of data transmitted to or stored on our systems. You use the Services at your own risk.
            </p>
          </section>

          <section>
            <h2>12. International Data Transfers</h2>
            <p>
              Your data (prompts, images, generated videos) may be processed in the United States or other countries where our service providers operate (including OpenAI, Google, and xAI). By using the Services, you consent to the transfer of your data to these jurisdictions, which may have data protection laws that differ from your jurisdiction.
            </p>
          </section>

          <section>
            <h2>13. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY UNAUTHORIZED ACCESS TO, USE OF, OR ALTERATION OF YOUR CONTENT OR DATA. WE SHALL NOT BE LIABLE FOR ANY ACTIONS TAKEN BY THIRD-PARTY AI PROVIDERS (OPENAI, GOOGLE, XAI) WITH RESPECT TO DATA TRANSMITTED TO THEM THROUGH OUR SERVICES.
            </p>
            <p>
              WE ACT AS AN INTERMEDIARY AND DO NOT CONTROL THE DATA PROCESSING PRACTICES OF OUR AI PROVIDERS. YOUR USE OF THE SERVICES AND ANY DATA TRANSMITTED THROUGH THEM IS AT YOUR OWN RISK.
            </p>
          </section>

          <section>
            <h2>14. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Since we do not collect email addresses, we will notify you of material changes through an in-app notice. Your continued use of the Services after any modifications constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2>15. Chaty iOS App</h2>
            <p>
              The following disclosures apply specifically to the Chaty iOS application (&ldquo;Chaty&rdquo;), also published by AI Video Platform.
            </p>

            <h3>15.1 Offline-Only Operation</h3>
            <p>
              Chaty is designed to operate entirely offline. The app makes zero network calls and never connects to the internet. All AI processing is performed on-device using the bundled Chaty-1 model. Conversations, prompts, and AI-generated responses never leave your device.
            </p>

            <h3>15.2 No Data Collection</h3>
            <p>
              Chaty does not collect any data whatsoever. There is no analytics, no crash reporting, no telemetry, no logging to external servers, and no third-party SDKs of any kind. Specifically:
            </p>
            <ul>
              <li>No Firebase, no analytics platforms, no ad networks, no attribution SDKs</li>
              <li>No advertising identifiers or device fingerprinting</li>
              <li>No user accounts, no sign-in, no authentication</li>
              <li>No tracking of any kind</li>
            </ul>

            <h3>15.3 Local Storage</h3>
            <p>
              All data created within Chaty &mdash; including conversation history, user preferences (such as system prompt and TTS voice selection), and media attachments &mdash; is stored exclusively in the app&rsquo;s sandboxed container on your device. This data is never transmitted, synced, or backed up to any external server.
            </p>

            <h3>15.4 Device Permissions</h3>
            <p>Chaty may request the following iOS permissions:</p>
            <ul>
              <li><strong>Microphone:</strong> Used solely for on-device speech-to-text via Apple&rsquo;s Speech framework. Audio is processed in real time on-device and is not recorded, stored, or transmitted.</li>
              <li><strong>Photo Library (Save Only):</strong> Used only to save images to your photo library when you explicitly request it. Chaty cannot browse or read your photo library.</li>
            </ul>
            <p>All permissions are optional. Chaty is fully functional without granting any permissions.</p>

            <h3>15.5 Third-Party Services</h3>
            <p>
              Chaty uses no third-party services. There are no SDKs, APIs, analytics tools, advertising networks, or external dependencies of any kind. The AI model (Chaty-1) is fully bundled inside the application binary.
            </p>

            <h3>15.6 Children&rsquo;s Privacy</h3>
            <p>
              Because Chaty collects no data and has no network connectivity, it does not collect information from users of any age.
            </p>
          </section>

          <section>
            <h2>16. UV Index iOS App</h2>
            <p>
              The following disclosures apply specifically to the UV Index iOS application (&ldquo;UV Index&rdquo;), the sun and UV forecast app also published by AI Video Platform.
            </p>

            <h3>16.1 No Accounts and No Tracking</h3>
            <p>
              UV Index has no accounts, no sign-in, no analytics, no advertising, and no tracking of any kind, and it contains no third-party SDKs. Unlike the AI Video Platform App, UV Index does not use Firebase, Adapty, or the Meta SDK. We do not collect your name, email address, or any other personal identifier through UV Index.
            </p>

            <h3>16.2 Location</h3>
            <p>
              If you grant location permission, UV Index uses your device location (precise coordinates, unless you turn off Precise Location for the app in iOS Settings) for one purpose: showing the UV forecast for where you are. Your coordinates are sent over an encrypted connection to the weather services described in Section 16.4 to retrieve the forecast, and to Apple&rsquo;s geocoding service to turn them into a place name for display (covered by Apple&rsquo;s privacy policy linked in Section 16.4). We do not store your location on any server of ours, we do not maintain a history of your movements, and your location is never linked to your identity.
            </p>
            <p>
              Location permission is optional. You can decline it and search for any city instead, and the app remains fully functional. You can change this permission at any time in the iOS Settings app.
            </p>

            <h3>16.3 Apple Health (HealthKit)</h3>
            <p>
              If you choose to connect Apple Health, UV Index can save your finished sun sessions to Health: time in daylight and UV exposure. This connection is optional and is requested through the standard Apple Health permission sheet, where you control exactly what the app may write. UV Index only writes these sessions; it does not request or read any Health data.
            </p>
            <ul>
              <li>Health data is written only to Apple Health on your device. It is never transmitted to us or to any third party.</li>
              <li>We never use Health or HealthKit data for advertising, marketing, or similar purposes.</li>
              <li>We never sell or share Health or HealthKit data with anyone, including data brokers, advertisers, or analytics platforms.</li>
              <li>You can revoke the app&rsquo;s Health access at any time in the Health app under Sharing, or in iOS Settings.</li>
            </ul>

            <h3>16.4 Weather Data Providers</h3>
            <p>
              UV Index fetches forecasts from Open-Meteo, which provides UV and weather data and city search. If Open-Meteo is unavailable, the app falls back to Apple Weather (Apple&rsquo;s WeatherKit service) so your forecast still loads. In both cases the request contains the coordinates or the city name being looked up and standard technical request information such as an IP address, which every internet request includes. No identifier of yours is attached by us. See <a href="https://open-meteo.com/en/terms" className="text-brand-500 hover:underline">Open-Meteo&rsquo;s privacy policy</a> and <a href="https://www.apple.com/legal/privacy/" className="text-brand-500 hover:underline">Apple&rsquo;s privacy policy</a>.
            </p>

            <h3>16.5 Notifications and Local Storage</h3>
            <p>
              If you enable sun alerts, notifications are scheduled locally on your device from the forecast you already loaded. No notification data leaves your device, and we do not use push notification servers. Your preferences (skin type, SPF, units, alert threshold, saved places, and your most recent forecast for the widget) are stored locally on your device and are not uploaded anywhere by us. Deleting the app deletes this data.
            </p>

            <h3>16.6 Children&rsquo;s Privacy</h3>
            <p>
              UV Index has no accounts, no social features, and no advertising, and it does not knowingly collect personal information from anyone, including children. The 17+ rating discussed in Section 9 applies to the AI Video Platform App, not to UV Index, which carries its own App Store age rating.
            </p>
          </section>

          <section>
            <h2>17. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <p>
              AI Video Platform<br />
              Email: <a href="mailto:admin@aivideoplatform.ai" className="text-brand-500 hover:underline">admin@aivideoplatform.ai</a>
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}
