import AdminSidebar from "../../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function AdminPage() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-[#F4F1EC]">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
export default AdminPage;
