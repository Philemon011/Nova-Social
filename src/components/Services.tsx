"use client";

import { motion, type Variants } from "framer-motion";
import {
    PenLine,
    CalendarDays,
    BarChart3,
    MessageCircle,
    Megaphone,
    Palette,
    ArrowUpRight,
} from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const SERVICES = [
    {
        icon: PenLine,
        title: "Création de contenu",
        description:
            "Visuels, vidéos et textes pensés pour votre audience, conçus par une équipe créative qui comprend votre marque et son ton de voix.",
        featured: true,
    },
    {
        icon: CalendarDays,
        title: "Gestion éditoriale",
        description:
            "Un calendrier de publication tenu avec rigueur, pour une présence régulière et cohérente sur chaque plateforme.",
    },
    {
        icon: MessageCircle,
        title: "Animation de communauté",
        description:
            "Vos abonnés reçoivent des réponses rapides et humaines, pour construire une relation de confiance durable.",
    },
    {
        icon: Megaphone,
        title: "Publicité social media",
        description:
            "Des campagnes Meta, TikTok et LinkedIn pilotées par un chargé de compte dédié, avec un budget optimisé en continu.",
    },
    {
        icon: BarChart3,
        title: "Suivi & reporting",
        description:
            "Un point mensuel avec votre équipe et un rapport clair sur ce qui a fonctionné, et pourquoi.",
    },
    {
        icon: Palette,
        title: "Identité visuelle social",
        description:
            "Une direction artistique déclinée sur tous vos réseaux, pour une marque immédiatement reconnaissable.",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32">
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
                        Nos prestations
                    </div>
                    <h2 className="text-gradient-dark font-display tracking-tight-hero text-[34px] leading-[1.12] font-semibold sm:text-[46px]">
                        Tout ce qu&apos;il faut pour exister
                        <br className="hidden sm:block" /> vraiment sur les réseaux
                    </h2>
                    <p className="tracking-tight-body mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-[#666666]">
                        Une équipe dédiée prend en charge chaque aspect de votre présence
                        sociale, de la stratégie à l&apos;exécution.
                    </p>
                </motion.div>

                {/* Grille de services */}
                <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                custom={i * 0.6}
                                className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-500 sm:rounded-3xl sm:p-7 ${service.featured
                                        ? "border-transparent bg-[#111111] text-white shadow-[0_20px_50px_-15px_rgba(17,17,17,0.35)]"
                                        : "border-[#ECECEC] bg-white hover:border-[#FFB347]/40 hover:shadow-[0_20px_50px_-20px_rgba(17,17,17,0.12)]"
                                    }`}
                            >
                                <span
                                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-500 group-hover:-translate-y-0.5 sm:h-12 sm:w-12 sm:rounded-2xl ${service.featured ? "bg-white/10" : "bg-[#FFE6CC]"
                                        }`}
                                >
                                    <Icon
                                        className={`h-5 w-5 ${service.featured ? "text-[#FFB347]" : "text-[#FF7A1A]"
                                            }`}
                                    />
                                </span>

                                <h3
                                    className={`tracking-tight-body mt-5 text-[18px] font-semibold sm:text-[19px] ${service.featured ? "text-white" : "text-[#111111]"
                                        }`}
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className={`tracking-tight-body mt-2.5 text-[14.5px] leading-[1.6] ${service.featured ? "text-white/70" : "text-[#666666]"
                                        }`}
                                >
                                    {service.description}
                                </p>

                                {service.featured && (
                                    <div className="mt-6 flex items-center gap-1.5 text-[13.5px] font-semibold text-[#FFB347]">
                                        Notre spécialité
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}