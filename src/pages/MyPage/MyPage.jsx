import React, { useEffect, useState } from 'react';
import { HiOutlineLink } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { getMyCard } from '../../apis';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import Icon from '../../components/Icon/Icon';
import MY_CARD_SAMPLE_DATA from '../../constants/myCardSampleData';
import { formatPhoneNumber } from '../../utils/HomePageUtils/formatPhoneNumber';
import * as S from './MyPage.style';

export default function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [myInfo, setMyInfo] = useState(MY_CARD_SAMPLE_DATA);

  useEffect(() => {
    const fetchMyCard = async () => {
      try {
        const response = await getMyCard();
        setMyInfo(response.data);
      } catch (error) {
        console.error('명함 정보를 가져오는 데 실패했습니다.', error);
        setMyInfo(MY_CARD_SAMPLE_DATA);
      }
    };

    fetchMyCard();
  }, []);
  const profileImageUrl = myInfo.profImgUrl || ProfileImgDefault;

  // // 공유하기 버튼 클릭
  // const handleShareClick = () => {
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyLinkClick = () => {
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    navigate('/mypage/edit');
  };

  return (
    <>
      <S.MyPage>
        <S.TopContainer>
          <S.TopBar>
            <S.LeftContainer1 />
            <S.MyCardTitle>내 명함</S.MyCardTitle>
            <S.EditButton onClick={handleEditButtonClick}>
              편집하기
            </S.EditButton>
          </S.TopBar>
          <S.MidBar>
            <S.MyInfoSummaryWrapper>
              <S.ProfileImageWrapper>
                <S.PicContainer>
                  <S.ProfilePic src={profileImageUrl} alt={`나의 프로필`} />
                </S.PicContainer>
              </S.ProfileImageWrapper>
            </S.MyInfoSummaryWrapper>
          </S.MidBar>
          <S.BotBar>
            <S.MyName>{myInfo.name}</S.MyName>
            <S.SubBar />
          </S.BotBar>
        </S.TopContainer>

        <S.BottomContainer>
          <S.MyInfoIList>
            <S.MyInfoTitle>내 정보</S.MyInfoTitle>
            <S.MyInfoContainer>
              <S.MyInfoItem>
                <S.MyInfoLabel>회사명</S.MyInfoLabel>
                <S.MyInfoValue>{myInfo.company}</S.MyInfoValue>
              </S.MyInfoItem>
              {(myInfo.position || myInfo.department) && (
                <S.MyInfoItem>
                  <S.MyInfoLabel>
                    {myInfo.position && myInfo.department
                      ? '직책 / 부서'
                      : myInfo.position
                        ? '직책'
                        : myInfo.department
                          ? '부서'
                          : ''}
                  </S.MyInfoLabel>
                  <S.MyInfoValue>
                    {`${myInfo.position || ''}${myInfo.position && myInfo.department ? ' / ' : ''}${myInfo.department || ''}`}
                  </S.MyInfoValue>
                </S.MyInfoItem>
              )}
            </S.MyInfoContainer>
          </S.MyInfoIList>

          <S.MyInfoIList>
            <S.MyInfoTitle>내 연락처</S.MyInfoTitle>
            <S.MyInfoContainer>
              <S.MyInfoItem>
                <S.MyInfoLabel>휴대폰</S.MyInfoLabel>
                <S.ContactWrapper>
                  <S.MyInfoValue>
                    {formatPhoneNumber(myInfo.phone)}
                  </S.MyInfoValue>
                </S.ContactWrapper>
              </S.MyInfoItem>
              {myInfo.email && (
                <S.MyInfoItem>
                  <S.MyInfoLabel>이메일</S.MyInfoLabel>
                  <S.ContactWrapper>{myInfo.email}</S.ContactWrapper>
                </S.MyInfoItem>
              )}
              {myInfo.tel && (
                <S.MyInfoItem>
                  <S.MyInfoLabel>유선전화</S.MyInfoLabel>
                  <S.ContactWrapper>
                    <S.MyInfoValue>
                      {formatPhoneNumber(myInfo.tel)}
                    </S.MyInfoValue>
                  </S.ContactWrapper>
                </S.MyInfoItem>
              )}
              {myInfo.address && (
                <S.MyInfoItem>
                  <S.MyInfoLabel>주소</S.MyInfoLabel>
                  <S.MyInfoValue>{myInfo.address}</S.MyInfoValue>
                </S.MyInfoItem>
              )}
            </S.MyInfoContainer>
          </S.MyInfoIList>
        </S.BottomContainer>

        {/* QR 코드 모달창 */}
        {isModalOpen && (
          <S.ModalOverlay onClick={handleCloseModal}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
              <S.CloseButton onClick={handleCloseModal}>
                <Icon fill='black' id='modal-close' width='22' height='22' />
              </S.CloseButton>
              <S.ModalContent>
                <S.ModalTitle>내 명함 QR코드</S.ModalTitle>
                <S.QrImage>QR 이미지</S.QrImage>
                <S.ModalButtonWrapper>
                  <S.CopyLinkButton onClick={handleCopyLinkClick}>
                    <HiOutlineLink />
                    링크 복사하기
                  </S.CopyLinkButton>
                  <S.SaveButton>저장하기</S.SaveButton>
                </S.ModalButtonWrapper>
              </S.ModalContent>
            </S.Modal>
          </S.ModalOverlay>
        )}

        {/* 토스트 메시지 */}
        {isToastVisible && (
          <S.ToastMessage>링크가 복사되었습니다.</S.ToastMessage>
        )}
      </S.MyPage>
    </>
  );
}
