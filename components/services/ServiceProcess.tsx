import {
  CalendarCheck,
  Search,
  Wrench,
  Music4,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Book Your Service",
    description:
      "Schedule a convenient appointment online or by phone.",
  },
  {
    icon: Search,
    number: "02",
    title: "Professional Inspection",
    description:
      "Every piano is carefully evaluated before any work begins.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Expert Service",
    description:
      "Tuning, regulation or repair is completed with precision and care.",
  },
  {
    icon: Music4,
    number: "04",
    title: "Enjoy Your Piano",
    description:
      "Experience improved touch, tone and long-term performance.",
  },
];

export default function ServiceProcess() {
  return (
    <Section background="light">
      <Container>

        <SectionHeader
          eyebrow="OUR PROCESS"
          title={
            <>
              A Simple Process,
              <br />
              Exceptional Results
            </>
          }
          description="Professional service should be straightforward. From booking to completion, every step is designed to provide confidence and exceptional care."
        />

        <div className="mt-20 grid gap-10 md:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Number */}

                <div className="text-sm font-semibold tracking-[0.3em] text-[var(--brand-gold)]">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-green)] text-white shadow-lg">
                  <Icon size={28} />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-semibold text-stone-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-stone-600">
                  {step.description}
                </p>

                {/* Connector */}

                {step.number !== "04" && (
                  <div className="absolute top-16 left-full hidden h-px w-10 bg-stone-300 md:block" />
                )}
              </div>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}