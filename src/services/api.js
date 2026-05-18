import axios from "axios";

const api = axios.create({
  baseURL: "https://syncup-backend-ten.vercel.app",
});

export default api;