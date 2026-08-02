import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import WhyTonvana from "@/components/WhyTonvana";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <WhyTonvana />
      <Footer />
    </>
  );
}