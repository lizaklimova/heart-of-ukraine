import { createSlice } from "@reduxjs/toolkit";
import {
  getAllNotificationsThunk,
  getAllUnreadNotificationsThunk,
} from "./notificationOperations";

const initialState = {
  notifications: [],
  unreadNotifications: [],
  isLoading: false,
  error: null,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      getAllNotificationsThunk.fulfilled,
      (state, { payload }) => {
        state.notifications = payload.content;
        state.error = null;
        state.isLoading = false;
      }
    );
    builder.addCase(
      getAllUnreadNotificationsThunk.fulfilled,
      (state, { payload }) => {
        state.unreadNotifications = payload.content;
        state.error = null;
        state.isLoading = false;
      }
    );
  },
});

export const notificationsReducer = notificationsSlice.reducer;
