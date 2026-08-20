import axios from "axios"
import { getAuth } from "@clerk/clerk-react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, //browser will send the cookies to server automatically on every single request
});

// Request interceptor to add Clerk session token to Authorization header
axiosInstance.interceptors.request.use(async (config) => {
  try {
    const { getToken } = getAuth();
    const token = await getToken();
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error("Error getting Clerk token:", error);
  }
  
  return config;
});

export default axiosInstance; //Whenever we need to call our api we will use this instance

//Ex: await axiosInstance.get("/sessions/123")