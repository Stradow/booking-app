import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import {
  ClipboardIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  PlusIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

const baseLink =
  "group flex items-center gap-3 px-4 py-2 rounded-md transition-colors";

const activeLink = "bg-[#E4EAE7]";
const hoverLink = "hover:bg-[#F1F4F2]";

function AdminSidebar() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-[#E4EAE7] flex flex-col">
      <div className="px-6 py-6">
        <h3 className="text-sm font-semibold text-[#2F3A36] tracking-wide">
          Navigation
        </h3>
      </div>

      <nav className="flex flex-col gap-1 px-2 flex-1">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `${baseLink} ${hoverLink} ${isActive ? activeLink : ""}`
          }
        >
          <ClipboardIcon className="size-5 text-[#778873]" />
          <span className="text-sm text-[#2F3A36]">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/appointments"
          className={({ isActive }) =>
            `${baseLink} ${hoverLink} ${isActive ? activeLink : ""}`
          }
        >
          <CalendarIcon className="size-5 text-[#778873]" />
          <span className="text-sm text-[#2F3A36]">Appointments</span>
        </NavLink>

        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            `${baseLink} ${hoverLink} ${isActive ? activeLink : ""}`
          }
        >
          <WrenchScrewdriverIcon className="size-5 text-[#778873]" />
          <span className="text-sm text-[#2F3A36]">Services</span>
        </NavLink>

        <NavLink
          to="/admin/services/new"
          className={({ isActive }) =>
            `ml-9 flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors
             ${hoverLink}
             ${isActive ? "bg-[#DDE4E0]" : ""}`
          }
        >
          <PlusIcon className="size-4 text-[#778873]" />
          <span className="text-[#2F3A36]">Add Service</span>
        </NavLink>

        {/* <NavLink
          to="/admin/availability"
          className={({ isActive }) =>
            `${baseLink} ${hoverLink} ${isActive ? activeLink : ""}`
          }
        >
          <CalendarDaysIcon className="size-5 text-[#778873]" />
          <span className="text-sm text-[#2F3A36]">Availability</span>
        </NavLink> */}

        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            `${baseLink} ${hoverLink} ${isActive ? activeLink : ""}`
          }
        >
          <UserCircleIcon className="size-5 text-[#778873]" />
          <span className="text-sm text-[#2F3A36]">Profile</span>
        </NavLink>

        {/* <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `${baseLink} ${hoverLink} ${isActive ? activeLink : ""}`
          }
        >
          <Cog6ToothIcon className="size-5 text-[#778873]" />
          <span className="text-sm text-[#2F3A36]">Settings</span>
        </NavLink> */}
      </nav>

      <div className="px-2 pb-6">
        <button
          onClick={handleLogout}
          className={`${baseLink} ${hoverLink} w-full`}
        >
          <ArrowLeftEndOnRectangleIcon className="size-5 text-[#778873]" />
          <span className="text-sm text-[#2F3A36]">Logout</span>
        </button>
      </div>
    </aside>
  );
}
export default AdminSidebar;
