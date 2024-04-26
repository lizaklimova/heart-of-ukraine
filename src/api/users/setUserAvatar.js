import { ENDPOINTS, axiosInstance } from "api";

export const changeAvatar = async (avatar) => {
  const formData = new FormData();
  formData.append("image", avatar);

  try {
    const { data } = await axiosInstance.patch(
      ENDPOINTS.users.setAvatar,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export default changeAvatar;
