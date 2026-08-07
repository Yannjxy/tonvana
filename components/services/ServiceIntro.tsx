import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServiceIntro() {
  return (
    <Section background="light">

      <Container>

        <SectionHeader
          eyebrow="OUR PHILOSOPHY"
          title={
            <>
              Every Piano
              <br />
              Deserves Expert Care
            </>
          }
          description="
            Every piano has its own character. Professional service is
            about preserving tone, touch and long-term performance
            through careful craftsmanship and attention to detail.
          "
        />

        <div className="mx-auto mt-20 max-w-5xl">

          <p className="text-center text-lg leading-9 text-stone-600">

            Whether your piano is played every day or only on special
            occasions, regular maintenance protects both its sound and
            mechanical condition. Tonvana provides dependable piano
            care for homeowners, teachers, churches, schools and
            performance spaces throughout Winnipeg.

          </p>

        </div>

      </Container>

    </Section>
  );
}