import {
  Music4,
  SlidersHorizontal,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

const services = [
  {
    icon: Music4,
    title: "Piano Tuning",
    description:
      "Professional tuning for upright and grand pianos to restore accurate pitch and musical balance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Regulation",
    description:
      "Improve keyboard touch, action response and overall playability through precise regulation.",
  },
  {
    icon: Wrench,
    title: "Repair",
    description:
      "Diagnosis and repair of common mechanical issues to keep your instrument performing reliably.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance",
    description:
      "Preventive maintenance that helps preserve tone, touch and the long-term health of your piano.",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      className="bg-[var(--surface)]"
    >
      <Container>

        <SectionHeader
          center
          label="OUR SERVICES"
          title={
            <>
              Professional Piano
              <br />
              Care & Maintenance
            </>
          }
          description={
            <>
              From routine tuning to repair and regulation,
              Tonvana provides comprehensive piano care designed
              to keep your instrument performing at its best.
            </>
          }
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}