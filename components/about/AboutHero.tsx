import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import BrandLabel from "@/components/ui/BrandLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function AboutHero() {
  return (
    <Section className="relative flex min-h-[85vh] items-center overflow-hidden py-0">

      {/* Background */}

      <Image
        src="/images/about-hero.jpg"
        alt="About Tonvana"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

      <Container className="relative z-10">

        <div className="max-w-3xl text-white">

          <BrandLabel>
            ABOUT TONVANA
          </BrandLabel>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight md:text-7xl">

            Professional Piano Care

            <br />

            for Every

            <span className="text-[#C7A15A]">
              {" "}
              Instrument
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-200">

            At Tonvana, we believe every piano deserves thoughtful,
            professional care. From routine tuning to detailed
            maintenance and repair, our goal is to preserve the beauty,
            touch, and voice of every instrument for years to come.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <PrimaryButton
              href="/book"
              arrow
            >
              Book a Service
            </PrimaryButton>

            <SecondaryButton
              href="/"
              className="border-white text-white hover:border-white"
            >
              Back to Home
            </SecondaryButton>

          </div>

        </div>

      </Container>

    </Section>
  );
}