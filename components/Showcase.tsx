"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"
import GradientOrb from "./GradientOrb"

const showcaseItems = [
  {
    prompt: '"A golden sunset over Tokyo skyline, cinematic"',
    style: "Cinematic",
    scene: (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-orange-300 via-pink-400 to-purple-800">
        {/* Sun */}
        <motion.div
          className="absolute left-1/2 top-[30%] h-14 w-14 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-200 to-orange-400 shadow-xl shadow-orange-500/50"
          animate={{ top: ["28%", "34%", "28%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Clouds */}
        <motion.div
          className="absolute left-[10%] top-[20%] h-4 w-16 rounded-full bg-white/20 blur-sm"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[15%] top-[25%] h-3 w-12 rounded-full bg-white/15 blur-sm"
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        {/* Water reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-b from-purple-900/50 to-purple-950/80">
          <motion.div
            className="absolute left-1/2 top-2 h-24 w-1 -translate-x-1/2 bg-gradient-to-b from-orange-300/40 to-transparent blur-[2px]"
            animate={{ scaleY: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
        {/* City skyline */}
        <svg className="absolute bottom-[34%] left-0 right-0 h-12 w-full" viewBox="0 0 200 40" fill="rgba(30,10,50,0.85)">
          <rect x="2" y="15" width="8" height="25" />
          <rect x="12" y="8" width="6" height="32" />
          <rect x="20" y="18" width="10" height="22" />
          <rect x="32" y="5" width="7" height="35" />
          <rect x="41" y="12" width="12" height="28" />
          <rect x="55" y="16" width="8" height="24" />
          <rect x="65" y="7" width="5" height="33" />
          <rect x="72" y="14" width="14" height="26" />
          <rect x="88" y="3" width="9" height="37" />
          <rect x="99" y="10" width="10" height="30" />
          <rect x="111" y="6" width="6" height="34" />
          <rect x="119" y="15" width="12" height="25" />
          <rect x="133" y="9" width="7" height="31" />
          <rect x="142" y="13" width="10" height="27" />
          <rect x="154" y="4" width="8" height="36" />
          <rect x="164" y="11" width="12" height="29" />
          <rect x="178" y="16" width="8" height="24" />
          <rect x="188" y="8" width="12" height="32" />
        </svg>
        {/* Tokyo Tower */}
        <div className="absolute bottom-[34%] left-[45%] w-1.5 h-14 bg-gradient-to-t from-red-600/80 to-red-500/60" />
      </div>
    ),
  },
  {
    prompt: '"Underwater coral reef, bioluminescent creatures"',
    style: "Fantasy",
    scene: (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-950">
        {/* Light rays from above */}
        <motion.div
          className="absolute left-[20%] top-0 h-full w-12 rotate-[8deg] bg-gradient-to-b from-cyan-300/10 to-transparent blur-md"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[30%] top-0 h-full w-8 -rotate-[5deg] bg-gradient-to-b from-blue-300/10 to-transparent blur-md"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        {/* Coral */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%]">
          <svg viewBox="0 0 200 80" className="h-full w-full">
            <ellipse cx="30" cy="70" rx="20" ry="15" fill="rgba(244,63,94,0.6)" />
            <ellipse cx="80" cy="65" rx="25" ry="18" fill="rgba(168,85,247,0.5)" />
            <ellipse cx="140" cy="70" rx="18" ry="12" fill="rgba(251,146,60,0.5)" />
            <ellipse cx="170" cy="68" rx="22" ry="16" fill="rgba(52,211,153,0.4)" />
            <path d="M50 80 Q55 50 52 35 Q48 50 50 80" fill="rgba(16,185,129,0.6)" />
            <path d="M110 80 Q115 45 112 30 Q108 45 110 80" fill="rgba(34,211,238,0.5)" />
            <path d="M160 80 Q163 55 161 40 Q158 55 160 80" fill="rgba(139,92,246,0.5)" />
          </svg>
        </div>
        {/* Bioluminescent particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
              backgroundColor: i % 2 === 0 ? "rgba(34,211,238,0.7)" : "rgba(168,85,247,0.7)",
              boxShadow: i % 2 === 0 ? "0 0 8px rgba(34,211,238,0.8)" : "0 0 8px rgba(168,85,247,0.8)",
            }}
            animate={{
              y: [0, -10 - (i % 3) * 5, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        {/* Jellyfish */}
        <motion.div
          className="absolute left-[60%] top-[25%]"
          animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-6 w-8 rounded-t-full bg-gradient-to-b from-pink-400/50 to-purple-400/30 shadow-lg shadow-pink-400/20" />
          <div className="ml-1 h-8 w-0.5 bg-gradient-to-b from-pink-300/40 to-transparent" />
          <div className="ml-3 h-6 w-0.5 bg-gradient-to-b from-pink-300/30 to-transparent" />
          <div className="ml-5 h-7 w-0.5 bg-gradient-to-b from-pink-300/40 to-transparent" />
        </motion.div>
        {/* Bubbles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute h-1.5 w-1.5 rounded-full border border-white/30"
            style={{ left: `${25 + i * 15}%`, bottom: "10%" }}
            animate={{ y: [0, -(100 + i * 40)], opacity: [0.6, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.2 }}
          />
        ))}
      </div>
    ),
  },
  {
    prompt: '"Northern lights over snowy mountains, ethereal"',
    style: "Ethereal",
    scene: (
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
        {/* Stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white"
            style={{ left: `${5 + i * 8}%`, top: `${5 + (i * 7) % 30}%` }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        {/* Aurora */}
        <motion.div
          className="absolute left-0 right-0 top-[15%] h-[40%]"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <motion.div
            className="absolute left-[10%] top-0 h-full w-[30%] rounded-full bg-gradient-to-b from-green-400/30 via-emerald-300/20 to-transparent blur-xl"
            animate={{ skewX: [0, 5, 0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-[35%] top-[10%] h-[80%] w-[25%] rounded-full bg-gradient-to-b from-cyan-400/25 via-teal-300/15 to-transparent blur-xl"
            animate={{ skewX: [0, -4, 0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute left-[55%] top-[5%] h-[90%] w-[30%] rounded-full bg-gradient-to-b from-purple-400/20 via-violet-300/15 to-transparent blur-xl"
            animate={{ skewX: [0, 6, 0, -6, 0] }}
            transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
        {/* Mountains */}
        <svg className="absolute bottom-0 left-0 right-0 h-[45%] w-full" viewBox="0 0 200 80" preserveAspectRatio="none">
          <polygon points="0,80 0,50 30,25 60,45 90,15 120,40 150,20 180,35 200,10 200,80" fill="rgba(30,41,59,0.9)" />
          <polygon points="0,80 0,60 20,40 50,55 80,30 110,50 140,35 170,45 200,25 200,80" fill="rgba(51,65,85,0.8)" />
          {/* Snow caps */}
          <polygon points="85,15 90,15 93,20 87,20" fill="rgba(255,255,255,0.7)" />
          <polygon points="147,20 150,20 153,25 144,25" fill="rgba(255,255,255,0.6)" />
          <polygon points="197,10 200,10 200,16 194,16" fill="rgba(255,255,255,0.5)" />
        </svg>
        {/* Snow particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`snow-${i}`}
            className="absolute h-1 w-1 rounded-full bg-white/60"
            style={{ left: `${10 + i * 15}%`, top: "-5%" }}
            animate={{ y: [0, 400], x: [0, (i % 2 === 0 ? 15 : -15)] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
          />
        ))}
      </div>
    ),
  },
]

export default function Showcase() {
  return (
    <section className="section-padding relative overflow-hidden">
      <GradientOrb color="cyan" size="lg" className="-right-32 top-1/4" />
      <GradientOrb color="purple" size="md" className="-left-20 bottom-1/4" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="heading-lg mb-4">See what you can create.</h2>
          <p className="body-lg mx-auto max-w-2xl">
            From cinematic scenes to fantasy worlds — if you can describe it, you can make it.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.style}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* Video card in phone-like frame */}
              <div className="relative mb-4 aspect-[9/16] overflow-hidden rounded-3xl border border-surface-200 shadow-xl shadow-black/10">
                {item.scene}
                {/* Overlay UI */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between">
                    <span className="rounded-full bg-black/30 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                      {item.style}
                    </span>
                    <span className="rounded-full bg-black/30 px-2.5 py-0.5 text-[10px] text-white/70 backdrop-blur-sm">
                      0:30
                    </span>
                  </div>
                  <div>
                    <div className="mb-2 h-0.5 overflow-hidden rounded-full bg-white/20">
                      <motion.div
                        className="h-full rounded-full bg-white/80"
                        animate={{ width: ["10%", "90%", "10%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: index * 2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs italic text-text-tertiary">{item.prompt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
