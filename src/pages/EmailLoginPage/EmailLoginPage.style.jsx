import styled from '@emotion/styled';

export const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: 220%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainContent = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  row-gap: 28px;
`;

export const TitleBox = styled.div`
  color: #2d29ff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
`;

export const Logo = styled.div`
  display: flex;
  max-width: 250px;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.7px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  max-width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  height: 38px;
  border: none;
  outline: none;
  background: #f2f2f2;
  border-radius: 20px;
  padding-left: 21px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.6px;

  &::placeholder {
    color: #555;
  }
`;

export const Options = styled.div`
  width: 100%;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
  color: #555;
  display: flex;
  align-items: center;
  padding: 0 6px;
  letter-spacing: -0.55px;
`;

export const IdSave = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FindIdP = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 5px;

  a {
    color: #555;
    text-decoration: none;
  }
`;

export const Btns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0 20px;
  letter-spacing: -0.5px;
`;

export const KakaoBtn = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
`;

export const SignUpOption = styled.div`
  display: flex;
  color: #949494;
  font-size: 11px;
  font-weight: 400;
  justify-content: center;
  padding: 4px 0 34px 0;
  gap: 5px;

  p:nth-of-type(2) {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
