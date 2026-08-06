import Link from "next/link";

export default function BookingSuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">

      <div className="w-full max-w-2xl rounded-3xl bg-white p-12 text-center shadow-2xl">

        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#D4AF37] text-5xl text-white">
          ✓
        </div>

        {/* Title */}
        <h1 className="mt-8 font-serif text-5xl font-semibold text-stone-900">
          Thank You!
        </h1>

        <p className="mt-6 text-lg leading-8 text-stone-600">
          Your booking request has been successfully received.
        </p>

        <p className="mt-4 leading-7 text-stone-600">
          We'll review your request and contact you within
          <span className="font-semibold text-stone-900">
            {" "}24 hours
          </span>{" "}
          to confirm your appointment.
        </p>

        {/* Divider */}
        <div className="my-10 border-t border-stone-200"></div>

        {/* What's Next */}
        <div className="text-left">

          <h2 className="font-serif text-2xl font-semibold text-stone-900">
            What Happens Next?
          </h2>

          <div className="mt-6 space-y-5">

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-white">
                1
              </div>

              <p className="text-stone-700">
                We'll review your booking request.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-white">
                2
              </div>

              <p className="text-stone-700">
                We'll contact you to confirm the appointment.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-white">
                3
              </div>

              <p className="text-stone-700">
                We'll arrive on the scheduled date and provide professional service.
              </p>
            </div>

          </div>

        </div>

        {/* Contact */}
        <div className="mt-12 rounded-2xl bg-stone-100 p-6">

          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Need Immediate Assistance?
          </p>

          <a
            href="tel:4317288688"
            className="mt-3 block text-4xl font-bold text-[#D4AF37] hover:underline"
          >
            431-728-8688
          </a>

          <p className="mt-3 text-sm leading-6 text-stone-600">
            Tuesday – Saturday
            <br />
            9:00 AM – 5:00 PM
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/"
            className="rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#C19A2B]"
          >
            Back to Home
          </Link>

          <Link
            href="/book"
            className="rounded-xl border border-stone-300 px-8 py-4 text-lg font-semibold text-stone-700 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Submit Another Request
          </Link>

        </div>

      </div>

    </main>
  );
}