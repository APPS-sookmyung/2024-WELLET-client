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
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzODQ1Njk3MjEwIiwicm9sZSI6IlVTRVIiLCJuaWNrbmFtZSI6Iuq5gO2YnOumvCIsImlkIjozODQ1Njk3MjEwLCJleHAiOjE3MzQ4Nzk5ODIsImlhdCI6MTczNDg3NjM4MiwidXNlcm5hbWUiOiIwMTVmZDUwNy0zNWJiLTQxNmYtYjQ4OC03Y2JiN2NjYTQ0NjQifQ.Glv2-tcXLiqhI3TasBvC9WmS9P7YE7-AC1RnS9gzl_x0hfBxW5jfcTvsqBS7D6o40rbBKUPU8Iscvs1PsDiB2g';
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
