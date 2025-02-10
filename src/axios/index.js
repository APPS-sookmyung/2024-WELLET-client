import axios from 'axios';

const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;

export const jsonAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formDataAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
