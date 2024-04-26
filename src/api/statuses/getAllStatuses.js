import { axiosInstance, ENDPOINTS } from "../index";

export const getAllStatuses = async () => {
  try {
    const { data } = await axiosInstance.get(ENDPOINTS.statuses);
    return data;
  } catch (error) {
    return error;
  }
};
