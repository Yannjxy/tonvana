import Image from "next/image";

export default function BookingHero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-2xl">

      {/* Brand Banner */}
      <div className="bg-stone-900 px-8 py-8 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
          TONVANA
        </p>

        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white">
          Professional Piano
          <br />
          Tuning & Instrument Care
        </h2>

        <p className="mx-auto mt-5 max-w-md leading-7 text-stone-300">
          Professional tuning, repair and maintenance
          for homes, churches, studios and schools
          throughout Winnipeg.
        </p>

      </div>

      {/* Hero Image */}
      <div className="overflow-hidden">

        <Image
          src="/images/hero12.png"
          alt="Tonvana Piano Tuning"
          width={900}
          height={1200}
          priority
          className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Bottom Brand Strip */}

      <div className="border-t border-stone-200 bg-stone-50 px-8 py-6">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Proudly Serving
            </p>

            <p className="mt-1 text-lg font-semibold text-stone-900">
              Winnipeg & Surrounding Communities
            </p>

          </div>

          <div className="text-right">

            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Trusted Service
            </p>

            <p className="mt-1 font-semibold text-[#D4AF37]">
              Professional • Reliable • Local
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}