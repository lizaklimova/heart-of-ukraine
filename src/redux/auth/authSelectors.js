export const selectUserFistName = ({ auth }) => auth.user.firstName;
export const selectUserLastName = ({ auth }) => auth.user.lastName;
export const selectEmail = ({ auth }) => auth.user.email;
export const selectUserAvatar = ({ auth }) =>
  auth.user.userAdditionalDetails.imageId;
export const selectUserRegion = ({ auth }) =>
  auth.user.userAdditionalDetails.region;
export const selectUserOrganization = ({ auth }) =>
  auth.user.userAdditionalDetails.organization;
export const selectUserComment = ({ auth }) =>
  auth.user.userAdditionalDetails.comment;
export const selectUserNumber = ({ auth }) => auth.user.phoneNumber;
export const selectUserEmail = ({ auth }) => auth.userEmail;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsVerified = ({ auth }) => auth.isVerified;
export const selectIsLoading = ({ auth }) => auth.isLoading;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectIsError = ({ auth }) => auth.error;
