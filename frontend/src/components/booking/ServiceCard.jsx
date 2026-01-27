import { useEffect, useState } from "react";
import { getServices, getTherapists } from "../../api/adminApi";

function ServiceCard({
  selectedService,
  setSelectedService,
  selectedTherapist,
  setSelectedTherapist,
  onNext,
}) {
  const [services, setServices] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getServices(), getTherapists()])
      .then(([servicesData, therapistsData]) => {
        // console.log("All services:", servicesData);
        // console.log("All therapists:", therapistsData);
        setServices(servicesData);
        setTherapists(therapistsData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  // Filter services based on selected therapist
  const filteredServices = selectedTherapist
    ? services.filter((service) =>
        selectedTherapist.services.includes(service._id),
      )
    : [];

  const handleTherapistChange = (e) => {
    const therapistId = e.target.value;
    const therapist = therapists.find((t) => t._id === therapistId);
    setSelectedTherapist(therapist);
    setSelectedService(null);
  };

  if (loading) return <p className="text-center text-xl p-10">Loading…</p>;

  return (
    <div className="bg-[#FAF8F3] rounded-xl p-10 w-full">
      <h2 className="text-3xl font-semibold mb-1">Booking an Appointment</h2>
      <p className="text-xl text-gray-600 mb-8">Choose Therapist & Service</p>

      {/* Therapist Selection Dropdown */}
      <div className="mb-8">
        <label className="block text-xl font-medium mb-3">
          Select Therapist
        </label>
        <select
          value={selectedTherapist?._id || ""}
          onChange={handleTherapistChange}
          className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#778873]"
        >
          <option value="">-- Choose a therapist --</option>
          {therapists.map((therapist) => (
            <option key={therapist._id} value={therapist._id}>
              {therapist.firstName} {therapist.lastName}
              {therapist.speciality && ` - ${therapist.speciality}`}
            </option>
          ))}
        </select>
      </div>

      {/* Services List */}
      {selectedTherapist && (
        <>
          <h3 className="text-xl font-medium mb-4">Available Services</h3>
          {filteredServices.length > 0 ? (
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <label
                  key={service._id}
                  className="flex items-center justify-between cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="service"
                      checked={selectedService?._id === service._id}
                      onChange={() => setSelectedService(service)}
                      className="w-5 h-5 accent-[#778873]"
                    />
                    <span className="text-xl">{service.name}</span>
                  </div>

                  <div className="flex gap-10 text-xl">
                    <span className="w-18 text-gray-600">
                      {service.duration}min
                    </span>
                    <span className="w-13 text-right font-medium">
                      {service.price} €
                    </span>
                  </div>
                </label>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              This therapist has no services available.
            </p>
          )}
        </>
      )}

      {/* Next Button */}
      <div className="flex justify-end mt-10">
        <button
          disabled={!selectedService || !selectedTherapist}
          onClick={onNext}
          className="bg-[#778873] text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#627360] transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
