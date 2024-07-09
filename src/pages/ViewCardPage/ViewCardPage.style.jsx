import styled from '@emotion/styled';

export const ViewCardPage = styled.div`
  padding: 20px;
`;

// 검색창
export const SearchBar = styled.div`
  display: flex;
  height: 36.221px;
  margin-bottom: 16px;
  padding: 10px 18px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #efefef;
  gap: 10px;
`;

export const SearchIcon = styled.div`
  width: 9.84px;
  height: 13.259px;
  transform: rotate(-47.353deg);
  flex-shrink: 0;
  fill: var(--grey2, #949494);
`;

export const SearchText = styled.p`
  color: var(--grey2, #949494);
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
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
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: var(--color-1, #ebf3fe);
  padding: 4px 10px;
  color: var(--primary, #2d29ff);
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const EditBtn = styled.button`
  display: inline-flex;
  padding: 4px 10px;
  align-items: center;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: var(--Color-4-1, #ffe6f2);
  color: #ff0076;
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const EditText = styled.p`
  color: #ff0076;
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const MoreIcon = styled.div`
  width: 10.565px;
  height: 11px;
  flex-shrink: 0;
`;

// 명함
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f4f4f9;
  padding: 12px 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const Job = styled.p`
  color: var(--grey3, #555);
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const ArrowRightIcon = styled.div``;
