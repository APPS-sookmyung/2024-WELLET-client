import { jsonAxios } from '../axios';

// ocr
export const postOCR = async (body) => {
  const response = await jsonAxios.post('/ocr', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};
