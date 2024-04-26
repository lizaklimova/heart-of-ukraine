import ENDPOINTS from "./endpoints";
import axiosInstance from "./axiosInstance";
import { setAuthHeader, clearAuthHeader } from "./authHelpers";
import { getAllCategories } from "./categories/getAllCategories";
import {
  getAllRequests,
  getFilteredRequests,
  approveHelpRequest,
  rejectHelpRequest,
  cancelHelpRequest,
  completeHelpRequest,
} from "./requests";
import { getAllRegions } from "./regions/getAllRegions";
import { getImages } from "./images/getImages";
import { getAllStatuses } from "./statuses/getAllStatuses";
import changeAvatar from "./users/setUserAvatar";
import changePassword from "./users/changePassword";

export {
  ENDPOINTS,
  axiosInstance,
  approveHelpRequest,
  completeHelpRequest,
  rejectHelpRequest,
  cancelHelpRequest,
  setAuthHeader,
  clearAuthHeader,
  getAllCategories,
  getAllRegions,
  getAllRequests,
  getFilteredRequests,
  getImages,
  getAllStatuses,
  changeAvatar,
  changePassword,
};
