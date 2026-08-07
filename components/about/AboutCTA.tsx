import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-[#1F3A2E] py-24 text-center text-white">
      <div className="mx-auto max-w-4xl px-8">

        <h2 className="font-serif text-5xl">
          Ready to Care for Your Piano?
        </h2>

        <p className="mt-6 text-lg text-stone-300">
          Schedule professional piano tuning and maintenance with Tonvana.
        </p>

        <Link
          href="/book"
          className="mt-10 inline-block rounded-lg bg-[#C7A15A] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#B48B43]"
        >
          Book a Service
        </Link>

      </div>
    </section>
  );
}