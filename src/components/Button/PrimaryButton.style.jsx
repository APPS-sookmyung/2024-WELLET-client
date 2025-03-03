import styled from '@emotion/styled';

export const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  border-radius: 10px;
  background: var(--primary, #2d29ff);
  color: var(--white, #fff);
  text-align: center;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.5px;
  transition: background 0.3s ease;

  &:hover {
    background: #1f1cc1;
  }
`;
