import styled from '@emotion/styled';

export const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  max-width: 768px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  margin-top: 12px;
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.05);
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 12px;
  color: ${(props) => (props.isActive ? '#2D29FF' : '#C8C8C8')};
`;

export const IconImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  cursor: pointer;

  img {
    filter: ${(props) => (props.isActive ? 'none' : 'grayscale(100%)')};
  }
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isActive ? '#2D29FF' : '#C8C8C8')};
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
`;
