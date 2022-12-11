import axios from 'axios';

export const baseURL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:8000/api';

export const api = axios.create({
  baseURL,
});
