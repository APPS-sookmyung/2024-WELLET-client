import { formDataAxios, jsonAxios } from '../axios';

// 내 명함 가져오기
export const getMyCard = async () => {
  const response = await jsonAxios.get(`/me`);
  console.log('내 명함 가져오기: ', response);
  return response;
};

// 내 명함 생성
export const postMyCard = async ({ data }) => {
  const response = await formDataAxios.post(`/me`, data);
  console.log('내 명함 생성: ', response);
  return response;
};

// 내 명함 삭제
export const deleteMyCard = async () => {
  const response = await jsonAxios.delete(`/me`);
  console.log('내 명함 삭제: ', response);
  return response;
};

// 내 명함 수정
export const putMyCard = async ({ data }) => {
  const response = await formDataAxios.put(`/me`, data);
  console.log('내 명함 수정: ', response);
  return response;
};
