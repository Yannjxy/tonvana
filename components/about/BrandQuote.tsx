export default function BrandQuote() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EE] py-36">

      {/* Background Quote */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-[18rem]
          font-serif
          leading-none
          text-[#C7A15A]/10
        "
      >
        “
      </div>

      <div className="relative mx-auto max-w-5xl px-8 text-center">

        {/* Label */}

        <p className="mb-8 uppercase tracking-[0.45em] text-sm text-[#C7A15A]">
          OUR PHILOSOPHY
        </p>

        {/* Quote */}

        <blockquote className="font-serif text-5xl font-semibold leading-tight text-stone-900 md:text-7xl">

          Every piano

          <br />

          has a voice.

        </blockquote>

        <p className="mx-auto mt-10 max-w-2xl text-xl leading-9 text-stone-600">

          We believe every instrument deserves thoughtful,
          precise care so it can continue inspiring music
          for generations.

        </p>

        {/* Divider */}

        <div className="mx-auto mt-16 h-px w-24 bg-[#C7A15A]" />

        {/* Brand */}

        <div className="mt-10">

          <h3 className="tracking-[0.35em] text-lg font-semibold text-stone-900">

            TONVANA

          </h3>

          <p className="mt-3 text-stone-500">

            Professional Piano Tuning & Instrument Care

          </p>

        </div>

      </div>

    </section>
  );
}