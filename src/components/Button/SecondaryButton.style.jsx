import styled from '@emotion/styled';

export const SecondaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  border-radius: 10px;
  background: var(--blue-2, #ebebff);
  color: var(--grey3, #555);
  text-align: center;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.5px;
  transition: background 0.3s ease;

  &:hover {
    background: #dcdcff;
  }
`;
