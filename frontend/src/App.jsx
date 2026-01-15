import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BookingPage from "./Pages/BookingPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AdminPage from "./Pages/admin/AdminPage";
import DashboardView from "./components/admin/views/DashboardView";
import AppointmentsView from "./components/admin/views/AppointmentsView";
import ServicesView from "./components/admin/views/ServicesView";
import AvailabilityView from "./components/admin/views/AvailabilityView";
import ProfileView from "./components/admin/views/ProfileView";
import SettingsView from "./components/admin/views/SettingsView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />

          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<DashboardView />} />
            <Route path="appointments" element={<AppointmentsView />} />
            <Route path="services" element={<ServicesView />} />
            <Route path="availability" element={<AvailabilityView />} />
            <Route path="profile" element={<ProfileView />} />
            <Route path="settings" element={<SettingsView />} />
          </Route>

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
