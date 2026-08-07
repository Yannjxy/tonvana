import Image from "next/image";

import Container from "@/components/ui/Container";
import BrandLabel from "@/components/ui/BrandLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background */}

      <Image
        src="/images/hero12.png"
        alt="Tonvana Professional Piano Tuning"
        fill
        priority
        className="object-cover"
      />

      {/* Premium Gradient Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/75
          via-black/45
          to-black/15
        "
      />

      {/* Hero Content */}

      <Container className="relative z-10">

        <div className="max-w-2xl">

          {/* Brand */}

          <BrandLabel>
            TONVANA
          </BrandLabel>

          {/* Title */}

          <h1
            className="
              mt-6
              font-serif
              text-5xl
              font-semibold
              leading-tight
              text-white
              md:text-7xl
            "
          >
            Professional Piano

            <br />

            Tuning &

            <br />

            <span className="text-[var(--brand-gold)]">
              Instrument Care
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-white/90
            "
          >
            Reliable tuning, regulation, maintenance and repair
            for homes, studios, churches and schools throughout
            Winnipeg and surrounding communities.
          </p>

          {/* Contact */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-x-8
              gap-y-3
              text-base
              text-white/90
            "
          >
            <div className="flex items-center gap-2">

              <span className="text-[var(--brand-gold)]">
                📍
              </span>

              Winnipeg, Manitoba

            </div>

            <div className="flex items-center gap-2">

              <span className="text-[var(--brand-gold)]">
                ☎
              </span>

              <span className="font-semibold text-white">
                431-728-8688
              </span>

            </div>

          </div>

          {/* Buttons */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              gap-5
            "
          >

            <PrimaryButton
              href="/book"
              arrow
            >
              Book a Service
            </PrimaryButton>

            <SecondaryButton
              href="#services"
              className="
                border-white
                text-white
                hover:border-white
                hover:bg-white
                hover:text-black
              "
            >
              Learn More
            </SecondaryButton>

          </div>

        </div>

      </Container>

    </section>
  );
}