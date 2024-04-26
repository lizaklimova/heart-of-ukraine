import { axiosInstance, ENDPOINTS } from "../index";

export const getNews = async () => {
  try {
    const { data } = await axiosInstance.get(ENDPOINTS.news.all);
    return data;
  } catch (error) {
    return error;
  }
};
