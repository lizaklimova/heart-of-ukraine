import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosInstance } from "api";

export const getAllNotificationsThunk = createAsyncThunk(
  "notifications/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.notifications.getAll);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllUnreadNotificationsThunk = createAsyncThunk(
  "notifications/getAllUnread",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        ENDPOINTS.notifications.getAllUnread
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
