"use client"

import { motion } from "framer-motion"

export default function DeviceMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mx-auto w-[280px] md:w-[320px]"
    >
      {/* iPhone frame */}
      <div className="relative overflow-hidden rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl shadow-black/25">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

        {/* Screen content - Realistic app UI */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-[#0a0a1a]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-8 pb-2">
            <span className="text-[9px] font-medium text-white/70">9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-2 w-3 rounded-sm border border-white/70">
                <div className="m-[1px] h-[4px] w-[6px] rounded-[1px] bg-white/70" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-5 pt-2 pb-3">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-white">Create Video</span>
              <div className="flex items-center gap-1 rounded-full bg-indigo-500/20 px-2.5 py-1">
                <svg className="h-2.5 w-2.5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[9px] font-medium text-indigo-300">87 credits</span>
              </div>
            </div>
          </div>

          {/* Video preview area with animated scene */}
          <div className="mx-4 overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-orange-400 via-pink-500 to-purple-700">
              {/* Animated "video" content - sunset scene */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              {/* Sun */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-to-b from-yellow-300 to-orange-400 shadow-lg shadow-orange-400/50"
                animate={{ top: ["35%", "40%", "35%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* City silhouette */}
              <div className="absolute bottom-0 left-0 right-0 h-8">
                <svg viewBox="0 0 200 30" className="h-full w-full" fill="rgba(0,0,0,0.7)">
                  <rect x="5" y="10" width="8" height="20" />
                  <rect x="15" y="5" width="6" height="25" />
                  <rect x="23" y="12" width="10" height="18" />
                  <rect x="35" y="3" width="7" height="27" />
                  <rect x="44" y="8" width="12" height="22" />
                  <rect x="58" y="14" width="8" height="16" />
                  <rect x="68" y="6" width="5" height="24" />
                  <rect x="75" y="10" width="14" height="20" />
                  <rect x="91" y="2" width="8" height="28" />
                  <rect x="101" y="9" width="10" height="21" />
                  <rect x="113" y="5" width="6" height="25" />
                  <rect x="121" y="12" width="12" height="18" />
                  <rect x="135" y="7" width="7" height="23" />
                  <rect x="144" y="11" width="10" height="19" />
                  <rect x="156" y="4" width="8" height="26" />
                  <rect x="166" y="9" width="12" height="21" />
                  <rect x="180" y="13" width="8" height="17" />
                  <rect x="190" y="8" width="10" height="22" />
                </svg>
              </div>
              {/* Lens flare */}
              <motion.div
                className="absolute left-1/2 top-1/3 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/20 blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Playing indicator */}
              <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[8px] text-white font-medium">Generating</span>
              </div>
            </div>
          </div>

          {/* Prompt input area */}
          <div className="mx-4 mt-3 rounded-xl bg-white/5 border border-white/10 p-3">
            <motion.div
              className="flex flex-wrap gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {["A", "golden", "sunset", "over", "Tokyo", "skyline,", "cinematic"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.3, duration: 0.2 }}
                  className="text-[10px] text-white/90"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="text-[10px] text-white/50"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>
          </div>

          {/* Style selector */}
          <div className="mx-4 mt-3 flex gap-2 overflow-hidden">
            {[
              { label: "Cinematic", active: true },
              { label: "Anime", active: false },
              { label: "Realistic", active: false },
            ].map((style) => (
              <div
                key={style.label}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[9px] font-medium ${
                  style.active
                    ? "bg-indigo-500 text-white"
                    : "bg-white/5 text-white/50 border border-white/10"
                }`}
              >
                {style.label}
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mx-4 mt-3">
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-white/40">0:00</span>
              <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  animate={{ width: ["0%", "72%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="text-[8px] text-white/40">0:30</span>
            </div>
          </div>

          {/* Bottom action buttons */}
          <div className="absolute bottom-6 left-4 right-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3" />
                </svg>
              </div>
            </div>
            <motion.div
              className="flex h-10 items-center gap-1.5 rounded-full bg-indigo-500 px-4 shadow-lg shadow-indigo-500/30"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
              <span className="text-[10px] font-semibold text-white">Generate</span>
            </motion.div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Glow underneath */}
      <div className="absolute -bottom-8 left-1/2 h-20 w-4/5 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-2xl" />
    </motion.div>
  )
}
