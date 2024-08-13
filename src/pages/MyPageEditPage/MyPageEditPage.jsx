import React, { useState, useEffect, memo } from 'react';
import * as S from './MyPageEditPage.style';
import Icon from '../../components/Icon/Icon';
import { TabBar } from '../../components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InputWrapper = memo(
  ({
    label,
    type,
    placeholder,
    name,
    value,
    onChange,
    onBlur,
    onFocus,
    autoFocus,
  }) => {
    return (
      <S.InputWrapper>
        <S.InputLabel>{label}</S.InputLabel>
        <S.InputBox>
          <S.Input
            type={type}
            placeholder={autoFocus ? '' : placeholder}
            name={name}
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoFocus={autoFocus}
          />
          {!autoFocus && (
            <S.IconWrapper onClick={() => onFocus(name)}>
              <Icon id='pencil' fill='none' />
            </S.IconWrapper>
          )}
        </S.InputBox>
      </S.InputWrapper>
    );
  }
);

export default function MyPageEditPage() {
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

  const [isEditing, setIsEditing] = useState({
    name: false,
    team: false,
    job: false,
    company: false,
    phone: false,
    email: false,
    tel: false,
    address: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/endpoint');
        setMyInfo(response.data.myInfo || myInfo);
        setMyContact(response.data.myContact || myContact);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setMyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setMyContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleEditComplete = async () => {
    try {
      const response = await axios.post('/api/endpoint', {
        myInfo,
        myContact,
      });
      console.log('Data saved successfully:', response.data);
      setIsEditing({
        name: false,
        team: false,
        job: false,
        company: false,
        phone: false,
        email: false,
        tel: false,
        address: false,
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleFocus = (field) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  return (
    <>
      <S.Header>
        <S.ArrowIcon>
          <Link to='/mypage'>
            <Icon id='arrow' fill='#2D29FF' width='20' height='20' />
          </Link>
        </S.ArrowIcon>
        <S.WelletLogo>
          <Icon id='logo-blue' />
        </S.WelletLogo>
        <S.EditIconBox>
          <S.EditIcon onClick={handleEditComplete}>편집완료</S.EditIcon>
        </S.EditIconBox>
      </S.Header>
      <S.Body>
        <S.PicContainer>
          <S.ProfilePic />
          <S.GalleryIcon>
            <Icon id='gallery' fill='#FFFFFF' width='20' height='20' />
          </S.GalleryIcon>
        </S.PicContainer>
        <S.EditInfoContainer>
          <S.EditName>
            {isEditing.name ? (
              <input
                type='text'
                name='name'
                value={myInfo.name}
                onChange={handleInfoChange}
                onBlur={() => handleBlur('name')}
                onFocus={() => handleFocus('name')}
                autoFocus
              />
            ) : (
              <>
                <S.Name>{myInfo.name}</S.Name>
                <S.PencilIcon onClick={() => handleEditClick('name')}>
                  <Icon id='pencil' fill='#FFF' />
                </S.PencilIcon>
              </>
            )}
          </S.EditName>
          <S.EditGuide>
            사진 아이콘을 클릭하여 명함에 들어갈 프로필 사진을 수정하세요 
          </S.EditGuide>
        </S.EditInfoContainer>
      </S.Body>
      <S.InputField>
        <S.InputContainer>
          <InputWrapper
            label='회사명'
            type='text'
            name='company'
            value={isEditing.company ? myInfo.company : ''}
            placeholder={isEditing.company ? '' : myInfo.company}
            onChange={handleInfoChange}
            onBlur={() => handleBlur('company')}
            onFocus={() => handleFocus('company')}
            autoFocus={isEditing.company}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='직책'
            type='text'
            name='job'
            value={isEditing.job ? myInfo.job : ''}
            placeholder={isEditing.job ? '' : myInfo.job}
            onChange={handleInfoChange}
            onBlur={() => handleBlur('job')}
            onFocus={() => handleFocus('job')}
            autoFocus={isEditing.job}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='부서'
            type='text'
            name='team'
            value={isEditing.team ? myInfo.team : ''}
            placeholder={isEditing.team ? '' : myInfo.team}
            onChange={handleInfoChange}
            onBlur={() => handleBlur('team')}
            onFocus={() => handleFocus('team')}
            autoFocus={isEditing.team}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='휴대폰'
            type='tel'
            name='phone'
            value={isEditing.phone ? myContact.phone : ''}
            placeholder={isEditing.phone ? '' : myContact.phone}
            onChange={handleContactChange}
            onBlur={() => handleBlur('phone')}
            onFocus={() => handleFocus('phone')}
            autoFocus={isEditing.phone}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='이메일 주소'
            type='email'
            name='email'
            value={isEditing.email ? myContact.email : ''}
            placeholder={isEditing.email ? '' : myContact.email}
            onChange={handleContactChange}
            onBlur={() => handleBlur('email')}
            onFocus={() => handleFocus('email')}
            autoFocus={isEditing.email}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='유선전화'
            type='tel'
            name='tel'
            value={isEditing.tel ? myContact.tel : ''}
            placeholder={isEditing.tel ? '' : myContact.tel}
            onChange={handleContactChange}
            onBlur={() => handleBlur('tel')}
            onFocus={() => handleFocus('tel')}
            autoFocus={isEditing.tel}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='주소'
            type='text'
            name='address'
            value={isEditing.address ? myContact.address : ''}
            placeholder={isEditing.address ? '' : myContact.address}
            onChange={handleContactChange}
            onBlur={() => handleBlur('address')}
            onFocus={() => handleFocus('address')}
            autoFocus={isEditing.address}
          />
        </S.InputContainer>
      </S.InputField>
      <TabBar />
    </>
  );
}
