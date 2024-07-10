import React from 'react';
import * as S from './InputWrapper.style';
import pencilIcon from '../../icons/icon-pencil.svg';

const InputWrapper = ({ label, type, placeholder, children }) => {
  return (
    <S.InputWrapper>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputBox>
        <S.Input type={type} placeholder={placeholder}>
          {children}
        </S.Input>
        <S.IconWrapper>
          <img src={pencilIcon} alt='연필 아이콘' />
        </S.IconWrapper>
      </S.InputBox>
    </S.InputWrapper>
  );
};

export default InputWrapper;
