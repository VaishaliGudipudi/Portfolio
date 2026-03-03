import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="section-container py-20 sm:py-24">
      <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-4xl">
        <p className="mb-5 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 dark:border-brand-900 dark:bg-slate-900 dark:text-brand-100">
          MBA Business Analytics Portfolio
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-6xl">
          Turning Data Into Strategic Business Decisions
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          MBA Business Analytics | Data Analyst | ML Enthusiast
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            View Projects
          </a>
          <a
            href="#"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
