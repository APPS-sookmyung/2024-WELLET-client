import React from 'react';
import * as S from './BadgeDetail.style';

export default function DetailBadge({ badges, activeBadge }) {
  return (
    <>
      {badges.map((badge) => (
        <S.DetailBadge
          key={badge.value}
          isActive={activeBadge ? activeBadge === badge.value : false}
        >
          {badge.label}
        </S.DetailBadge>
      ))}
    </>
  );
}
