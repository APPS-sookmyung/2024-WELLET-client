import { jsonAxios } from '../axios';

// ocr
export const postOCR = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await jsonAxios.post(`/ocr`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  console.log('OCR 사진 업로드: ', response);
  return response;
};
