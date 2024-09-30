import { authAxios } from '../axios';

// 전체 명함 조회
export const getCards = async ({ member_id }) => {
  const response = await authAxios.get(`/cards/${member_id}`);
  console.log(response);
  return response;
};

// 명함 생성
export const postCards = async ({ member_id, data }) => {
  const response = await authAxios.post(`/cards/${member_id}`, data);
  console.log(response);
  return response;
};

// 명함 삭제
export const deleteCards = async ({ card_id }) => {
  const response = await authAxios.delete(`/cards/${card_id}`);
  console.log(response);
  return response;
};

// 명함 수정
export const putCards = async ({ card_id, data }) => {
  const response = await authAxios.put(`/cards/${card_id}`, data);
  console.log(response);
  return response;
};
