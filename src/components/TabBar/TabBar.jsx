import React from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './TabBar.style';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';

const tabItems = [
  {
    path: '/home',
    label: '홈',
    alt: '홈',
    icon: <Icon id='nav-home' fill='none' />,
    activeIcon: <Icon id='nav-home-active' fill='none' />,
  },
  {
    path: '/card/add',
    label: '명함 추가',
    alt: '명함 추가',
    icon: <Icon id='nav-add-card' fill='none' />,
    activeIcon: <Icon id='nav-add-card-active' fill='none' />,
  },
  {
    path: '/card',
    label: '명함 보기',
    alt: '명함 보기',
    icon: <Icon id='nav-view-card' fill='none' />,
    activeIcon: <Icon id='nav-view-card-active' fill='none' />,
  },
  {
    path: '/mypage',
    label: '마이페이지',
    alt: '마이페이지',
    icon: <Icon id='nav-mypage' fill='none' />,
    activeIcon: <Icon id='nav-mypage-active' fill='none' />,
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
          <Link key={path} to={path}>
            <S.Icon isActive={isActive}>
              <S.IconImg isActive={isActive}>
                {isActive ? activeIcon : icon}
              </S.IconImg>
              <S.Text isActive={isActive}>{label}</S.Text>
            </S.Icon>
          </Link>
        );
      })}
    </S.TabBar>
  );
}
