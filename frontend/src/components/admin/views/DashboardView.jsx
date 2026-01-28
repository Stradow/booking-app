import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { getAppointments } from "../../../api/adminApi";
import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function DashboardView() {
  const { currentTherapist } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState({
    totalPatients: 0,
    nextAppointment: null,
    weekStatus: { appointments: 0 },
    availability: "N/A",
    upcomingAppointments: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      if (!currentTherapist) return;

      setLoading(true);
      try {
        const allAppointments = await getAppointments();

        // Filter appointments for this therapist
        const therapistAppointments = allAppointments
          .filter(
            (a) => a.therapistId && a.therapistId._id === currentTherapist._id,
          )
          .sort((a, b) => new Date(a.startAt) - new Date(b.startAt));

        // Unique patients
        const uniquePatients = [
          ...new Set(
            therapistAppointments
              .filter((a) => a.userId)
              .map((a) => a.userId._id),
          ),
        ];

        // Upcoming appointments
        const upcomingAppointments = therapistAppointments.map((a) => ({
          ...a,
          patientName: a.userId
            ? `${a.userId.firstName} ${a.userId.lastName}`
            : "Unknown",
          service: a.serviceId?.map((s) => s.name).join(", ") || "Unknown",
          formattedDate: new Date(a.startAt).toLocaleDateString(),
          formattedTime: new Date(a.startAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));

        // Appointments this week
        const now = new Date();
        const weekAppointments = therapistAppointments.filter((a) => {
          const diffDays = (new Date(a.startAt) - now) / (1000 * 60 * 60 * 24);
          return diffDays >= 0 && diffDays < 7;
        }).length;

        setDashboardData({
          totalPatients: uniquePatients.length,
          nextAppointment: upcomingAppointments[0] || null,
          weekStatus: { appointments: weekAppointments },
          availability: "24",
          upcomingAppointments,
        });
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, [currentTherapist]);

  if (loading) return <p>Loading dashboard...</p>;
  //console.log("current therapist", currentTherapist);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-[#2F3A36] text-3xl font-medium">
        Welcome back, {currentTherapist?.firstName}!
      </h2>

      <section>
        <h3 className="text-[#2F3A36] text-xl font-medium mb-2">Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-[#E4EAE7] rounded-xl p-6 shadow-sm">
            <h3 className="text-sm text-[#6B6F6C] mb-2">Number of Patients</h3>
            <p className="text-3xl font-semibold text-[#2F3A36]">
              {dashboardData.totalPatients}
            </p>
            <h3 className="text-sm text-[#6B6F6C] mt-2">Next registered</h3>
          </div>

          <div className="bg-white border border-[#E4EAE7] rounded-xl p-6 shadow-sm">
            <h3 className="text-sm text-[#6B6F6C] mb-2">Next Appointment</h3>
            <p className="text-3xl font-semibold text-[#2F3A36]">
              {dashboardData.nextAppointment?.patientName ?? "-"}
            </p>
            <h3 className="text-sm text-[#6B6F6C] mt-2">Next pacient</h3>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-[#2F3A36] text-xl font-medium mb-2">This Week</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-full bg-white border border-[#E4EAE7] rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="bg-[#778873] p-3 rounded-lg w-fit">
              <CalendarIcon className="size-5 text-white" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#2F3A36]">
                {dashboardData.weekStatus.appointments}
              </p>
              <p className="text-sm text-[#6B6F6C]">Appointments</p>
            </div>
          </div>

          <div className="h-full bg-white border border-[#E4EAE7] rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="bg-[#778873] p-3 rounded-lg w-fit">
              <UsersIcon className="size-5 text-white" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#2F3A36]">
                {dashboardData.totalPatients}
              </p>
              <p className="text-sm text-[#6B6F6C]">New Patients</p>
            </div>
          </div>

          <div className="h-full bg-white border border-[#E4EAE7] rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="bg-[#778873] p-3 rounded-lg w-fit">
              <ClockIcon className="size-5 text-white" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#2F3A36]">
                {dashboardData.availability}h
              </p>
              <p className="text-sm text-[#6B6F6C]">Availability</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-[#2F3A36] text-xl font-medium mb-2">
          Upcoming Appointments
        </h3>
        <div className="space-y-3">
          {dashboardData.upcomingAppointments.length === 0 ? (
            <p className="text-sm text-[#6B6F6C]">No upcoming appointments</p>
          ) : (
            dashboardData.upcomingAppointments?.map((appointment) => (
              <div key={appointment._id} className="space-y-3">
                <div className="bg-white border border-[#E4EAE7] rounded-xl p-5 shadow-sm flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#778873] p-3 rounded-lg">
                      <UserIcon className="size-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-md font-medium text-[#2F3A36]">
                        {appointment.patientName}
                      </h3>
                      <p className="text-sm text-[#6B6F6C] mt-1">
                        {appointment.formattedDate} -{" "}
                        {appointment.formattedTime} - {appointment.service}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-[#778873] px-3 py-1 text-xs font-medium text-white">
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
export default DashboardView;
