import React from 'react';
import * as S from './BlueButton.style';

export default function BlueButton({ buttons, activeButton, setActiveButton }) {
  return (
    <>
      {buttons.map((button) => (
        <S.BlueButton
          key={button.value}
          isActive={activeButton === button.value}
          onClick={() => setActiveButton(button.value)}
        >
          {button.label}
        </S.BlueButton>
      ))}
    </>
  );
}
