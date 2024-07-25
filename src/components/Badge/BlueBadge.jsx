import React from 'react';
import * as S from './BlueBadge.style';

export default function BlueBadge({ buttons, activeButton, setActiveButton }) {
  return (
    <>
      {buttons.map((button) => (
        <S.BlueBadge
          key={button.value}
          isActive={activeButton === button.value}
          onClick={() => setActiveButton(button.value)}
        >
          {button.label}
        </S.BlueBadge>
      ))}
    </>
  );
}
