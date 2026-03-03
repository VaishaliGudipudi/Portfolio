import { motion } from "framer-motion";
import { projects } from "../data";
import { SectionHeader, fadeUp } from "./common";

export default function ProjectsSection() {
  return (
    <section className="section-container py-14" aria-label="Projects">
      <SectionHeader id="projects" eyebrow="Portfolio" title="Projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.06 }}
            className="card group hover:-translate-y-1"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-slate-800 dark:text-brand-100">
                  {tool}
                </span>
              ))}
            </div>
            <a href={project.link} className="mt-5 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-200">
              View GitHub →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
