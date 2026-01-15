import { NavLink } from "react-router-dom";
import {
  ClipboardIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

function AdminSidebar() {
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
          className="group flex items-center gap-3 px-4 py-2"
        >
          <ClipboardIcon className="size-5 text-[#778873] group-[aria-current=page]:text-[#D6B1A3]" />
          <span className="text-sm text-[#2F3A36] group-[aria-current=page]:text-[#6B6F6C]">
            Dashboard
          </span>
        </NavLink>

        <NavLink
          to="/admin/appointments"
          className="group flex items-center gap-3 px-4 py-2"
        >
          <CalendarIcon className="size-5 text-[#778873] group-[aria-current=page]:text-[#D6B1A3]" />
          <span className="text-sm text-[#2F3A36] group-[aria-current=page]:text-[#6B6F6C]">
            Appointments
          </span>
        </NavLink>

        <NavLink
          to="/admin/services"
          className="group flex items-center gap-3 px-4 py-2"
        >
          <WrenchScrewdriverIcon className="size-5 text-[#778873] group-[aria-current=page]:text-[#D6B1A3]" />
          <span className="text-sm text-[#2F3A36] group-[aria-current=page]:text-[#6B6F6C]">
            Services
          </span>
        </NavLink>

        <NavLink
          to="/admin/availability"
          className="group flex items-center gap-3 px-4 py-2"
        >
          <CalendarDaysIcon className="size-5 text-[#778873] group-[aria-current=page]:text-[#D6B1A3]" />
          <span className="text-sm text-[#2F3A36] group-[aria-current=page]:text-[#6B6F6C]">
            Availability
          </span>
        </NavLink>

        <NavLink
          to="/admin/profile"
          className="group flex items-center gap-3 px-4 py-2"
        >
          <UserCircleIcon className="size-5 text-[#778873] group-[aria-current=page]:text-[#D6B1A3]" />
          <span className="text-sm text-[#2F3A36] group-[aria-current=page]:text-[#6B6F6C]">
            Profile
          </span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className="group flex items-center gap-3 px-4 py-2"
        >
          <Cog6ToothIcon className="size-5 text-[#778873] group-[aria-current=page]:text-[#D6B1A3]" />
          <span className="text-sm text-[#2F3A36] group-[aria-current=page]:text-[#6B6F6C]">
            Settings
          </span>
        </NavLink>
      </nav>

      <div className="px-2 pb-6">
        <NavLink
          to="/admin/logout"
          className="group flex items-center gap-3 px-4 py-2"
        >
          <ArrowLeftEndOnRectangleIcon className="size-5 text-[#778873] group-[aria-current=page]:text-[#D6B1A3]" />
          <span className="text-sm text-[#2F3A36] group-[aria-current=page]:text-[#6B6F6C]">
            Logout
          </span>
        </NavLink>
      </div>
    </aside>
  );
}
export default AdminSidebar;
