import { useCallback } from 'react';

function useFormData(data) {
  return useCallback(() => {
    const formData = new FormData();

    // 객체의 모든 키-값 쌍을 FormData에 추가
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key]) {
        formData.append(key, data[key]);
      }
    }

    return formData;
  }, [data]);
}

export default useFormData;
