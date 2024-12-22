import axios from 'axios';

const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;

export const authAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getTokenFromCookie = () => {
  // const cookie = document.cookie
  //   .split('; ')
  //   .find((row) => row.startsWith('token='));
  // return cookie ? cookie.split('=')[1] : null;
  return dummyToken;
};

const dummyToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzODQ1Njk3MjEwIiwicm9sZSI6IlVTRVIiLCJuaWNrbmFtZSI6Iuq5gO2YnOumvCIsImlkIjozODQ1Njk3MjEwLCJleHAiOjE3MzQ4NjQxODIsImlhdCI6MTczNDg2MDU4MiwidXNlcm5hbWUiOiJjMGVkZWQ0Ny00ZTdiLTQ4ZTAtYTY2OS00NTA4NjhiNmZlOWYifQ.KIS9XLDyKIgulQmxdk3_GKJAmD2j-16cYeoliQAMSrhmTZ9Zpu64TXkoPRM8On_qdUJ4UtyoNQUHNRi6rX1huA';

// 요청을 보낼 때 Bearer Token을 Authorization 헤더에 추가합니다.
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
