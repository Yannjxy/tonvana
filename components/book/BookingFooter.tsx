import Link from "next/link";

export default function BookingFooter() {
  return (
    <footer className="mt-20 rounded-3xl bg-stone-900 px-8 py-10 text-white">

      <div className="grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            TONVANA
          </p>

          <h3 className="mt-3 font-serif text-2xl">
            Professional Piano
            <br />
            Tuning & Instrument Care
          </h3>

          <p className="mt-4 leading-7 text-stone-300">
            Professional piano tuning, repair and maintenance
            for homes, churches, schools and studios throughout
            Winnipeg and surrounding communities.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold">
            Contact
          </h4>

          <div className="mt-5 space-y-3 text-stone-300">

            <p>
              📞 431-728-8688
            </p>

            <p>
              ✉ info@tonvana.com
            </p>

            <p>
              Winnipeg, Manitoba
            </p>

          </div>
        </div>

        {/* Business */}
        <div>

          <h4 className="text-lg font-semibold">
            Business Hours
          </h4>

          <div className="mt-5 space-y-3 text-stone-300">

            <p>
              Tuesday – Saturday
            </p>

            <p>
              9:00 AM – 5:00 PM
            </p>

            <Link
              href="/"
              className="inline-block pt-4 text-[#D4AF37] transition hover:text-white"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="my-8 border-t border-stone-700"></div>

      {/* Bottom */}

      <div className="flex flex-col items-center justify-between gap-4 text-sm text-stone-400 md:flex-row">

        <p>
          © {new Date().getFullYear()} Tonvana. All rights reserved.
        </p>

        <p>
          Serving Winnipeg & Surrounding Communities
        </p>

      </div>

    </footer>
  );
}