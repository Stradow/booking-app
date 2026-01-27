import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import { getServices, deleteService } from "../../../api/adminApi";
import { AuthContext } from "../../../contexts/AuthContext";

function ServicesView() {
  const [services, setServices] = useState([]);
  const { currentTherapist } = useContext(AuthContext);

  useEffect(() => {
    getServices()
      .then((allServices) => {
        // Filter services to show only current therapist's services
        const myServices = allServices.filter(
          (service) => service.therapistId === currentTherapist?._id,
        );
        setServices(myServices);
      })
      .catch((error) => console.log("No services found", error));
  }, [currentTherapist]);

  async function handleDeleteService(serviceId) {
    try {
      await deleteService(serviceId);

      const filteredservices = services.filter(
        (service) => service._id !== serviceId,
      );
      setServices(filteredservices);
    } catch (error) {
      console.log("Error on delete a service", error);
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[#2F3A36] text-3xl font-medium">Services</h2>
        <Link to="/admin/services/new">
          <button className="mt-8 bg-[#778873] hover:opacity-90 text-white font-medium py-3 px-6 rounded-xl transition">
            ADD SERVICE
          </button>
        </Link>
      </div>

      <div>
        <table className="w-full text-sm text-[#2F3A36]">
          <thead className="text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Service</th>
              <th className="px-4 py-3 font-medium">Duration</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr className="border-t border-[#D8DCD6]" key={service._id}>
                <td className="px-4 py-4">{service.name}</td>
                <td className="px-4 py-4">{service.duration}</td>
                <td className="px-4 py-4">{service.price}</td>
                <td className="px-4 py-4">{service.description}</td>
                <td className="px-4 py-4">
                  <div className="flex justify-center gap-3">
                    <Link to={`/admin/services/${service._id}`}>
                      <button>
                        <PencilSquareIcon className="size-6 text-[#778873]" />
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDeleteService(service._id);
                      }}
                    >
                      <XCircleIcon className="size-6 text-[#778873]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ServicesView;
