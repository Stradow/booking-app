import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import {
  getAppointments,
  getServices,
  updateAppointmentStatus,
  deleteAppointment,
} from "../../../api/adminApi";

function AppointmentsView() {
  const [appointments, setAppointment] = useState([]);
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilter, setShowFilter] = useState(false);

  const statusStyles = {
    completed: "bg-[#5F6F73] text-white",
    confirmed: "bg-[#778873] text-white",
    canceled: "bg-[#C97A6A] text-white",
    pending: "bg-[#E2D6A8] text-[#4A4A3A]",
  };

  useEffect(() => {
    Promise.all([getAppointments(), getServices()])
      .then(([appointmentsData, servicesData]) => {
        setAppointment(appointmentsData);
        setServices(servicesData);
      })
      .catch((error) => console.log("No data found", error));
  }, []);

  const getServiceName = (serviceId) => {
    const service = services.find((service) => service._id === serviceId);
    return service ? service.name : "-";
  };

  // FILTER AND SEARCH
  const normalizedSearch = searchTerm.toLowerCase();

  const filteredAppointments = appointments.filter((appointment) => {
    const userName = appointment.user
      ? `${appointment.user.firstName} ${appointment.user.lastName}`.toLowerCase()
      : "";

    const serviceName =
      getServiceName(appointment.serviceId).toLowerCase() || "";

    const matchesSearch =
      userName.includes(normalizedSearch) ||
      serviceName.includes(normalizedSearch);

    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;

    return matchesSearch && statusFilter && matchesStatus;
  });

  async function handleAcceptAppointment(id) {
    try {
      const updatedAppointment = await updateAppointmentStatus(id, {
        status: "confirmed",
      });

      const updatedAppointments = appointments.map((appointment) =>
        appointment._id === id ? updatedAppointment : appointment,
      );
      setAppointment(updatedAppointments);
    } catch (error) {
      console.log("Error updating appointment", error);
    }
  }

  async function handleCancelAppointment(id) {
    try {
      await deleteAppointment(id);

      const filteredAppointments = appointments.filter(
        (appointment) => appointment._id !== id,
      );
      setAppointment(filteredAppointments);
    } catch (error) {
      console.log("Error canceling the appointment", error);
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[#2F3A36] text-3xl font-medium">Appointments</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by user or service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-56 bg-white border border-[#D8DCD6] rounded-lg px-3 py-2 placeholder:text-[#6B6F6C] focus:outline-none text-sm"
          />
          <div className="relative">
            <button
              onClick={() => setShowFilter((prev) => !prev)}
              className="flex items-center gap-2 text-sm"
            >
              <AdjustmentsHorizontalIcon className="size-5" />
              Filter
            </button>
            {showFilter && (
              <div className="absolute top-full mt-4 w-40 rounded-lg border border-[#D8DCD6] bg-white shadow-sm z-50">
                {["all", "confirmed", "pending", "completed", "canceled"].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setShowFilter(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F4F5F3]"
                    >
                      <span className="text-xs text-[#6B6F6C]">
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    </button>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <table className="w-full text-sm text-[#2F3A36]">
          <thead className="text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Time</th>
              <th className="px-4 py-3 font-medium">Pacient</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Service</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr className="border-t border-[#D8DCD6]" key={appointment._id}>
                <td className="px-4 py-4">{appointment.date}</td>
                <td className="px-4 py-4">{appointment.time}</td>
                <td className="px-4 py-4">
                  {appointment.user
                    ? `${appointment.user.firstName} ${appointment.user.lastName}`
                    : "Unknown"}
                </td>
                <td className="px-4 py-4">{appointment.user?.phone || "-"}</td>
                <td className="px-4 py-4">
                  {getServiceName(appointment.serviceId)}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
                      ${statusStyles[appointment.status?.toLowerCase()]}`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        handleAcceptAppointment(appointment._id);
                      }}
                    >
                      <CheckCircleIcon className="size-6 text-[#778873]" />
                    </button>
                    <button
                      onClick={() => {
                        handleCancelAppointment(appointment._id);
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
export default AppointmentsView;
