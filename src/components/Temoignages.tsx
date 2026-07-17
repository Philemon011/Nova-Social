"use client";

import { motion, type Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const TEMOIGNAGES = [
  {
    nom: "Amélie Rousseau",
    role: "Fondatrice, Studio Lumina",
    citation:
      "Nova Social a transformé nos réseaux sociaux en véritable canal de vente. En quatre mois, notre communauté a doublé et nos demandes de devis ont suivi.",
    note: 5,
    featured: true,
    image: "/images/amelie.jpg",
  },
  {
    nom: "Kevin Dossou",
    role: "Directeur, Nordik Café",
    citation:
      "Enfin une agence qui répond vite et comprend notre univers. Le contenu ressemble vraiment à notre marque, pas à un modèle recyclé.",
    note: 5,
    image: "/images/kevin.jpg",
  },
  {
    nom: "Sarah Vertex",
    role: "CEO, Vertex Immobilier",
    citation:
      "Le suivi mensuel est clair et honnête. On sait exactement où va notre budget et pourquoi.",
    note: 5,
    image: "/images/sarah.jpg",
  },
  {
    nom: "Moussa Kaelo",
    role: "Cofondateur, Kaelo Beauté",
    citation:
      "Notre chargée de compte connaît nos produits mieux que certains de nos propres vendeurs. Ça change tout dans la qualité du contenu.",
    note: 5,
    image: "/images/moussa.jpg",
  },
  {
    nom: "Julie Solace",
    role: "Responsable marketing, Solace Fitness",
    citation:
      "Nos publicités étaient dispersées avant Nova Social. Aujourd'hui chaque euro dépensé est justifié par un rapport précis.",
    note: 5,
    image: "/images/julie.jpg",
  },
];

export default function Temoignages() {
  return (
    <section id="temoignages" className="relative py-24 sm:py-32">
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
            Témoignages
          </div>
          <h2 className="text-gradient-dark font-display tracking-tight-hero text-[34px] leading-[1.12] font-semibold sm:text-[46px]">
            Des marques qui nous font
            <br className="hidden sm:block" /> confiance au quotidien
          </h2>
          <p className="tracking-tight-body mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-[#666666]">
            Ce que nos clients disent de leur collaboration avec Nova Social.
          </p>
        </motion.div>

        {/* Grille de témoignages en mosaïque */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEMOIGNAGES.map((t, i) => {
            const initiales = t.nom
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <motion.div
                key={t.nom}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 0.5 + 1}
                className={`relative flex flex-col rounded-3xl border p-7 sm:p-8 ${
                  t.featured
                    ? "border-transparent bg-[#111111] text-white shadow-[0_25px_60px_-20px_rgba(17,17,17,0.35)] sm:col-span-2"
                    : "border-[#ECECEC] bg-white"
                }`}
              >
                <Quote
                  className={`h-7 w-7 ${
                    t.featured ? "text-white/15" : "text-[#FFE6CC]"
                  }`}
                  fill="currentColor"
                  strokeWidth={0}
                />

                {/* Étoiles */}
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: t.note }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-3.5 w-3.5 text-[#FFB347]"
                      fill="#FFB347"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Citation */}
                <p
                  className={`tracking-tight-body mt-4 text-[15.5px] leading-[1.65] sm:text-[16px] ${
                    t.featured ? "text-white/85" : "text-[#666666]"
                  }`}
                >
                  {t.citation}
                </p>

                {/* Auteur */}
                <div className="mt-6 flex items-center gap-3">
                  <img
  src={t.image}
  alt={t.nom}
  className={`h-10 w-10 shrink-0 rounded-full object-cover ${
    t.featured ? "ring-2 ring-white/20" : ""
  }`}
/>
                  <div>
                    <p
                      className={`text-[13.5px] font-semibold ${
                        t.featured ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {t.nom}
                    </p>
                    <p
                      className={`text-[12px] ${
                        t.featured ? "text-white/50" : "text-[#666666]"
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}