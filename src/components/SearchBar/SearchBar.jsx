import React from 'react';
import * as S from './SearchBar.style';
import magnifyingGlassIcon from '../../icons/icon-magnifying-glass.svg';

export default function SearchBar() {
  return (
    <S.SearchBar>
      <S.SearchIcon>
        <img src={magnifyingGlassIcon} alt='돋보기' />
      </S.SearchIcon>
      <S.SearchInput placeholder='명함을 검색해주세요' />
    </S.SearchBar>
  );
}
