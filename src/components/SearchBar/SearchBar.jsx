import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchCards } from '../../apis/cards.js';
import Icon from '../../components/Icon/Icon';
import * as S from './SearchBar.style';

export default function SearchBar({ theme, setSearchData = () => {} }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const keywordFromParams = searchParams.get('keyword') || '';
    setInputValue(keywordFromParams);
    setSearchKeyword(keywordFromParams);
  }, [location.search]);

  useEffect(() => {
    searchKeyword && fetchSearchCard();
  }, [searchKeyword]);

  const fetchSearchCard = async () => {
    try {
      const response = await searchCards({ keyword: searchKeyword });
      setSearchData(response.data.cards);
    } catch (error) {
      console.error('검색 요청 실패:', error);
    }
  };

  const handleSearch = (event) => {
    if (event.key !== 'Enter') return;
    const trimmedValue = inputValue.trim();
    if (trimmedValue || location.pathname !== '/home') {
      navigate(
        trimmedValue
          ? `/card?keyword=${encodeURIComponent(trimmedValue)}`
          : '/card'
      );
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
        <Icon id={iconId} fill='none' onClick={handleSearch} />
      </S.SearchIcon>
      <S.SearchInput
        theme={theme}
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSearch}
      />
    </S.SearchBar>
  );
}
