import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Interactive capabilities across frontend, backend, databases, and developer tooling."
          copy="I like working across the full stack, but I also care about the product layer around it. These capabilities help me build apps that are not only functional, but smooth, maintainable, and ready to grow."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {skills.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
                className="glass-panel p-6"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <GroupIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{group.category}</h3>
                    <p className="text-sm text-slate-400">Production-focused tools I use regularly.</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {group.items.map((skill, index) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl bg-white/5 p-3 text-cyan-200">
                              <SkillIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-100">{skill.name}</p>
                              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Skill depth</p>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-cyan-300">{skill.level}%</span>
                        </div>
                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: index * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
