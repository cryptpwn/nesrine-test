import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Adresse', value: '12 rue Lorem Ipsum, 69000 Lyon' },
  { icon: Phone, label: 'Téléphone', value: '+33 1 23 45 67 89' },
  { icon: Mail, label: 'Email', value: 'contact@eclatpro.fr' },
  { icon: Clock, label: 'Horaires', value: 'Lun – Sam · 8h00 – 19h00' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-brand-50/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint-100 text-mint-700 text-sm font-semibold">
            Contact
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Demandez votre devis gratuit
          </h2>
          <p className="mt-4 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 text-white shadow-card"
          >
            <h3 className="text-2xl font-bold text-white">Coordonnées</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-8 space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-white/15 backdrop-blur">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">{c.label}</div>
                    <div className="font-semibold text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-card ring-1 ring-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nom" id="name" placeholder="Votre nom complet" />
                <Field label="Téléphone" id="phone" type="tel" placeholder="06 12 34 56 78" />
              </div>
              <Field label="Email" id="email" type="email" placeholder="vous@exemple.fr" />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre besoin…"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold shadow-soft hover:bg-brand-700 hover:shadow-md transition-all disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Envoyer
                  </>
                )}
              </button>
              <p className="text-xs text-slate-400 text-center">
                Maquette de présentation · les données ne sont pas réellement envoyées.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
      />
    </div>
  );
}
