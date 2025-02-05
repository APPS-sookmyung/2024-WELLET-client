import * as S from './MyPage.style';
import Icon from '../../components/Icon/Icon';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLink } from 'react-icons/hi';
import MY_CARD_SAMPLE_DATA from '../../constants/myCardSampleData';
import { getMyCard } from '../../apis'; // API 함수 불러오기
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';

export default function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // QR 코드 모달 상태
  const [isToastVisible, setIsToastVisible] = useState(false); // 토스트 메시지 상태
  const [myInfo, setMyInfo] = useState(MY_CARD_SAMPLE_DATA); // 명함 정보 상태

  // 마이페이지의 명함 정보를 API에서 받아오기
  useEffect(() => {
    const fetchMyCard = async () => {
      try {
        const response = await getMyCard();
        console.log(response); // Check the API response
        setMyInfo(response.data); // Use sample data if API response is empty
      } catch (error) {
        console.error('명함 정보를 가져오는 데 실패했습니다.', error);
        setMyInfo(MY_CARD_SAMPLE_DATA); // Use sample data on error
      }
    };

    fetchMyCard();
  }, []);
  const profileImageUrl = myInfo.profImgUrl || ProfileImgDefault;
  const handleShareClick = () => {
    setIsModalOpen(true); // QR 코드 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // QR 코드 모달 닫기
  };

  const handleCopyLinkClick = () => {
    setIsToastVisible(true); // 링크 복사 시 토스트 메시지 보이기
    setTimeout(() => {
      setIsToastVisible(false); // 3초 후 토스트 메시지 숨기기
    }, 3000);
  };

  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    navigate('/mypage/edit'); // 편집 페이지로 이동
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
            <S.LeftContainer2 />
            <S.MyInfoSummaryWrapper>
              <S.ProfileImageWrapper>
                <S.PicContainer>
                  <S.ProfilePic src={profileImageUrl} alt={`나의 프로필`} />
                </S.PicContainer>
              </S.ProfileImageWrapper>
            </S.MyInfoSummaryWrapper>
            <S.ShareIconWrapper>
              <Icon
                id='share'
                width='11'
                height='17'
                onClick={handleShareClick}
              />
            </S.ShareIconWrapper>
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
                {myInfo && myInfo.company ? (
                  <S.MyInfoValue>{myInfo.company}</S.MyInfoValue>
                ) : (
                  <S.MyInfoValueNull>
                    정보가 없습니다. 편집하기를 눌러 명함을 완성하세요.
                  </S.MyInfoValueNull>
                )}
              </S.MyInfoItem>
              <S.MyInfoItem>
                <S.MyInfoLabel>직책 / 부서</S.MyInfoLabel>
                <S.MyInfoValue>
                  {myInfo.position ? (
                    myInfo.department ? (
                      <>
                        {myInfo.position} / {myInfo.department}
                      </>
                    ) : (
                      <>
                        {myInfo.position} /{' '}
                        <S.MyInfoValueNull>정보가 없습니다.</S.MyInfoValueNull>
                      </>
                    )
                  ) : myInfo.department ? (
                    <>
                      <S.MyInfoValueNull>정보가 없습니다.</S.MyInfoValueNull> /{' '}
                      {myInfo.department}
                    </>
                  ) : (
                    <S.MyInfoValueNull>
                      정보가 없습니다. 편집하기를 눌러 명함을 완성하세요.
                    </S.MyInfoValueNull>
                  )}
                </S.MyInfoValue>
              </S.MyInfoItem>
            </S.MyInfoContainer>
          </S.MyInfoIList>

          <S.MyInfoIList>
            <S.MyInfoTitle>내 연락처</S.MyInfoTitle>
            <S.MyInfoContainer>
              <S.MyInfoItem>
                <S.MyInfoLabel>휴대폰</S.MyInfoLabel>
                <S.ContactWrapper>
                  {myInfo && myInfo.phone ? (
                    <S.MyInfoValue>{myInfo.phone}</S.MyInfoValue>
                  ) : (
                    <S.MyInfoValueNull>
                      정보가 없습니다. 편집하기를 눌러 명함을 완성하세요.
                    </S.MyInfoValueNull>
                  )}
                  <S.IconBox>
                    <Icon id='message' width='20' height='14' />
                    <Icon id='call' width='20' height='14' />
                  </S.IconBox>
                </S.ContactWrapper>
              </S.MyInfoItem>
              <S.MyInfoItem>
                <S.MyInfoLabel>이메일</S.MyInfoLabel>
                <S.ContactWrapper>
                  {myInfo && myInfo.email ? (
                    <S.MyInfoValue>{myInfo.email}</S.MyInfoValue>
                  ) : (
                    <S.MyInfoValueNull>
                      정보가 없습니다. 편집하기를 눌러 명함을 완성하세요.
                    </S.MyInfoValueNull>
                  )}
                  <Icon id='mail' width='20' height='14' />
                </S.ContactWrapper>
              </S.MyInfoItem>
              <S.MyInfoItem>
                <S.MyInfoLabel>유선전화</S.MyInfoLabel>
                <S.ContactWrapper>
                  {myInfo && myInfo.tel ? (
                    <S.MyInfoValue>{myInfo.tel}</S.MyInfoValue>
                  ) : (
                    <S.MyInfoValueNull>
                      정보가 없습니다. 편집하기를 눌러 명함을 완성하세요.
                    </S.MyInfoValueNull>
                  )}
                  <Icon id='call' width='20' height='14' />
                </S.ContactWrapper>
              </S.MyInfoItem>
              <S.MyInfoItem>
                <S.MyInfoLabel>주소</S.MyInfoLabel>
                {myInfo && myInfo.address ? (
                  <S.MyInfoValue>{myInfo.address}</S.MyInfoValue>
                ) : (
                  <S.MyInfoValueNull>
                    정보가 없습니다. 편집하기를 눌러 명함을 완성하세요.
                  </S.MyInfoValueNull>
                )}
              </S.MyInfoItem>
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
