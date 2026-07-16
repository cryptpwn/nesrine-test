import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, ShieldCheck, Clock, Leaf } from 'lucide-react';

const stats = [
  { value: '8+', label: 'ans d’expérience' },
  { value: '450+', label: 'clients satisfaits' },
  { value: '100%', label: 'devis gratuit' },
];

const badges = [
  { icon: ShieldCheck, text: 'Assurée & déclarée' },
  { icon: Clock, text: 'Ponctualité garantie' },
  { icon: Leaf, text: 'Produits éco-responsables' },
];

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mint-200/40 blur-3xl -z-10" />
      <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-brand-200/40 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-100 text-mint-700 text-sm font-semibold">
            <Star className="h-4 w-4 fill-mint-500 text-mint-500" />
            Entreprise indépendante de nettoyage
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-balance text-slate-900">
            Votre partenaire de confiance pour le{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-600 to-mint-600 bg-clip-text text-transparent">
                nettoyage
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0 6 Q 100 0 200 6" stroke="#41d492" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold shadow-soft hover:bg-brand-700 hover:shadow-md transition-all"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 hover:border-brand-300 hover:text-brand-700 transition-all"
            >
              <Phone className="h-4 w-4" />
              Nous contacter
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2">
            {badges.map((b, i) => (
              <span key={b.text} className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 ring-1 ring-slate-200 text-sm text-slate-700 font-medium">
                  <b.icon className="h-4 w-4 text-mint-600" />
                  {b.text}
                </span>
                {i < badges.length - 1 && (
                  <span className="hidden sm:block text-slate-300 select-none">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold text-slate-900">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-card ring-1 ring-slate-200/60">
            <img
              src="https://images.pexels.com/photos/31594912/pexels-photo-31594912.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Intérieur lumineux et parfaitement entretenu"
              className="w-full h-[420px] sm:h-[520px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 ring-1 ring-slate-100"
          >
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-mint-100 text-mint-600">
              <Star className="h-5 w-5 fill-mint-500 text-mint-500" />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900">4,9/5</div>
              <div className="text-xs text-slate-500">note moyenne clients</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-2 sm:-right-5 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 ring-1 ring-slate-100"
          >
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand-100 text-brand-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900">Service assuré</div>
              <div className="text-xs text-slate-500">intervention fiable</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
