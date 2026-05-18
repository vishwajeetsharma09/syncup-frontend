import axios from "axios";

const api = axios.create({
  baseURL: "https://syncup-backend-4fxf.onrender.com/",
});

export default api;