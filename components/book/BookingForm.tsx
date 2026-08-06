"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingFields from "./BookingFields";

export type BookingFormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  address: string;
  city: string;
  postalCode: string;
  pianoBrand: string;
  pianoType: string;
  lastTuned: string;
  notes: string;
};

const initialForm: BookingFormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "Piano Tuning",
  preferredDate: "",
  address: "",
  city: "",
  postalCode: "",
  pianoBrand: "",
  pianoType: "Upright Piano",
  lastTuned: "Not Sure",
  notes: "",
};

export default function BookingForm() {
  const router = useRouter();

  const [form, setForm] = useState<BookingFormData>(initialForm);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed.");
      }

      router.push("/book/success");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl bg-white p-10 shadow-xl">

      <h2 className="font-serif text-3xl font-semibold text-stone-900">
        Book a Piano Service
      </h2>

      <p className="mt-4 leading-7 text-stone-600">
        Complete the form below and we'll contact you within
        24 hours to confirm your appointment.
      </p>

      {error && (
        <div className="mt-8 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-10"
      >
        <BookingFields
          form={form}
          onChange={handleChange}
        />

        <div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#C19A2B] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Request Service"}
          </button>

          <p className="mt-5 text-center text-sm leading-6 text-stone-500">
            We typically respond within 24 hours.
            <br />
            No payment is required to submit your request.
          </p>

        </div>

      </form>

    </section>
  );
}