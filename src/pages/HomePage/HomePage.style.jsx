import styled from '@emotion/styled';

export const HomePage = styled.div``;

export const Top = styled.div`
  padding: 0 20px;
  height: 348px;
  border-radius: 0px 0px 20px 20px;
  background: linear-gradient(153deg, #2d29ff 16.96%, #721cff 124.87%);
`;

export const CardListTitle = styled.div`
  display: flex;
  color: #fff;
  gap: 4px;
  padding: 4px 0 10px 0;
  /* border: 1px solid red; */

  p:nth-of-type(1) {
    font-size: 14px;
  }

  p:nth-of-type(2) {
    font-size: 9px;
    display: flex;
    align-items: end;
  }
`;

export const MyCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  height: 155px;
`;

export const ProfileImg = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 67.574px;
  border: 1px solid gray;
`;

export const ProfileText = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 3px 0;
`;

export const Team = styled.div`
  font-size: 11px;
  font-weight: 400;
  padding-bottom: 15px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 0;

  p:nth-of-type(1) {
    font-size: 9px;
    font-weight: 600;
  }

  p:nth-of-type(2) {
    font-size: 9px;
    font-weight: 400;
  }
`;

export const MoreOption = styled.div`
  display: flex;
  width: 16px;
  height: 30px;
  justify-content: end;
  margin-left: auto;
  padding-top: 18px;
`;

export const UpDownBar = styled.div`
  margin: 0 124px;
  height: 5px;
  border-radius: 4px;
  background: #8776ff;
`;

export const Container = styled.div`
  padding: 20px;
  background-color: gray;
`;

export const ListOpiton = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
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
  border: 1px solid red;
  margin-left: auto;
`;
