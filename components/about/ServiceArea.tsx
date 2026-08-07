import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function ServiceArea() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-5xl px-8">

        <div className="overflow-hidden rounded-[32px] bg-[#1F3A2E] text-white shadow-2xl">

          <div className="px-10 py-16 md:px-16">

            {/* Icon */}

            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C7A15A]/15">
                <MapPin
                  size={30}
                  className="text-[#D4AF37]"
                />
              </div>
            </div>

            {/* Heading */}

            <div className="mx-auto mt-8 max-w-3xl text-center">

              <p className="uppercase tracking-[0.35em] text-sm text-[#D4AF37]">
                SERVICE AREA
              </p>

              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                Serving Winnipeg
                <br />
                & Surrounding Communities
              </h2>

              <p className="mt-8 text-lg leading-8 text-stone-300">
                Professional piano tuning, repair and maintenance
                delivered directly to your home, studio, school,
                church or performance venue.
              </p>

            </div>

            {/* Divider */}

            <div className="mx-auto my-12 h-px max-w-2xl bg-white/15" />

            {/* Bottom */}

            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

              <p className="text-lg leading-8 text-stone-300">
                Outside our standard service area?
              </p>

              <p className="mt-2 text-stone-400">
                Contact us and we'll do our best to
                accommodate your location.
              </p>

              <Link
                href="/book"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#C7A15A]
                  px-8
                  py-4
                  text-lg
                  font-medium
                  text-white
                  transition
                  hover:bg-[#B48B43]
                "
              >
                Book a Service

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}