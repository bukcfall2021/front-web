import axios from "axios";
import apiEndPoints from "../constants/apiEndPoints";

const apiCaller = axios.create({
  baseURL: apiEndPoints.BASE_URL,
});

export default apiCaller;
