import styled from '@emotion/styled';

export const HomePage = styled.div`
  padding-bottom: 70px;
  overflow: hidden;
`;

export const Top = styled.div`
  padding: 0 20px;
  height: 348px;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(153deg, #2d29ff 16.96%, #721cff 124.87%);
`;

export const MyCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  height: 155px;
  width: 300px;
`;

export const ProfileImg = styled.div`
  min-width: 68px;
  min-height: 68px;
  max-width: 68px;
  max-height: 68px;
  border-radius: 50%;
  border: 1px solid gray;
`;

export const ProfileText = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 3px 0;
  color: #1a1a1a;
`;

export const Team = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 11px;
  color: #1a1a1a;
`;

export const ExtraInfo = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 0;
  color: #555;

  p:nth-of-type(1) {
    font-size: 11px;
    font-weight: 500;
  }

  p:nth-of-type(2) {
    font-size: 11px;
    font-weight: 400;
  }
`;

export const MoreOption = styled.div`
  display: flex;
  width: 5px;
  height: 24px;
  margin-top: 16px;
  justify-content: end;
  margin-left: auto;
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
