import { axiosInstance, ENDPOINTS } from "../index";

export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get(ENDPOINTS.categories.all);
    return data;
  } catch (error) {
    return error;
  }
};
