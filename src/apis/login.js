const VITE_SERVER_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN;

export const kakaoLoginAPI = async () => {
  const loginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=856122255feeea21d537c0225f6c658a&redirect_uri=${VITE_SERVER_DOMAIN}/auth/kakao/callback`;
  window.location.href = loginUrl;
};
