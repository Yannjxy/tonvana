import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">

      <Image
        src="/images/hero.png"
        alt="Tonvana Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-white">

          <p className="mb-5 uppercase tracking-[0.35em] text-sm text-stone-200">
            Winnipeg · Canada
          </p>

          <h1 className="text-6xl font-bold md:text-8xl">
            Tonvana
          </h1>

          <h2 className="mt-6 max-w-xl text-2xl leading-relaxed text-stone-100">
            Professional Piano Tuning &
            <br />
            Instrument Care
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-200">
            Reliable piano tuning, regulation, maintenance and repair
            for homes, studios, churches and schools.
          </p>

          <div className="mt-10 flex gap-4">

            <a
              href="#contact"
              className="rounded-full bg-amber-600 px-8 py-4 font-medium text-white transition hover:bg-amber-700"
            >
              Book a Service
            </a>

            <a
              href="#services"
              className="rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black"
            >
              Learn More
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}