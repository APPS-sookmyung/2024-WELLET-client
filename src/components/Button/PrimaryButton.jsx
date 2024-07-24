import React from 'react';
import * as S from './PrimaryButton.style';

export default function PrimaryButton({ children, onClick, style }) {
  return (
    <S.PrimaryButton style={style} onClick={onClick}>
      {children}
    </S.PrimaryButton>
  );
}
