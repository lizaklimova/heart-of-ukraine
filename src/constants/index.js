export const REGISTER_INIT_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "+380",
  password: "",
  repeatPassword: "",
  agreement: false,
};

export const LOGIN_INIT_VALUES = {
  email: "",
  password: "",
};

export const CHANGE_PWD_INIT_VALUES = {
  oldPassword: "",
  newPassword: "",
  repeatNewPassword: "",
};

export const AVAILABLE_CATEGORIES_LENGTH = 100;
export const MAX_MOB_LENGTH_FOR_FILTERS = 4;
export const MAX_TAB_LENGTH_FOR_FILTERS = 7;

export const REQUEST_TYPE = "REQUEST";
export const OFFER_TYPE = "OFFER";

export const MAX_IMAGES_QTY = 4;
export const MAX_FILE_SIZE_MB = 1;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
export const MAX_TOTAL_SIZE_BYTES = MAX_IMAGES_QTY * MAX_FILE_SIZE_BYTES;

export const statusesColors = Object.freeze({
  inProgress: "#EBB939",
  done: "#339523",
  active: "#0038FF",
  inProcess: "#4585FF",
  canceled: "#FE4747",
});

export const STATUSES_VALUES = Object.freeze({
  active: "ADVERTISEMENT_ACTIVE",
  inProcess: "IN_PROCESSING",
  inProgress: "IN_PROGRESS",
  done: "REQUEST_COMPLETED",
  canceled: "REQUEST_CANCELED",
});
