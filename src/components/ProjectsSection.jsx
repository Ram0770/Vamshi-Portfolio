import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

const filters = ["All", "Full Stack", "Frontend"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Featured builds designed like products, engineered like systems."
          copy="These are the projects that best represent how I think: clear interfaces, strong backend foundations, and details that make the experience feel complete. The section includes category filters and animated card transitions for a polished showcase."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-300/30 hover:text-cyan-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group glass-panel relative overflow-hidden p-6"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-cyan-200">
                        <ProjectIcon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm text-slate-400">Mock dashboard preview</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-teal-300">Live metrics</p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {project.preview.map((metric) => (
                          <div key={metric.label} className="rounded-2xl bg-white/[0.04] p-3">
                            <p className="text-xs text-slate-500">{metric.label}</p>
                            <p className="mt-2 font-display text-xl font-semibold text-white">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3 text-sm text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-cyan-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-3 text-sm font-semibold text-slate-950"
                      >
                        Live Demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100"
                      >
                        GitHub
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
