import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2000/", // change later
  withCredentials: true, // future auth ready
});

export default api;