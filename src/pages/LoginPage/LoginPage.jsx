import { useNavigate } from 'react-router-dom';
import { kakaoLoginAPI } from '../../apis';
import login_background_circles from '../../assets/images/login_background_circles.svg';
import login_background_lines from '../../assets/images/login_background_lines.svg';
import { PrimaryButton } from '../../components';
import Icon from '../../components/Icon/Icon';
import * as S from './LoginPage.styles';

export default function LoginPage() {
  const navigate = useNavigate();

  async function kakaoLogin() {
    try {
      const response = await kakaoLoginAPI(); // 카카오 로그인 API 호출
    } catch (error) {
      // 로그인 실패 시 처리
      alert('로그인 실패. 다시 시도.' + error);
    }
  }

  async function kakaoLogin() {
    try {
      const response = await kakaoLoginAPI(); // 카카오 로그인 API 호출
    } catch (error) {
      // 로그인 실패 시 처리
      alert('로그인 실패. 다시 시도.' + error);
    }
  }

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
            gap: '4px',
          }}
          onClick={kakaoLogin}
        >
          <S.KakaoIcon>
            <Icon id='kakao' width={15} height={14} />
          </S.KakaoIcon>
          카카오 계정 로그인
        </PrimaryButton>
      </S.Btns>
    </S.Container>
  );
}
