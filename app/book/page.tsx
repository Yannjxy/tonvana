import BookingHeader from "@/components/book/BookingHeader";
import BookingForm from "@/components/book/BookingForm";
import BookingInfoCard from "@/components/book/BookingInfoCard";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

        {/* Page Header */}
        <BookingHeader />

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.45fr_0.9fr]">

          {/* Booking Form */}
          <section>
            <BookingForm />
          </section>

          {/* Brand Information */}
          <aside>
            <BookingInfoCard />
          </aside>

        </div>

      </div>
    </main>
  );
}