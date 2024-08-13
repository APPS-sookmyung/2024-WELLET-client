import React from 'react';
import * as S from './InputWrapper.style';
import Icon from '../Icon/Icon';

const InputWrapper = ({
  label,
  type,
  placeholder,
  children,
  value,
  textColor = '#949494',
  iconId = 'pencil',
  iconFill = 'none',
  iconSize = '13',
  iconClick,
  onChange,
}) => {
  return (
    <S.InputWrapper>
      <S.InputLabel>{label}</S.InputLabel>
      <S.InputBox>
        <S.Input
          type={type}
          placeholder={placeholder}
          color={textColor}
          value={value}
          onChange={onChange}
          onKeyPress={(e) =>
            e.key === 'Enter' && (e.preventDefault(), iconClick?.(e))
          }
        >
          {children}
        </S.Input>
        <Icon
          id={iconId}
          fill={iconFill}
          width={iconSize}
          height={iconSize}
          onClick={iconClick}
        />
      </S.InputBox>
    </S.InputWrapper>
  );
};

export default InputWrapper;
