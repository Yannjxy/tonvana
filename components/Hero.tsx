import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero12.png"
        alt="Tonvana Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">

          <div className="max-w-xl text-white">

            {/* Location */}
            <p className="mb-6 flex flex-wrap items-center gap-4 uppercase tracking-[0.35em]">
  <span className="text-sm text-stone-200">
    Winnipeg · Canada
  </span>

  <span className="text-2xl font-bold tracking-normal text-white">
    431-728-8688
  </span>
</p>

            {/* Main Title */}
            <h1 className="font-serif text-5xl font-semibold leading-tight md:text-7xl">
              Professional Piano
              <br />
              Tuning &
              <br />
              <span className="text-[#D4AF37]">
                Instrument Care
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-stone-200">
              Reliable tuning, regulation, maintenance and repair
              for homes, studios, churches and schools.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/book"
                className="rounded-lg bg-[#C7A15A] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#B48B43]"
              >
                Book a Service
              </a>

              <a
                href="#services"
                className="rounded-lg border border-white px-8 py-4 text-lg text-white transition hover:bg-white hover:text-black"
              >
                Learn More
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}