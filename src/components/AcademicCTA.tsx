"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export default function AcademicCTA() {
  return (
    <section className="my-20 border-2 border-stone-100 bg-stone-100 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 0)", backgroundSize: "10px 10px" }} />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-black tracking-[0.4em] text-stone-500 uppercase italic">
            Current_Academic_Base // {portfolio.education.school}
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl text-stone-950 leading-none uppercase italic">
            BUILDING <span className="text-transparent [-webkit-text-stroke:1px_#0c0a09]">WHILE LEARNING</span>
          </h2>
          <p className="text-stone-600 font-bold text-xs uppercase tracking-widest max-w-2xl">
            {portfolio.education.degree} | {portfolio.education.period} | {portfolio.education.detail}
          </p>
        </div>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-4 bg-stone-950 text-stone-100 px-10 py-5 font-bebas text-3xl italic tracking-tighter group transition-all shadow-[8px_8px_0px_#999]"
        >
          LET&apos;S_CONNECT <ExternalLink size={24} className="group-hover:rotate-45 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
