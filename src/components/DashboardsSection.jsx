import { motion } from "framer-motion";
import { dashboards } from "../data";
import { SectionHeader, fadeUp } from "./common";

export default function DashboardsSection() {
  return (
    <section className="section-container py-14" aria-label="Dashboards">
      <SectionHeader id="dashboards" eyebrow="Visuals" title="Dashboards" />
      <div className="grid gap-6 md:grid-cols-2">
        {dashboards.map((item, idx) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="card overflow-hidden"
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              {item.type === "video" ? (
                <video className="h-64 w-full object-cover sm:h-72" controls muted preload="metadata">
                  <source src={item.src} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.src} alt={item.title} className="h-64 w-full object-cover sm:h-72" loading="lazy" />
              )}
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
