import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-3xl"
    >
      <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy mt-4">{copy}</p>
    </motion.div>
  );
}
