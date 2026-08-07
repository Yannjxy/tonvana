"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "How often should I tune my piano?",
    answer:
      "Most pianos should be professionally tuned every 6 to 12 months. Frequent playing, seasonal humidity changes and moving the instrument may require more frequent service.",
  },
  {
    question: "How long does a tuning appointment take?",
    answer:
      "A standard piano tuning typically takes 60–90 minutes, depending on the condition of the instrument and whether additional adjustments are needed.",
  },
  {
    question: "Do you service both grand and upright pianos?",
    answer:
      "Yes. Tonvana provides professional tuning, regulation, repair and maintenance for both upright and grand pianos.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We proudly serve Winnipeg and surrounding communities. Please contact us if you're unsure whether your location is within our service area.",
  },
  {
    question: "Can you tune a piano after it has been moved?",
    answer:
      "Yes. We generally recommend allowing the piano to acclimate to its new environment for one to two weeks before tuning.",
  },
];

export default function ServiceFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section background="white">
      <Container>

        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title={
            <>
              Answers to
              <br />
              Common Questions
            </>
          }
          description="Everything you need to know before scheduling your piano service."
        />

        <div className="mx-auto mt-16 max-w-4xl">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-stone-200"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between py-7 text-left"
              >
                <span className="text-lg font-semibold text-stone-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index
                    ? "max-h-60 pb-7"
                    : "max-h-0"
                }`}
              >
                <p className="max-w-3xl leading-8 text-stone-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}