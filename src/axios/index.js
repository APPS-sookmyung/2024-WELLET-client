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
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNzk4MDE1MDMxIiwicm9sZSI6IlVTRVIiLCJuaWNrbmFtZSI6Iuq5gOykgO2drCIsImlkIjozNzk4MDE1MDMxLCJleHAiOjE3MzQ4NjE3OTMsImlhdCI6MTczNDg1ODE5MywidXNlcm5hbWUiOiI2Nzk4MTBhNC05ZGE0LTQ5MzctOWExMi1mZTVmMTM0YzRlOWQifQ.q1KV88lyQvZYWCz77332d3VWqqV2jw4scasow7E-RndYogJTuuZSCMZVr_PxJ4eqQ8Go98bZtMj48eHQR0rXKQ';

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
