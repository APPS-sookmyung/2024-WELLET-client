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

// 명함 추가
export const AddBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 256px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 0.5px dashed #2d29ff;
  padding: 26px;
`;

export const AddBoxTitle = styled.h3`
  margin-bottom: 16px;
  color: var(--primary, #2d29ff);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const AddBoxIconWrapper = styled.div``;

export const AddBoxSubTitle = styled.p`
  padding: 10px 0;
  color: var(--grey2, #949494);
  text-align: center;
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const AddBoxDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
`;

export const AddBoxDesc = styled.p`
  color: var(--grey2, #949494);
  text-align: center;
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const ImportFileBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px 0;
`;

export const ImportFileBtn = styled.button`
  display: flex;
  flex-direction: column;
  width: 77px;
  padding: 4px 8px;
  gap: 8px;
  border-radius: 10px;
  background: var(--primary, #2d29ff);
  color: var(--white, #fff);
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;
