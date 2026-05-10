export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconSize = size === "large" ? "h-9 w-9" : "h-7 w-7"
  const textSize = size === "large" ? "text-xl" : "text-lg"

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`${iconSize} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-blue-600 shadow-md shadow-brand-500/20`}>
        <svg className="h-3.5 w-3.5 translate-x-[1px] text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5.14v14l11-7-11-7z" />
        </svg>
      </span>
      <span className={`${textSize} font-semibold text-text-primary`}>AI Video Platform</span>
    </span>
  )
}
