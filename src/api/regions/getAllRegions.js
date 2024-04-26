import { axiosInstance, ENDPOINTS } from "../index";

export const getAllRegions = async () => {
  try {
    const { data } = await axiosInstance.get(ENDPOINTS.regions.all);
    return data;
  } catch (error) {
    return error;
  }
};
