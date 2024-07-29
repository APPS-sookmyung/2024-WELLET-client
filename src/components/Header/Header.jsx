import React from 'react';
import * as S from './Header.style';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

export default function Header({ fill }) {
  return (
    <S.Header>
      <Link to='/home'>
        <S.LogoWrapper>
          <Icon id='logo' fill={fill} />
        </S.LogoWrapper>
      </Link>
    </S.Header>
  );
}
