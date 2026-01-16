// src/api/adminApi.js
import axios from "axios";

const API_URL = "http://localhost:4000";

/* THERAPISTS */

export const getTherapists = async () => {
  const { data } = await axios.get(`${API_URL}/therapists`);
  return data;
};

export const getTherapistById = async (id) => {
  const { data } = await axios.get(`${API_URL}/therapists/${id}`);
  return data;
};

export const createTherapist = async (therapist) => {
  const { data } = await axios.post(`${API_URL}/therapists`, therapist);
  return data;
};

export const updateTherapist = async (id, updates) => {
  const { data } = await axios.patch(`${API_URL}/therapists/${id}`, updates);
  return data;
};

export const deleteTherapist = async (id) => {
  await axios.delete(`${API_URL}/therapists/${id}`);
};

/* SERVICES*/

export const getServices = async () => {
  const { data } = await axios.get(`${API_URL}/services`);
  return data;
};

export const getServiceById = async (id) => {
  const { data } = await axios.get(`${API_URL}/services/${id}`);
  return data;
};

export const createService = async (service) => {
  const { data } = await axios.post(`${API_URL}/services`, service);
  return data;
};

export const updateService = async (id, updates) => {
  const { data } = await axios.patch(`${API_URL}/services/${id}`, updates);
  return data;
};

export const deleteService = async (id) => {
  await axios.delete(`${API_URL}/services/${id}`);
};

/* APPOINTMENTS */

export const getAppointments = async () => {
  const { data } = await axios.get(`${API_URL}/appointments`);
  return data;
};

export const getAppointmentById = async (id) => {
  const { data } = await axios.get(`${API_URL}/appointments/${id}`);
  return data;
};

export const createAppointment = async (appointment) => {
  const { data } = await axios.post(`${API_URL}/appointments`, appointment);
  return data;
};

export const updateAppointment = async (id, updates) => {
  const { data } = await axios.patch(`${API_URL}/appointments/${id}`, updates);
  return data;
};

export const updateAppointmentStatus = async (id, status) => {
  const { data } = await axios.patch(`${API_URL}/appointments/${id}`, {
    status,
  });
  return data;
};

export const deleteAppointment = async (id) => {
  await axios.delete(`${API_URL}/appointments/${id}`);
};

/* DASHBOARD / COMBINED DATA */

export const getAdminData = async () => {
  const { data } = await axios.get(`${API_URL}/db`);
  return data;
};
