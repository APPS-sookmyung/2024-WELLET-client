import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './SearchBar.style';
import Icon from '../../components/Icon/Icon';
import { searchCards } from '../../apis/cards.js';

export default function SearchBar({ theme }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(
    new URLSearchParams(location.search).get('keyword') || ''
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keywordFromParams = searchParams.get('keyword');
    if (keywordFromParams) {
      setKeyword(keywordFromParams);
      searchCards(keywordFromParams);
    }
  }, [location.search]);

  const handleSearch = () => {
    if (keyword.trim() === '') return;
    searchCards(keyword);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('keyword', keyword);
      if (location.pathname === '/home') {
        navigate(`/card?${searchParams.toString()}`);
      } else {
        navigate(`${location.pathname}?${searchParams.toString()}`);
      }
      handleSearch();
    }
  };

  const handleSearchIconClick = () => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('keyword', keyword);
    if (location.pathname === '/home') {
      navigate(`/card?${searchParams.toString()}`);
    } else {
      navigate(`${location.pathname}?${searchParams.toString()}`);
    }
    handleSearch();
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
        <Icon id={iconId} fill='none' onClick={handleSearchIconClick} />
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
