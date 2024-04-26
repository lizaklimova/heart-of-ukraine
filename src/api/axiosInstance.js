import axios from "axios";

// export const baseURL = "http://localhost:8080/api/v1/";
// export const baseURL = "https://www.heart-of-ukraine.com:8080/";
// export const baseURL = "http://16.171.224.180:8080/api/v1/";
export const baseURL = "https://www.heart-of-ukraine.com:8080/api/v1/";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
