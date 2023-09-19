import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

const http = {
  get: apiClient.get,
  post: apiClient.post,
  delete: apiClient.delete,
  put: apiClient.put,
  patch: apiClient.patch,
};

export default http;
