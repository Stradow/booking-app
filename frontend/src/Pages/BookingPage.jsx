import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ServiceCard from "../components/booking/ServiceCard";
import DateTimePicker from "../components/booking/DateTimePicker";
import PatientForm from "../components/booking/PatientForm";
import BookingSummary from "../components/booking/BookingSummary";
import Footer from "../components/layout/Footer";
import { createUser, createAppointment } from "../api/adminApi";

function BookingPage() {
  const [appointment, setAppointment] = useState(null);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);

    try {
      // Create a basic user record with client info
      const userData = {
        firstName: client.firstName,
        lastName: client.lastName,
        phone: client.phone,
      };

      // Only add email if it exists and is not empty
      if (client.email && client.email.trim() !== "") {
        userData.email = client.email;
      }

      const createdUser = await createUser(userData);

      // Combine date and time into startAt
      const [hours, minutes] = time.split(":");
      const startAt = new Date(date);
      startAt.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      // Calculate endAt based on service duration
      const endAt = new Date(startAt);
      endAt.setMinutes(endAt.getMinutes() + selectedService.duration);

      // Prepare appointment data with the created user's ID
      const appointmentData = {
        userId: createdUser._id,
        therapistId: selectedTherapist._id,
        serviceId: [selectedService._id],
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
        status: "pending",
        priceSnapShot: selectedService.price,
        durationSnapShot: selectedService.duration,
      };

      const newAppointment = await createAppointment(appointmentData);
      setAppointment(newAppointment);

      alert(
        `Booking confirmed!\n\nThank you ${client.firstName}!\nWe'll contact you at ${client.phone}`,
      );

      // Reset form
      setSelectedService(null);
      setSelectedTherapist(null);
      setDate(null);
      setTime(null);
      setClient({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
      setStep(1);
      navigate("/");
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert(
        "Sorry, there was an error creating your appointment. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
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
              selectedTherapist={selectedTherapist}
              setSelectedTherapist={setSelectedTherapist}
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
              selectedTherapist={selectedTherapist}
              date={date}
              time={time}
              client={client}
              onBack={() => setStep(3)}
              onConfirm={handleConfirmBooking}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
