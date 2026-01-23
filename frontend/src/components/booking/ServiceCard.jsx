import { useEffect, useState } from "react";
import { getServices } from "../../api/adminApi";

function ServiceCard({ selectedService, setSelectedService }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load services", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading services...</p>;

  return (
    <div className="border p-6 rounded-lg h-[80vh]">
      {services.map((service) => (
        <label
          key={service._id}
          className="flex justify-between items-center py-2 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="service"
              checked={selectedService?._id === service._id}
              onChange={() => setSelectedService(service)}
            />
            <span>{service.name}</span>
          </div>

          <div className="flex gap-6 text-sm text-gray-600">
            <span>{service.duration} min</span>
            <span>{service.price} €</span>
          </div>
        </label>
      ))}
    </div>
  );
}

export default ServiceCard;
