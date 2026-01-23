// src/api/adminApi.js
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

/* AUTH */
export const autorizationToken = async (token) => {
  const { data } = await axios.get(`${API_URL}/auth/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const login = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
  return data;
};

export const signup = async (credentials) => {
  const { data } = await axios.post(`${API_URL}/auth/signup`, credentials);
  return data;
};

export const requestPasswordReset = async (payload) => {
  const { data } = await axios.post(`${API_URL}/auth/forgot-password`, payload);
  return data;
};

/* THERAPISTS */

export const getTherapists = async () => {
  const { data } = await axios.get(`${API_URL}/therapist/all-therapists`);
  return data;
};

export const getTherapistById = async (id) => {
  const { data } = await axios.get(`${API_URL}/therapist/one-therapist/${id}`);
  return data;
};

export const createTherapist = async (therapist) => {
  const { data } = await axios.post(
    `${API_URL}/therapist/create-therapist`,
    therapist,
  );
  return data;
};

export const updateTherapist = async (id, updates) => {
  const { data } = await axios.patch(
    `${API_URL}/therapist/update-therapist/${id}`,
    updates,
  );
  return data;
};

export const deleteTherapist = async (id) => {
  await axios.delete(`${API_URL}/therapist/delete-therapist/${id}`);
};

/* SERVICES*/

export const getServices = async () => {
  const { data } = await axios.get(`${API_URL}/service/all-services`);
  return data;
};

export const getServiceById = async (id) => {
  const { data } = await axios.get(`${API_URL}/service/one-service/${id}`);
  return data;
};

export const createService = async (service) => {
  const { data } = await axios.post(
    `${API_URL}/service/create-service/`,
    service,
  );
  return data;
};

export const updateService = async (id, updates) => {
  const { data } = await axios.patch(
    `${API_URL}/service/update-service/${id}`,
    updates,
  );
  return data;
};

export const deleteService = async (id) => {
  await axios.delete(`${API_URL}/service/delete-service/${id}`);
};

/* APPOINTMENTS */

export const getAppointments = async () => {
  const { data } = await axios.get(`${API_URL}/appointment/all-appointments`);
  return data;
};

export const getAppointmentById = async (id) => {
  const { data } = await axios.get(
    `${API_URL}/appointment/one-appointment/${id}`,
  );
  return data;
};

export const createAppointment = async (appointment) => {
  const { data } = await axios.post(
    `${API_URL}/appointment/create-appointment`,
    appointment,
  );
  return data;
};

export const updateAppointment = async (id, updates) => {
  const { data } = await axios.patch(
    `${API_URL}/appointment/update-appointment/${id}`,
    updates,
  );
  return data;
};

export const updateAppointmentStatus = async (id, status) => {
  const { data } = await axios.patch(
    `${API_URL}/appointment/update-appointment/${id}`,
    {
      status,
    },
  );
  return data;
};

export const deleteAppointment = async (id) => {
  await axios.delete(`${API_URL}/appointment/delete-appointment/${id}`);
};

/* USER */

export const getUsers = async () => {
  const { data } = await axios.get(`${API_URL}/user/all-users`);
  return data;
};

export const getUserById = async (id) => {
  const { data } = await axios.get(`${API_URL}/user/one-user/${id}`);
  return data;
};

export const createUser = async (user) => {
  const { data } = await axios.post(`${API_URL}/user/create-user`, user);
  return data;
};

export const updateUser = async (id, updates) => {
  const { data } = await axios.patch(
    `${API_URL}/user/update-user/${id}`,
    updates,
  );
  return data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/user/delete-user/${id}`);
};

/* DASHBOARD / COMBINED DATA */

export const getAdminData = async () => {
  const { data } = await axios.get(`${API_URL}`);
  return data;
};
