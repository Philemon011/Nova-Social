import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Poppins — texte courant (corps, nav, boutons, labels)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Google Sans Flex — grands titres uniquement (optical size 72pt)
const googleSansFlexDisplay = localFont({
  src: [
    { path: "../fonts/GoogleSansFlex_72pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/GoogleSansFlex_72pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/GoogleSansFlex_72pt-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/GoogleSansFlex_72pt-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Social — Agence de Community Management Premium",
  description:
    "Nova Social propulse votre marque sur les réseaux sociaux avec une stratégie sur-mesure, un contenu qui convertit et une gestion 100% pilotée par des experts. Réservez votre audit gratuit.",
  keywords: [
    "community management",
    "agence réseaux sociaux",
    "gestion réseaux sociaux",
    "création de contenu",
    "stratégie social media",
  ],
  openGraph: {
    title: "Nova Social — Agence de Community Management Premium",
    description:
      "Une stratégie social media qui convertit vraiment. Découvrez Nova Social.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${googleSansFlexDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}