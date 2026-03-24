import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { floatingTech, heroHighlights, heroStats } from "../data/portfolio";

function useTypingPhrases(phrases) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = phrases[activeIndex];
    const speed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
        return;
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setActiveIndex((index) => (index + 1) % phrases.length);
        return;
      }

      setDisplayedText((text) =>
        isDeleting ? currentText.slice(0, text.length - 1) : currentText.slice(0, text.length + 1),
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [activeIndex, displayedText, isDeleting, phrases]);

  return displayedText;
}

export default function HeroSection() {
  const typedText = useTypingPhrases(heroHighlights);

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.12]" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-white/50"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {floatingTech.map(({ name, icon: Icon, className }) => (
        <motion.div
          key={name}
          className={`absolute hidden rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-glow backdrop-blur-xl lg:block ${className}`}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Icon className="h-8 w-8" />
        </motion.div>
      ))}

      <div className="section-shell min-h-[calc(100vh-7rem)] py-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Premium Full-Stack Portfolio
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building sleek products
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-teal-300 to-lime-300 bg-clip-text text-transparent">
                that scale from idea to launch.
              </span>
            </h1>
            <div className="mt-8 min-h-[3rem] text-xl font-medium text-slate-200 sm:text-2xl">
              <span>{typedText}</span>
              <span className="ml-1 inline-block h-7 w-[2px] animate-pulse bg-cyan-300 align-middle" />
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m Kuruva Vamshi, a MERN stack developer focused on startup-ready products, secure APIs,
              and user experiences that feel polished from the first scroll to the final click.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(34,211,238,0.24)]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 backdrop-blur-xl"
              >
                Contact Me
                <Download className="h-4 w-4" />
              </motion.a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-panel glow-border p-5"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.6 }}
                >
                  <p className="font-display text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-panel glow-border relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-lime-400/10" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Product Snapshot</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                      SaaS-grade developer profile
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm text-slate-400">Current focus</span>
                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                        Shipping
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"
                        initial={{ width: 0 }}
                        animate={{ width: "86%" }}
                        transition={{ duration: 1.4, delay: 0.5 }}
                      />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      Building performant frontends, secure backend services, and scalable dashboards with a
                      product-first mindset.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Core stack", value: "React • Node • MongoDB" },
                      { label: "Strength", value: "APIs + Auth Systems" },
                      { label: "Delivery style", value: "Fast, clean, reliable" },
                      { label: "Mindset", value: "Startup-ready execution" },
                    ].map((card, index) => (
                      <motion.div
                        key={card.label}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + index * 0.1 }}
                      >
                        <p className="text-sm text-slate-400">{card.label}</p>
                        <p className="mt-2 font-medium text-slate-100">{card.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
