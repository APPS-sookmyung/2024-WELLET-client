import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  height: 85px;
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

export const Icon = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 15px;
  color: ${(props) => (props.isactive ? '#2D29FF' : '#C8C8C8')};
`;

export const IconImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isactive ? '#2D29FF' : '#C8C8C8')};
  font-size: 11px;
  line-height: 130%;
  letter-spacing: -0.55px;
`;
