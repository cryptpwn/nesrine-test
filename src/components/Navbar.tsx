import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Avantages', href: '#avantages' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-soft border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-18 flex items-center justify-between py-4">
        <a href="#accueil" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-mint-500 text-white shadow-soft transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
            Nesrine<span className="text-brand-600">Pro</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-brand-700 hover:bg-brand-50/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold shadow-soft hover:bg-brand-700 hover:shadow-md transition-all"
          >
            Demander un devis
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-10 w-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <ul className="px-5 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block mt-2 px-4 py-3 rounded-xl bg-brand-600 text-white font-semibold text-center"
                >
                  Demander un devis
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
