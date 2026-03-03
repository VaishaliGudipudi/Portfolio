import { motion } from "framer-motion";
import { education } from "../data";
import { SectionHeader, fadeUp } from "./common";

export default function EducationSection() {
  return (
    <section className="section-container py-14" aria-label="Education">
      <SectionHeader id="education" eyebrow="Academics" title="Education" />
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
        <ul className="space-y-3 text-slate-700 dark:text-slate-200">
          {education.map((item) => (
            <li key={item} className="rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
