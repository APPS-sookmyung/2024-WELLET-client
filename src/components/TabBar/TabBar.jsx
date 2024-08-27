import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './TabBar.style';

import {
  nav_home,
  nav_home_active,
  nav_add_card,
  nav_add_card_active,
  nav_view_card,
  nav_view_card_active,
  nav_mypage,
  nav_mypage_active,
} from '../../assets/icons';

const tabItems = [
  {
    path: '/home',
    label: '홈',
    alt: '홈',
    icon: <img src={nav_home}></img>,
    activeIcon: <img src={nav_home_active}></img>,
  },
  {
    path: '/card/add',
    label: '명함 추가',
    alt: '명함 추가',
    icon: <img src={nav_add_card}></img>,
    activeIcon: <img src={nav_add_card_active}></img>,
  },
  {
    path: '/card',
    label: '명함 보기',
    alt: '명함 보기',
    icon: <img src={nav_view_card}></img>,
    activeIcon: <img src={nav_view_card_active}></img>,
  },
  {
    path: '/mypage',
    label: '마이페이지',
    alt: '마이페이지',
    icon: <img src={nav_mypage}></img>,
    activeIcon: <img src={nav_mypage_active}></img>,
  },
];

export default function TabBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.TabBar>
      {tabItems.map(({ path, label, alt, icon, activeIcon }) => {
        const isActive = currentPath === path;
        return (
          <S.Icon isactive={toString(isActive)} key={path} to={path}>
            <S.IconImg isactive={isActive}>
              {isActive ? activeIcon : icon}
            </S.IconImg>
            <S.Text isactive={isActive}>{label}</S.Text>
          </S.Icon>
        );
      })}
    </S.TabBar>
  );
}
