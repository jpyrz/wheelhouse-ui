import axios from "axios";
import { getIdToken } from "../firebaseUtils";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
});

apiClient.interceptors.request.use(async (config) => {
  const token = await getIdToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
