import ServiceCard from "./ServiceCard";
import DateTimePicker from "./DateTimePicker";
import PatientForm from "./PatientForm";
import BookingSummary from "./BookingSummary";

function BookingFlow() {
  return (
    <>
      <ServiceCard />
      <DateTimePicker />
      <PatientForm />
      <BookingSummary />
    </>
  );
}
export default BookingFlow;
