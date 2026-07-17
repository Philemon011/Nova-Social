"use client";

// Icônes de réseaux sociaux en SVG inline (retirées de lucide-react)
function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
    );
}

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
            <line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="7" cy="6.7" r="1.1" fill="currentColor" />
            <path
                d="M11 17v-4.5c0-1.4 1-2.5 2.4-2.5s2.1 1 2.1 2.5V17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
            <path
                d="M14.5 8.5h2V5.2c-.35-.05-1.5-.15-2.85-.15C11 5.05 9.5 6.62 9.5 9.28v2.22H7v3.5h2.5V21h3.4v-6h2.6l.4-3.5h-3V9.6c0-.7.19-1.1 1.1-1.1z"
                fill="currentColor"
            />
        </svg>
    );
}

const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Pourquoi nous", href: "#pourquoi-nous" },
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Offres", href: "#offres" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
];

const SOCIAL_LINKS = [
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export default function Footer() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-[#ECECEC] pt-16 pb-8 sm:pt-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-col items-start justify-between gap-12 sm:flex-row sm:gap-8">
                    {/* Colonne marque */}
                    <div className="max-w-xs">

                        <a href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="flex items-center gap-2 text-[17px] font-semibold tracking-tight-body text-[#111111]"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7A1A] to-[#FFB347]">
                                <span className="h-2.5 w-2.5 rounded-full bg-white" />
                            </span>
                            Nova Social
                        </a>
                        <p className="tracking-tight-body mt-4 text-[14px] leading-[1.65] text-[#666666]">
                            Agence de community management basée à Cotonou, au service de
                            marques qui veulent une présence sociale qui convertit vraiment.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon;
                                return (

                                    <a key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ECECEC] text-[#666666] transition-all duration-300 hover:border-[#FF7A1A]/40 hover:bg-[#FFE6CC]/40 hover:text-[#FF7A1A]"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Colonne navigation */}
                    <div>
                        <p className="text-[12px] font-semibold tracking-[0.06em] text-[#111111]">
                            NAVIGATION
                        </p>
                        <ul className="mt-5 flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="tracking-tight-body text-[14px] text-[#666666] transition-colors duration-300 hover:text-[#FF7A1A]"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne contact */}
                    <div>
                        <p className="text-[12px] font-semibold tracking-[0.06em] text-[#111111]">
                            CONTACT
                        </p>
                        <ul className="mt-5 flex flex-col gap-3">
                            <li>

                                <a href="mailto:contact@novasocial.fr"
                                    className="tracking-tight-body text-[14px] text-[#666666] transition-colors duration-300 hover:text-[#FF7A1A]"
                                >
                                    contact@novasocial.fr
                                </a>
                            </li>
                            <li>

                                <a href="tel:+22900000000"
                                    className="tracking-tight-body text-[14px] text-[#666666] transition-colors duration-300 hover:text-[#FF7A1A]"
                                >
                                    +229 00 00 00 00
                                </a>
                            </li>
                            <li className="tracking-tight-body text-[14px] text-[#666666]">
                                Cotonou, Bénin
                            </li>
                        </ul>
                    </div>

                    {/* Colonne CTA */}
                    <div className="w-full sm:w-auto">
                        <p className="text-[12px] font-semibold tracking-[0.06em] text-[#111111]">
                            PRÊT À DÉMARRER ?
                        </p>
                        <p className="tracking-tight-body mt-5 max-w-[220px] text-[14px] leading-[1.6] text-[#666666]">
                            Réservez votre appel découverte, sans engagement.
                        </p>
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="mt-4 rounded-full bg-[#111111] px-6 py-3 text-[13.5px] font-semibold text-white transition-colors duration-300 hover:bg-[#FF7A1A]"
                        >
                            Nous contacter
                        </button>
                    </div>
                </div>

                {/* Ligne de bas de page */}
                {/* Ligne de bas de page */}
                <div className="mt-16 flex flex-col items-center justify-center gap-5 border-t border-[#ECECEC] pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
                    <p className="text-[13px] text-[#666666]">
                        © {new Date().getFullYear()} Nova Social. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-6">

                        <a href="#"
                            className="text-[13px] text-[#666666] transition-colors duration-300 hover:text-[#FF7A1A]"
                        >
                            Mentions légales
                        </a>

                        <a href="#"
                            className="text-[13px] text-[#666666] transition-colors duration-300 hover:text-[#FF7A1A]"
                        >
                            Politique de confidentialité
                        </a>
                    </div>

                    <a href="https://philemondev.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] text-[#666666] transition-colors duration-300 hover:text-[#FF7A1A]"
                    >
                        Réalisé par
                        <span className="font-semibold text-[#111111] transition-colors duration-300 group-hover:text-[#FF7A1A]">
                            Etounde Philémon
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}