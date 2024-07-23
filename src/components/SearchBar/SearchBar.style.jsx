import styled from '@emotion/styled';

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 14px;
  flex-shrink: 0;
  fill: var(--grey2, #949494);
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  color: var(--grey3, #555);
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;

  &::placeholder {
    color: #999;
  }
`;
