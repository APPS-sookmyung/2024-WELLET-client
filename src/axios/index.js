import axios from 'axios';

const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;

export const authAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
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
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNzk4MDE1MDMxIiwicm9sZSI6IlVTRVIiLCJuaWNrbmFtZSI6Iuq5gOykgO2drCIsImlkIjozNzk4MDE1MDMxLCJleHAiOjE3MzQ4ODIzODIsImlhdCI6MTczNDg3ODc4MiwidXNlcm5hbWUiOiJlMGM3ODQ0OS05OWU4LTQ4NzQtOGI4MC0wNmVlOWY0ZTEyYTgifQ.PbM4bNztpBMv6HVI8l1HR5WEdpfRa26l1JkUOQvteBAZtMzsvTir31iNFF0MvhiMLcaQooxB81zxzvrEP-Wz_w';

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
