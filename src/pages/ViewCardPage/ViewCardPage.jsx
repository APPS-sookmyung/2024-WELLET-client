import * as S from './ViewCardPage.style';
import magnifyingGlassIcon from '../../icons/icon-magnifying-glass.svg';
import more from '../../icons/icon-more.svg';
import arrowRight from '../../icons/icon-arrow-right.svg';
import { act, useState } from 'react';

export default function ViewCardPage() {
  const [activeButton, setActiveButton] = useState('전체보기');

  return (
    <S.ViewCardPage>
      <S.SearchBar>
        <S.SearchIcon>
          <img src={magnifyingGlassIcon} alt='돋보기' />
        </S.SearchIcon>
        <S.SearchInput placeholder='명함을 검색해주세요' />
      </S.SearchBar>

      {/* 그룹 설정 버튼 */}
      <S.ButtonContainer>
        <S.GroupBtnWrapper>
          <S.GroupBtn
            isActive={activeButton === '전체보기'}
            onClick={() => setActiveButton('전체보기')}
          >
            전체보기
          </S.GroupBtn>
          <S.GroupBtn
            isActive={activeButton === '비즈니스'}
            onClick={() => {
              setActiveButton('비즈니스');
            }}
          >
            비즈니스
          </S.GroupBtn>
          <S.GroupBtn
            isActive={activeButton === '음식점'}
            onClick={() => setActiveButton('음식점')}
          >
            음식점
          </S.GroupBtn>
        </S.GroupBtnWrapper>
        <S.EditBtn>
          <S.EditText>그룹 수정</S.EditText>
          <S.MoreIcon>
            <img src={more} alt='더보기' />
          </S.MoreIcon>
        </S.EditBtn>
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
  );
}
