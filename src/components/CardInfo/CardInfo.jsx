import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import * as S from './CardInfo.style';

export default function CardInfo({
  id,
  name,
  company,
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
            {`${company || ''}${company && (department || position) ? ' / ' : ''}${department || ''}${department && position ? ' / ' : ''}${position || ''}`}
          </S.Role>
        </S.Info>
      </S.CardWrapper>
      {!isDeleteMode && (
        <S.ArrowIconWrapper>
          <Icon id='arrow-right' fill='none' width={13} height={13} />
        </S.ArrowIconWrapper>
      )}
      {isDeleteMode && (
        <S.ArrowIconWrapper>
          <Icon
            id={isSelected ? 'circle-check' : 'circle'}
            fill='none'
            width={16}
            height={16}
          />
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
