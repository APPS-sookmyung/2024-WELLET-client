import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as S from './CardDetailPage.style';
import Icon from '../../components/Icon/Icon';
import { DetailBadge } from '../../components';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import { getCards } from '../../apis'; // getCards API 가져오기
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';

export default function CardDetailPage() {
  const { id } = useParams(); // URL 파라미터에서 id 가져오기

  const badges = [
    { label: '비즈니스', value: '비즈니스' },
    { label: '방송사', value: '방송사' },
    { label: '부동산', value: '부동산' },
    { label: '대학교', value: '대학교' },
  ];

  // 상태 변수 초기화
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCards({ member_id: id }); // getCards API 호출
        setCardData(response); // API에서 가져온 데이터를 상태로 설정
      } catch (err) {
        setError(err.message); // 에러 발생 시 에러 메시지 상태로 설정
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchData(); // 함수 호출
  }, [id]); // `id` 값이 변경될 때마다 다시 호출

  if (loading) return <S.Loading>Loading...</S.Loading>; // 로딩 중일 때 표시할 메시지
  if (error) return <S.Error>{`Error: ${error}`}</S.Error>; // 에러 발생 시 표시할 메시지

  const filteredBadges = cardData
    ? badges.filter((badge) => badge.value === cardData.category)
    : [];

  const profileImageUrl = cardData?.imageUrl || ProfileImgDefault;
  const activeBadge = cardData ? cardData.category : '';

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
              <S.ProfilePic
                src={profileImageUrl}
                alt={`${cardData?.name} 프로필`}
              />
            </S.PicContainer>
          </S.MidBar>
          <S.BotBar>
            <S.NameBox>
              <S.NameFont>{cardData?.name || '이름없음'}</S.NameFont>
              <S.JobTeamFont>
                {cardData?.job || '직책없음'} / {cardData?.team || '팀없음'}
              </S.JobTeamFont>
              <S.ComFont>{cardData?.company || '회사없음'}</S.ComFont>
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
                <S.UserInfoValue>
                  {cardData?.phone || '전화번호없음'}
                </S.UserInfoValue>
                <S.IconBox>
                  <Icon id='message' width='20' height='14' />
                  <Icon id='call' width='20' height='14' />
                </S.IconBox>
              </S.ContactWrapper>
            </S.InfoBox>
            <S.InfoBox>
              <S.UserInfoLabel>이메일</S.UserInfoLabel>
              <S.ContactWrapper>
                <S.UserInfoValue>
                  {cardData?.email || '이메일없음'}
                </S.UserInfoValue>
                <Icon id='mail' width='20' height='14' />
              </S.ContactWrapper>
            </S.InfoBox>
            <S.InfoBox>
              <S.UserInfoLabel>유선전화</S.UserInfoLabel>
              <S.ContactWrapper>
                <S.UserInfoValue>
                  {cardData?.tel || '유선전화없음'}
                </S.UserInfoValue>
                <Icon id='call' width='20' height='14' />
              </S.ContactWrapper>
            </S.InfoBox>
            <S.InfoBox>
              <S.UserInfoLabel>주소</S.UserInfoLabel>
              <S.UserInfoValue>
                {cardData?.address || '주소없음'}
              </S.UserInfoValue>
            </S.InfoBox>
          </S.ContactContainer>
          <S.ConBar>메모</S.ConBar>
          <S.ContactContainer>
            <S.InfoBox>
              <S.UserInfoValue>{cardData?.memo || '메모없음'}</S.UserInfoValue>
            </S.InfoBox>
          </S.ContactContainer>
          <S.GroupButtonBar>그룹</S.GroupButtonBar>
          <S.GroupButtonBox>
            <DetailBadge badges={filteredBadges} activeBadge={activeBadge} />
          </S.GroupButtonBox>
          {(cardData?.pic1 || cardData?.pic2) && (
            <S.CardImageContainer>
              <S.CardImageBox onClick={() => handleImageClick(cardData?.pic1)}>
                <img src={cardData?.pic1} alt='사진 1' />
              </S.CardImageBox>
              {cardData?.pic2 && (
                <S.CardImageBox
                  onClick={() => handleImageClick(cardData?.pic2)}
                >
                  <img src={cardData?.pic2} alt='사진 2' />
                </S.CardImageBox>
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
