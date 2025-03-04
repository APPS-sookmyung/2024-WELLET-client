import { formDataAxios, jsonAxios } from '../axios';

// 전체 명함 조회
export const getCards = async () => {
  const response = await jsonAxios.get(`/cards`);
  return response;
};

// 단건 명함 조회
export const getCardDetail = async ({ card_id }) => {
  const response = await jsonAxios.get(`/cards/${card_id}`);
  return response;
};

// 그룹별 명함 조회
export const getCardsByGroup = async ({ categoryId }) => {
  const response = await jsonAxios.get(`/cards/categories/${categoryId}`);
  return response;
};

// 명함 생성
export const postCards = async ({ data }) => {
  const response = await formDataAxios.post(`/cards`, data);
  return response;
};

// 명함 삭제
export const patchCards = async ({ cardList }) => {
  const response = await jsonAxios.patch(`/cards`, cardList);
  return response;
};

// 명함 수정
export const putCards = async ({ card_id, data }) => {
  const response = await formDataAxios.put(`/cards/${card_id}`, data);
  return response;
};

// 명함 검색
export const searchCards = async ({ keyword }) => {
  const response = await jsonAxios.get(`/cards?keyword=${keyword}`);
  return response;
};

// 명함 프로필 사진 수정
export const putCardsPf = async ({ card_id, data }) => {
  const response = await formDataAxios.put(
    `/cards/${card_id}/prof/images`,
    data
  );
  return response;
};

// 명함 사진 수정
export const putCardsImg = async ({ card_id, data }) => {
  const response = await formDataAxios.put(`/cards/${card_id}/images`, data);
  return response;
};
