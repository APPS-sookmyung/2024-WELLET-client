import axios from 'axios';

const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;

export const authAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const testAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getTokenFromCookie = () => {
  const cookie = document.cookie;
  console.log('cookie:', cookie);
  const tokenCookie = cookie
    .split('; ')
    .find((row) => row.startsWith('jwtToken='));
  console.log('tokenCookie:', tokenCookie);
  return tokenCookie ? tokenCookie.split('=')[1] : null;
};

authAxios.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookie();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
