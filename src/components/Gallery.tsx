import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.pexels.com/photos/31594917/pexels-photo-31594917.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Salon lumineux et entretenu', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/10450052/pexels-photo-10450052.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Chambre propre et rangée', span: '' },
  { src: 'https://images.pexels.com/photos/35428064/pexels-photo-35428064.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Bureau organisé et soigné', span: '' },
  { src: 'https://images.pexels.com/photos/10450049/pexels-photo-10450049.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Lit parfaitement préparé', span: '' },
  { src: 'https://images.pexels.com/photos/34549301/pexels-photo-34549301.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Appartement moderne et clair', span: '' },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 lg:py-28 bg-gradient-to-b from-brand-50/40 to-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100 text-mint-700 text-sm font-semibold">
            Galerie
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Quelques exemples de nos prestations
          </h2>
          <p className="mt-4 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-100 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-display font-semibold text-sm">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
