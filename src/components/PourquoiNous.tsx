"use client";

import { motion, type Variants } from "framer-motion";
import { Users2, Zap, Target, ShieldCheck } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const RAISONS = [
  {
    icon: Users2,
    title: "Une équipe dédiée, pas un ticket support",
    description:
      "Vous échangez directement avec les personnes qui gèrent vos réseaux, pas avec un service client anonyme.",
  },
  {
    icon: Target,
    title: "Une stratégie sur-mesure",
    description:
      "Aucun copier-coller d'une marque à l'autre. Chaque plan de contenu part de votre audience, vos objectifs et votre secteur.",
  },
  {
    icon: Zap,
    title: "Une réactivité réelle",
    description:
      "Une actualité à saisir, une tendance qui démarre : votre équipe s'adapte en quelques heures, pas en quelques semaines.",
  },
  {
    icon: ShieldCheck,
    title: "Une transparence totale",
    description:
      "Accès à vos statistiques réelles, un rapport mensuel honnête, et aucun chiffre enjolivé pour justifier la facture.",
  },
];

export default function PourquoiNous() {
  return (
    <section id="pourquoi-nous" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche — texte + liste */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={0}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-[7px] text-[13px] font-medium text-[#666666] shadow-[0_2px_8px_rgba(17,17,17,0.04)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
                Pourquoi nous
              </div>
              <h2 className="text-gradient-dark font-display tracking-tight-hero text-[32px] leading-[1.14] font-semibold sm:text-[42px]">
                Une agence pensée
                <br className="hidden sm:block" /> comme une équipe interne
              </h2>
              <p className="tracking-tight-body mt-5 max-w-md text-[16px] leading-[1.65] text-[#666666]">
                Pas de sous-traitance en cascade, pas de contenu générique
                recyclé. Nova Social fonctionne comme une extension naturelle
                de votre entreprise.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-col gap-7">
              {RAISONS.map((raison, i) => {
                const Icon = raison.icon;
                return (
                  <motion.div
                    key={raison.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    custom={i * 0.7 + 1}
                    className="flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFE6CC]">
                      <Icon className="h-4.5 w-4.5 text-[#FF7A1A]" />
                    </span>
                    <div>
                      <h3 className="tracking-tight-body text-[16px] font-semibold text-[#111111] sm:text-[17px]">
                        {raison.title}
                      </h3>
                      <p className="tracking-tight-body mt-1.5 text-[14.5px] leading-[1.6] text-[#666666]">
                        {raison.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Colonne droite — carte visuelle */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#ECECEC] bg-[#111111] p-8 sm:p-10"
          >
            {/* Glow discret */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FF7A1A]/20 blur-[90px]" />

            <div className="relative">
              <p className="tracking-tight-body text-[19px] font-medium leading-[1.5] text-white sm:text-[22px]">
                &laquo;&nbsp;On ne voulait pas juste plus de likes. On voulait
                que nos réseaux ramènent de vrais clients. C&apos;est
                exactement ce que Nova Social a livré.&nbsp;&raquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
    <img
        src="/images/amelie.jpg"
        alt="Professionnelle africaine"
        className="h-10 w-10 rounded-full object-cover"
    />

    <div>
        <p className="text-[14px] font-semibold text-white">
            Amina Traoré
        </p>
        <p className="text-[12.5px] text-white/50">
            Fondatrice, Studio Lumina
        </p>
    </div>
</div>
            </div>

            <div className="relative mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { value: "94%", label: "Clients fidélisés" },
                { value: "3,2x", label: "Portée moyenne" },
                { value: "48h", label: "Délai de réponse" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[20px] font-bold tracking-tight-body text-white sm:text-[24px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-tight text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}