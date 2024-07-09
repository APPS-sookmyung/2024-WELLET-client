import styled from '@emotion/styled';

export const AddCardPage = styled.div`
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
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  color: var(--grey3, #555);
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;

  &::placeholder {
    color: #999;
  }
`;

// 타이틀
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 4px;
`;

export const Title = styled.h1`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  color: var(--grey3, #555);
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

export const GroupBtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const GroupBtn = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: ${(props) =>
    props.isActive ? 'var(--primary, #2d29ff)' : 'var(--color-1, #ebf3fe)'};
  padding: 4px 10px;
  color: ${(props) =>
    props.isActive ? 'var(--white, #fff)' : 'var(--primary, #2d29ff)'};
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
