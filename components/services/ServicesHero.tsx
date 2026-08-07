import Image from "next/image";

import Container from "@/components/ui/Container";
import BrandLabel from "@/components/ui/BrandLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

import { assets } from "@/lib/config/assets";
import { siteConfig } from "@/lib/config/site";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden">

      {/* Background */}

      <Image
        src={assets.servicesHero}
        alt={`${siteConfig.name} Professional Piano Services`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      {/* Content */}

      <Container className="relative z-10">

        <div className="max-w-2xl text-white">

          {/* Brand */}

          <BrandLabel>
            OUR SERVICES
          </BrandLabel>

          {/* Title */}

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Professional
            <br />
            Piano Services
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/90">
            Complete tuning, regulation, repair and maintenance
            for upright and grand pianos throughout{" "}
            {siteConfig.city} and surrounding communities.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <PrimaryButton
              href="/book"
              arrow
            >
              Book a Service
            </PrimaryButton>

            <SecondaryButton
              href="#service-grid"
              className="
                border-white
                text-white
                hover:border-white
                hover:bg-white
                hover:text-black
              "
            >
              Explore Services
            </SecondaryButton>

          </div>

        </div>

      </Container>

    </section>
  );
}