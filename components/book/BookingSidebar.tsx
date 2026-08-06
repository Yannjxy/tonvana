export default function BookingSidebar() {
  return (
    <aside className="rounded-3xl bg-white p-8 shadow-2xl">

      {/* Title */}
      <h3 className="font-serif text-3xl font-semibold text-stone-900">
        Why Choose Tonvana?
      </h3>

      <p className="mt-4 leading-7 text-stone-600">
        We provide professional piano tuning, repair and maintenance
        with meticulous attention to every instrument, helping your
        piano perform at its best for years to come.
      </p>

      {/* Services */}
      <div className="mt-10 space-y-5">

        <div className="flex items-start gap-4">
          <span className="text-xl text-[#D4AF37]">✓</span>

          <div>
            <h4 className="font-semibold text-stone-900">
              Professional Piano Tuning
            </h4>

            <p className="mt-1 text-sm leading-6 text-stone-600">
              Accurate tuning for upright and grand pianos.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-xl text-[#D4AF37]">✓</span>

          <div>
            <h4 className="font-semibold text-stone-900">
              Repair & Regulation
            </h4>

            <p className="mt-1 text-sm leading-6 text-stone-600">
              Action adjustments, repairs and preventative maintenance.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-xl text-[#D4AF37]">✓</span>

          <div>
            <h4 className="font-semibold text-stone-900">
              Residential & Commercial
            </h4>

            <p className="mt-1 text-sm leading-6 text-stone-600">
              Homes, churches, schools, studios and performance venues.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-xl text-[#D4AF37]">✓</span>

          <div>
            <h4 className="font-semibold text-stone-900">
              Local Service
            </h4>

            <p className="mt-1 text-sm leading-6 text-stone-600">
              Proudly serving Winnipeg and surrounding communities.
            </p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="my-10 border-t border-stone-200"></div>

      {/* Business Information */}
      <div className="space-y-8">

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Business Hours
          </p>

          <p className="mt-2 text-lg font-semibold text-stone-900">
            Tuesday – Saturday
          </p>

          <p className="text-stone-600">
            9:00 AM – 5:00 PM
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Response Time
          </p>

          <p className="mt-2 text-lg font-semibold text-stone-900">
            Within 24 Hours
          </p>

          <p className="text-stone-600">
            We respond to all booking requests promptly.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Call Directly
          </p>

          <a
            href="tel:4317288688"
            className="mt-2 block text-4xl font-bold text-[#D4AF37] transition hover:underline"
          >
            431-728-8688
          </a>

          <p className="mt-3 text-sm leading-6 text-stone-600">
            Questions before booking?
            Feel free to call us during business hours.
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="my-10 border-t border-stone-200"></div>

      {/* Trust Section */}
      <div>

        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
          Trusted Service
        </p>

        <div className="mt-4 space-y-2 text-stone-700">

          <p>✓ Personalized Service</p>

          <p>✓ Honest Recommendations</p>

          <p>✓ Attention to Detail</p>

          <p>✓ Customer Satisfaction</p>

        </div>

      </div>

      {/* CTA */}
      <div className="mt-10">

        <p className="mb-4 text-center text-sm text-stone-600">
          Need immediate assistance?
        </p>

        <a
          href="tel:4317288688"
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#C19A2B]"
        >
          📞 Call Now
        </a>

      </div>

    </aside>
  );
}