"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const QUESTIONS = [
  {
    question: "Combien de temps avant de voir des résultats ?",
    reponse:
      "Les premiers effets sur l'engagement se voient généralement dès le premier mois. Une croissance significative de la communauté et des conversions se construit sur 3 à 4 mois, le temps que la stratégie et les contenus trouvent leur rythme.",
  },
  {
    question: "Est-ce que je dois valider chaque publication ?",
    reponse:
      "Oui, par défaut. Chaque contenu vous est soumis avant sa mise en ligne. Si vous préférez déléguer totalement la validation à votre équipe dédiée pour gagner du temps, c'est possible aussi — vous gardez toujours la main sur ce fonctionnement.",
  },
  {
    question: "Travaillez-vous avec tous les secteurs d'activité ?",
    reponse:
      "Nous accompagnons des marques variées : commerce, restauration, immobilier, beauté, services B2B. Lors de l'appel découverte, nous évaluons ensemble si notre approche correspond à votre secteur et à vos objectifs.",
  },
  {
    question: "Puis-je changer de formule en cours de route ?",
    reponse:
      "Oui, à tout moment. Si vos besoins évoluent, votre chargé de compte ajuste la formule avec vous, sans frais de changement ni délai d'attente compliqué.",
  },
  {
    question: "Que se passe-t-il si les résultats ne sont pas au rendez-vous ?",
    reponse:
      "Nous revoyons la stratégie ensemble sans attendre le rapport suivant. Notre engagement de satisfaction garantie signifie que la formule est ajustée tant que les objectifs fixés ne sont pas atteints.",
  },
  {
    question: "Comment se passe la communication avec l'équipe ?",
    reponse:
      "Vous avez un chargé de compte dédié, joignable directement par email ou WhatsApp, avec un point mensuel programmé. Aucun ticket support anonyme, aucune attente de plusieurs jours pour une réponse simple.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* En-tête de section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          className="mx-auto max-w-xl text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-[7px] text-[13px] font-medium text-[#666666] shadow-[0_2px_8px_rgba(17,17,17,0.04)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
            Questions fréquentes
          </div>
          <h2 className="text-gradient-dark font-display tracking-tight-hero text-[34px] leading-[1.12] font-semibold sm:text-[46px]">
            Encore quelques doutes ?
          </h2>
          <p className="tracking-tight-body mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-[#666666]">
            Voici les questions qu&apos;on nous pose le plus souvent avant de
            démarrer.
          </p>
        </motion.div>

        {/* Accordéon */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          className="mt-14 flex flex-col divide-y divide-[#ECECEC] rounded-3xl border border-[#ECECEC] bg-white"
        >
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                >
                  <span
                    className={`tracking-tight-body text-[15px] font-semibold transition-colors duration-300 sm:text-[16px] ${
                      isOpen ? "text-[#FF7A1A]" : "text-[#111111]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-400 ${
                      isOpen
                        ? "rotate-45 bg-[#FF7A1A] text-white"
                        : "bg-[#FAFAFA] text-[#111111]"
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="tracking-tight-body px-6 pb-6 text-[14.5px] leading-[1.65] text-[#666666] sm:px-8 sm:pb-7">
                        {item.reponse}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}