import React from 'react';
import * as S from './SecondaryButton.style';

export default function SecondaryButton({ style, children, onClick }) {
  return (
    <S.SecondaryButton style={style} onClick={onClick}>
      {children}
    </S.SecondaryButton>
  );
}
