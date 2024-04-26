import { axiosInstance, ENDPOINTS } from "../index";

export const getAllRequests = async (page, limit, sort, type) => {
  try {
    const { data } = await axiosInstance.get(ENDPOINTS.requests.type, {
      params: {
        type,
        page,
        size: limit,
        sort: `createdAt,${sort}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getFilteredRequests = async (
  regions,
  categories,
  page,
  limit,
  sort,
  type
) => {
  try {
    const { data } = await axiosInstance.get(ENDPOINTS.requests.search, {
      params: {
        page,
        size: limit,
        categories,
        regions,
        types: type,
        sort: `createdAt,${sort}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const sendNewTask = async (info, images) => {
  try {
    const { data } = await axiosInstance.post(ENDPOINTS.requests.all, info);
    if (images.length) {
      const formData = new FormData();

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await axiosInstance.put(ENDPOINTS.requests.images(data.id), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const respondToHelpRequest = async (body, reqId) => {
  try {
    const res = await axiosInstance.patch(
      ENDPOINTS.requests.response(reqId),
      body
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getRequestsOfAuthor = async (page, limit, _, type) => {
  try {
    const res = await axiosInstance.get(ENDPOINTS.requests.author, {
      params: {
        page,
        size: limit,
        type,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getRequestsOfExecutor = async (page, limit, _, type) => {
  try {
    const res = await axiosInstance.get(ENDPOINTS.requests.executor, {
      params: {
        page,
        size: limit,
        type,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const approveHelpRequest = async ({ reqId, userId, body }) => {
  try {
    const res = await axiosInstance.patch(
      ENDPOINTS.requests.approve(reqId, userId),
      body
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const completeHelpRequest = async ({ reqId }) => {
  try {
    const res = await axiosInstance.patch(ENDPOINTS.requests.complete(reqId));
    return res.data;
  } catch (error) {
    return error;
  }
};

export const rejectHelpRequest = async ({ reqId, userId }) => {
  try {
    const res = await axiosInstance.patch(
      ENDPOINTS.requests.reject(reqId, userId)
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const cancelHelpRequest = async ({ id }) => {
  try {
    const res = await axiosInstance.patch(ENDPOINTS.requests.cancel(id));
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateHelpRequest = async ({ id, body }) => {
  try {
    const res = await axiosInstance.put(ENDPOINTS.requests.update(id), body);
    return res.data;
  } catch (error) {
    return error;
  }
};
