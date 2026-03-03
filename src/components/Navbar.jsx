import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "../data";

export default function Navbar({ darkMode, setDarkMode, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-800/80">
      <nav className="glass section-container flex h-16 items-center justify-between rounded-b-2xl">
        <a href="#home" className="text-sm font-bold tracking-wide text-slate-900 dark:text-white sm:text-base">
          Vaishali Gudipudi
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-100"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a aria-label="GitHub" href="https://github.com/VaishaliGudipudi" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            <Github size={18} />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://linkedin.com/in/vaishali-gudipudi"
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Linkedin size={18} />
          </a>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        <button
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="glass section-container py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm font-medium">
                {item}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />} Theme
              </button>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-2 text-sm font-semibold text-white">
                <Download size={15} /> Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
