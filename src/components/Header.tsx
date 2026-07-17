"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Pourquoi nous", href: "#pourquoi-nous" },
    { label: "Comment ça marche", href: "#comment-ca-marche" },
    { label: "Offres", href: "#offres" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (href: string) => {
        const isMobileMenuOpen = mobileOpen;
        setMobileOpen(false);

        const scrollToSection = () => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        };

        if (isMobileMenuOpen) {
            // On laisse le temps au menu mobile de se refermer
            // (durée de l'animation Framer Motion : 0.3s) avant de scroller
            setTimeout(scrollToSection, 320);
        } else {
            scrollToSection();
        }
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-6"
        >
            <div
                className={`w-full max-w-6xl rounded-2xl transition-all duration-500 ${scrolled || mobileOpen
                    ? "bg-white/70 backdrop-blur-xl border border-[#ECECEC] shadow-[0_8px_30px_rgba(17,17,17,0.06)]"
                    : "bg-white/0 border border-transparent"
                    }`}
            >
                <nav className="flex items-center justify-between px-5 py-3.5 sm:px-6">
                    {/* Logo */}

                    <a href="#"
                        className="flex items-center gap-2 text-[17px] font-semibold tracking-tight-hero text-[#111111]"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF7A1A] to-[#FFB347]">
                            <span className="h-2.5 w-2.5 rounded-full bg-white" />
                        </span>
                        Nova Social
                    </a>

                    {/* Desktop nav */}
                    <ul className="hidden items-center gap-1 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <button
                                    onClick={() => handleNavClick(link.href)}
                                    className="rounded-full px-4 py-2 text-[14.5px] font-medium text-[#666666] transition-colors duration-200 hover:bg-[#FFE6CC]/50 hover:text-[#111111]"
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* CTA desktop */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => handleNavClick("#contact")}
                            className="group flex items-center gap-1.5 rounded-full bg-[#111111] px-5 py-2.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:bg-[#FF7A1A]"
                        >
                            Réserver un appel
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#111111] lg:hidden"
                        aria-label="Ouvrir le menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </nav>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden lg:hidden"
                        >
                            <div className="flex flex-col gap-1 px-5 pb-5">
                                {NAV_LINKS.map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => handleNavClick(link.href)}
                                        className="rounded-xl px-4 py-3 text-left text-[15px] font-medium text-[#666666] hover:bg-[#FFE6CC]/50 hover:text-[#111111]"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handleNavClick("#contact")}
                                    className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-[#111111] px-5 py-3 text-[15px] font-semibold text-white"
                                >
                                    Réserver un appel
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}