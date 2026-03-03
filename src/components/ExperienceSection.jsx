import { motion } from "framer-motion";
import { experiences } from "../data";
import { SectionHeader, fadeUp } from "./common";

export default function ExperienceSection() {
  return (
    <section className="section-container py-14" aria-label="Experience">
      <SectionHeader id="experience" eyebrow="Journey" title="Experience" />
      <div className="relative ml-3 space-y-6 border-l-2 border-brand-200 pl-6 dark:border-brand-900">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.org}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="card relative"
          >
            <span className="absolute -left-[35px] top-7 h-3.5 w-3.5 rounded-full bg-brand-600" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.org}</h3>
            <p className="text-sm font-medium text-brand-700 dark:text-brand-200">
              {exp.role} | {exp.period}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {exp.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
