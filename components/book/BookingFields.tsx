import type { BookingFormData } from "./BookingForm";

type Props = {
  form: BookingFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
};

export default function BookingFields({
  form,
  onChange,
}: Props) {
  return (
    <>
      {/* Personal Information */}

      <div>
        <h3 className="mb-6 border-b pb-2 text-xl font-semibold text-stone-900">
          Personal Information
        </h3>

        <div className="space-y-6">

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Full Name *
            </label>

            <input
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

        </div>
      </div>

      {/* Service Information */}

      <div>
        <h3 className="mb-6 border-b pb-2 text-xl font-semibold text-stone-900">
          Service Information
        </h3>

        <div className="space-y-6">

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Service Required
            </label>

            <select
              name="service"
              value={form.service}
              onChange={onChange}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            >
              <option>Piano Tuning</option>
              <option>Pitch Raise + Tuning</option>
              <option>Piano Repair</option>
              <option>Piano Regulation</option>
              <option>Voicing</option>
              <option>Inspection / Consultation</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Preferred Date
            </label>

            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={onChange}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Street Address
            </label>

            <input
              name="address"
              value={form.address}
              onChange={onChange}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium text-stone-700">
                City
              </label>

              <input
                name="city"
                value={form.city}
                onChange={onChange}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-stone-700">
                Postal Code
              </label>

              <input
                name="postalCode"
                value={form.postalCode}
                onChange={onChange}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Piano Information */}

      <div>

        <h3 className="mb-6 border-b pb-2 text-xl font-semibold text-stone-900">
          Piano Information
        </h3>

        <div className="space-y-6">

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Piano Brand
            </label>

            <input
              name="pianoBrand"
              value={form.pianoBrand}
              onChange={onChange}
              placeholder="Yamaha, Kawai, Steinway..."
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Piano Type
            </label>

            <select
              name="pianoType"
              value={form.pianoType}
              onChange={onChange}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            >
              <option>Grand Piano</option>
              <option>Upright Piano</option>
              <option>Digital Piano</option>
              <option>Not Sure</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium text-stone-700">
              Last Tuned
            </label>

            <select
              name="lastTuned"
              value={form.lastTuned}
              onChange={onChange}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
            >
              <option>Within 1 year</option>
              <option>1–2 years ago</option>
              <option>3–5 years ago</option>
              <option>More than 5 years ago</option>
              <option>Never</option>
              <option>Not Sure</option>
            </select>
          </div>

        </div>
      </div>

      {/* Additional Notes */}

      <div>

        <h3 className="mb-6 border-b pb-2 text-xl font-semibold text-stone-900">
          Additional Notes
        </h3>

        <textarea
          name="notes"
          value={form.notes}
          onChange={onChange}
          rows={6}
          placeholder="Tell us about your piano or any concerns..."
          className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
        />

      </div>
    </>
  );
}