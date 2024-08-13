import React, { useState } from 'react';
import * as S from './MyPage.style';
import Icon from '../../components/Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { TabBar } from '../../components';
import { HiOutlineLink } from 'react-icons/hi';

export default function MyPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const EditClick = () => {
    navigate('/mypage/edit');
  };

  const handleShareClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <Icon
              id='share'
              width='11'
              height='18'
              onClick={handleShareClick}
            />
            <Icon id='gallery' fill='#FFFFFF' width='18' height='18' />
            <S.Dot3Icon>
              <Icon
                id='dot3'
                className='dot3-icon'
                fill='#FFFFFF'
                width='5'
                height='20'
              />
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

      {/* QR 코드 모달창 */}
      {isModalOpen && (
        <S.ModalOverlay>
          <S.Modal>
            <S.CloseButton onClick={handleCloseModal}>
              <Icon fill='black' id='modal-close' width='22' height='22' />
            </S.CloseButton>
            <S.ModalContent>
              <S.ModalTitle>내 명함 QR코드</S.ModalTitle>
              <S.QrImage>QR 이미지</S.QrImage>
              <S.ModalButtonWrapper>
                <S.CopyLinkButton>
                  <HiOutlineLink />
                  링크 복사하기
                </S.CopyLinkButton>
                <S.SaveButton>저장하기</S.SaveButton>
              </S.ModalButtonWrapper>
            </S.ModalContent>
          </S.Modal>
        </S.ModalOverlay>
      )}
    </>
  );
}
