import * as S from './MyPage.style';
import Icon from '../../components/Icon/Icon';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLink } from 'react-icons/hi';

// 더미 데이터
const myInfo = {
  name: '김은지',
  job: 'Web Engineer',
  team: '개발팀',
  company: 'WELLET Corp.',
  phone: '010-1234-5678',
  email: 'email@welletapp.co.kr',
  tel: '81-2-222-3456',
  address: '서울시 강남구 테헤란로 134, 5-6층 (역삼동, 포스크타워 역삼)',
};

export default function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleShareClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyLinkClick = () => {
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  return (
    <>
      <S.TopContainer>
        <Link to='/mypage/edit'>
          <S.EditButton>편집하기</S.EditButton>
        </Link>
        <S.ShareIconWrapper>
          <Icon id='share' width='11' height='17' onClick={handleShareClick} />
        </S.ShareIconWrapper>

        <S.MyInfoSummaryWrapper>
          <S.MyCardTitle>내 명함</S.MyCardTitle>
          <S.ProfileImageWrapper>프로필 사진</S.ProfileImageWrapper>
          <S.MyName>{myInfo.name}</S.MyName>
        </S.MyInfoSummaryWrapper>

        <S.BottomBarWrapper>
          <S.BottomBar />
        </S.BottomBarWrapper>
      </S.TopContainer>

      <S.BottomContainer>
        <S.MyInfoIList>
          <S.MyInfoTitle>내 정보</S.MyInfoTitle>
          <S.MyInfoContainer>
            <S.MyInfoItem>
              <S.MyInfoLabel>회사명</S.MyInfoLabel>
              <S.MyInfoValue>{myInfo.company}</S.MyInfoValue>
            </S.MyInfoItem>
            <S.MyInfoItem>
              <S.MyInfoLabel>직책 / 부서</S.MyInfoLabel>
              <S.MyInfoValue>{`${myInfo.job} / ${myInfo.team}`}</S.MyInfoValue>
            </S.MyInfoItem>
          </S.MyInfoContainer>
        </S.MyInfoIList>

        <S.MyInfoIList>
          <S.MyInfoTitle>내 연락처</S.MyInfoTitle>
          <S.MyInfoContainer>
            <S.MyInfoItem>
              <S.MyInfoLabel>휴대폰</S.MyInfoLabel>
              <S.ContactWrapper>
                <S.MyInfoValue>{myInfo.phone}</S.MyInfoValue>
                <S.IconBox>
                  <Icon id='message' width='20' height='14' />
                  <Icon id='call' width='20' height='14' />
                </S.IconBox>
              </S.ContactWrapper>
            </S.MyInfoItem>
            <S.MyInfoItem>
              <S.MyInfoLabel>이메일</S.MyInfoLabel>
              <S.ContactWrapper>
                <S.MyInfoValue>{myInfo.email}</S.MyInfoValue>
                <Icon id='mail' width='20' height='14' />
              </S.ContactWrapper>
            </S.MyInfoItem>
            <S.MyInfoItem>
              <S.MyInfoLabel>유선전화</S.MyInfoLabel>
              <S.ContactWrapper>
                <S.MyInfoValue>{myInfo.tel}</S.MyInfoValue>
                <Icon id='call' width='20' height='14' />
              </S.ContactWrapper>
            </S.MyInfoItem>
            <S.MyInfoItem>
              <S.MyInfoLabel>주소</S.MyInfoLabel>
              <S.MyInfoValue>{myInfo.address}</S.MyInfoValue>
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
    </>
  );
}
