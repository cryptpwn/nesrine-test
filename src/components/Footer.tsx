import { Sparkles, Facebook, Instagram, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Politique de confidentialité', href: '#' },
  { label: 'CGV', href: '#' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#accueil" className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-500 to-mint-500 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-display font-bold text-lg text-white">
                Éclat<span className="text-brand-400">Pro</span>
              </span>
            </a>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid place-items-center h-10 w-10 rounded-xl bg-slate-800 text-slate-300 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Informations</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-sm text-slate-400 space-y-1">
              <p>12 rue Lorem Ipsum, Lyon</p>
              <p>+33 1 23 45 67 89</p>
              <p>contact@eclatpro.fr</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ÉclatPro · Maquette de présentation. Tous droits réservés.</p>
          <p>Conçu avec soin · Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  );
}
