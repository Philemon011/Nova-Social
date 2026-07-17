import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PourquoiNous from "@/components/PourquoiNous";
import CommentCaMarche from "@/components/CommentCaMarche";
import Offres from "@/components/Offres";
import Temoignages from "@/components/Temoignages";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PourquoiNous />
      <CommentCaMarche />
      <Offres />
      <Temoignages />
      <Faq />
      <Contact />
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </main>
  );
}