import { motion } from "framer-motion";
import { certifications } from "../data";
import { SectionHeader, fadeUp } from "./common";

export default function CertificationsSection() {
  return (
    <section className="section-container py-14" aria-label="Certifications">
      <SectionHeader id="certifications" eyebrow="Credentials" title="Certifications" />
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
        <ul className="space-y-3 text-slate-700 dark:text-slate-200">
          {certifications.map((cert) => (
            <li key={cert.title} className="rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span>{cert.title}</span>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-700"
                >
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
