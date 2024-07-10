import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './TabBar.style';
import { Link } from 'react-router-dom';
import homeLogo from '../../icons/icon-nav-home.svg';
import addCardLogo from '../../icons/icon-nav-add-card.svg';
import viewCardLogo from '../../icons/icon-nav-view-card.svg';
import mypageLogo from '../../icons/icon-nav-mypage.svg';

export default function TabBar() {
  const location = useLocation();

  return (
    <S.TabBar>
      <S.Icon isActive={location.pathname === '/home'}>
        <Link to='/home'>
          <S.IconImg isActive={location.pathname === '/home'}>
            <img src={homeLogo} alt='홈' />
          </S.IconImg>
          <S.Text isActive={location.pathname === '/home'}>홈</S.Text>
        </Link>
      </S.Icon>
      <S.Icon isActive={location.pathname === '/card/add'}>
        <Link to='/card/add'>
          <S.IconImg isActive={location.pathname === '/card/add'}>
            <img src={addCardLogo} alt='명함 추가' />
          </S.IconImg>
          <S.Text isActive={location.pathname === '/card/add'}>
            명함 추가
          </S.Text>
        </Link>
      </S.Icon>
      <S.Icon isActive={location.pathname === '/card'}>
        <Link to='/card'>
          <S.IconImg isActive={location.pathname === '/card'}>
            <img src={viewCardLogo} alt='명함 보기' />
          </S.IconImg>
          <S.Text isActive={location.pathname === '/card'}>명함 보기</S.Text>
        </Link>
      </S.Icon>
      <S.Icon isActive={location.pathname === '/mypage'}>
        <Link to='/mypage'>
          <S.IconImg isActive={location.pathname === '/mypage'}>
            <img src={mypageLogo} alt='마이페이지' />
          </S.IconImg>
          <S.Text isActive={location.pathname === '/mypage'}>마이페이지</S.Text>
        </Link>
      </S.Icon>
    </S.TabBar>
  );
}
