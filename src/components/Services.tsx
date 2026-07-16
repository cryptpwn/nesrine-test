import { motion } from 'framer-motion';
import { Home, Building2, Briefcase, Store, HardHat, SquareStack, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Nettoyage de maisons',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Building2,
    title: 'Nettoyage d’appartements',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    icon: Briefcase,
    title: 'Nettoyage de bureaux',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: Store,
    title: 'Nettoyage de commerces',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
  },
  {
    icon: HardHat,
    title: 'Nettoyage après travaux',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    icon: SquareStack,
    title: 'Nettoyage de vitres',
    desc: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100 text-mint-700 text-sm font-semibold">
            Nos services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Des prestations adaptées à chaque espace
          </h2>
          <p className="mt-4 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative bg-white rounded-2xl p-7 shadow-soft ring-1 ring-slate-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-500 to-mint-500 text-white shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 flex items-center justify-between">
                {s.title}
                <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-brand-500 transition-colors" />
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed text-[15px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
