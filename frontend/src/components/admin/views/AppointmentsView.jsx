import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AppointmentsView() {
  const [appointments, setAppointment] = useState([]);

  const statusStyles = {
    completed: "bg-[#5F6F73] text-white",
    confirmed: "bg-[#778873] text-white",
    canceled: "bg-[#C97A6A] text-white",
    pending: "bg-[#E2D6A8] text-[#4A4A3A]",
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/db")
      .then(({ data }) => {
        setAppointment(data.appointments);
        console.log(data.appointments);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[#2F3A36] text-3xl font-medium">Appointments</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="w-56 bg-white border border-[#D8DCD6] rounded-lg px-3 py-2 placeholder:text-[#6B6F6C] focus:outline-none text-sm"
          />
          <button className="flex items-center gap-2 text-sm">
            <AdjustmentsHorizontalIcon className="size-5" />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
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
            {appointments.map((appointment) => (
              <tr className="border-t border-[#D8DCD6]" key={appointment.id}>
                <td className="px-4 py-4">{appointment.date}</td>
                <td className="px-4 py-4">{appointment.time}</td>
                <td className="px-4 py-4">{appointment.clientId}</td>
                <td className="px-4 py-4">+31 9999-9999</td>
                <td className="px-4 py-4">{appointment.serviceId}</td>
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
                    <Link>
                      <CheckCircleIcon className="size-6 text-[#778873]" />
                    </Link>
                    <Link>
                      <XCircleIcon className="size-6 text-[#778873]" />
                    </Link>
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
