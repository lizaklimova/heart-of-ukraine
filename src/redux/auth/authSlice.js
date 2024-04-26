import { createSlice } from "@reduxjs/toolkit";
import {
  registrationThunk,
  loginThunk,
  getCurrentThunk,
  logoutThunk,
  changeProfileThunk,
} from "./authOperations";
import { handlePending, handleRejected } from "../helpers.js";

const initialState = {
  token: "",
  user: {
    firstName: null,
    lastName: null,
    email: null,
    enabled: false,
    userAdditionalDetails: {
      region: null,
      organization: null,
      comment: null,
      imageId: null,
    },
  },
  userEmail: null,
  isLoggedIn: false,
  isVerified: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserEmail: (state, { payload }) => {
      state.userEmail = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationThunk.fulfilled, (state) => {
        state.isVerified = false;
        state.isLoggedIn = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(registrationThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getCurrentThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.user = payload.userAdditionalDetails
          ? payload
          : {
              ...payload,
              userAdditionalDetails: {
                ...initialState.user.userAdditionalDetails,
              },
            };
        state.isVerified = payload.enabled;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.userAdditionalDetails
          ? payload
          : {
              ...payload,
              userAdditionalDetails: {
                ...initialState.user.userAdditionalDetails,
              },
            };
        state.token = payload.token;
        state.error = null;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isVerified = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.token = "";
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(changeProfileThunk.fulfilled, (state, { payload }) => {
        const {
          firstName,
          lastName,
          phoneNumber,
          userAdditionalDetails = {},
        } = payload;
        const { region, organization, comment } = userAdditionalDetails;

        state.user = {
          ...state.user,
          firstName,
          lastName,
          phoneNumber,
          userAdditionalDetails: {
            ...state.user.userAdditionalDetails,
            region,
            organization,
            comment,
          },
        };
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
export const { setToken } = authSlice.actions;
