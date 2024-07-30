import React from 'react';
import * as S from './InputWrapper.style';
import Icon from '../Icon/Icon';

const InputWrapper = ({ label, type, placeholder, children }) => {
  return (
    <S.InputWrapper>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputBox>
        <S.Input type={type} placeholder={placeholder}>
          {children}
        </S.Input>
        <S.IconWrapper>
          <Icon id='pencil' fill='none' />
        </S.IconWrapper>
      </S.InputBox>
    </S.InputWrapper>
  );
};

export default InputWrapper;
