import { authAxios } from '../axios';

// 내 명함 가져오기
export const getMyCard = async ({ member_id }) => {
  const response = await authAxios.get(`/me/${member_id}`);
  console.log(response);
  return response;
};

// 내 명함 생성
export const postMyCard = async ({ member_id, data }) => {
  const response = await authAxios.post(`/categories/${member_id}`, data);
  console.log(response);
  return response;
};

// 내 명함 삭제
export const deleteMyCard = async (member_id) => {
  const response = await authAxios.delete(`/me/${member_id}`);
  console.log(response);
  return response;
};

// 내 명함 수정
export const putMyCard = async ({ member_id, data }) => {
  const response = await authAxios.patch(`/me/${member_id}`, data);
  console.log(response);
  return response;
};
