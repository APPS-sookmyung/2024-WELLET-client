import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IllustBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 9px;
  max-width: 500px;
`;

export const Illust = styled.img`
  width: 100%;
`;

export const T = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BigText = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.5px;
  padding-bottom: 5px;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 420px) {
    white-space: pre-line;
  }
`;

export const SmallText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.6px;
  white-space: pre-line;
  text-align: center;
  padding-bottom: 29px;
  color: #555;
`;

export const StepIcon = styled.img`
  margin: 0 0 33px 0;
  width: 37px;
  height: 7px;
`;

export const Btns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0 20px 34px 20px;
`;
