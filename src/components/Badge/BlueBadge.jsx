import React from 'react';
import * as S from './BlueBadge.style';

export default function BlueBadge({ badges, activeBadge, setActiveBadge }) {
  return (
    <>
      {badges.map((badge) => (
        <S.BlueBadge
          key={badge.value}
          isActive={activeBadge === badge.value}
          onClick={() => setActiveBadge(badge.value)}
        >
          {badge.label}
        </S.BlueBadge>
      ))}
    </>
  );
}
