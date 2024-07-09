import React from 'react';
import * as S from './Header.style';
import { Link } from 'react-router-dom';
import logo from '../../icons/logo.svg';

export default function Header() {
  return (
    <S.Header>
      <Link to='/home'>
        <S.LogoWrapper>
          <img src={logo} alt='로고 이미지' />
        </S.LogoWrapper>
      </Link>
    </S.Header>
  );
}
