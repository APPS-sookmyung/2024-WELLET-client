import React from 'react';
import * as S from './Header.style';
import logo from '../../icons/logo.svg';

export default function Header() {
  return (
    <S.Header>
      <S.LogoWrapper>
        <img src={logo} alt='로고 이미지' />
      </S.LogoWrapper>
    </S.Header>
  );
}
