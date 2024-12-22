import { authAxios } from '../axios';

// 내 명함 가져오기
export const getMyCard = async () => {
  const response = await authAxios.get(`/me`);
  console.log(response);
  return response;
};

// 내 명함 생성
export const postMyCard = async ({ data }) => {
  const response = await authAxios.post(`/categories`, data);
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
