"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/content/portfolio";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-stone-950 px-4 md:px-6 py-12 md:py-24 text-stone-100 font-inter overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <header className="relative z-10 max-w-7xl mx-auto mb-16 md:mb-40 border-l-[8px] md:border-l-[12px] border-stone-100 pl-5 md:pl-8">
        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-bebas leading-[0.85] md:leading-[0.8] tracking-tighter italic uppercase">
          PROJECT <br />
          <span className="text-transparent [-webkit-text-stroke:1px_#f5f5f4] md:[-webkit-text-stroke:2px_#f5f5f4]">
            ARCHIVES
          </span>
        </h1>
        <p className="text-stone-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mt-4 md:mt-6 text-[9px] md:text-xs italic">
          Distributed AI // Full-Stack Systems // Student Projects
        </p>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto space-y-32 md:space-y-64">
        {portfolio.projects.map((project, index) => (
          <motion.article
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center group scroll-mt-[20vh] md:scroll-mt-[25vh]"
          >
            <div className={`md:col-span-7 relative order-1 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
              <div className="absolute -inset-2 md:-inset-4 border-1 border-stone-800 rotate-[-1.5deg] group-hover:rotate-0 transition-transform duration-500" />

              <div className="relative aspect-video border-[2px] md:border-[8px] border-stone-100 bg-stone-900 overflow-hidden shadow-[20px_20px_0px_rgba(255,255,255,0.02)]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 0)", backgroundSize: "12px 12px" }}
                />
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-stone-400">{project.year}</span>
                  <div>
                    <div className="font-bebas text-5xl md:text-8xl leading-none tracking-tighter italic uppercase text-stone-100">
                      {project.name}
                    </div>
                    <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] text-stone-500 mt-3">
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`md:col-span-5 space-y-6 md:space-y-8 order-2 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
              <div className="space-y-2">
                <div className="inline-block bg-stone-100 text-stone-950 px-2 py-0.5 text-[9px] font-black tracking-widest uppercase italic">
                  PROJECT_0{index + 1}
                </div>
                <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter uppercase italic text-stone-100">
                  {project.name}
                </h2>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-stone-500">
                  Category: {project.category}
                </p>
              </div>

              <p className="text-base md:text-xl font-medium leading-tight text-stone-400 border-l-4 border-stone-800 pl-4 italic">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-stone-700 text-stone-300 text-[8px] md:text-[10px] font-black px-2 py-1 uppercase tracking-tighter hover:bg-stone-100 hover:text-stone-950 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-stone-800/50">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 text-stone-600">
                  Core_Focus // <span className="text-stone-100 italic">{project.focus}</span>
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-4 font-bebas text-2xl md:text-2xl text-stone-100 hover:italic hover:pl-4 transition-all group"
                >
                  OPEN_GITHUB_PROFILE <span className="group-hover:translate-x-2 transition-transform text-red-900">-&gt;</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <section className="relative z-10 max-w-7xl mx-auto mt-40 md:mt-80 mb-20">
        <div className="border-[10px] border-stone-100 p-8 md:p-24 relative overflow-hidden bg-stone-100">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#000 2px, transparent 0)",
              backgroundSize: "12px 12px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <h2 className="font-bebas text-6xl md:text-[10rem] leading-[0.8] italic mb-8 text-stone-950 uppercase tracking-tighter">
                LET&apos;S BUILD<br /> SOMETHING REAL.
              </h2>
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-stone-600">
                {portfolio.availability}
              </p>
            </div>
            <a
              href="/contact"
              className="w-full md:w-auto text-center bg-stone-950 text-stone-100 px-12 py-6 font-bebas text-4xl italic tracking-tighter hover:bg-red-900 transition-all shadow-[10px_10px_0px_#444]"
            >
              GET_IN_TOUCH -&gt;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
