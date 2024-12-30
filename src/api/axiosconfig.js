import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: baseURL,
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
    console.log(data);
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch trips");
  }
};
export const fetchPlans = async (id) => {
  try {
    const response = await api.get(`/plans`);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch plans");
  }
};
export const fetchServices = async (id) => {
  try {
    const response = await api.get(`/services`);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch services");
  }
};
export const fetchTes = async (id) => {
  try {
    const response = await api.get(`/testimonials`);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    handleError(error, "Failed to fetch testimonials");
  }
};
// asd