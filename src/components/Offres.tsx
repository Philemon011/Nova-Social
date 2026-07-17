"use client";

import { motion, type Variants } from "framer-motion";
import { Check, ArrowUpRight, ShieldCheck, BadgeCheck, Clock } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const FORMULES = [
  {
    nom: "Essentielle",
    description: "Pour lancer une présence sociale cohérente.",
    prix: "150 000",
    periode: "/ mois",
    featured: false,
    inclus: [
      "2 réseaux sociaux gérés",
      "12 publications par mois",
      "Calendrier éditorial mensuel",
      "Modération de base",
      "Rapport mensuel",
    ],
    cta: "Choisir Essentielle",
  },
  {
    nom: "Croissance",
    description: "Pour une marque qui veut accélérer durablement.",
    prix: "320 000",
    periode: "/ mois",
    featured: true,
    badge: "La plus choisie",
    inclus: [
      "3 réseaux sociaux gérés",
      "20 publications par mois",
      "Community management quotidien",
      "1 campagne publicitaire / mois",
      "Chargé de compte dédié",
      "Rapport et point mensuel",
    ],
    cta: "Choisir Croissance",
  },
  {
    nom: "Sur-mesure",
    description: "Pour les marques aux ambitions plus larges.",
    prix: "Sur devis",
    periode: "",
    featured: false,
    inclus: [
      "Réseaux sociaux illimités",
      "Production vidéo avancée",
      "Stratégie publicitaire multi-plateformes",
      "Équipe dédiée élargie",
      "Reporting hebdomadaire",
      "Accompagnement stratégique continu",
    ],
    cta: "Demander un devis",
  },
];

export default function Offres() {
  return (
    <section id="offres" className="relative py-24 sm:py-32">
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
            Offres &amp; formules
          </div>
          <h2 className="text-gradient-dark font-display tracking-tight-hero text-[34px] leading-[1.12] font-semibold sm:text-[46px]">
            Une formule pour chaque
            <br className="hidden sm:block" /> étape de votre croissance
          </h2>
          <p className="tracking-tight-body mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-[#666666]">
            Des tarifs clairs, sans frais cachés. Changez de formule à tout
            moment selon vos besoins.
          </p>
        </motion.div>

        {/* Grille des formules */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {FORMULES.map((formule, i) => (
            <motion.div
              key={formule.nom}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i * 0.7 + 1}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                formule.featured
                  ? "border border-transparent bg-[#111111] text-white shadow-[0_30px_70px_-25px_rgba(17,17,17,0.4)] lg:-translate-y-3"
                  : "border border-[#ECECEC] bg-white"
              }`}
            >
              {formule.featured && formule.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF7A1A] to-[#FFB347] px-4 py-1.5 text-[12px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(255,122,26,0.5)]">
                  {formule.badge}
                </div>
              )}

              {/* En-tête formule */}
              <div>
                <h3
                  className={`tracking-tight-body text-[19px] font-semibold ${
                    formule.featured ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {formule.nom}
                </h3>
                <p
                  className={`tracking-tight-body mt-1.5 text-[14px] leading-[1.5] ${
                    formule.featured ? "text-white/60" : "text-[#666666]"
                  }`}
                >
                  {formule.description}
                </p>
              </div>

              {/* Prix */}
              <div className="mt-6 flex items-baseline gap-1.5 border-t border-dashed pt-6 pb-1 ${formule.featured ? 'border-white/15' : 'border-[#ECECEC]'}">
                <span
                  className={`font-display tracking-tight-hero text-[32px] font-semibold sm:text-[36px] ${
                    formule.featured ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {formule.prix}
                </span>
                {formule.periode && (
                  <span
                    className={`text-[14px] ${
                      formule.featured ? "text-white/50" : "text-[#666666]"
                    }`}
                  >
                    {formule.prix !== "Sur devis" ? "FCFA" : ""} {formule.periode}
                  </span>
                )}
              </div>

              {/* CTA */}
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className={`group mt-6 flex items-center justify-center gap-1.5 rounded-full px-6 py-3.5 text-[14.5px] font-semibold transition-all duration-300 ${
                  formule.featured
                    ? "bg-white text-[#111111] hover:bg-[#FFE6CC]"
                    : "bg-[#111111] text-white hover:bg-[#FF7A1A]"
                }`}
              >
                {formule.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Liste des inclus */}
              <ul className="mt-7 flex flex-col gap-3.5">
                {formule.inclus.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                        formule.featured ? "bg-white/10" : "bg-[#FFE6CC]"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 ${
                          formule.featured ? "text-[#FFB347]" : "text-[#FF7A1A]"
                        }`}
                        strokeWidth={3}
                      />
                    </span>
                    <span
                      className={`tracking-tight-body text-[14px] leading-[1.5] ${
                        formule.featured ? "text-white/80" : "text-[#666666]"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bandeau de réassurance */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  custom={4}
  className="mx-auto mt-16 max-w-4xl"
>
  <div className="grid grid-cols-1 divide-y divide-[#ECECEC] rounded-3xl border border-[#ECECEC] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
    {[
      {
        icon: ShieldCheck,
        title: "Sans engagement long terme",
        description: "Vous restez libre, mois après mois.",
      },
      {
        icon: Clock,
        title: "Préavis de 30 jours",
        description: "Une résiliation simple, sans démarche compliquée.",
      },
      {
        icon: BadgeCheck,
        title: "Satisfaction garantie",
        description: "Formule ajustée si les résultats ne suivent pas.",
      },
    ].map((item) => {
      const Icon = item.icon;
      return (
        <div
          key={item.title}
          className="flex flex-col items-start gap-3.5 px-7 py-7 sm:px-6 sm:py-8"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFE6CC]">
            <Icon className="h-4.5 w-4.5 text-[#FF7A1A]" strokeWidth={2} />
          </span>
          <div>
            <p className="tracking-tight-body text-[14.5px] font-semibold leading-snug text-[#111111]">
              {item.title}
            </p>
            <p className="tracking-tight-body mt-1 text-[13px] leading-[1.5] text-[#666666]">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</motion.div>
      </div>
    </section>
  );
}