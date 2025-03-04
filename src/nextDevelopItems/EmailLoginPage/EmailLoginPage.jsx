import { useState } from 'react';
import { IoSquareOutline } from 'react-icons/io5';
import { MdCheckBox } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import email_login_background from '../../assets/images/email_login_background.svg';
import { PrimaryButton } from '../../components';
import Icon from '../../components/Icon/Icon';
import * as S from './EmailLoginPage.style';

export default function EmailLoginPage() {
  const navigate = useNavigate();
  const [IdSave, setIdSave] = useState(false);

  return (
    <S.Background style={{ backgroundImage: `url(${email_login_background})` }}>
      <S.MainContent>
        <S.TitleBox>
          <S.Logo>
            <Icon id='logo' fill='#2D29FF' width='113px' height='32px' />
          </S.Logo>
          <S.Text>우리(WE)들이 사용하는 월렛</S.Text>
        </S.TitleBox>
        <S.InputBox>
          <S.Input placeholder='아이디 / 이메일'></S.Input>
          <S.Input placeholder='비밀번호'></S.Input>
          <S.Options>
            <S.IdSave
              onClick={(e) => {
                setIdSave(!IdSave);
              }}
            >
              {IdSave ? (
                <MdCheckBox size='16' />
              ) : (
                <IoSquareOutline size='16' />
              )}
              <p>아이디 저장</p>
            </S.IdSave>
            <S.FindIdPw>
              <p onClick={() => navigate('/login/find-id')}>아이디 찾기</p>
              <p> | </p>
              <p onClick={() => navigate('/login/find-pw')}>비밀번호 찾기</p>
            </S.FindIdPw>
          </S.Options>
        </S.InputBox>
      </S.MainContent>
      <S.Btns>
        <PrimaryButton onClick={() => navigate('/home')}>로그인</PrimaryButton>
        <PrimaryButton
          style={{
            backgroundColor: '#FAE100',
            color: '#1A1A1C',
            gap: '2px',
          }}
        >
          <S.KakaoBtn>
            <Icon id='kakao' width={15} height={14} />
          </S.KakaoBtn>
          카카오 계정 로그인
        </PrimaryButton>
        <S.SignUpOption>
          <p>계정이 없으신가요?</p>
          <p onClick={() => navigate('/sign-up')}>회원가입</p>
        </S.SignUpOption>
      </S.Btns>
    </S.Background>
  );
}
