import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CTA() {
  return (
    <Section className="bg-[var(--brand-green)]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <SectionHeader
            center
            light
            label="BOOK YOUR SERVICE"
            title={
              <>
                Ready to Keep
                <br />
                Your Piano Performing
                <br />
                at Its Best?
              </>
            }
            description={
              <>
                Professional piano tuning, repair and maintenance
                throughout Winnipeg and surrounding communities.
                Book your appointment today and let your piano
                sound its very best.
              </>
            }
          />

          <div className="mt-12">
            <PrimaryButton
              href="/book"
              arrow
            >
              Book a Service
            </PrimaryButton>
          </div>

        </div>
      </Container>
    </Section>
  );
}