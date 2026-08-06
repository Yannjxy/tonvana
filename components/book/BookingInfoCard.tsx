import BookingHero from "./BookingHero";
import BookingSidebar from "./BookingSidebar";

export default function BookingInfoCard() {
  return (
    <div className="space-y-8 self-start lg:sticky lg:top-8">
      <BookingHero />
      <BookingSidebar />
    </div>
  );
}