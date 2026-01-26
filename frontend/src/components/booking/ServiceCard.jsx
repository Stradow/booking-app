import { useEffect, useState } from "react";
import { getServices } from "../../api/adminApi";

function ServiceCard({ selectedService, setSelectedService, onNext }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;

  return (
    <div className="bg-[#FAF8F3] rounded-xl p-10 w-full">
      <h2 className="text-3xl font-semibold mb-1">Booking an Appointment</h2>
      <p className="text-xl text-gray-600 mb-8">Choose Service</p>

      <div className="space-y-4">
        {services.map((service) => (
          <label
            key={service._id}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="service"
                checked={selectedService?._id === service._id}
                onChange={() => setSelectedService(service)}
                className="accent-[#778873]"
              />
              <span className="text-xl">{service.name}</span>
            </div>

            <div className="flex gap-10 text-xl">
              <span className="w-18 text-gray-600">{service.duration}min</span>
              <span className="w-13 text-right font-medium">
                {service.price} €
              </span>
            </div>
          </label>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <button
          disabled={!selectedService}
          onClick={onNext}
          className="bg-[#778873] text-white px-6 py-2 rounded-lg disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
