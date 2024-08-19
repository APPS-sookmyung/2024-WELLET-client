import React from 'react';
import { useLocation } from 'react-router-dom';
import { TabBar } from '../TabBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideTabBarPaths = ['/', '/login']; // TabBar를 숨기고 싶은 경로를 배열로 나열

  const shouldHideTabBar = hideTabBarPaths.includes(location.pathname);

  return (
    <>
      {children}
      {!shouldHideTabBar && <TabBar />}
    </>
  );
};

export default Layout;
