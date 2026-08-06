export default function BookingBenefits() {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-lg">

      <h3 className="font-serif text-2xl font-semibold text-stone-900">
        What Happens Next?
      </h3>

      <p className="mt-3 leading-7 text-stone-600">
        Once your request is submitted, we'll review your
        information and contact you to confirm the service
        details and schedule.
      </p>

      <div className="mt-8 space-y-6">

        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7A15A] text-white font-bold">
            1
          </div>

          <div>
            <h4 className="font-semibold text-stone-900">
              Submit Your Request
            </h4>

            <p className="mt-1 text-sm leading-6 text-stone-600">
              Fill out the booking form with your contact
              information and service details.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7A15A] text-white font-bold">
            2
          </div>

          <div>
            <h4 className="font-semibold text-stone-900">
              We Contact You
            </h4>

            <p className="mt-1 text-sm leading-6 text-stone-600">
              We'll reach out within 24 hours to confirm
              availability and answer any questions.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7A15A] text-white font-bold">
            3
          </div>

          <div>
            <h4 className="font-semibold text-stone-900">
              Enjoy Professional Service
            </h4>

            <p className="mt-1 text-sm leading-6 text-stone-600">
              Your piano will receive professional care,
              helping it perform at its best.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-10 rounded-2xl bg-[#C7A15A] p-6 text-white">

        <h4 className="text-lg font-semibold">
          Need Immediate Assistance?
        </h4>

        <p className="mt-2 text-sm leading-6">
          If your request is urgent, feel free to call us
          directly during business hours.
        </p>

        <a
          href="tel:4317288688"
          className="mt-4 block text-2xl font-bold hover:underline"
        >
          431-728-8688
        </a>

      </div>

    </div>
  );
}