import axios from 'axios';

export const baseURL = 'https://reqres.in/api/';

export const api = axios.create({
  baseURL,
});
