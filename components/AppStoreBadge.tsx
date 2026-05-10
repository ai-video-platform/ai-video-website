import Image from "next/image"

export default function AppStoreBadge({
  href = "https://apps.apple.com",
  className = "",
}: {
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-opacity hover:opacity-70 ${className}`}
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={150}
        height={50}
        priority
      />
    </a>
  )
}
