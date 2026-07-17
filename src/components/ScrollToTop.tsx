"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          aria-label="Retourner en haut de page"
          className="group fixed bottom-6 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] shadow-[0_10px_30px_-8px_rgba(17,17,17,0.35)] transition-colors duration-300 hover:bg-[#FF7A1A] sm:bottom-8 sm:right-8 sm:h-13 sm:w-13"
        >
          <ArrowUp className="h-4.5 w-4.5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}