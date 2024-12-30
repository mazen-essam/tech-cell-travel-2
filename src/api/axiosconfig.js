import axios from "axios";
// const baseURL = import.meta.env.VITE_API_URL;
const baseURl ="https://travel.digital-vision-solutions.com/public/api"
const api = axios.create({
  baseURL: baseURl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export const handleError = (error, defaultMessage) => {
  if (error.response) {
    const errorMessage =
      (error.response.data && error.response.data.message) ||
      error.response.statusText ||
      defaultMessage;
    console.error(`${defaultMessage} with server response:`, errorMessage);
    throw new Error(errorMessage);
  } else {
    console.error(`${defaultMessage} with error:`, error.message);
    throw new Error(error.message || defaultMessage);
  }
};
export const fetchTrips = async () => {
  try {
    const response = await api.get("/trips");
    const data = await response.data;
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch trips");
  }
};
export const fetchPlans = async (id) => {
  try {
    const response = await api.get(`/plans`);
    const data = await response.data;
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch plans");
  }
};
export const fetchServices = async (id) => {
  try {
    const response = await api.get(`/services`);
    const data = await response.data;
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch services");
  }
};
export const fetchTes = async (id) => {
  try {
    const response = await api.get(`/testimonials`);
    const data = await response.data;
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch testimonials");
  }
};
export const sendContactForm = async (name, email, msg) => {
  try {
    const response = await api.post("/contact", {
      name,
      email,
      msg,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending contact form:", error);
    throw error;
  }
};