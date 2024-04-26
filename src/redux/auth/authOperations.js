import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosInstance, setAuthHeader, clearAuthHeader } from "api";
import axios from "axios";

export const registrationThunk = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(ENDPOINTS.auth.register, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCurrentThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axiosInstance.get(ENDPOINTS.users.current);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(ENDPOINTS.auth.login, body);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verificationThunk = createAsyncThunk(
  "auth/verification",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        ENDPOINTS.auth.verification,
        body
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("http://localhost:8080/logout");
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const forgotPassThunk = createAsyncThunk(
  "users/forgot-password",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(ENDPOINTS.users.forgot, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const recoveryPassThunk = createAsyncThunk(
  "users/reset-password",
  async ({ token, ...body }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        `${ENDPOINTS.users.reset}?token=${token}`,
        body
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const changeProfileThunk = createAsyncThunk(
  "users/changeProfileThunk",
  async ({ formData }, { rejectWithValue }) => {
    try {
      await axiosInstance.put(ENDPOINTS.users.changeProfile, formData);
      return formData;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
