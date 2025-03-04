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
          <div>
            <S.ConBar>연락처</S.ConBar>
            <S.ContactContainer>
              <S.InfoBox>
                <S.UserInfoLabel>휴대폰</S.UserInfoLabel>
                <S.ContactWrapper>
                  <S.UserInfoValue>{info.phone}</S.UserInfoValue>
                  <S.IconBox>
                    <a href={`sms:${info.phone}`}>
                      <Icon id='message' width='20' height='14' />
                    </a>
                    <a href={`tel:${info.phone}`}>
                      <Icon id='call' width='20' height='14' />
                    </a>
                  </S.IconBox>
                </S.ContactWrapper>
              </S.InfoBox>
              {info.email && (
                <S.InfoBox>
                  <S.UserInfoLabel>이메일</S.UserInfoLabel>
                  <S.ContactWrapper>
                    <S.UserInfoValue>{info.email}</S.UserInfoValue>
                    <a href={`mailto:${info.email}`}>
                      <Icon id='mail' width='20' height='14' />
                    </a>
                  </S.ContactWrapper>
                </S.InfoBox>
              )}
              {info.tel && (
                <S.InfoBox>
                  <S.UserInfoLabel>유선전화</S.UserInfoLabel>
                  <S.ContactWrapper>
                    <S.UserInfoValue>{info.tel}</S.UserInfoValue>
                    <a href={`tel:${info.tel}`}>
                      <Icon id='call' width='20' height='14' />
                    </a>
                  </S.ContactWrapper>
                </S.InfoBox>
              )}
              {info.address && (
                <S.InfoBox style={{ paddingBottom: '0' }}>
                  <S.UserInfoLabel>주소</S.UserInfoLabel>
                  <S.UserInfoValue>{info.address}</S.UserInfoValue>
                </S.InfoBox>
              )}
            </S.ContactContainer>
          </div>
          <div>
            <S.ConBar>메모</S.ConBar>
            <S.ContactContainer>
              <S.InfoBox style={{ paddingBottom: '0' }}>
                <S.UserInfoValue>{info.memo}</S.UserInfoValue>
              </S.InfoBox>
            </S.ContactContainer>
          </div>
          <div>
            {info.category && (
              <>
                <S.ConBar>그룹</S.ConBar>
                <S.GroupButtonBox>
                  <S.GroupButton>{info.category}</S.GroupButton>
                </S.GroupButtonBox>
              </>
            )}
          </div>
          <div>
            {(info.frontImgUrl || info.backImgUrl) && (
              <S.CardImageNameBox>
                <S.ConBar>명함 이미지</S.ConBar>
                <S.CardImageContainer>
                  <S.CardImageBox
                    onClick={() => handleImageClick(info.frontImgUrl)}
                  >
                    <img src={info.frontImgUrl} alt='사진 1' />
                  </S.CardImageBox>
                  {info.backImgUrl ? (
                    <S.CardImageBox
                      onClick={() => handleImageClick(info.backImgUrl)}
                    >
                      <img src={info.backImgUrl} alt='사진 2' />
                    </S.CardImageBox>
                  ) : (
                    <S.CardImageBox />
                  )}
                </S.CardImageContainer>
              </S.CardImageNameBox>
            )}
          </div>
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
