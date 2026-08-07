import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

import { assets } from "@/lib/config/assets";
import { siteConfig } from "@/lib/config/site";
import { CONTACT } from "@/lib/config/constants";

import {
  Clock3,
  MapPin,
  Wrench,
  Phone,
} from "lucide-react";

export default function Technician() {
  return (
    <Section background="light">
      <Container>

        {/* Hero Image */}

        <div className="overflow-hidden rounded-[32px] shadow-2xl">

          <Image
            src={assets.technician}
            alt={`${siteConfig.name} Professional Piano Care`}
            width={1600}
            height={900}
            sizes="100vw"
            className="
              h-[520px]
              w-full
              object-cover
            "
          />

        </div>

        {/* Heading */}

        <div className="mx-auto mt-20 max-w-3xl">

          <SectionHeader
            eyebrow="PROFESSIONAL CARE"
            align="center"
            title={
              <>
                Precision.
                <br />
                Experience.
                <br />
                Craftsmanship.
              </>
            }
            description={
              <>
                Every piano responds differently.
                Professional tuning requires careful listening,
                technical knowledge and respect for every
                instrument we service.
              </>
            }
          />

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <InfoCard
            icon={Wrench}
            title="Services"
          >
            Piano Tuning
            <br />
            Piano Repair
            <br />
            Regulation
            <br />
            Preventive Maintenance
          </InfoCard>

          <InfoCard
            icon={Clock3}
            title="Business Hours"
          >
            {CONTACT.businessHours.weekdays}
            <br />
            {CONTACT.officeHours.weekdays}
          </InfoCard>

          <InfoCard
            icon={MapPin}
            title="Service Area"
          >
            {siteConfig.city}
            <br />
            Surrounding Communities
          </InfoCard>

          <InfoCard
            dark
            icon={Phone}
            title="Need Service?"
          >
            Schedule your appointment online today.

            <div className="mt-8">

              <PrimaryButton
                href="/book"
                className="w-full"
              >
                Book a Service
              </PrimaryButton>

            </div>

          </InfoCard>

        </div>

      </Container>
    </Section>
  );
}