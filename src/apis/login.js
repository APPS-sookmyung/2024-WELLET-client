import { authAxios, testAxios } from '../axios';

// 로그인
export const kakaoLoginAPI = async () => {
  await testAxios.get(`/login`);
  // const loginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=856122255feeea21d537c0225f6c658a&redirect_uri=http://localhost:8080/auth/kakao/callback`;
  // const loginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=856122255feeea21d537c0225f6c658a&redirect_uri=https://wellet.store/auth/kakao/callback`;
  // window.location.href = loginUrl;
};
