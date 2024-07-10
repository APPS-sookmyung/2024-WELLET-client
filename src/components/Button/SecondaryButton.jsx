import React from 'react';
import * as S from './SecondaryButton.style';

export default function SecondaryButton({ children, onClick }) {
  return <S.SecondaryButton onClick={onClick}>{children}</S.SecondaryButton>;
}
