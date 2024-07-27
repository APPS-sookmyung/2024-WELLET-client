import styled from '@emotion/styled';

export const SearchBar = styled.div`
  display: flex;
  height: 36px;
  margin-bottom: 16px;
  padding: 10px 18px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${({ theme }) => (theme === 'white' ? ' #EFEFEF;' : ' #5854FF;')};
  gap: 10px;
`;

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  fill: ${({ theme }) =>
    theme === 'white' ? 'var(--grey1, #C8C8C8)' : 'var(--grey1, #C8C8C8)'};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  color: ${({ theme }) =>
    theme === 'white' ? ' var(--grey2, #949494);' : 'var(--grey1, #C8C8C8);'};
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;

  &::placeholder {
    color: ${({ theme }) =>
      theme === 'white' ? ' var(--grey2, #949494);' : 'var(--grey1, #C8C8C8)'};
  }
`;
