import axios from 'axios';

const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;
const VITE_KAKAO_LOGIN_BASE_URL = import.meta.env.VITE_KAKAO_LOGIN_BASE_URL;

export const authAxios = axios.create({
  baseURL: VITE_SERVER_DOMAIN,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const testAxios = axios.create({
  baseURL: VITE_KAKAO_LOGIN_BASE_URL,
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

const dummyToken = '토큰값';
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
