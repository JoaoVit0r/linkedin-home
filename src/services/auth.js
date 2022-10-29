import { api } from "./api.js";

export const login = async ({ email, password }) => {
  const result = await api
    .post("login", {
      email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => err.response?.data);

  return result;
};
