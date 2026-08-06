import Link from "next/link";

export default function BookingHeader() {
  return (
    <header className="mb-16">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition duration-300 hover:border-[#C7A15A] hover:text-[#C7A15A]"
      >
        ← Back to Home
      </Link>

      {/* Brand */}
      <div className="mt-10 border-l-4 border-[#C7A15A] pl-6">

        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#C7A15A]">
          TONVANA
        </p>

        <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-900 md:text-4xl">
          Professional Piano
          <br />
          Tuning & Instrument Care
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
          Professional piano tuning, repair and maintenance
          for homes, studios, churches and schools throughout
          Winnipeg and surrounding communities.
        </p>

      </div>

    </header>
  );
}