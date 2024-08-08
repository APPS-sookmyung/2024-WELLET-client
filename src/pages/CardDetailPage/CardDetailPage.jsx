import React from 'react';
import * as S from './CardDetailPage.style';
import Icon from '../../components/Icon/Icon';
import { TabBar, BlueBadge, CardInfo } from '../../components';

export default function CardDetailPage() {
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
            <S.ProfilePic />
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
            <S.NameFont></S.NameFont>
            <S.JobTeamFont>
              <S.ComFont></S.ComFont>
            </S.JobTeamFont>
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
              <S.BlackFont></S.BlackFont>

              <S.IconBox>
                <Icon id='message' width='20' height='14' />
                <Icon id='call' width='20' height='14' />
              </S.IconBox>
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>이메일</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont></S.BlackFont>
              <Icon id='mail' width='20' height='14' />
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>유선전화</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont></S.BlackFont>
              <Icon id='call' width='20' height='14' />
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>주소</S.GrayFont>
            <S.BlackFont></S.BlackFont>
          </S.InfoBox>
        </S.ContactContainer>
        <S.GroupButtonBar>그룹</S.GroupButtonBar>
        <S.GroupButtonBox></S.GroupButtonBox>
      </S.BottomContainer>
      <TabBar />
    </>
  );
}
