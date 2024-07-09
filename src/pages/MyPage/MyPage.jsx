import * as S from './MyPage.style';
import { Header, TabBar } from '../../components';

export default function MyPage() {
  return (
    <>
      <S.MyPage>
        <Header />
        <S.Container>마이페이지</S.Container>
      </S.MyPage>
      <TabBar />
    </>
  );
}
