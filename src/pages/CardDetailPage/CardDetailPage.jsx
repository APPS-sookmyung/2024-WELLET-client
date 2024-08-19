import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as S from './CardDetailPage.style';
import Icon from '../../components/Icon/Icon';
import { TabBar, BlueBadge } from '../../components';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';

export default function CardDetailPage() {
  const { id } = useParams();
  const [activeBadge, setActiveBadge] = useState(null);
  const [filteredBadges, setFilteredBadges] = useState([]);
  const filteredData = CARDS_SAMPLE_DATA.filter(
    (data) => data.name === decodeURIComponent(id)
  );

  useEffect(() => {
    if (filteredData.length > 0) {
      const category = filteredData[0].category;
      const relevantBadges = badges.filter((badge) => badge.value === category);
      setFilteredBadges(relevantBadges);
    }
  }, [filteredData]);

  const badges = [
    { label: '비즈니스', value: '비즈니스' },
    { label: '방송사', value: '방송사' },
    { label: '부동산', value: '부동산' },
    { label: '대학교', value: '대학교' },
  ];

  return (
    <>
      {filteredData.map((data, index) => (
        <React.Fragment key={index}>
          <S.TopContainer>
            <S.TopBar>
              <S.LeftContainer1 />
              <S.MyName>
                <Icon id='logo-white' width='60' height='24.5' />
              </S.MyName>
              <Link to={`/card/${id}/edit`}>
                <S.EditIcon>편집하기</S.EditIcon>
              </Link>
            </S.TopBar>
            <S.MidBar>
              <S.PicContainer>
                <S.ProfilePic
                  src={data.imageUrl || ProfileImgDefault}
                  alt={`${data.name} 프로필`}
                />
              </S.PicContainer>
            </S.MidBar>
            <S.BotBar>
              <S.NameBox>
                <S.NameFont>{data.name}</S.NameFont>
                <S.JobTeamFont>{data.job}</S.JobTeamFont>
                <S.ComFont>{data.company}</S.ComFont>
              </S.NameBox>
              <S.SubBar />
            </S.BotBar>
          </S.TopContainer>

          <S.BottomContainer>
            <S.ConBar>연락처</S.ConBar>
            <S.ContactContainer>
              <S.InfoBox>
                <S.UserInfoLabel>휴대폰</S.UserInfoLabel>
                <S.ContactWrapper>
                  <S.UserInfoValue>{data.phone}</S.UserInfoValue>
                  <S.IconBox>
                    <Icon id='message' width='20' height='14' />
                    <Icon id='call' width='20' height='14' />
                  </S.IconBox>
                </S.ContactWrapper>
              </S.InfoBox>
              <S.InfoBox>
                <S.UserInfoLabel>이메일</S.UserInfoLabel>
                <S.ContactWrapper>
                  <S.UserInfoValue>{data.email}</S.UserInfoValue>
                  <Icon id='mail' width='20' height='14' />
                </S.ContactWrapper>
              </S.InfoBox>
              <S.InfoBox>
                <S.UserInfoLabel>유선전화</S.UserInfoLabel>
                <S.ContactWrapper>
                  <S.UserInfoValue>{data.tel}</S.UserInfoValue>
                  <Icon id='call' width='20' height='14' />
                </S.ContactWrapper>
              </S.InfoBox>
              <S.InfoBox>
                <S.UserInfoLabel>주소</S.UserInfoLabel>
                <S.UserInfoValue>{data.address}</S.UserInfoValue>
              </S.InfoBox>
            </S.ContactContainer>
            <S.GroupButtonBar>그룹</S.GroupButtonBar>
            <S.GroupButtonBox>
              <BlueBadge
                badges={filteredBadges}
                activeBadge={activeBadge}
                setActiveBadge={setActiveBadge}
                fill='#2d29ff'
              />
            </S.GroupButtonBox>
          </S.BottomContainer>
        </React.Fragment>
      ))}
      <TabBar />
    </>
  );
}
