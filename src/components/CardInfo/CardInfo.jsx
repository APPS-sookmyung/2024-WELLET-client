import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardInfo.style';
import Icon from '../../components/Icon/Icon';
import { Link } from 'react-router-dom';

export default function CardInfo({
  id,
  name,
  role,
  company,
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
            {role} / {company}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  isDeleteMode: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
