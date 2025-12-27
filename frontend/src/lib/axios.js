import axios from "axios"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, //browser will send the cookies to server automatically on every single request
});

export default axiosInstance; //Whenever we need to call our api we will use this instance

//Ex: await axiosInstance.get("/sessions/123")