import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)]">
        <ServicesHero />

        <ServiceIntro />

        <ServiceGrid />

        <ServiceProcess />

        <ServiceFAQ />

        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}