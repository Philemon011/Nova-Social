"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "nova-social-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Petit délai pour ne pas surcharger l'arrivée sur la page
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[60] sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm"
        >
          <div className="rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-[0_20px_50px_-15px_rgba(17,17,17,0.2)] sm:rounded-3xl sm:p-6">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFE6CC]">
                <Cookie className="h-4 w-4 text-[#FF7A1A]" />
              </span>
              <div>
                <h3 className="tracking-tight-body text-[14.5px] font-semibold text-[#111111]">
                  Votre vie privée compte
                </h3>
                <p className="tracking-tight-body mt-1.5 text-[13px] leading-[1.55] text-[#666666]">
                  Nous utilisons des cookies pour améliorer votre expérience
                  et mesurer l&apos;audience du site. Vous pouvez accepter ou
                  refuser à tout moment.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2.5">
              <button
                onClick={() => handleChoice("declined")}
                className="flex-1 rounded-full border border-[#ECECEC] px-4 py-2.5 text-[13px] font-semibold text-[#111111] transition-colors duration-300 hover:bg-[#FAFAFA]"
              >
                Refuser
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="flex-1 rounded-full bg-[#111111] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#FF7A1A]"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}