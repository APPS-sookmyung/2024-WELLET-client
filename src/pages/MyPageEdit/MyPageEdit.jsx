import React, { useState } from 'react';
import * as S from './MyPageEdit.style';
import Icon from '../../components/Icon/Icon';
import { InputWrapper, TabBar } from '../../components';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <S.Header>
        <S.Arrowicon>
          <Link to='/mypage'>
            <Icon id='arrow' fill='#2D29FF' />
          </Link>
        </S.Arrowicon>
        <S.Welletlogo>
          <Icon id='logo-blue' />
        </S.Welletlogo>
        <S.EditIcon>편집완료</S.EditIcon>
      </S.Header>
      <S.Body>
        <S.PicContainer>
          <S.ProfilePic />
          <S.Galleryicon>
            <Icon id='gallery' fill='#FFFFFF' />
          </S.Galleryicon>
        </S.PicContainer>
        <S.EditInfoContainer>
          <S.EditName>
            <S.Name>{myInfo.name}</S.Name>
            <S.PencilIcon>
              <Icon id='pencil' fill='#FFF' />
            </S.PencilIcon>
          </S.EditName>
          <S.EditGuide>
            사진 아이콘을 클릭하여 명함에 들어갈 프로필 사진을 수정하세요
          </S.EditGuide>
        </S.EditInfoContainer>
      </S.Body>
      <br />
      <S.InputBox>
        <S.InputContainer>
          <InputWrapper
            label='회사명'
            type='text'
            placeholder={myInfo.company}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='직책/부서'
            type='text'
            placeholder={`${myInfo.job} / ${myInfo.team}`}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='휴대폰'
            type='tel'
            placeholder={myContact.phone}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='이메일 주소'
            type='email'
            placeholder={myContact.email}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='유선전화'
            type='tel'
            placeholder={myContact.tel}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='주소'
            type='text'
            placeholder={myContact.address}
          />
        </S.InputContainer>
      </S.InputBox>
      <TabBar />
    </>
  );
}
