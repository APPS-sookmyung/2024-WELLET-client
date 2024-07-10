import React from 'react';
import * as S from './CardInfo.style';
import arrowRight from '../../icons/icon-arrow-right.svg';

export default function CardInfo() {
  return (
    <S.Card>
      <S.CardWrapper>
        <S.ImgWrapper></S.ImgWrapper>
        <S.Info>
          <S.Name>박유진</S.Name>
          <S.Job>프론트엔드 개발자, 숙명여자대학교</S.Job>
        </S.Info>
      </S.CardWrapper>
      <S.ArrowRightIcon>
        <img src={arrowRight} alt='' />
      </S.ArrowRightIcon>
    </S.Card>
  );
}
