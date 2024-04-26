import { axiosInstance, ENDPOINTS } from "../index";

export const getImages = async (id) => {
  try {
    const { data } = await axiosInstance.get(ENDPOINTS.images(id), {
      responseType: "arraybuffer",
    });

    const base64Data = btoa(
      new Uint8Array(data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    return base64Data;
  } catch (error) {
    return error;
  }
};
