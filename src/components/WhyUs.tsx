import { motion } from 'framer-motion';
import { Sparkles, Zap, FileText, HeartHandshake, Clock, Smile } from 'lucide-react';

const advantages = [
  { icon: Sparkles, title: 'Travail soigné', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.' },
  { icon: Zap, title: 'Intervention rapide', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { icon: FileText, title: 'Devis gratuit', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  { icon: HeartHandshake, title: 'Service personnalisé', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
  { icon: Clock, title: 'Ponctualité', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
  { icon: Smile, title: 'Satisfaction client', desc: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.' },
];

export default function WhyUs() {
  return (
    <section id="avantages" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold">
              Pourquoi nous choisir
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Une exigence de qualité au service de votre tranquillité
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-600 to-mint-600 p-6 text-white shadow-card">
              <p className="text-lg font-display font-semibold leading-snug">
                « Notre engagement : un intérieur impeccable, un esprit léger. »
              </p>
              <p className="mt-3 text-white/80 text-sm">— La fondatrice</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
                className="group flex gap-4 p-5 rounded-2xl bg-white ring-1 ring-slate-100 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-mint-50 text-mint-600 group-hover:bg-mint-500 group-hover:text-white transition-colors">
                  <a.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
