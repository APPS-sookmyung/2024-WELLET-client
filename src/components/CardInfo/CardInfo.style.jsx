import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  border-radius: 10px;
  background: #f4f4f9;
  padding: 12px 12px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`;

export const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border: 1px solid blue;
  border-radius: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;
`;
export const Name = styled.h1`
  color: var(--grey3, #555);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const Job = styled.p`
  color: var(--grey3, #555);
  font-size: 11px;
  line-height: 150%;
  letter-spacing: -0.5px;
`;

export const ArrowRightIcon = styled.button`
  padding: 0 8px;
`;
