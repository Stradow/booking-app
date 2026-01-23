import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookingPage from "./Pages/BookingPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AdminPage from "./Pages/admin/AdminPage";
import DashboardView from "./components/admin/views/DashboardView";
import AppointmentsView from "./components/admin/views/AppointmentsView";
import ServicesView from "./components/admin/views/ServicesView";
import ServiceForm from "./components/admin/views/ServiceForm";
import AvailabilityView from "./components/admin/views/AvailabilityView";
import ProfileView from "./components/admin/views/ProfileView";
import SettingsView from "./components/admin/views/SettingsView";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPassword from "./Pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardView />} />
          <Route path="appointments" element={<AppointmentsView />} />
          <Route path="services" element={<ServicesView />} />
          <Route path="services/new" element={<ServiceForm />} />
          <Route path="services/:id" element={<ServiceForm />} />
          <Route path="availability" element={<AvailabilityView />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="settings" element={<SettingsView />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
