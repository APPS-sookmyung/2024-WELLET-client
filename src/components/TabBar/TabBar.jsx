import React from 'react';
import * as S from './TabBar.style';
import { Link } from 'react-router-dom';
import homeLogo from '../../icons/icon-nav-home.svg';
import AddCardLogo from '../../icons/icon-nav-add-card.svg';
import ViewCardLogo from '../../icons/icon-nav-view-card.svg';
import MypageLogo from '../../icons/icon-nav-mypage.svg';

export default function TabBar() {
  return (
    <S.TabBar>
      <S.Icon>
        <Link to='/home'>
          <S.IconImg>
            <img src={homeLogo} alt='홈' />
          </S.IconImg>
          <S.Text>홈</S.Text>
        </Link>
      </S.Icon>
      <S.Icon>
        <Link to='/card/add'>
          <S.IconImg>
            <img src={AddCardLogo} alt='명함 추가' />
          </S.IconImg>
          <S.Text>명함 추가</S.Text>
        </Link>
      </S.Icon>
      <S.Icon>
        <Link to='/card'>
          <S.IconImg>
            <img src={ViewCardLogo} alt='명함 보기' />
          </S.IconImg>
          <S.Text>명함 보기</S.Text>
        </Link>
      </S.Icon>
      <S.Icon>
        <Link to='/mypage'>
          <S.IconImg>
            <img src={MypageLogo} alt='마이페이지' />
          </S.IconImg>
          <S.Text>마이페이지</S.Text>
        </Link>
      </S.Icon>
    </S.TabBar>
  );
}
