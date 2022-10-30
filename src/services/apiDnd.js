import axios from "axios";

export const baseURL = "https://www.dnd5eapi.co/api/";

export const apiDnd = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});