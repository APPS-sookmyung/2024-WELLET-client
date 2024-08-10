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

export const MyCardListContainer = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  position: relative;
  align-items: center;
  border: 3px solid white;
`;

export const MyCardList = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  gap: 9px;
  padding: 0 20px;
  overflow-x: auto; /* 가로 스크롤 가능하도록 수정 */
  white-space: nowrap;
  scroll-behavior: smooth; /* 스크롤의 부드러움 설정 */
`;

export const LeftAngleBtn = styled.div`
  border: 1px solid red;
  position: absolute;
  display: flex;
  padding: 30px 0 30px 15px;
`;

export const RightAngleBtn = styled.div`
  border: 1px solid red;
  position: absolute;
  right: 0;
  display: flex;
  padding: 30px 15px 30px 0;
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
  padding: 20px;
  overflow: hidden;
`;

export const CardListTitle = styled.div`
  display: flex;
  color: #fff;
  gap: 6px;
  padding: 4px 0 10px 0;

  p:nth-of-type(1) {
    font-size: 16px;
    font-weight: 600;
  }

  p:nth-of-type(2) {
    font-size: 11px;
    display: flex;
    align-items: end;
    font-weight: 400;
  }
`;

export const ListOpiton = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

export const ArrowBottomIcon = styled.div`
  display: flex;
  width: 10px;
  height: 10px;
`;

export const Filter = styled.p`
  display: flex;
  padding-left: 4px;
  font-size: 9px;
  color: #555;
`;

export const AddGroup = styled.p`
  margin-left: auto;
`;

export const EditBtnWrapper = styled.button`
  display: inline-flex;
  padding: 4px 10px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: #ebf3fe;
  font-size: 9px;
`;

export const EditText = styled.p`
  font-size: 9px;
  line-height: 150%;
  letter-spacing: -0.5px;
  color: #2d29ff;
`;

export const MoreIcon = styled.div`
  width: 10px;
  height: 11px;
  display: flex;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BottomMoreBtn = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 10px;
`;
