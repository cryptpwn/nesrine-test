import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const points = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
];

export default function About() {
  return (
    <section id="apropos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-100 to-mint-100 -z-10 rotate-2" />
          <div className="relative rounded-3xl overflow-hidden shadow-card ring-1 ring-slate-200/60">
            <img
              src="https://images.pexels.com/photos/10450330/pexels-photo-10450330.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Chambre propre et bien rangée"
              className="w-full h-[440px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white rounded-2xl shadow-card px-6 py-4 ring-1 ring-slate-100">
            <div className="font-display font-bold text-2xl text-brand-700">8+ ans</div>
            <div className="text-sm text-slate-500">au service de vos espaces</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold">
            À propos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
            Une professionnelle passionnée par l’art du nettoyage
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-mint-600 mt-0.5 shrink-0" />
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
