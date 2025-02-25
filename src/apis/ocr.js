import { jsonAxios } from '../axios';

// ocr
export const postOCR = async (body) => {
  const response = await jsonAxios.post('/ocr', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  console.log('OCR 사진 업로드: ', response);
  return response;
};
