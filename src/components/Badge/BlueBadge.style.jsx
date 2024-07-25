import styled from '@emotion/styled';

export const BlueBadge = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: ${(props) =>
    props.isActive ? 'var(--primary, #2d29ff)' : 'var(--color-1, #ebf3fe)'};
  padding: 4px 10px;
  color: ${(props) =>
    props.isActive ? 'var(--white, #fff)' : 'var(--primary, #2d29ff)'};
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
  border: none;
  outline: none;
`;
