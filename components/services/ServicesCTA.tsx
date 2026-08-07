import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ServicesCTA() {
  return (
    <Section background="dark">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <SectionHeader
            eyebrow="READY TO GET STARTED?"
            align="center"
            className="text-white"
            title={
              <>
                Book Professional
                <br />
                Piano Service Today
              </>
            }
            description={
              <>
                Whether your piano needs tuning, repair,
                regulation or routine maintenance, we're here
                to help keep it performing at its very best.
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