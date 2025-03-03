import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCardDetail } from '../../apis/cards';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import Icon from '../../components/Icon/Icon';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';
import * as S from './CardDetailPage.style';

export default function CardDetailPage() {
  const [info, setInfo] = useState({});
  const { id } = useParams();

  async function fetchCardDetail() {
    try {
      const response = await getCardDetail({ card_id: id });
      setInfo(response.data);
    } catch (error) {
      console.error('명함 상세 정보를 불러오지 못했습니다.', error);
    }
  }

  useEffect(() => {
    fetchCardDetail();
  }, [id]);

  const filteredData = CARDS_SAMPLE_DATA.find(
    (data) => data.name === decodeURIComponent(id)
  );

  const profileImageUrl = info.profImgUrl || ProfileImgDefault;

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
                {`${info.position || ''}${info.position && info.department ? ' / ' : ''}${info.department || ''}`}
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
            {info.email && (
              <S.InfoBox>
                <S.UserInfoLabel>이메일</S.UserInfoLabel>
                <S.ContactWrapper>
                  <S.UserInfoValue>{info.email}</S.UserInfoValue>
                  <Icon id='mail' width='20' height='14' />
                </S.ContactWrapper>
              </S.InfoBox>
            )}
            {info.tel && (
              <S.InfoBox>
                <S.UserInfoLabel>유선전화</S.UserInfoLabel>
                <S.ContactWrapper>
                  <S.UserInfoValue>{info.tel}</S.UserInfoValue>
                  <Icon id='call' width='20' height='14' />
                </S.ContactWrapper>
              </S.InfoBox>
            )}
            {info.address && (
              <S.InfoBox>
                <S.UserInfoLabel>주소</S.UserInfoLabel>
                <S.UserInfoValue>{info.address}</S.UserInfoValue>
              </S.InfoBox>
            )}
          </S.ContactContainer>

          <S.ConBar>메모</S.ConBar>
          <S.ContactContainer>
            <S.InfoBox>
              <S.UserInfoValue>{info.memo}</S.UserInfoValue>
            </S.InfoBox>
          </S.ContactContainer>

          <S.GroupButtonBar>그룹</S.GroupButtonBar>
          <S.GroupButtonBox>
            <S.GroupButton>{info.category || '그룹'}</S.GroupButton>
          </S.GroupButtonBox>
          {(info.frontImg || info.backImg) && (
            <S.CardImageContainer>
              <S.CardImageBox onClick={() => handleImageClick(info.frontImg)}>
                <img src={info.frontImg} alt='사진 1' />
              </S.CardImageBox>
              {info.backImg ? (
                <S.CardImageBox onClick={() => handleImageClick(info.backImg)}>
                  <img src={info.backImg} alt='사진 2' />
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
