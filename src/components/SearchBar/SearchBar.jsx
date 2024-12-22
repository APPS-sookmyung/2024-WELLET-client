import React, { useState } from 'react';
import * as S from './SearchBar.style';
import Icon from '../../components/Icon/Icon';
import { searchCards } from '../../apis/cards.js';

export default function SearchBar({ theme }) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (keyword.trim() === '') return;
    searchCards(keyword);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const iconId =
    theme === 'white' ? 'magnifying-glass-gray2' : 'magnifying-glass-gray1';
  const placeholderText =
    theme === 'white'
      ? '명함을 검색해주세요'
      : '이름, 직책, 이메일, 휴대폰, 유선전화, 부서, 회사명 등을 입력하세요';

  return (
    <S.SearchBar theme={theme}>
      <S.SearchIcon theme={theme}>
        <Icon id={iconId} fill='none' />
      </S.SearchIcon>
      <S.SearchInput
        theme={theme}
        placeholder={placeholderText}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </S.SearchBar>
  );
}
