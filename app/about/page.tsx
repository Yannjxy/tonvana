import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import AboutHero from "@/components/about/AboutHero";
import BrandQuote from "@/components/about/BrandQuote";
import OurStory from "@/components/about/OurStory";
import Technician from "@/components/about/Technician";
import WhyChoose from "@/components/about/WhyChoose";
import ServiceArea from "@/components/about/ServiceArea";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-stone-50">

        <AboutHero />

        <BrandQuote />

        <OurStory />

        <Technician />

        <WhyChoose />

        <ServiceArea />

      </main>

      <Footer />
    </>
  );
}