import * as S from './LoginPage.styles';
import Icon from '../../components/Icon/Icon';
import login_background_circles from '../../assets/images/login_background_circles.svg';
import login_background_lines from '../../assets/images/login_background_lines.svg';
import { PrimaryButton, SecondaryButton } from '../../components';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <S.Container
      style={{ backgroundImage: `url(${login_background_circles})` }}
    >
      <S.BackgroundCirclesBox>
        <S.BackgroundLinesBox
          style={{ backgroundImage: `url(${login_background_lines})` }}
        />
      </S.BackgroundCirclesBox>
      <S.Btns>
        <PrimaryButton
          style={{
            backgroundColor: '#FAE100',
            color: '#1A1A1C',
            gap: '2px',
          }}
        >
          <S.KakaoBtn>
            <Icon id='kakao' />
          </S.KakaoBtn>
          카카오 계정 로그인
        </PrimaryButton>
        <SecondaryButton onClick={() => navigate('/login/email')}>
          이메일로 로그인
        </SecondaryButton>
        <S.SignUpOption>
          <p>계정이 없으신가요?</p>
          <p onClick={() => navigate('/sign-up')}>회원가입</p>
        </S.SignUpOption>
      </S.Btns>
    </S.Container>
  );
}
