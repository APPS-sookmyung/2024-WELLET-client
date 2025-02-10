import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCards, searchCards } from '../../apis';
import Icon from '../../components/Icon/Icon';
import * as S from './SearchBar.style';

export default function SearchBar({
  theme,
  setSearchData = () => {},
  myCardId,
}) {
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/card')) {
      const savedKeyword = localStorage.getItem('searchKeyword') || '';
      setKeyword(savedKeyword);
    }
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 200);

    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    if (debouncedKeyword === '') {
      fetchCards();
    } else {
      fetchSearchCard();
    }
  }, [debouncedKeyword]);

  const fetchSearchCard = async () => {
    try {
      const response = await searchCards({ keyword: debouncedKeyword });
      const exceptMyCard = response.data.cards.filter(
        (card) => card.id !== myCardId
      );
      setSearchData(exceptMyCard);
    } catch (error) {
      console.error('검색 요청 실패:', error);
    }
  };

  const fetchCards = async () => {
    try {
      const response = await getCards();
      const exceptMyCard = response.data.cards.filter(
        (card) => card.id !== myCardId
      );
      setSearchData(exceptMyCard);
    } catch (error) {
      console.error('카드 리스트 불러오기 실패:', error);
    }
  };

  const handleSearch = (event) => {
    const trimmedValue = keyword.trim();
    if (trimmedValue) {
      localStorage.setItem('searchKeyword', trimmedValue);
      fetchSearchCard();
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
        value={keyword}
        onChange={(e) => {
          const newKeyword = e.target.value;
          setKeyword(newKeyword);
          localStorage.setItem('searchKeyword', newKeyword);
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
      />
    </S.SearchBar>
  );
}
