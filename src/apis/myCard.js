import { authAxios } from '../axios';

// 내 명함 가져오기
export const getMyCard = async () => {
  try {
    console.log('요청 시작: /me');
    const response = await authAxios.get(`/me`);
    console.log('요청 성공:', response.data);
    return response;
  } catch (error) {
    console.error(
      '명함 데이터를 가져오는 중 오류 발생:',
      error.response || error
    );
    throw error;
  }
};

// 내 명함 생성
export const postMyCard = async ({ data }) => {
  const response = await authAxios.post(`/me`, data);
  console.log(response);
  return response;
};

// 내 명함 삭제
export const deleteMyCard = async () => {
  const response = await authAxios.delete(`/me`);
  console.log(response);
  return response;
};

// 내 명함 수정
export const putMyCard = async ({ data }) => {
  const response = await authAxios.put(`/me`, data);
  console.log(response);
  return response;
};
