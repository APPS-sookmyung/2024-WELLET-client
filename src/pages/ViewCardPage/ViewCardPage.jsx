import * as S from './ViewCardPage.style';
import { Header, TabBar, SearchBar, BlueButton } from '../../components';
import more from '../../icons/icon-more.svg';
import arrowRight from '../../icons/icon-arrow-right.svg';
import { act, useState } from 'react';

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
          <S.Card>
            <S.CardWrapper>
              <S.ImgWrapper></S.ImgWrapper>
              <S.Info>
                <S.Name>박유진</S.Name>
                <S.Job>프론트엔드 개발자, 숙명여자대학교</S.Job>
              </S.Info>
            </S.CardWrapper>
            <S.ArrowRightIcon>
              <img src={arrowRight} alt='' />
            </S.ArrowRightIcon>
          </S.Card>
          <S.Card>
            <S.CardWrapper>
              <S.ImgWrapper></S.ImgWrapper>
              <S.Info>
                <S.Name>박유진</S.Name>
                <S.Job>프론트엔드 개발자, 숙명여자대학교</S.Job>
              </S.Info>
            </S.CardWrapper>
            <S.ArrowRightIcon>
              <img src={arrowRight} alt='' />
            </S.ArrowRightIcon>
          </S.Card>
          <S.Card>
            <S.CardWrapper>
              <S.ImgWrapper></S.ImgWrapper>
              <S.Info>
                <S.Name>박유진</S.Name>
                <S.Job>프론트엔드 개발자, 숙명여자대학교</S.Job>
              </S.Info>
            </S.CardWrapper>
            <S.ArrowRightIcon>
              <img src={arrowRight} alt='' />
            </S.ArrowRightIcon>
          </S.Card>
        </S.CardContainer>
      </S.ViewCardPage>
      <TabBar />
    </>
  );
}
