import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as S from './CardDetailPage.style';
import Icon from '../../components/Icon/Icon';
import { DetailBadge } from '../../components';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';

export default function CardDetailPage() {
  const { id } = useParams();

  const badges = [
    { label: '비즈니스', value: '비즈니스' },
    { label: '방송사', value: '방송사' },
    { label: '부동산', value: '부동산' },
    { label: '대학교', value: '대학교' },
  ];

  const filteredData = CARDS_SAMPLE_DATA.find(
    (data) => data.name === decodeURIComponent(id)
  );

  const filteredBadges = filteredData
    ? badges.filter((badge) => badge.value === filteredData.category)
    : [];

  const data = filteredData || {
    imageUrl: '',
    name: '이름없음',
    job: '직책없음',
    team: '팀없음',
    company: '회사없음',
    phone: '전화번호없음',
    email: '이메일없음',
    tel: '유선전화없음',
    address: '주소없음',
    memo: '메모없음',
    pic1: '사진없음',
    pic2: '사진없음',
  };

  const profileImageUrl = data.imageUrl || ProfileImgDefault;

  const activeBadge = filteredData ? filteredData.category : '';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const handleImageClick = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };
  return (
    <>
      <S.CardDetail>
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
              <S.ProfilePic src={profileImageUrl} alt={`${data.name} 프로필`} />
            </S.PicContainer>
          </S.MidBar>
          <S.BotBar>
            <S.NameBox>
              <S.NameFont>{data.name}</S.NameFont>
              <S.JobTeamFont>
                {data.job} / {data.team}
              </S.JobTeamFont>
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
          <S.ConBar>메모</S.ConBar>
          <S.ContactContainer>
            <S.InfoBox>
              <S.UserInfoValue>{data.memo}</S.UserInfoValue>
            </S.InfoBox>
          </S.ContactContainer>
          <S.GroupButtonBar>그룹</S.GroupButtonBar>
          <S.GroupButtonBox>
            <DetailBadge badges={filteredBadges} activeBadge={activeBadge} />
          </S.GroupButtonBox>
          {(data.pic1 || data.pic2) && (
            <S.CardImageContainer>
              <S.CardImageBox onClick={() => handleImageClick(data.pic1)}>
                <img src={data.pic1} alt='사진 1' />
              </S.CardImageBox>
              {data.pic2 ? (
                <S.CardImageBox onClick={() => handleImageClick(data.pic2)}>
                  <img src={data.pic2} alt='사진 2' />
                </S.CardImageBox>
              ) : (
                <S.CardImageBox />
              )}
            </S.CardImageContainer>
          )}
        </S.BottomContainer>
        {isModalOpen && (
          <S.ModalOverlay>
            <S.Modal>
              <S.CloseButton onClick={handleCloseModal}>
                <Icon id='modal-close' width='22' height='22' />
              </S.CloseButton>
              <button onClick={handleCloseModal} />
              <img src={modalImage} alt='Original' />
            </S.Modal>
          </S.ModalOverlay>
        )}
      </S.CardDetail>
    </>
  );
}
