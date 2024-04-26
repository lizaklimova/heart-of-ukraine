import { ENDPOINTS, axiosInstance } from "api";

const changePassword = async (body) => {
  try {
    const { data } = await axiosInstance.put(
      ENDPOINTS.users.changePassword,
      body
    );
    return data;
  } catch (error) {
    return error;
  }
};

export default changePassword;
