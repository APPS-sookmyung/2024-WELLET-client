import styled from '@emotion/styled';

export const ViewCardPage = styled.div`
  padding: 20px;
  border: 1px solid red;
`;

export const SearchBar = styled.div`
  display: flex;
  height: 36.221px;
  margin-bottom: 16px;
  padding: 10px 18px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #efefef;
`;

// 버튼
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CategoryBtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const CategoryBtn = styled.button`
  display: inline-flex;
  padding: 4px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
  color: var(--primary, #2d29ff);
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const EditBtn = styled.button`
  display: inline-flex;
  padding: 4px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: var(--Color-4-1, #ffe6f2);
  color: #ff0076;
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

// 명함
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f4f4f9;
  padding: 12px 20px;
`;

export const ImgWrapper = styled.div`
  width: 50.553px;
  height: 50.553px;
  flex-shrink: 0;
  border: 1px solid blue;
  border-radius: 50.553px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;
`;
export const Name = styled.h1`
  color: var(--grey3, #555);

  /* Body 2_medium */
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.5px;
`;

export const Job = styled.p`
  color: var(--grey3, #555);
  font-size: 9px;
  line-height: 150%; /* 13.5px */
  letter-spacing: -0.5px;
`;
