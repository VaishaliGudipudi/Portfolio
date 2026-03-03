import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeader, fadeUp } from "./common";

export default function ContactSection({ sent, onSubmit }) {
  return (
    <section className="section-container py-14" aria-label="Contact">
      <SectionHeader id="contact" eyebrow="Let's Connect" title="Contact" />
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="card">
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-200">
            <p className="inline-flex items-center gap-2"><Mail size={16} /> vgudipudi1202@gmail.com</p>
            <p className="inline-flex items-center gap-2"><Phone size={16} /> +91 8985893685</p>
            <p className="inline-flex items-center gap-2"><Linkedin size={16} /> linkedin.com/in/vaishali-gudipudi</p>
            <p className="inline-flex items-center gap-2"><Github size={16} /> github.com/VaishaliGudipudi</p>
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="card space-y-4"
        >
          <label className="block text-sm font-medium">
            Name
            <input
              required
              type="text"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-brand-300 focus:ring dark:border-slate-700 dark:bg-slate-900"
            />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input
              required
              type="email"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-brand-300 focus:ring dark:border-slate-700 dark:bg-slate-900"
            />
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea
              required
              rows={4}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-brand-300 focus:ring dark:border-slate-700 dark:bg-slate-900"
            />
          </label>
          <button type="submit" className="rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
            Send Message
          </button>
          {sent && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-medium text-emerald-600">
              Message sent successfully.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
