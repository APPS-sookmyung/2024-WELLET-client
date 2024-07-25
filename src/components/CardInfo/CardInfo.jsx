import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardInfo.style';
import Icon from '../../components/Icon/Icon';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
export default function CardInfo({ name, job, company, imageUrl }) {
  return (
    <S.Card>
      <S.CardWrapper>
        <S.ProfileImgWrapper>
          <img src={imageUrl || ProfileImgDefault} alt={`${name} 프로필`} />
        </S.ProfileImgWrapper>
        <S.Info>
          <S.Name>{name}</S.Name>
          <S.Job>
            {job} | {company}
          </S.Job>
        </S.Info>
      </S.CardWrapper>
      <S.ArrowIconWrapper>
        <Icon id='arrow-right' fill='none' />
      </S.ArrowIconWrapper>
    </S.Card>
  );
}

CardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

CardInfo.defaultProps = {
  imageUrl: 'ProfileImgDefault',
};
