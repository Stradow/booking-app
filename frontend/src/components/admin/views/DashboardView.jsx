import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { getAdminData } from "../../../api/adminApi";
import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function DashboardView() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const data = await getAdminData();
        setDashboardData(data);
      } catch (error) {
        console.log("Dashboard error", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-[#2F3A36] text-3xl font-medium">
        Welcome back, {currentUser?.firstName}!
      </h2>

      <section>
        <h3 className="text-[#2F3A36] text-xl font-medium mb-2">Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-[#E4EAE7] rounded-xl p-6 shadow-sm">
            <h3 className="text-sm text-[#6B6F6C] mb-2">Number of Patients</h3>
            <p className="text-3xl font-semibold text-[#2F3A36]">32</p>
            <h3 className="text-sm text-[#6B6F6C] mt-2">Next registered</h3>
          </div>

          <div className="bg-white border border-[#E4EAE7] rounded-xl p-6 shadow-sm">
            <h3 className="text-sm text-[#6B6F6C] mb-2">Next Appointment</h3>
            <p className="text-3xl font-semibold text-[#2F3A36]">15/03</p>
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
              <p className="text-2xl font-semibold text-[#2F3A36]">10</p>
              <p className="text-sm text-[#6B6F6C]">Appointments</p>
            </div>
          </div>

          <div className="h-full bg-white border border-[#E4EAE7] rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="bg-[#778873] p-3 rounded-lg w-fit">
              <UsersIcon className="size-5 text-white" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#2F3A36]">5</p>
              <p className="text-sm text-[#6B6F6C]">New Patients</p>
            </div>
          </div>

          <div className="h-full bg-white border border-[#E4EAE7] rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="bg-[#778873] p-3 rounded-lg w-fit">
              <ClockIcon className="size-5 text-white" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#2F3A36]">25h</p>
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
          <div className="bg-white border border-[#E4EAE7] rounded-xl p-5 shadow-sm flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="bg-[#778873] p-3 rounded-lg">
                <UserIcon className="size-5 text-white" />
              </div>

              <div>
                <h3 className="text-md font-medium text-[#2F3A36]">John Doe</h3>
                <p className="text-sm text-[#6B6F6C] mt-1">
                  Mon, 15/03 · 11:00 AM · Deep Tissue Massage
                </p>
              </div>
            </div>

            <span className="inline-flex items-center rounded-full bg-[#778873] px-3 py-1 text-xs font-medium text-white">
              Confirmed
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DashboardView;
