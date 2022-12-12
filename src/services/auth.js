import { api } from "./api.js";

export const login = async ({ email, password }) => {
  const result = await api
    .post("/api/auth/signin", {
      username: email,
      password,
    })
    .then((res) => res.data)
    .catch((err) => {throw err});

  return result;
};

export const signup = async ({ email, password, role }) => {
  const result = await api
    .post("/api/auth/signup", {
      username: email,
      email: email,
      password,
      roles: [role]
    })
    .then((res) => res.data)
    .catch((err) => {throw err});

  return result;
};
