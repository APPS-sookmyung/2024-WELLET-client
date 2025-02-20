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
          key={badge.id}
          isActive={activeBadge ? activeBadge.id === badge.id : false}
          onClick={() => setActiveBadge && setActiveBadge(badge)}
        >
          {xBtnClick && (
            <p
              onClick={(e) => {
                xBtnClick(badge.name);
              }}
            >
              X
            </p>
          )}
          {badge.name}
        </S.BlueBadge>
      ))}
    </>
  );
}
