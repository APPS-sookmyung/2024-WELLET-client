import React from 'react';
import * as S from './BlueBadge.style';

export default function BlueBadge({
  badges,
  activeBadge,
  setActiveBadge,
  xBtnClick,
}) {
  return (
    <>
      {badges.map((badge) => (
        <S.BlueBadge
          key={badge.value}
          isActive={activeBadge ? activeBadge === badge.value : false}
          onClick={() => setActiveBadge && setActiveBadge(badge.value)}
        >
          {xBtnClick && (
            <p
              onClick={(e) => {
                xBtnClick(badge.value);
              }}
            >
              X
            </p>
          )}
          {badge.value}
        </S.BlueBadge>
      ))}
    </>
  );
}
