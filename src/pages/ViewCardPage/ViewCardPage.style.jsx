import styled from '@emotion/styled';

export const ViewCardPage = styled.div`
  padding: 20px;
`;

// 검색창
export const SearchBar = styled.div`
  display: flex;
  height: 36px;
  margin-bottom: 16px;
  padding: 10px 18px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #efefef;
  gap: 10px;
`;

export const SearchIcon = styled.div`
  width: 10px;
  height: 14px;
  transform: rotate(-47.353deg);
  flex-shrink: 0;
  fill: var(--grey2, #949494);
`;

export const SearchInput = styled.input`
  color: var(--grey3, #555);
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #999;
  }
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
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const MoreIcon = styled.div`
  width: 10px;
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
  padding: 12px 12px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`;

export const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid blue;
  border-radius: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;
`;
export const Name = styled.h1`
  color: var(--grey3, #555);
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

export const ArrowRightIcon = styled.button`
  padding: 0 8px;
`;
