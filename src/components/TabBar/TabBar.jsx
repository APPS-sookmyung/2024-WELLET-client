import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './TabBar.style';
import { Link } from 'react-router-dom';
import homeLogo from '../../icons/icon-nav-home.svg';
import addCardLogo from '../../icons/icon-nav-add-card.svg';
import viewCardLogo from '../../icons/icon-nav-view-card.svg';
import mypageLogo from '../../icons/icon-nav-mypage.svg';

const tabItems = [
  { path: '/home', label: '홈', logo: homeLogo, alt: '홈' },
  {
    path: '/card/add',
    label: '명함 추가',
    logo: addCardLogo,
    alt: '명함 추가',
  },
  { path: '/card', label: '명함 보기', logo: viewCardLogo, alt: '명함 보기' },
  { path: '/mypage', label: '마이페이지', logo: mypageLogo, alt: '마이페이지' },
];

export default function TabBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.TabBar>
      {tabItems.map(({ path, label, logo, alt }) => (
        <S.Icon key={path} isActive={currentPath === '/home'}>
          <Link to={path}>
            <S.IconImg isActive={currentPath === path}>
              <img src={logo} alt={alt} />
            </S.IconImg>
            <S.Text isActive={currentPath === path}>{label}</S.Text>
          </Link>
        </S.Icon>
      ))}
    </S.TabBar>
  );
}
