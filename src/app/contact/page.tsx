"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Copy, Check } from "lucide-react";
import AcademicCTA from "@/components/AcademicCTA";
import { portfolio } from "@/content/portfolio";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const subject = "Portfolio Inquiry";
  const body = `Hi ${portfolio.firstName},\n\nI visited your portfolio and would love to connect about a role, project, or collaboration.\n`;
  const mailtoUrl = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <main className="min-h-screen bg-white px-4 md:px-6 py-12 md:py-24 flex justify-center text-black font-inter selection:bg-black selection:text-white overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 0)",
          backgroundSize: "12px 12px",
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start"
      >
        <div className="hidden lg:block lg:col-span-5 relative group">
          <div className="absolute -inset-4 border-2 border-black rotate-[-2deg] group-hover:rotate-0 transition-transform" />
          <div className="relative aspect-[3/4] border-[6px] border-black bg-stone-950 text-stone-100 overflow-hidden shadow-[15px_15px_0px_black] p-8">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/splash.png')] bg-cover bg-center" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-white text-black px-4 py-1 font-bebas text-xl italic uppercase">
                  {portfolio.name}
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.35em] text-stone-500">Open for conversation</p>
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Base</p>
                  <p>{portfolio.location}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Education</p>
                  <p>{portfolio.education.school}</p>
                  <p className="text-stone-400">{portfolio.education.degree}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">Current Angle</p>
                  <p className="text-stone-300">{portfolio.currentFocus[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-7 md:space-y-12">
          <header className="border-b-[6px] md:border-b-[8px] border-black pb-6 md:pb-8">
            <div className="inline-block bg-black text-white px-3 py-1 text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] mb-4 uppercase italic">
              CONTACT // COLLABORATION
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-bebas leading-[0.85] md:leading-[0.8] tracking-tighter italic uppercase">
              CON
              <span className="text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:1.5px_black]">
                TACT
              </span>
            </h1>
          </header>

          <p className="text-xl md:text-2xl font-black leading-tight tracking-tight uppercase max-w-2xl">
            {portfolio.availability}
          </p>

          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/40">
              Email
            </label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <a
                href={`mailto:${portfolio.email}`}
                className="text-xl sm:text-2xl md:text-4xl font-bebas hover:italic transition-all border-b-2 md:border-b-4 border-black pb-1 group break-all"
              >
                {portfolio.email}{" "}
                <span className="inline-block group-hover:translate-x-2 transition-transform">-&gt;</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 md:px-6 py-2 border-2 border-black font-black uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "COPIED" : "COPY_EMAIL"}
              </button>
            </div>
          </div>

          <motion.a href={mailtoUrl} whileHover={{ x: 20 }} className="group flex items-center gap-8 cursor-pointer ">
            <div className="text-right">
              <span className="block text-stone-500 text-[9px] font-black uppercase tracking-[0.5em] mb-2 italic">
                Available for Roles and Projects
              </span>
              <span className="block font-bebas text-5xl md:text-7xl text-stone-700 italic leading-none group-hover:text-red-900 transition-colors">
                CONNECT
              </span>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-stone-600 flex items-center justify-center group-hover:bg-stone-100 group-hover:text-stone-950 transition-all">
              <span className="text-4xl md:text-6xl italic">-&gt;</span>
            </div>
          </motion.a>

          <AcademicCTA />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-3">
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group border-2 md:border-[3px] border-black p-4 md:p-6 hover:bg-black transition-colors bg-white"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-2">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:text-white transition-colors" />
                <span className="font-bebas text-2xl md:text-3xl group-hover:text-white transition-colors">
                  LINKEDIN
                </span>
              </div>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black/50 group-hover:text-white/50">
                Professional_Profile // CONNECT
              </p>
            </a>

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="group border-2 md:border-[3px] border-black p-4 md:p-6 hover:bg-black transition-colors bg-white"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-2">
                <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:text-white transition-colors" />
                <span className="font-bebas text-2xl md:text-3xl group-hover:text-white transition-colors">
                  GITHUB
                </span>
              </div>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black/50 group-hover:text-white/50">
                Projects & Open Source
              </p>
            </a>
          </div>

          <div className="pt-8 md:pt-12 flex justify-between items-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-black/30 border-t border-black/10">
            <span>{portfolio.coordinates}</span>
            <span>END_OF_TRANS</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
