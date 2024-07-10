import * as S from './ViewCardPage.style';
import {
  Header,
  TabBar,
  SearchBar,
  BlueButton,
  CardInfo,
} from '../../components';
import more from '../../icons/icon-more.svg';
import { useState } from 'react';

export default function ViewCardPage() {
  const [activeButton, setActiveButton] = useState('전체 보기');
  const buttons = [
    { label: '전체 보기', value: '전체 보기' },
    { label: '비즈니스', value: '비즈니스' },
    { label: '음식점', value: '음식점' },
  ];

  return (
    <>
      <S.ViewCardPage>
        <Header />
        <SearchBar />

        {/* 그룹 설정 버튼 */}
        <S.ButtonContainer>
          <S.GroupBtnWrapper>
            <BlueButton
              buttons={buttons}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </S.GroupBtnWrapper>
          <S.EditBtnWrapper>
            <S.EditText>그룹 수정</S.EditText>
            <S.MoreIcon>
              <img src={more} alt='더보기' />
            </S.MoreIcon>
          </S.EditBtnWrapper>
        </S.ButtonContainer>

        {/* 명함 */}
        <S.CardContainer>
          <CardInfo />
        </S.CardContainer>
      </S.ViewCardPage>
      <TabBar />
    </>
  );
}
