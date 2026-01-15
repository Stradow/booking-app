import AdminSidebar from "../../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F1EC]">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
export default AdminPage;
