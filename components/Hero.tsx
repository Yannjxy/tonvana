import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">

      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="Tonvana Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-[42%_58%] px-8">

          {/* 左侧留给图片中的品牌内容 */}
          <div></div>

          {/* 右侧内容 */}
          <div className="flex flex-col justify-center -mt-28 text-white">

            <p className="mb-6 uppercase tracking-[0.35em] text-sm text-stone-200">
              Winnipeg · Canada
            </p>

            <h1 className="max-w-md text-5xl font-serif font-semibold leading-tight md:text-6xl">
              Professional Piano
              <br />
              Tuning &
              <br />
              <span className="text-amber-400">
                Instrument Care
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-stone-200">
              Reliable tuning, regulation, maintenance and repair
              for homes, studios, churches and schools.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

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

      </div>

    </section>
  );
}