import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './CardDetailPage.style';
import Icon from '../../components/Icon/Icon';
import { TabBar } from '../../components';
import sampleData from '../../constants/cardData';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';

export default function CardDetailPage({
  name,
  job,
  company,
  phone,
  email,
  tel,
  address,
  imageUrl,
}) {
  return (
    <>
      <S.TopContainer>
        <S.TopBar>
          <S.LeftContainer1 />
          <S.MyName>
            <Icon id='logo-white' width='60' height='24.5' />
          </S.MyName>
          <S.EditIcon>편집하기</S.EditIcon>
        </S.TopBar>
        <S.MidBar>
          <S.LeftContainer2 />
          <S.PicContainer>
            <S.ProfilePic
              src={imageUrl || ProfileImgDefault}
              alt={`${name} 프로필`}
            />
          </S.PicContainer>
          <S.IconBarContainer>
            <Icon id='gallery' fill='#FFFFFF' width='18' height='18' />
            <S.Dot3Icon>
              <Icon
                id='dot3'
                className='dot3-icon'
                fill='#FFFFFF'
                width='5'
                height='20'
              />
            </S.Dot3Icon>
          </S.IconBarContainer>
        </S.MidBar>
        <S.BotBar>
          <S.NameBox>
            <S.NameFont>{name}</S.NameFont>
            <S.JobTeamFont>{job}</S.JobTeamFont>
            <S.ComFont>{company}</S.ComFont>
          </S.NameBox>
          <S.SubBar />
        </S.BotBar>
      </S.TopContainer>

      <S.BottomContainer>
        <S.ConBar>연락처</S.ConBar>
        <S.ContactContainer>
          <S.InfoBox>
            <S.GrayFont>휴대폰</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont>{phone}</S.BlackFont>

              <S.IconBox>
                <Icon id='message' width='20' height='14' />
                <Icon id='call' width='20' height='14' />
              </S.IconBox>
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>이메일</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont>{email}</S.BlackFont>
              <Icon id='mail' width='20' height='14' />
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>유선전화</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont>{tel}</S.BlackFont>
              <Icon id='call' width='20' height='14' />
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>주소</S.GrayFont>
            <S.BlackFont>{address}</S.BlackFont>
          </S.InfoBox>
        </S.ContactContainer>
        <S.GroupButtonBar>그룹</S.GroupButtonBar>
        <S.GroupButtonBox></S.GroupButtonBox>
      </S.BottomContainer>
      <TabBar />
    </>
  );
}

CardDetailPage.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

CardDetailPage.defaultProps = {
  imageUrl: ProfileImgDefault,
};
