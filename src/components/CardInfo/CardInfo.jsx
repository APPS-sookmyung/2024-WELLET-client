import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardInfo.style';
import arrowRight from '../../icons/icon-arrow-right.svg';

export default function CardInfo({ name, job, company, imageUrl }) {
  return (
    <S.Card>
      <S.CardWrapper>
        <S.ImgWrapper>
          {imageUrl && <img src={imageUrl} alt={`${name} 프로필`} />}
        </S.ImgWrapper>
        <S.Info>
          <S.Name>{name}</S.Name>
          <S.Job>
            {job} | {company}
          </S.Job>
        </S.Info>
      </S.CardWrapper>
      <S.ArrowRightIcon>
        <img src={arrowRight} alt='우측 화살표' />
      </S.ArrowRightIcon>
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
  imageUrl: '',
};
