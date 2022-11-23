import axios from "axios";

export const baseUrl =
  "https://bade8bfe-33e9-4f59-8220-5a8b97fe221a.mock.pstmn.io";

export const apiconn = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
