import { jsonAxios } from '../axios';

// 그룹 리스트 가져오기
export const getGroupList = async () => {
  const response = await jsonAxios.get(`/categories/name`);
  return response;
};

// 그룹 생성
export const postGroup = async ({ name }) => {
  const data = {
    name: name,
  };
  const response = await jsonAxios.post(`/categories`, data);
  return response;
};

// 그룹 삭제
export const deleteGroup = async ({ category_id }) => {
  const response = await jsonAxios.delete(`/categories/${category_id}`);
  return response;
};

// 그룹 수정
export const putGroup = async ({ name }) => {
  const data = {
    name: name,
  };
  const response = await jsonAxios.put(`/categories/${category_id}`, data);
  return response;
};
