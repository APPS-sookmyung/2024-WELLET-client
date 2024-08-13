import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardInfo.style';
import Icon from '../../components/Icon/Icon';
import { Link } from 'react-router-dom';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';

export default function CardInfo({
  name,
  job,
  company,
  imageUrl,
  isDeleteMode,
  isSelected,
  onClick,
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
      <Link to={`/card/${name}`}>
        <S.ArrowIconWrapper>
          <Icon
            id={
              isDeleteMode
                ? isSelected
                  ? 'circle-check'
                  : 'circle'
                : 'arrow-right'
            }
            fill='none'
          />
        </S.ArrowIconWrapper>
      </Link>
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

CardInfo.defaultProps = {
  imageUrl: ProfileImgDefault,
  isDeleteMode: false,
  isSelected: false,
  onClick: () => {},
};
