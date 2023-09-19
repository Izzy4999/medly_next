import http from "./http";

export const loginByGoogle = async () => {
  const response = await http.get("/auth/google");
  return response.data;
};
