import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InputLabel = styled.label`
  padding: 0 6px;
  color: var(--grey3, #555);
  font-size: 12px;
  line-height: 130%;
  letter-spacing: -0.6px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  width: 100%;
  height: 41px;
  border-radius: 10px;
  background: #f4f4f9;
  gap: 6px;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.7px;
  outline: none;
`;

