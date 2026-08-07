import Image from "next/image";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function OurStory() {
  return (
    <Section className="bg-white">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-[40%_60%]">

          {/* Left */}

          <div>

            <SectionHeader
              label="OUR STORY"
              title={
                <>
                  Every Piano
                  <br />
                  Has Its Own Voice.
                </>
              }
              description={
                <>
                  At Tonvana, we believe every piano deserves thoughtful,
                  professional care. Whether your instrument is played every
                  day or only on special occasions, regular maintenance helps
                  preserve its beauty, touch and tone.

                  <br />
                  <br />

                  Our goal is simple: provide honest advice, precise tuning,
                  and dependable service that keeps your piano performing at
                  its best for years to come.
                </>
              }
            />

            {/* Brand Values */}

            <div className="mt-12 space-y-6">

              <div className="flex items-start gap-4">

                <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C7A15A]" />

                <div>

                  <h3 className="font-semibold text-stone-900">
                    Precision
                  </h3>

                  <p className="mt-2 leading-7 text-stone-600">
                    Every tuning is completed with patience,
                    accuracy and attention to detail.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C7A15A]" />

                <div>

                  <h3 className="font-semibold text-stone-900">
                    Respect
                  </h3>

                  <p className="mt-2 leading-7 text-stone-600">
                    Every instrument is treated with care,
                    regardless of age, brand or condition.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C7A15A]" />

                <div>

                  <h3 className="font-semibold text-stone-900">
                    Reliability
                  </h3>

                  <p className="mt-2 leading-7 text-stone-600">
                    Clear communication, dependable scheduling
                    and long-term customer relationships.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/images/about-story.jpg"
                alt="Professional Piano Tuning"
                width={900}
                height={1200}
                className="
                  h-[720px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}