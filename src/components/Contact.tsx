"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Check } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* En-tête de section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-[7px] text-[13px] font-medium text-[#666666] shadow-[0_2px_8px_rgba(17,17,17,0.04)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
            Contact
          </div>
          <h2 className="text-gradient-dark font-display tracking-tight-hero text-[34px] leading-[1.12] font-semibold sm:text-[46px]">
            Discutons de votre
            <br className="hidden sm:block" /> prochaine campagne
          </h2>
          <p className="tracking-tight-body mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-[#666666]">
            Un appel de 30 minutes, sans engagement, pour évaluer comment
            Nova Social peut faire grandir votre présence sociale.
          </p>
        </motion.div>

        {/* Panneau principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 overflow-hidden rounded-[28px] border border-transparent bg-[#111111] shadow-[0_40px_90px_-30px_rgba(17,17,17,0.45)]"
        >
          {/* Glow décoratif */}
          <div className="pointer-events-none absolute -top-32 -left-20 h-72 w-72 rounded-full bg-[#FF7A1A]/25 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#FFB347]/15 blur-[110px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
            {/* Colonne gauche — infos */}
            <div className="flex flex-col justify-between border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div>
                <h3 className="tracking-tight-body text-[20px] font-semibold text-white sm:text-[22px]">
                  Parlons de votre marque
                </h3>
                <p className="tracking-tight-body mt-3 max-w-sm text-[14.5px] leading-[1.65] text-white/60">
                  Remplissez le formulaire ou contactez-nous directement.
                  Votre demande est traitée sous 24h ouvrées.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-5">
                
                <a  href="mailto:contact@novasocial.fr"
                  className="group flex items-center gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-[#FF7A1A]">
                    <Mail className="h-4 w-4 text-white" />
                  </span>
                  <div>
                    <p className="text-[12px] text-white/50">Email</p>
                    <p className="text-[14px] font-medium text-white">
                      contact@novasocial.fr
                    </p>
                  </div>
                </a>

                <a href="tel:+22900000000" className="group flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-[#FF7A1A]">
                    <Phone className="h-4 w-4 text-white" />
                  </span>
                  <div>
                    <p className="text-[12px] text-white/50">Téléphone / WhatsApp</p>
                    <p className="text-[14px] font-medium text-white">
                      +229 00 00 00 00
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-4 w-4 text-white" />
                  </span>
                  <div>
                    <p className="text-[12px] text-white/50">Basés à</p>
                    <p className="text-[14px] font-medium text-white">
                      Cotonou, Bénin
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-2 border-t border-white/10 pt-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[13px] font-medium text-white/60">
                  Disponible pour de nouveaux projets
                </span>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <div className="p-8 sm:p-10 lg:p-12">
              {submitted ? (
                <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF7A1A]/15">
                    <Check className="h-6 w-6 text-[#FF7A1A]" strokeWidth={2.5} />
                  </span>
                  <h4 className="tracking-tight-body mt-5 text-[18px] font-semibold text-white">
                    Demande envoyée
                  </h4>
                  <p className="tracking-tight-body mt-2 max-w-xs text-[14px] leading-[1.6] text-white/60">
                    Merci ! Votre équipe Nova Social revient vers vous sous
                    24h ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-medium text-white/70">
                        Nom complet
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Votre nom"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14.5px] text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-[#FF7A1A]/60"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-medium text-white/70">
                        Nom de l&apos;entreprise
                      </label>
                      <input
                        type="text"
                        placeholder="Votre entreprise"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14.5px] text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-[#FF7A1A]/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-medium text-white/70">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="vous@entreprise.com"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14.5px] text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-[#FF7A1A]/60"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-medium text-white/70">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="+229 00 00 00 00"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14.5px] text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-[#FF7A1A]/60"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium text-white/70">
                      Votre projet
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Parlez-nous de votre marque et de vos objectifs..."
                      className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14.5px] text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-[#FF7A1A]/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FFB347] px-7 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(255,122,26,0.5)]"
                  >
                    Envoyer ma demande
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="text-center text-[12px] text-white/40">
                    Aucun spam. Vos informations restent confidentielles.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}