"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, PlayCircle, Play, Heart, MessageCircle } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, delay: i * 0.16, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const AVIS_MARQUEE = [
    {
        nom: "Julie Solace",
        entreprise: "Solace Fitness",
        citation: "Chaque euro dépensé est enfin justifié.",
        image: "/images/julie.jpg"
    },
    {
        nom: "Amélie Rousseau",
        entreprise: "Studio Lumina",
        citation: "Notre communauté a doublé en 4 mois.",
        image: "/images/amelie.jpg"
    },
    {
        nom: "Kevin Dossou",
        entreprise: "Nordik Café",
        citation: "Enfin un contenu qui ressemble à notre marque.",
        image: "/images/kevin.jpg"
    },
    {
        nom: "Sarah Vertex",
        entreprise: "Vertex Immobilier",
        citation: "Un suivi mensuel clair, sans surprise.",
        image: "/images/sarah.jpg"
    },
    {
        nom: "Moussa Kaelo",
        entreprise: "Kaelo Beauté",
        citation: "Une équipe qui connaît vraiment nos produits.",
        image: "/images/moussa.jpg"
    },
    {
        nom: "Adama Fall",
        entreprise: "Aurea Bijoux",
        citation: "Nos ventes en ligne ont suivi la croissance sociale.",
        image: "/images/adama.jpg"
    },
];

export default function Hero() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    const marqueeItems = [...AVIS_MARQUEE, ...AVIS_MARQUEE];

    return (
        <section id="hero" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
            {/* Fond très discret — grille de points, pas de wash orange */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
                style={{
                    backgroundImage: "radial-gradient(circle, #ECECEC 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "linear-gradient(to bottom, black, transparent 65%)",
                }}
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
                {/* Eyebrow — cohérent avec toutes les autres sections */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-[7px] text-[13px] font-medium text-[#666666] shadow-[0_2px_8px_rgba(17,17,17,0.04)]"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A1A]" />
                    Agence de community management
                </motion.div>

                {/* Titre — même typographie et dégradé que les autres sections */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    className="text-gradient-dark font-display tracking-tight-hero text-[42px] leading-[1.05] font-semibold sm:text-[62px] lg:text-[74px]"
                >
                    Vos réseaux sociaux,
                    <br />
                    enfin rentables.
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    className="tracking-tight-body mt-7 max-w-lg text-[17px] leading-[1.6] text-[#666666] sm:text-[18.5px]"
                >
                    Nova Social conçoit, anime et fait grandir votre communauté avec une
                    stratégie sur-mesure, un contenu qui capte l&apos;attention et des
                    résultats mesurables, mois après mois.
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
                >
                    <button
                        onClick={() => scrollTo("#contact")}
                        className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-[#111111] px-7 py-[15px] text-[14.5px] font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,122,26,0.35)]"
                    >
                        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FF7A1A] to-[#FFB347] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        Réserver un audit gratuit
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <button
                        onClick={() => scrollTo("#comment-ca-marche")}
                        className="flex items-center gap-2 rounded-full px-6 py-[15px] text-[14.5px] font-semibold text-[#111111] transition-colors duration-300 hover:text-[#FF7A1A]"
                    >
                        <PlayCircle className="h-4.5 w-4.5" />
                        Voir comment ça marche
                    </button>
                </motion.div>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                    className="mt-6 text-[13px] text-[#666666]"
                >
                    Sans engagement&nbsp;&nbsp;·&nbsp;&nbsp;Réponse sous 24h&nbsp;&nbsp;·&nbsp;&nbsp;Stratégie personnalisée
                </motion.p>
            </div>

            {/* Collage de contenus — signature visuelle du Hero */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto mt-20 hidden max-w-4xl px-6 md:block"
            >
                {/* Glow contenu, uniquement derrière le collage */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7A1A]/10 blur-[100px]" />

                <div className="relative h-[420px]">
                    {/* Carte 1 — Reel vidéo (grande, gauche) */}
                    <div
                        style={{ "--card-rotate": "-4deg" } as React.CSSProperties}
                        className="absolute left-0 top-4 w-[220px] animate-[float-soft_7s_ease-in-out_infinite] rounded-[22px] border border-[#ECECEC] bg-white p-2.5 shadow-[0_25px_60px_-20px_rgba(17,17,17,0.18)]"
                    >
                        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl">
                            <img
                                src="/images/image2.jpg"
                                alt="Campagne printemps"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Overlay pour améliorer la lisibilité */}
                            <div className="absolute inset-0 bg-black/20" />

                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
                                    <Play className="h-4.5 w-4.5 fill-white text-white" />
                                </span>
                            </span>

                            <span className="absolute bottom-3 left-3 rounded-md bg-black/30 px-2 py-1 text-[10.5px] font-medium text-white backdrop-blur-sm">
                                Campagne printemps
                            </span>
                        </div>
                        <div className="flex items-center justify-between px-1.5 pt-2.5 text-[11.5px] text-[#666666]">
                            <span className="flex items-center gap-1">
                                <Heart className="h-3 w-3" /> 4 812
                            </span>
                            <span className="flex items-center gap-1">
                                <MessageCircle className="h-3 w-3" /> 212
                            </span>
                        </div>
                    </div>

                    {/* Carte 2 — Post image (haut droite) */}
                    <div
                        style={{ "--card-rotate": "3deg" } as React.CSSProperties}
                        className="absolute right-6 top-0 w-[180px] animate-[float-soft_8s_ease-in-out_infinite] rounded-[20px] border border-[#ECECEC] bg-white p-2.5 shadow-[0_25px_60px_-20px_rgba(17,17,17,0.16)]"
                        data-delay="1"
                    >
                        <div className="relative h-[150px] w-full overflow-hidden rounded-xl">
                            <img
                                src="/images/image1.png"
                                alt="Backstage tournage"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <p className="tracking-tight-body mt-2.5 px-1 text-[11.5px] font-semibold text-[#111111]">
                            Backstage tournage
                        </p>
                        <p className="px-1 text-[10.5px] text-[#666666]">128 commentaires</p>
                    </div>

                    {/* Carte 3 — Story verticale (bas gauche) */}
                    <div
                        style={{ "--card-rotate": "5deg" } as React.CSSProperties}
                        className="absolute bottom-4 left-16 w-[130px] animate-[float-soft_6.5s_ease-in-out_infinite] rounded-[18px] border border-[#ECECEC] bg-white p-2 shadow-[0_20px_50px_-18px_rgba(17,17,17,0.16)]"
                    >
                        <div className="relative h-[170px] w-full overflow-hidden rounded-xl">
                            <img
                                src="/images/image4.png"
                                alt="Story"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/20" />

                            <span className="absolute left-2 top-2 h-1 w-[calc(100%-16px)] overflow-hidden rounded-full bg-white/20">
                                <span className="block h-full w-2/3 rounded-full bg-white" />
                            </span>

                            <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white/90">
                                12,4K vues
                            </span>
                        </div>
                    </div>

                    {/* Carte 4 — Stat engagement (droite, milieu) */}
                    <div
                        style={{ "--card-rotate": "-2deg" } as React.CSSProperties}
                        className="absolute bottom-10 right-0 w-[168px] animate-[float-soft_7.5s_ease-in-out_infinite] rounded-2xl border border-[#ECECEC] bg-white px-4 py-3.5 shadow-[0_20px_50px_-18px_rgba(17,17,17,0.16)]"
                    >
                        <p className="text-[11px] text-[#666666]">Engagement moyen</p>
                        <p className="font-display tracking-tight-body mt-1 text-[22px] font-semibold text-[#111111]">
                            +187%
                        </p>
                    </div>

                    {/* Carte 5 — Communauté (centre bas) */}
                    <div
                        style={{ "--card-rotate": "1deg" } as React.CSSProperties}
                        className="absolute bottom-0 left-1/2 w-[190px] -translate-x-1/2 animate-[float-soft_9s_ease-in-out_infinite] rounded-2xl border border-[#ECECEC] bg-white px-4 py-3.5 shadow-[0_20px_50px_-18px_rgba(17,17,17,0.16)]"
                    >
                        <div className="flex items-center -space-x-2">
                            {[
                                "https://randomuser.me/api/portraits/women/44.jpg",
                                "https://randomuser.me/api/portraits/men/32.jpg",
                                "https://randomuser.me/api/portraits/women/68.jpg",
                                "https://randomuser.me/api/portraits/men/75.jpg",
                            ].map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`Utilisateur ${i + 1}`}
                                    className="h-6 w-6 rounded-full border-2 border-white object-cover"
                                />
                            ))}
                        </div>
                        <p className="tracking-tight-body mt-2 text-[12.5px] font-medium text-[#111111]">
                            +2 400 abonnés ce mois
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Version mobile — carrousel horizontal simple */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="mt-14 flex gap-3 overflow-x-auto px-4 pb-2 md:hidden [&::-webkit-scrollbar]:hidden"
            >
                <div className="w-[150px] shrink-0 rounded-2xl border border-[#ECECEC] bg-white p-2">
                    <div className="relative h-[190px] w-full overflow-hidden rounded-xl">
                        <img
                            src="/images/image2.jpg"
                            alt="Campagne printemps"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25">
                                <Play className="h-3.5 w-3.5 fill-white text-white" />
                            </span>
                        </span>
                    </div>
                </div>
                <div className="w-[150px] shrink-0 rounded-2xl border border-[#ECECEC] bg-white p-2">
                    <div className="relative h-[190px] w-full overflow-hidden rounded-xl">
                        <img
                            src="/images/image1.png"
                            alt="Backstage tournage"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-[150px] shrink-0 rounded-2xl border border-[#ECECEC] bg-white p-3">
                    <p className="text-[11px] text-[#666666]">Engagement moyen</p>
                    <p className="font-display mt-1 text-[24px] font-semibold text-[#111111]">
                        +187%
                    </p>
                </div>
                <div className="w-[150px] shrink-0 rounded-2xl border border-[#ECECEC] bg-white p-2">
                    <div className="relative h-[190px] w-full overflow-hidden rounded-xl">
                        <img
                            src="/images/image4.png"
                            alt="Story"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                </div>
            </motion.div>

            {/* Bandeau d'avis qui défile en continu */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mx-auto mt-20 max-w-6xl sm:mt-24"
            >
                <p className="mb-6 text-center text-[12px] font-semibold tracking-[0em] text-[#666666]">
                    ILS NOUS FONT CONFIANCE
                </p>
                <div className="marquee-fade overflow-hidden">
                    <div className="animate-marquee flex w-max gap-4 px-2">
                        {marqueeItems.map((avis, i) => (
                            <div
                                key={`${avis.nom}-${i}`}
                                className="flex w-[290px] shrink-0 items-center gap-3.5 rounded-2xl border border-[#ECECEC] bg-white px-5 py-4"
                            >
                                <img
                                    src={avis.image}
                                    alt={avis.nom}
                                    className="h-9 w-9 shrink-0 rounded-full object-cover"
                                />
                                <div className="min-w-0 text-left">
                                    <p className="truncate text-[13px] font-medium text-[#111111]">
                                        {avis.citation}
                                    </p>
                                    <p className="truncate text-[11.5px] text-[#666666]">
                                        {avis.nom} · {avis.entreprise}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}