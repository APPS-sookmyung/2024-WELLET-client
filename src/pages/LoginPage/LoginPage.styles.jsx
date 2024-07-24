import styled from '@emotion/styled';

export const Container = styled.div`
  /* background-color: gray; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BackgroundCirclesBox = styled.div`
  /* border: 3px solid red; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 140px;
  height: 100%;
`;

export const BackgroundLinesBox = styled.div`
  /* border: 3px solid yellow; */
  height: 100%;
  width: 80%;
  max-height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleBox = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;
  padding: 175px 0;
  color: #2d29ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
`;

export const Logo = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 80px;
  /* width: 133px;
  height: 36px; */
`;

export const Text = styled.div`
  /* border: 1px solid red; */
  font-size: 14px;
  font-weight: 600;
`;

export const Btns = styled.div`
  /* border: 1px solid red;  */
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0 20px;
`;


export const KakaoBtn = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 15px;
  height: 15px;
`;

export const SignUpOption = styled.div`
  /* border: 1px solid red; */
  display: flex;
  color: #949494;
  font-size: 11px;
  font-weight: 400;
  justify-content: center;
  padding: 4px 0 34px 0 ;
  gap: 5px;

  p:nth-of-type(2) {
    text-decoration: underline;
    text-underline-offset: 4px
  }
`;
