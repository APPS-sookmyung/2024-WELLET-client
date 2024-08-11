import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardInfo.style';
import Icon from '../../components/Icon/Icon';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';

export default function CardInfo({
  name,
  job,
  company,
  imageUrl = ProfileImgDefault,
  isDeleteMode = false,
  isSelected = false,
  onClick = () => {},
}) {
  return (
    <S.Card
      onClick={onClick}
      isDeleteMode={isDeleteMode}
      isSelected={isSelected}
    >
      <S.CardWrapper>
        <S.ProfileImgWrapper>
          <img src={imageUrl || ProfileImgDefault} alt={`${name} 프로필`} />
        </S.ProfileImgWrapper>
        <S.Info>
          <S.Name isSelected={isSelected}>{name}</S.Name>
          <S.Job isSelected={isSelected}>
            {job}, {company}
          </S.Job>
        </S.Info>
      </S.CardWrapper>
      <S.ArrowIconWrapper>
        <Icon
          id={
            isDeleteMode
              ? isSelected
                ? 'circle-check'
                : 'circle'
              : 'arrow-right'
          }
        />
      </S.ArrowIconWrapper>
    </S.Card>
  );
}

CardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  isDeleteMode: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
