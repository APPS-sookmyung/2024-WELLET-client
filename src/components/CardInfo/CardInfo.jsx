import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import * as S from './CardInfo.style';

export default function CardInfo({
  id,
  name,
  position,
  department,
  imageUrl,
  isDeleteMode = false,
  isSelected = false,
  onClick = () => {},
}) {
  const cardContent = (
    <S.Card
      onClick={onClick}
      isDeleteMode={isDeleteMode}
      isSelected={isSelected}
    >
      <S.CardWrapper>
        <S.ProfileImgWrapper>
          {imageUrl ? (
            <img src={imageUrl} alt={`${name} 프로필`} />
          ) : (
            <Icon id='profile-basic' fill='none' />
          )}
        </S.ProfileImgWrapper>
        <S.Info>
          <S.Name isSelected={isSelected}>{name}</S.Name>
          <S.Role isSelected={isSelected}>
            {department} {department && position ? `/ ${position}` : position}
          </S.Role>
        </S.Info>
      </S.CardWrapper>
      {!isDeleteMode && (
        <S.ArrowIconWrapper>
          <Icon id='arrow-right' fill='none' />
        </S.ArrowIconWrapper>
      )}
      {isDeleteMode && (
        <S.ArrowIconWrapper>
          <Icon id={isSelected ? 'circle-check' : 'circle'} fill='none' />
        </S.ArrowIconWrapper>
      )}
    </S.Card>
  );

  return isDeleteMode ? (
    cardContent
  ) : (
    <Link to={`/card/${id}`}>{cardContent}</Link>
  );
}

CardInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string,
  position: PropTypes.string,
  department: PropTypes.string,
  imageUrl: PropTypes.string,
  isDeleteMode: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
