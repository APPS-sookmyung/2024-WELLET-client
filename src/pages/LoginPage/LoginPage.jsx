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
          onClick={() => navigate('/home')}
        >
          <S.KakaoIcon>
            <Icon id='kakao' />
          </S.KakaoIcon>
          카카오 계정 로그인
        </PrimaryButton>
      </S.Btns>
    </S.Container>
  );
}
