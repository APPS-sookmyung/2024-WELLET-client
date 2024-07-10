import React from 'react';
import * as S from './PrimaryButton.style';

export default function PrimaryButton({ children, onClick }) {
  return <S.PrimaryButton onClick={onClick}>{children}</S.PrimaryButton>;
}
