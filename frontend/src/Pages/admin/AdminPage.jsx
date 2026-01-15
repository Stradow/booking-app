import AdminSidebar from "../../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <div>
      <AdminSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default AdminPage;
