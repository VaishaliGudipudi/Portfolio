import { motion } from "framer-motion";
import { softSkills, technicalSkills } from "../data";
import { SectionHeader, fadeUp } from "./common";

export default function SkillsSection() {
  return (
    <section className="section-container py-14" aria-label="Skills">
      <SectionHeader id="skills" eyebrow="Capabilities" title="Skills" />
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Technical Skills</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technicalSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Soft Skills</h3>
          <div className="mt-4 grid gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
