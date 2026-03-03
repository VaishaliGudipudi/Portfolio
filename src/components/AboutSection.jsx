import { motion } from "framer-motion";
import { SectionHeader, fadeUp } from "./common";

export default function AboutSection() {
  return (
    <section className="section-container py-14" aria-label="About">
      <SectionHeader id="about" eyebrow="Profile" title="About" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="card"
      >
        <p className="text-slate-700 dark:text-slate-200">
          MBA Business Analytics student (2024-2026) at Anurag University with a minor in Machine Learning. Completed
          B.Com (Hons.) Business Analytics (2020-2023).
        </p>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Passionate about using analytics, machine learning, and visualization tools to solve real-world business
          problems. Experience in healthcare dashboards, supplier analytics, forecasting, and clustering.
        </p>
      </motion.div>
    </section>
  );
}
