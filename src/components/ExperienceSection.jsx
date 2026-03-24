import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Certifications and learning milestones that back up execution."
          copy="I learn by building, but structured programs have also strengthened my understanding of cloud, career readiness, and full-stack systems. This timeline presents that journey in a clean, motion-driven format."
        />

        <div className="relative mx-auto max-w-4xl space-y-6 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400 before:to-transparent sm:before:left-1/2">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative flex ${isEven ? "sm:justify-start" : "sm:justify-end"}`}
              >
                <div className="absolute left-6 top-8 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-900 text-cyan-300 shadow-glow sm:left-1/2">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="glass-panel ml-16 w-full p-6 sm:ml-0 sm:w-[calc(50%-2rem)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">{item.year}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-300">
                      Certified
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
