import React, { useEffect } from 'react';
import * as S from './BlueBadge.style';

export default function BlueBadge({
  badges,
  activeBadge,
  setActiveBadge,
  xBtnClick,
  setInfo,
}) {
  useEffect(() => {
    if (activeBadge && setInfo) {
      setInfo((prev) => ({
        ...prev,
        categoryName: activeBadge.name,
        category: activeBadge.name,
      }));
    }
  }, [activeBadge, setInfo]);

  const handleBadgeClick = (badge) => {
    setActiveBadge(badge);
  };

  return (
    <>
      {badges.map((badge) => (
        <S.BlueBadge
          key={badge.id}
          isActive={activeBadge ? activeBadge.id === badge.id : false}
          onClick={() => handleBadgeClick(badge)}
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
