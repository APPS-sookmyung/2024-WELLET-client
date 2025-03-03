import styled from '@emotion/styled';

export const OverlayContainer = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 20px;
  width: 100%;

  ${({ isLoading }) =>
    isLoading &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;  
      border-radius: 20px;
      background: rgba(148, 148, 148, 0.2);
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 150%;
      height: 100%;
      border-radius: 20px;
      background: linear-gradient(
        120deg,
        transparent 25%,
        rgba(255, 255, 255, 0.5) 50%,
        transparent 75%
      );
      animation: shimmer 1.5s infinite linear;
      z-index: 2;
    }
  `}

  @keyframes shimmer {
    0% {
      left: -150%;
    }
    100% {
      left: 150%;
    }
  }
`;
