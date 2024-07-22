import React, { useState, useEffect } from 'react';
import * as S from './MyPageEdit.style';
import logoicon from '../../icons/logo.svg';
import arrowicon from '../../icons/icon-arrow.svg';
import arrowdownicon from '../../icons/icon-arrow-down.svg';
import pencilicon from '../../icons/icon-pencil2.svg';
import galleryicon from '../../icons/icon-gallery.svg';
import { useNavigate } from 'react-router-dom';

export default function MyPageEdit() {
  const [myInfo, setMyInfo] = useState({
    name: '김은지',
    team: '개발팀',
    job: 'Web Engineer',
    company: 'WELLET Corp.',
  });

  const [myContact, setMyContact] = useState({
    phone: '010-1234-5678',
    email: 'email@welletapp.co.kr',
    tel: '81-2-222-3456',
    address: '서울시 강남구 테헤란로 134, 5-6층 (역삼동, 포스크타워 역삼)',
  });

  const navigate = useNavigate();

  const MyPageClick = () => {
    navigate('/mypage');
  };

  return (
    <>
      <S.Header>
        <S.arrowicon onClick={MyPageClick}>
          <img src={arrowicon} />
        </S.arrowicon>
        <S.welletlogo>
          <img src={logoicon} />
        </S.welletlogo>
        <S.EditIcon>편집완료</S.EditIcon>
      </S.Header>
      <S.Body>
        <S.PicContainer>
          <S.ProfilePic />
          <S.galleryicon>
            <img src={galleryicon} />
          </S.galleryicon>
        </S.PicContainer>
        <S.EditInfoContainer>
          <S.EditName>{myInfo.name}</S.EditName>
          <S.EditInfo>
            {myInfo.team}{' '}
            <S.arrowdownicon>
              <img src={arrowdownicon} />
            </S.arrowdownicon>{' '}
            / {myInfo.job}
            <S.arrowdownicon>
              <img src={arrowdownicon} />
            </S.arrowdownicon>
          </S.EditInfo>
          <S.EditCompany>{myInfo.company}</S.EditCompany>
        </S.EditInfoContainer>
      </S.Body>
      <S.InputContainer>
        <S.InputValue>휴대폰</S.InputValue>
        <S.EditBox
          onClick={() => {
            const newPhone = prompt(`휴대전화`);
            if (newPhone) {
              setMyContact((prevContact) => ({
                ...prevContact,
                phone: newPhone,
              }));
            }
          }}
        >
          <S.EditContact>{myContact.phone}</S.EditContact>
          <S.pencilicon>
            <img src={pencilicon} />
          </S.pencilicon>
        </S.EditBox>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputValue>이메일 주소</S.InputValue>
        <S.EditBox
          onClick={() => {
            const newEmail = prompt(`이메일`);
            if (newEmail) {
              setMyContact((prevContact) => ({
                ...prevContact,
                email: newEmail,
              }));
            }
          }}
        >
          <S.EditContact>{myContact.email}</S.EditContact>
          <S.pencilicon>
            <img src={pencilicon} />
          </S.pencilicon>
        </S.EditBox>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputValue>유선전화</S.InputValue>
        <S.EditBox
          onClick={() => {
            const newTel = prompt(`유선전화`);
            if (newTel) {
              setMyContact((prevContact) => ({
                ...prevContact,
                tel: newTel,
              }));
            }
          }}
        >
          <S.EditContact>{myContact.tel}</S.EditContact>
          <S.pencilicon>
            <img src={pencilicon} />
          </S.pencilicon>
        </S.EditBox>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputValue>주소</S.InputValue>
        <S.EditBox
          onClick={() => {
            const newAddress = prompt(`주소`);
            if (newAddress) {
              setMyContact((prevContact) => ({
                ...prevContact,
                address: newAddress,
              }));
            }
          }}
        >
          <S.EditContact>{myContact.address}</S.EditContact>
          <S.pencilicon>
            <img src={pencilicon} />
          </S.pencilicon>
        </S.EditBox>
      </S.InputContainer>
    </>
  );
}
