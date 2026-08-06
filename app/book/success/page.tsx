import BookingSuccess from "@/components/book/BookingSuccess";

export const metadata = {
  title: "Booking Request Received | Tonvana",
  description:
    "Thank you for contacting Tonvana. Your booking request has been received.",
};

export default function SuccessPage() {
  return <BookingSuccess />;
}