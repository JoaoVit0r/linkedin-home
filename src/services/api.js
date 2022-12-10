import axios from 'axios';

export const baseURL = process.env.REACT_APP_BASE_URL;

export const api = axios.create({
  baseURL,
});
