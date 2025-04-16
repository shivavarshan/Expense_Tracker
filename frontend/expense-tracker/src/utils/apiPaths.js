export const BASE_URL = "https://expense-tracker-6jyl.onrender.com/";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
    GET_USER_INFO: "/api/v1/auth/getUser",
  },
  DASHBOARD: {
    GET_DATA: "/api/v1/dashboard",
  },
  INCOME: {
    ADD_INCOME: "/api/v1/income/add",
    GET_ALL_INCOME: "/api/v1/income/get",
    DELETE_INCOME: (incomeId) => `/api/v1/income/${incomeId}`, // ✅ corrected template literal
    DOWNLOAD_INCOME: "/api/v1/income/downloadexcel",           // ✅ wrapped in quotes
  },
  EXPENSE: {
    ADD_EXPENSE: "/api/v1/expense/add",
    GET_ALL_EXPENSE: "/api/v1/expense/get",
    DELETE_EXPENSE: (expenseId) => `/api/v1/expense/${expenseId}`, // ✅ corrected
    DOWNLOAD_EXPENSE: "/api/v1/expense/downloadexcel",             // ✅ wrapped in quotes
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/v1/auth/upload-image",
  },

  // ✅ NEW SECTION FOR TWO ACCOUNTS
  ACCOUNT: {
    GET_PROFILE: "/api/v1/account/profile",         // GET user profile info
    UPDATE_PROFILE: "/api/v1/account/profile",      // PUT to update profile
    GET_BANK: "/api/v1/account/bank",               // GET bank account info
    UPDATE_BANK: "/api/v1/account/bank",            // PUT to update bank details
  },
};
