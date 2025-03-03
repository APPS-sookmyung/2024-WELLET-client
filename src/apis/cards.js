import { formDataAxios, jsonAxios } from '../axios';

// 전체 명함 조회
export const getCards = async () => {
  const response = await jsonAxios.get(`/cards`);
  console.log('전체 명함 조회: ', response);
  return response;
};

// 단건 명함 조회
export const getCardDetail = async ({ card_id }) => {
  const response = await jsonAxios.get(`/cards/${card_id}`);
  console.log('단건 명함 조회: ', response);
  return response;
};

// 그룹별 명함 조회
export const getCardsByGroup = async ({ categoryId }) => {
  const response = await jsonAxios.get(`/cards/categories/${categoryId}`);
  console.log('그룹별 명함 조회: ', response);
  return response;
};

// 명함 생성
export const postCards = async ({ data }) => {
  const response = await formDataAxios.post(`/cards`, data);
  console.log('명함 생성: ', response);
  return response;
};

// 명함 삭제
export const patchCards = async ({ cardList }) => {
  const response = await jsonAxios.patch(`/cards`, cardList);
  console.log('명함 삭제: ', response);
  return response;
};

// 명함 수정
export const putCards = async ({ card_id, data }) => {
  const response = await formDataAxios.put(`/cards/${card_id}`, data);
  console.log('명함 수정: ', response);
  return response;
};

// 명함 검색
export const searchCards = async ({ keyword }) => {
  console.log('검색 키워드:', keyword);
  const response = await jsonAxios.get(`/cards?keyword=${keyword}`);
  console.log('명함 검색: ', response);
  return response;
};

// 명함 프로필 사진 수정
export const putCardsPf = async ({ card_id, data }) => {
  const response = await formDataAxios.put(
    `/cards/${card_id}/prof/images`,
    data
  );
  console.log('명함 프로필이미지 수정: ', response);
  return response;
};

// 명함 사진 수정
export const putCardsImg = async ({ card_id, data }) => {
  const response = await formDataAxios.put(`/cards/${card_id}/images`, data);
  console.log('명함 이미지 수정: ', response);
  return response;
};
