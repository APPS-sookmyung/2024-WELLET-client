import { authAxios, testAxios } from '../axios';

const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;

// 로그인
export const kakaoLoginAPI = async () => {
  const response = await testAxios.get(`/login`);
  const loginUrl = VITE_SERVER_DOMAIN;
  window.location.href = loginUrl;
};
