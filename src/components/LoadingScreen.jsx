import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              className="h-24 w-24 rounded-[2rem] border border-cyan-300/20 bg-cyan-400/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute h-24 w-24 rounded-[2rem] border border-teal-300/30"
              animate={{ rotate: -360, scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <div className="text-center">
              <p className="font-display text-xl font-semibold text-slate-100">Kuruva Vamshi</p>
              <p className="mt-2 text-sm text-slate-400">Loading premium developer experience...</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
