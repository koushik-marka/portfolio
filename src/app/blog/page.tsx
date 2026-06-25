"use client"

import { motion } from "framer-motion"
import { portfolio } from "@/content/portfolio"

export default function MediumIntegration() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 bg-stone-950 font-inter overflow-hidden">
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-800 pb-8 md:pb-12">
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-stone-100 italic uppercase leading-none">
          CREDENTIAL <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4]">STACK</span>
        </h2>
        <div className="text-left md:text-right mt-4 md:mt-0">
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-stone-500 italic">
            Certifications // Activities // Milestones
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800 border-2 border-stone-800 mb-14">
        {portfolio.certifications.map((cert, i) => (
          <motion.div
            key={cert}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
            className="p-6 md:p-8 bg-stone-950 flex flex-col justify-between group min-h-[280px] md:min-h-[320px] transition-all"
          >
            <div>
              <div className="flex justify-between items-center mb-8 md:mb-10">
                <span className="text-[9px] md:text-[10px] font-black text-stone-600 uppercase tracking-widest">
                  CERT_0{i + 1}
                </span>
                <span className="text-[9px] md:text-[10px] font-black text-stone-100 uppercase tracking-widest italic">
                  VERIFIED PATH
                </span>
              </div>

              <h3 className="font-bebas text-3xl md:text-4xl text-stone-100 leading-tight mb-4 md:mb-6 group-hover:text-stone-100 transition-colors uppercase">
                {cert}
              </h3>

              <p className="text-stone-500 text-xs md:text-sm font-medium leading-relaxed uppercase tracking-tight">
                Continuing to build stronger foundations across AI, cloud, and vector-search-oriented systems.
              </p>
            </div>

            <div className="flex items-center gap-4 text-[9px] md:text-[10px] font-black text-stone-100 uppercase tracking-[0.3em] mt-8">
              Skill_Track <div className="h-[1px] w-6 md:w-8 bg-stone-100 group-hover:w-16 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="text-[10px] font-black tracking-[0.4em] text-stone-500 uppercase mb-4">Highlights</div>
          <div className="space-y-4">
            {portfolio.achievements.map((achievement, index) => (
              <div key={achievement} className="border-l-2 border-stone-700 pl-4">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-600 mb-2">0{index + 1}</p>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-black tracking-[0.4em] text-stone-500 uppercase mb-4">Academic Base</div>
          <div className="border-2 border-stone-800 p-6 md:p-8 bg-stone-950 space-y-5">
            <h3 className="font-bebas text-4xl md:text-5xl italic uppercase text-stone-100">
              {portfolio.education.school}
            </h3>
            <p className="text-stone-400 text-sm md:text-base">{portfolio.education.degree}</p>
            <p className="text-stone-300 text-sm uppercase tracking-[0.3em]">{portfolio.education.period}</p>
            <p className="text-stone-500 text-sm leading-relaxed">{portfolio.education.detail}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
