import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InputLabel = styled.label`
  padding: 0 6px;
  color: var(--grey3, #555);
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
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
  color: var(--grey2, #949494);
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
  outline: none;
`;

export const IconWrapper = styled.div`
  margin: 0 3px;
  width: 12px;
  height: 12px;
`;
