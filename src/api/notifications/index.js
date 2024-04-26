import { axiosInstance, ENDPOINTS } from "../index";

export const setNotificationAsRead = async (id) => {
  try {
    const { data } = await axiosInstance.patch(
      ENDPOINTS.notifications.setAsRead(id)
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteNotification = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      ENDPOINTS.notifications.setAsRead(id)
    );
    return data;
  } catch (error) {
    return error;
  }
};
