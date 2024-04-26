import { axiosInstance } from "api";

export const setAuthHeader = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common.Authorization = "";
};
