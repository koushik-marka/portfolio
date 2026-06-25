"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export default function FeaturedLog() {
  const spotlight = {
    title: "Semester Topper & Smart India Hackathon Finalist Track",
    category: "ACHIEVEMENT_SPOTLIGHT",
    primary: portfolio.achievements[0],
    secondary: portfolio.achievements[1],
    projects: portfolio.projects.length,
    certifications: portfolio.certifications.length,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 bg-stone-950 font-inter">
      <div className="border-t-2 border-stone-800 pt-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 bg-red-900 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.4em] text-stone-500 uppercase">
            Featured_Milestone // Resume_Highlights
          </span>
        </div>

        <motion.a
          href="/blog"
          whileHover={{ y: -4 }}
          className="group block relative border-2 md:border-[4px] border-stone-100 p-6 md:p-12 bg-stone-950 transition-all hover:bg-stone-900"
        >
          <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-4 order-2 lg:order-1 flex md:flex-col gap-6 md:gap-8 border-t lg:border-t-0 lg:border-r border-stone-800 pt-8 lg:pt-0 lg:pr-12">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-stone-500 mb-1">
                  <Trophy size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Projects</span>
                </div>
                <div className="font-bebas text-5xl md:text-6xl text-stone-100 italic">{spotlight.projects}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-stone-500 mb-1">
                  <Medal size={14} />
                  <span className="text-[9px] font-black uppercase tracking-widest">Credentials</span>
                </div>
                <div className="font-bebas text-5xl md:text-6xl text-stone-100 italic">{spotlight.certifications}</div>
              </div>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2 space-y-6">
              <div className="inline-block bg-red-900 text-stone-100 px-3 py-1 text-[9px] font-black tracking-widest uppercase italic">
                {spotlight.category}
              </div>
              <h3 className="font-bebas text-5xl md:text-7xl text-stone-100 leading-[0.85] uppercase tracking-tighter group-hover:italic transition-all">
                {spotlight.title}
              </h3>
              <p className="text-stone-400 text-sm md:text-lg font-medium leading-relaxed italic border-l-2 border-stone-800 pl-6 uppercase">
                {spotlight.primary}
              </p>
              <p className="text-stone-500 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-tight">
                {spotlight.secondary}
              </p>

              <div className="pt-4 flex items-center gap-4 text-[10px] font-black text-stone-100 uppercase tracking-[0.4em]">
                View Credentials <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 0)", backgroundSize: "8px 8px" }} />
        </motion.a>
      </div>
    </section>
  )
}
