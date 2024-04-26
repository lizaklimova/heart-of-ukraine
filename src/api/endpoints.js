const ENDPOINTS = Object.freeze({
  auth: {
    register: "auth/register",
    login: "auth/login",
    verification: "auth/resend-email-confirmation",
    logout: "/logout",
  },
  users: {
    current: "users/current",
    forgot: "users/forgot-password",
    reset: "users/reset-password",
    changePassword: "users/change-password",
    setAvatar: "user-details/image",
    changeProfile: "users",
  },
  categories: {
    all: "categories",
  },
  regions: {
    all: "regions",
  },
  requests: {
    all: "help-requests",
    type: "help-requests/by-type",
    update: (id) => `help-requests/${id}`,
    search: "help-requests/search",
    author: "help-requests/author/by-type",
    executor: "help-requests/executor/by-type",
    response: (id) => `help-requests/${id}/response`,
    complete: (id) => `help-requests/${id}/completion`,
    cancel: (id) => `help-requests/${id}/cancel`,
    approve: (id, userId) => `help-requests/${id}/approval/${userId}`,
    reject: (id, userId) => `help-requests/${id}/rejection/${userId}`,
    images: (id) => `help-requests/${id}/images`,
  },
  news: {
    all: "/news",
  },
  notifications: {
    getAll: "/notifications/current",
    getAllUnread: "/notifications/current/unread",
    deleteAll: "/notifications/current",
    setAsRead: (id) => `/notifications/${id}`,
    delete: (id) => `/notifications/${id}`,
  },
  images: (id) => `images/${id}`,
  statuses: "/request-statuses",
});

export default ENDPOINTS;
