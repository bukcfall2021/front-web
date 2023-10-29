import axios from "axios";
import apiEndPoints from "../constants/apiEndPoints";

const api = axios.create({
  baseURL: apiEndPoints.BASE_URL,
});

export default api;
