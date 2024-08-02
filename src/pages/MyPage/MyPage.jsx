import React, { useState } from 'react';
import * as S from './MyPage.style';
import Icon from '../../components/Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { TabBar } from '../../components';

export default function MyPage() {
  const [myInfo, setMyInfo] = useState({
    name: '김은지',
    title: 'Web Engineer / 개발실',
    company: 'WELLET Corp.',
  });

  const [myContact, setMyContact] = useState({
    phone: '010-1234-5678',
    email: 'email@welletapp.co.kr',
    tel: '81-2-222-3456',
    address: '서울시 강남구 테헤란로 134, 5-6층 (역삼동, 포스크타워 역삼)',
  });

  const navigate = useNavigate();
  const EditClick = () => {
    navigate('/mypage/edit');
  };
  return (
    <>
      <S.Mybar1>
        <S.barbox1>내 명함</S.barbox1>
        <S.EditIcon onClick={EditClick}>편집하기</S.EditIcon>
        <S.ProfilePic />
        <S.IconBarContainer></S.IconBarContainer>
        <S.barbox2>{myInfo.name}</S.barbox2>
        <S.subbar />
      </S.Mybar1>
      <S.Mybar2>
        <S.Infobar>내 정보</S.Infobar>
        <S.Container1>
          <div>
            <div>
              <S.Font1>성명</S.Font1>
              <S.Font2>{myInfo.company}</S.Font2>
              <br />
            </div>
            <div>
              <S.Font1>직무/소속</S.Font1>
              <S.Font2>{myInfo.title}</S.Font2>
            </div>
          </div>
        </S.Container1>
        <S.Infobar>내 연락처</S.Infobar>
        <S.Container2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <S.Font1>휴대폰</S.Font1>
              <S.Font2>{myContact.phone}</S.Font2>
            </div>
            <div>
              <S.IconBox></S.IconBox>
            </div>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <S.Font1>이메일</S.Font1>
              <S.Font2>{myContact.email}</S.Font2>
            </div>
            <div></div>
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <S.Font1>유선전화</S.Font1>
              <S.Font2>{myContact.tel}</S.Font2>
            </div>
            <div></div>
          </div>
          <br />
          <div>
            <div>
              <S.Font1>주소</S.Font1>
              <S.Font2>{myContact.address}</S.Font2>
            </div>
          </div>
        </S.Container2>
      </S.Mybar2>
      <TabBar />
    </>
  );
}
