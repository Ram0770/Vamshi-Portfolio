import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutTimeline } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A builder focused on clean execution, secure systems, and real product momentum."
          copy="My work sits at the intersection of frontend clarity and backend reliability. I enjoy turning ideas into production-ready experiences with thoughtful architecture, responsive UI, and robust API flows."
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-panel p-8"
          >
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m a MERN stack developer who enjoys building products that balance usability with
              engineering quality. My strongest work shows up in authentication systems, API design, admin
              flows, and frontend experiences that feel intentional instead of generic.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "MERN stack expertise",
                "REST API design",
                "JWT authentication systems",
                "Startup-ready mindset",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <p className="font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {aboutTimeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-teal-400" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">0{index + 1}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Journey Stage
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
