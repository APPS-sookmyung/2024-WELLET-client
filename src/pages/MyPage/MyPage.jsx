import React, { useState } from 'react';
import * as S from './MyPage.style';
import Icon from '../../components/Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { TabBar } from '../../components';

export default function MyPage() {
  const [myInfo, setMyInfo] = useState({
    name: '김은지',
    job: 'Web Engineer',
    team: '개발팀',
    company: 'WELLET Corp.',
  });

  const [myContact, setMyContact] = useState({
    phone: '010-1234-5678',
    email: 'email@welletapp.co.kr',
    tel: '81-2-222-3456',
    address: '서울시 강남구 테헤란로 134, 5-6층 (역삼동, 포스크타워 역삼)',
  });

  const navigate = useNavigate();
  const EditClick = () => {
    navigate('/mypage/edit');
  };
  return (
    <>
      <S.TopContainer>
        <S.TopBar>
          <S.LeftContainer1 />
          <S.MyName>내 명함</S.MyName>
          <S.EditIcon onClick={EditClick}>편집하기</S.EditIcon>
        </S.TopBar>
        <S.MidBar>
          <S.LeftContainer2 />
          <S.PicContainer>
            <S.ProfilePic />
          </S.PicContainer>
          <S.IconBarContainer>
            <Icon id='share' width='16' height='20' />
            <Icon id='gallery' fill='#FFFFFF' width='20' height='20' />
            <S.Dot3Icon>
              <Icon id='dot3' fill='#FFFFFF' width='20' height='24' />
            </S.Dot3Icon>
          </S.IconBarContainer>
        </S.MidBar>
        <S.BotBar>
          <S.NameBox>{myInfo.name}</S.NameBox>
          <S.SubBar />
        </S.BotBar>
      </S.TopContainer>
      <S.BottomContainer>
        <S.InfoBar>내 정보</S.InfoBar>
        <S.InfoContainer>
          <S.InfoBox>
            <S.GrayFont>성명</S.GrayFont>
            <S.BlackFont>{myInfo.company}</S.BlackFont>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>직무 / 부서</S.GrayFont>
            <S.BlackFont>{`${myInfo.job} / ${myInfo.team}`}</S.BlackFont>
          </S.InfoBox>
        </S.InfoContainer>
        <S.InfoBar>내 연락처</S.InfoBar>
        <S.ContactContainer>
          <S.InfoBox>
            <S.GrayFont>휴대폰</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont>{myContact.phone}</S.BlackFont>

              <S.IconBox>
                <Icon id='message' width='20' height='14' />
                <Icon id='call' width='20' height='14' />
              </S.IconBox>
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>이메일</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont>{myContact.email}</S.BlackFont>
              <Icon id='mail' width='20' height='14' />
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>유선전화</S.GrayFont>
            <S.ContactWrapper>
              <S.BlackFont>{myContact.tel}</S.BlackFont>
              <Icon id='call' width='20' height='14' />
            </S.ContactWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.GrayFont>주소</S.GrayFont>
            <S.BlackFont>{myContact.address}</S.BlackFont>
          </S.InfoBox>
        </S.ContactContainer>
      </S.BottomContainer>
      <TabBar />
    </>
  );
}
