import styled from '@emotion/styled';

export const HomePage = styled.div`
  padding-bottom: 70px;
  overflow: hidden;
`;

export const Top = styled.div`
  height: 348px;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(153deg, #2d29ff 16.96%, #721cff 124.87%);
`;

export const Padding = styled.div`
  padding: 0 20px;
`;

export const MyCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  cursor: pointer;
`;

export const EmptyMyCard = styled.div`
  background: #5854ff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 6px;
  height: 155px;
  width: 100%;
  font-size: 12px;
  color: #c8c8c8;

  p:nth-of-type(2) {
    text-decoration: underline;
  }
`;

export const UpDownBarBox = styled.div`
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpDownBar = styled.div`
  width: 72px;
  height: 5px;
  border-radius: 4px;
  background: #8776ff;
`;

export const Container = styled.div`
  padding: 20px 20px 0 20px;
  overflow: hidden;
`;

export const CardListTitle = styled.div`
  display: flex;
  color: #fff;
  gap: 10px;
  padding: 4px 0 10px 0;

  p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 600;
  }

  p:nth-of-type(2) {
    font-size: 14px;
    display: flex;
    align-items: end;
    font-weight: 400;
  }
`;

export const BottomMoreBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 10px;
`;

export const EditBtnWrapper = styled.div`
  padding: 10px;
`;

export const EditBtn = styled.button`
  display: inline-flex;
  padding: 4px 10px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: #ebf3fe;
  font-size: 9px;
`;

export const EditText = styled.p`
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;
  color: #2d29ff;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
