# 🧘 Kalmio — Online Massage Booking Platform

Kalmio is a full-stack web application that allows massage therapists and physiotherapists to accept online bookings through a public booking page, while managing services, availability, and appointments through a private admin dashboard.

The platform is designed to be **simple for clients** and **powerful for therapists**.

---

## 🚀 Features

### 👥 Clients (No Account Required)

- View available services and prices
- Select date and time from an availability calendar
- Enter contact details (phone required, email optional)
- Review booking summary before confirmation
- Confirm appointment
- No login or registration required

### 🧭 Client Booking Flow

1. Choose service
2. Choose date & time
3. Enter personal information
4. Review booking summary
5. Confirm booking

All steps are handled on a single page with a guided multi-step flow.

---

### 🧑‍⚕️ Therapists (Admin Dashboard)

- Secure signup and login
- Dashboard overview with statistics
- View and manage appointments
- Create, edit, and delete services
- Set availability (working days, hours, breaks)
- Manage public booking page details
- Availability changes instantly affect client booking

## 🖥 Admin Flow (Therapist Journey)

1. Therapist signs up or logs in
2. Redirected to admin dashboard
3. Creates one or more services
4. Sets availability
5. Clients can now book appointments
6. Therapist views and manages bookings from the dashboard

---

## 🛠 Tech Stack

### Frontend

- **React** (Vite)
- **React Router**
- **Tailwind CSS**
- **Axios**

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT Authentication** (therapists only)

---
