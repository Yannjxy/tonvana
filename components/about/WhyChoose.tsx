import {
  ShieldCheck,
  Clock3,
  Music4,
  MapPin,
  HeartHandshake,
  Wrench,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

import { siteConfig } from "@/lib/config/site";

const features = [
  {
    icon: ShieldCheck,
    title: "Professional Expertise",
    description:
      "Every piano receives careful evaluation, accurate tuning, and service tailored to its individual condition.",
  },
  {
    icon: Clock3,
    title: "Reliable Scheduling",
    description:
      "Respect for your time with punctual appointments, clear communication, and dependable service.",
  },
  {
    icon: Music4,
    title: "Attention to Detail",
    description:
      "Small adjustments make a significant difference. Every note is tuned with precision and consistency.",
  },
  {
    icon: Wrench,
    title: "Complete Piano Care",
    description:
      "Beyond tuning, we provide maintenance, regulation, and repair to keep your piano performing at its best.",
  },
  {
    icon: MapPin,
    title: "Serving Winnipeg",
    description: `Professional piano services for homes, schools, churches, studios, and performance venues throughout ${siteConfig.city} and surrounding communities.`,
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Honest recommendations, transparent communication, and long-term relationships built on trust.",
  },
];

export default function WhyChoose() {
  return (
    <Section background="white">
      <Container>

        <SectionHeader
          eyebrow="WHY CHOOSE TONVANA"
          align="center"
          title={
            <>
              Professional Service
              <br />
              Built on Trust
            </>
          }
          description={
            <>
              Exceptional piano care comes from experience,
              precision, and genuine respect for every instrument.
              Our goal is to help your piano perform beautifully
              for years to come.
            </>
          }
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}