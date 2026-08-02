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

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-[42%_58%] px-8">

          {/* 左侧留给图片中的品牌内容 */}
          <div></div>

          {/* 右侧内容 */}
          <div className="flex flex-col justify-center -mt-28 text-white">
            <p className="mb-6 uppercase tracking-[0.35em] text-sm text-stone-200">
              Winnipeg · Canada · 431-728-8688
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}