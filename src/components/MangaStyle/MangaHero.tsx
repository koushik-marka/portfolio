"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";

export default function MangaHero() {
  return (
    <section className="relative min-h-[83vh] flex items-center overflow-hidden bg-white text-black font-inter border-[7px] border-black m-2 md:m-2">
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 0)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="relative z-20 w-full px-6 md:px-24 py-14 md:py-0">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-8 max-w-5xl">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-bebas leading-[0.85] tracking-tighter italic uppercase">
                {portfolio.firstName} <br />
                {portfolio.lastName}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-5"
            >
              <div className="inline-block bg-black text-white px-6 py-3 text-lg md:text-xl font-bold uppercase tracking-tight rotate-[-1deg]">
                {portfolio.role}
              </div>

              <div className="max-w-3xl space-y-4">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-black/75 tracking-tight">
                  {portfolio.summary}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {portfolio.heroHighlights.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-black px-4 py-2 text-xs md:text-sm font-black uppercase tracking-[0.18em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-black tracking-[0.25em] uppercase text-black/40 pt-2">
                  Based in {portfolio.location}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative border-[4px] border-black bg-stone-950 text-stone-100 p-6 md:p-8 overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/splash.png')] bg-cover bg-center" />
              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-500 mb-3">
                    SYSTEM_STATUS
                  </p>
                  <h2 className="font-bebas text-4xl md:text-5xl italic leading-none uppercase">
                    Building with <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4]">clarity</span>
                  </h2>
                </div>

                <div className="space-y-4 border-t border-stone-800 pt-5">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-500">Education</p>
                    <p className="text-sm font-bold uppercase text-stone-100">{portfolio.education.school}</p>
                    <p className="text-sm text-stone-400">{portfolio.education.degree}</p>
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-500">Current Focus</p>
                    <p className="text-sm text-stone-300">{portfolio.heroFocus}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-30 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <span className="[writing-mode:vertical-lr] font-black text-[10px] tracking-[0.5em] uppercase opacity-40">
            Explore Work
          </span>
          <div className="w-[2px] h-20 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
