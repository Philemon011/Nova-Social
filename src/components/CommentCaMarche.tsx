"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { PhoneCall, ClipboardList, Rocket, LineChart } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ETAPES = [
  {
    numero: "01",
    icon: PhoneCall,
    title: "Appel découverte",
    description:
      "Un échange de 30 minutes pour comprendre votre marque, vos objectifs et votre audience. Sans engagement.",
  },
  {
    numero: "02",
    icon: ClipboardList,
    title: "Stratégie sur-mesure",
    description:
      "Votre équipe construit un plan de contenu adapté : lignes éditoriales, formats, fréquence et calendrier.",
  },
  {
    numero: "03",
    icon: Rocket,
    title: "Mise en œuvre",
    description:
      "Création, publication et animation démarrent. Vous validez chaque contenu avant sa mise en ligne.",
  },
  {
    numero: "04",
    icon: LineChart,
    title: "Suivi & optimisation",
    description:
      "Chaque mois, un rapport clair et un point avec votre équipe pour ajuster la stratégie selon les résultats.",
  },
];

function Etape({
  etape,
  index,
}: {
  etape: (typeof ETAPES)[number];
  index: number;
}) {
  const Icon = etape.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      custom={0}
      className="relative grid grid-cols-1 items-center gap-6 py-10 sm:py-14 lg:grid-cols-2 lg:gap-0"
    >
      {/* Point sur la ligne (desktop) */}
      <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <span className="flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-white bg-[#FF7A1A] shadow-[0_0_0_4px_#FFE6CC]" />
      </div>

      {/* Contenu — alterne gauche/droite */}
      <div
        className={`relative ${
          isEven ? "lg:order-1 lg:pr-16 lg:text-right" : "lg:order-2 lg:pl-16"
        }`}
      >
        <div
          className={`flex items-start gap-4 lg:flex-col lg:gap-0 ${
            isEven ? "lg:items-end" : "lg:items-start"
          }`}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#ECECEC] bg-white shadow-[0_4px_16px_rgba(17,17,17,0.05)] lg:h-12 lg:w-12">
            <Icon className="h-4.5 w-4.5 text-[#FF7A1A]" />
          </span>
          <div className="lg:mt-5">
            <h3 className="tracking-tight-body text-[18px] font-semibold text-[#111111] sm:text-[20px]">
              {etape.title}
            </h3>
            <p className="tracking-tight-body mt-2 max-w-sm text-[14.5px] leading-[1.65] text-[#666666] lg:ml-auto lg:mr-0">
              {etape.description}
            </p>
          </div>
        </div>
      </div>

      {/* Chiffre géant en filigrane — occupe l'autre côté */}
      <div
        className={`pointer-events-none hidden select-none lg:block ${
          isEven ? "order-2 pl-16 text-left" : "order-1 pr-16 text-right"
        }`}
      >
        <span className="text-gradient-dark font-display text-[140px] font-semibold leading-none opacity-[0.07]">
          {etape.numero}
        </span>
      </div>
    </motion.div>
  );
}

export default function CommentCaMarche() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="comment-ca-marche" className="relative py-24 sm:py-32">
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
            Comment ça marche
          </div>
          <h2 className="text-gradient-dark font-display tracking-tight-hero text-[34px] leading-[1.12] font-semibold sm:text-[46px]">
            Un processus clair,
            <br className="hidden sm:block" /> du premier appel aux résultats
          </h2>
          <p className="tracking-tight-body mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-[#666666]">
            Aucune surprise. Vous savez exactement à quoi vous attendre à
            chaque étape.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mt-8 sm:mt-12">
          {/* Ligne de fond statique (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#ECECEC] lg:block" />
          {/* Ligne de progression animée au scroll (desktop) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#FF7A1A] to-[#FFB347] lg:block"
          />

          {/* Ligne verticale gauche (mobile) */}
          <div className="absolute left-[21px] top-0 h-full w-px bg-[#ECECEC] lg:hidden" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[21px] top-0 w-px bg-gradient-to-b from-[#FF7A1A] to-[#FFB347] lg:hidden"
          />

          <div className="pl-14 lg:pl-0">
            {ETAPES.map((etape, i) => (
              <div key={etape.numero} className="relative">
                {/* Point sur la ligne (mobile) */}
                <span className="absolute -left-[35px] top-1/2 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#FF7A1A] shadow-[0_0_0_4px_#FFE6CC] lg:hidden" />
                <Etape etape={etape} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}