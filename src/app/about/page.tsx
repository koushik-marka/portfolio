"use client";

import React from "react";
import { motion } from "framer-motion";
import AcademicCTA from "@/components/AcademicCTA";
import { portfolio } from "@/content/portfolio";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 sm:px-6 py-12 font-inter selection:bg-black selection:text-white overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 0)",
          backgroundSize: "10px 10px",
        }}
      />

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 mx-auto max-w-6xl">
        <header className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center border-[4px] md:border-[6px] border-black p-6 md:p-8 bg-white shadow-[8px_8px_0px_black] md:shadow-[12px_12px_0px_black]">
          <div className="md:col-span-4 relative w-full">
            <div className="absolute -inset-2 border-2 border-black rotate-[-3deg]" />
            <div className="relative overflow-hidden border-[4px] border-black bg-stone-950 text-stone-100 min-h-[320px] p-6 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/splash.png')] bg-cover bg-center" />
              <div className="relative z-10">
                <div className="inline-block bg-white text-black px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                  DOSSIER
                </div>
                <h2 className="font-bebas text-5xl italic leading-[0.9] uppercase">{portfolio.name}</h2>
                <p className="text-sm text-stone-300 mt-3">{portfolio.location}</p>
              </div>

              <div className="relative z-10 space-y-4 text-sm">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Education</p>
                  <p className="font-bold text-stone-100">{portfolio.education.school}</p>
                  <p className="text-stone-400">{portfolio.education.period}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Reach</p>
                  <p className="break-all text-stone-300">{portfolio.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 md:space-y-6">
            <div className="inline-block bg-black text-white px-3 py-1 text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] uppercase">
              {portfolio.roleLabel}
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bebas italic leading-[0.9] tracking-tighter uppercase">
              {portfolio.role.split(" ")[0]}{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_black]">
                {portfolio.role.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className="space-y-3 md:space-y-4 border-l-[3px] md:border-l-[4px] border-black pl-4 md:pl-6">
              <p className="text-base sm:text-lg md:text-xl font-black leading-tight uppercase tracking-tighter">
                Shipping AI and systems work that stays modular, legible, and useful.
              </p>
              <p className="text-sm md:text-lg text-black/70 leading-relaxed max-w-2xl font-medium">
                {portfolio.tagline}
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-5 space-y-10 md:space-y-12">
            <div className="relative border-2 border-black p-5 md:p-6 bg-gray-50/50">
              <h2 className="font-bebas text-3xl md:text-4xl mb-3 md:mb-4 italic tracking-tight">HOW I THINK</h2>
              <p className="text-sm md:text-base text-black/80 font-medium leading-relaxed italic">
                Correctness before noise. Reusable abstractions before duplication. Interfaces should help people understand systems, not hide them.
              </p>
              <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 bg-black skew-x-[45deg] translate-x-3 md:translate-x-4 -translate-y-3 md:-translate-y-4" />
            </div>

            <div className="space-y-6">
              <h2 className="font-bebas text-2xl md:text-3xl tracking-widest text-black flex items-center gap-4">
                <div className="h-1 flex-grow bg-black" /> CURRENT_FOCUS
              </h2>
              <ul className="space-y-4">
                {portfolio.currentFocus.map((item, index) => (
                  <li key={item} className="flex items-start gap-4 font-black uppercase text-[10px] md:text-xs tracking-widest group">
                    <span className="text-red-600">[0{index + 1}]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 md:pt-8 border-t-[3px] md:border-t-4 border-black">
              <h2 className="font-bebas text-2xl md:text-3xl mb-1 md:mb-2 italic">BACKGROUND</h2>
              <p className="text-black/70 font-black uppercase text-[10px] md:text-xs leading-loose tracking-tight">
                {portfolio.education.degree} at {portfolio.education.school}. <br />
                {portfolio.education.detail}
              </p>
            </div>
          </aside>

          <section className="lg:col-span-7 space-y-12 md:space-y-16">
            {portfolio.skillGroups.map((group) => (
              <div key={group.title} className="group">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-bebas text-4xl md:text-5xl tracking-tighter group-hover:italic transition-all uppercase">
                    {group.title.split(" ")[0]}{" "}
                    <span className="text-transparent [-webkit-text-stroke:1px_black]">
                      {group.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-black/60 font-black uppercase tracking-tight mb-6 max-w-xl border-l-2 border-black/20 pl-4">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                      className="px-3 md:px-4 py-1 md:py-1.5 border-2 border-black font-black uppercase text-[9px] md:text-[10px] tracking-widest cursor-crosshair transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        <footer className="mt-20 md:mt-32 border-t-[6px] md:border-t-[8px] border-black pt-10 md:pt-12 pb-16 md:pb-20">
          <AcademicCTA />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-[1.1] italic">
                {portfolio.availability}
              </p>
            </div>

            <motion.a
              href="/contact"
              className="w-full md:w-auto text-center relative px-8 md:px-12 py-5 md:py-6 bg-black text-white font-bebas text-3xl md:text-4xl italic tracking-widest group overflow-hidden"
            >
              <span className="relative z-10">GET_IN_TOUCH -&gt;</span>
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </motion.a>
          </div>
        </footer>
      </motion.section>
    </main>
  );
}
