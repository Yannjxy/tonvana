import {
  Music2,
  SlidersHorizontal,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import FeatureCard from "@/components/ui/FeatureCard";

const services = [
  {
    icon: Music2,
    title: "Piano Tuning",
    description:
      "Precision tuning for upright and grand pianos, restoring stable pitch, balanced tone and musical accuracy.",
  },
  {
    icon: SlidersHorizontal,
    title: "Regulation",
    description:
      "Improve keyboard touch, repetition and action response for a smoother, more consistent playing experience.",
  },
  {
    icon: Wrench,
    title: "Repair",
    description:
      "Professional diagnosis and repair of worn, damaged or noisy piano components using reliable techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    description:
      "Seasonal inspection, cleaning and preventative care to preserve your piano's long-term performance.",
  },
];

export default function ServiceGrid() {
  return (
    <Section background="white" id="service-grid">
      <Container>

        <div className="grid gap-8 md:grid-cols-2">

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