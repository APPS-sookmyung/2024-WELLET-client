import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './TabBar.style';
import { Link } from 'react-router-dom';
import homeLogo from '../../icons/icon-nav-home.svg';
import homeActiveLogo from '../../icons/icon-nav-home-active.svg';
import addCardLogo from '../../icons/icon-nav-add-card.svg';
import addCardActiveLogo from '../../icons/icon-nav-add-card-active.svg';
import viewCardLogo from '../../icons/icon-nav-view-card.svg';
import viewCardActiveLogo from '../../icons/icon-nav-view-card-active.svg';
import mypageLogo from '../../icons/icon-nav-mypage.svg';
import mypageActiveLogo from '../../icons/icon-nav-mypage-active.svg';

const tabItems = [
  {
    path: '/home',
    label: '홈',
    logo: homeLogo,
    activeLogo: homeActiveLogo,
    alt: '홈',
  },
  {
    path: '/card/add',
    label: '명함 추가',
    logo: addCardLogo,
    activeLogo: addCardActiveLogo,
    alt: '명함 추가',
  },
  {
    path: '/card',
    label: '명함 보기',
    logo: viewCardLogo,
    activeLogo: viewCardActiveLogo,
    alt: '명함 보기',
  },
  {
    path: '/mypage',
    label: '마이페이지',
    logo: mypageLogo,
    activeLogo: mypageActiveLogo,
    alt: '마이페이지',
  },
];

export default function TabBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.TabBar>
      {tabItems.map(({ path, label, logo, activeLogo, alt }) => {
        const isActive = currentPath === path;
        return (
          <S.Icon key={path} isActive={isActive}>
            <Link to={path}>
              <S.IconImg isActive={isActive}>
                <img src={isActive ? activeLogo : logo} alt={alt} />
              </S.IconImg>
              <S.Text isActive={isActive}>{label}</S.Text>
            </Link>
          </S.Icon>
        );
      })}
    </S.TabBar>
  );
}
