import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as S from './CardDetailPage.style';
import Icon from '../../components/Icon/Icon';
import { DetailBadge } from '../../components';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';
import { getCardDetail } from '../../apis/cards';
import { useQuery } from '@tanstack/react-query';

export default function CardDetailPage() {
  const [info, setInfo] = useState({});
  console.log(info);
  const { id } = useParams();

  const { data: inputData } = useQuery({
    queryKey: ['cardDetail', id],
    queryFn: () => getCardDetail({ card_id: id }),
  });

  useEffect(() => {
    if (inputData) {
      setInfo(inputData.data);
    }
  }, [inputData]);

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

  // const data = filteredData || {
  //   imageUrl: '',
  //   name: '이름없음',
  //   job: '직책없음',
  //   team: '팀없음',
  //   company: '회사없음',
  //   phone: '전화번호없음',
  //   email: '이메일없음',
  //   tel: '유선전화없음',
  //   address: '주소없음',
  //   memo: '메모없음',
  //   pic1: '사진없음',
  //   pic2: '사진없음',
  // };

  const profileImageUrl = info.profImgUrl || ProfileImgDefault;

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
              <S.ProfilePic src={profileImageUrl} alt={`${info.name} 프로필`} />
            </S.PicContainer>
          </S.MidBar>
          <S.BotBar>
            <S.NameBox>
              <S.NameFont>{info.name}</S.NameFont>
              <S.JobTeamFont>
                {info.position} / {info.department}
              </S.JobTeamFont>
              <S.ComFont>{info.company}</S.ComFont>
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
                <S.UserInfoValue>{info.phone}</S.UserInfoValue>
                <S.IconBox>
                  <Icon id='message' width='20' height='14' />
                  <Icon id='call' width='20' height='14' />
                </S.IconBox>
              </S.ContactWrapper>
            </S.InfoBox>
            <S.InfoBox>
              <S.UserInfoLabel>이메일</S.UserInfoLabel>
              <S.ContactWrapper>
                <S.UserInfoValue>{info.email}</S.UserInfoValue>
                <Icon id='mail' width='20' height='14' />
              </S.ContactWrapper>
            </S.InfoBox>
            <S.InfoBox>
              <S.UserInfoLabel>유선전화</S.UserInfoLabel>
              <S.ContactWrapper>
                <S.UserInfoValue>{info.tel}</S.UserInfoValue>
                <Icon id='call' width='20' height='14' />
              </S.ContactWrapper>
            </S.InfoBox>
            <S.InfoBox>
              <S.UserInfoLabel>주소</S.UserInfoLabel>
              <S.UserInfoValue>{info.address}</S.UserInfoValue>
            </S.InfoBox>
          </S.ContactContainer>
          <S.ConBar>메모</S.ConBar>
          <S.ContactContainer>
            <S.InfoBox>
              <S.UserInfoValue>{info.memo}</S.UserInfoValue>
            </S.InfoBox>
          </S.ContactContainer>
          <S.GroupButtonBar>그룹</S.GroupButtonBar>
          <S.GroupButtonBox>
            <DetailBadge badges={filteredBadges} activeBadge={activeBadge} />
          </S.GroupButtonBox>
          {(info.pic1 || info.pic2) && (
            <S.CardImageContainer>
              <S.CardImageBox onClick={() => handleImageClick(info.pic1)}>
                <img src={info.pic1} alt='사진 1' />
              </S.CardImageBox>
              {info.pic2 ? (
                <S.CardImageBox onClick={() => handleImageClick(info.pic2)}>
                  <img src={info.pic2} alt='사진 2' />
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
