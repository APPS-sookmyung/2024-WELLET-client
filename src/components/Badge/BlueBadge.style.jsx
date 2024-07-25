import styled from '@emotion/styled';

export const BlueBadge = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
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
