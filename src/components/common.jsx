import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export function SectionHeader({ id, eyebrow, title }) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="mb-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-100">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
