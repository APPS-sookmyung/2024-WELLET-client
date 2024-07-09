import * as S from './AddCardPage.style';
import { useState } from 'react';
import magnifyingGlassIcon from '../../icons/icon-magnifying-glass.svg';

export default function AddCardPage() {
  const [activeButton, setActiveButton] = useState('이미지로 입력');

  return (
    <S.AddCardPage>
      <S.SearchBar>
        <S.SearchIcon>
          <img src={magnifyingGlassIcon} alt='돋보기' />
        </S.SearchIcon>
        <S.SearchInput placeholder='명함을 검색해주세요' />
      </S.SearchBar>

      <S.TitleContainer>
        <S.Title>명함 추가하기</S.Title>
        <S.Subtitle>사진을 첨부하거나 직접 입력하여 명함 추가하기</S.Subtitle>
      </S.TitleContainer>

      <S.ButtonContainer>
        <S.GroupBtnWrapper>
          <S.GroupBtn
            isActive={activeButton === '이미지로 입력'}
            onClick={() => setActiveButton('이미지로 입력')}
          >
            이미지로 입력
          </S.GroupBtn>
          <S.GroupBtn
            isActive={activeButton === '직접 입력'}
            onClick={() => {
              setActiveButton('직접 입력');
            }}
          >
            직접 입력
          </S.GroupBtn>
        </S.GroupBtnWrapper>
      </S.ButtonContainer>
    </S.AddCardPage>
  );
}
