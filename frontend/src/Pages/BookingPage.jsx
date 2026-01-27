import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import ServiceCard from "../components/booking/ServiceCard";
import DateTimePicker from "../components/booking/DateTimePicker";
import PatientForm from "../components/booking/PatientForm";
import BookingSummary from "../components/booking/BookingSummary";
import Footer from "../components/layout/Footer";
import { createUser, createAppointment } from "../api/adminApi";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const [appointment, setAppointment] = useState(null);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const nav = useNavigate();

  const handleConfirmBooking = async () => {
    try {
      const createdUser = await createUser(client);

      const newAppointment = await createAppointment({
        userId: createdUser._id,
        therapistId: selectedService.therapistId,
        serviceId: [selectedService._id],
        startAt: new Date(`${date}T${time}`),
        status: "pending",
      });
      setAppointment(newAppointment);

      nav("/");
    } catch (error) {
      console.log(error);
      alert("Failed to confirm booking.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center bg-[#F4F1EC]">
        <div className="w-full max-w-3xl">
          {step === 1 && (
            <ServiceCard
              selectedService={selectedService}
              setSelectedService={setSelectedService}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <DateTimePicker
              date={date}
              time={time}
              setDate={setDate}
              setTime={setTime}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <PatientForm
              client={client}
              setClient={setClient}
              onNext={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <BookingSummary
              selectedService={selectedService}
              date={date}
              time={time}
              client={client}
              onBack={() => setStep(3)}
              onConfirm={handleConfirmBooking}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
