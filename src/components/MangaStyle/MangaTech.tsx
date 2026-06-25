"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolio } from "@/content/portfolio"

export default function TechTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 bg-white font-inter overflow-hidden">
      <div className="mb-8 flex flex-col items-start border-l-[8px] md:border-l-[12px] border-black pl-5 md:pl-8">
        <h2 className="text-5xl sm:text-6xl md:text-[8rem] font-bebas leading-[0.8] tracking-tighter italic uppercase text-black">
          TECH <br className="md:hidden" />
          <span className="text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:1.5px_black]">STACK</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[3px] md:border-[4px] border-black relative z-10">
        {portfolio.techTabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            className={`relative py-4 md:h-23 overflow-hidden transition-all duration-300 border-black border-b-[3px] md:border-b-0 md:border-r-[4px] last:border-b-0 last:border-r-0 ${
              activeTab === idx ? "bg-black text-white" : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            <div className="hidden sm:block absolute inset-0 z-0 opacity-10 pointer-events-none border-r-[1px] border-black skew-x-[-15deg]" />
            <div className="relative z-10 flex flex-col items-start px-6 md:px-8 justify-center h-full text-left">
              <span className="text-[8px] md:text-[10px] font-black tracking-widest uppercase opacity-60 italic">{tab.sub}</span>
              <h3 className="font-bebas text-2xl md:text-4xl tracking-tighter uppercase italic">{tab.label}</h3>
            </div>
          </button>
        ))}
      </div>

      <div className="relative border-x-[3px] border-b-[3px] md:border-x-[4px] md:border-b-[4px] border-black p-5 md:p-8 min-h-[500px] md:min-h-[450px] bg-white shadow-[10px_10px_0px_rgba(0,0,0,0.05)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col md:grid md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-5 space-y-4">
              <div className="inline-block border-2 border-black px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-black text-black/80 uppercase tracking-widest">
                Operational Registry // 0{activeTab + 1}
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-5xl font-black leading-[1.1] text-black tracking-tighter uppercase">
                {portfolio.techTabs[activeTab].description}
              </h4>
              <p className="text-[10px] md:text-sm font-medium text-black/60 uppercase pt-4 border-t-2 border-black/10 leading-relaxed">
                Focused on product-minded engineering rather than isolated one-off demos.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 gap-2 md:gap-3">
              {portfolio.techTabs[activeTab].tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-20 sm:h-24 md:h-32 border-[2px] md:border-[3px] border-black overflow-hidden group cursor-crosshair bg-white"
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="absolute inset-0 w-full h-full object-contain p-4 md:p-6 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500 z-0"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-4 z-10 bg-white/40 group-hover:bg-black/90 transition-colors duration-300">
                    <span className="font-bebas text-lg md:text-3xl tracking-tight text-black group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>

                  <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden md:flex absolute bottom-6 left-8 items-center gap-4 opacity-10">
          <span className="text-[10px] font-black tracking-[0.4em] text-black uppercase">
            Systems // 2026 // {portfolio.name}
          </span>
          <div className="w-12 h-[2px] bg-black" />
        </div>
      </div>
    </section>
  )
}
