import React, { useState, memo, useRef } from 'react';
import * as S from './MyPageEditPage.style';
import Icon from '../../components/Icon/Icon';
import { TabBar } from '../../components';
import { Link, useNavigate } from 'react-router-dom';

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

  const InputData = [
    {
      label: '회사명',
      type: 'text',
      name: 'company',
      value: myInfo.company,
      onChange: handleInfoChange,
    },
    {
      label: '직책',
      type: 'text',
      name: 'job',
      value: myInfo.job,
      onChange: handleInfoChange,
    },
    {
      label: '부서',
      type: 'text',
      name: 'team',
      value: myInfo.team,
      onChange: handleInfoChange,
    },
    {
      label: '휴대폰',
      type: 'tel',
      name: 'phone',
      value: myContact.phone,
      onChange: handleContactChange,
    },
    {
      label: '이메일 주소',
      type: 'email',
      name: 'email',
      value: myContact.email,
      onChange: handleContactChange,
    },
    {
      label: '유선전화',
      type: 'tel',
      name: 'tel',
      value: myContact.tel,
      onChange: handleContactChange,
    },
    {
      label: '주소',
      type: 'text',
      name: 'address',
      value: myContact.address,
      onChange: handleContactChange,
    },
  ];

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

  const navigate = useNavigate();

  const handleEditComplete = () => {
    console.log('Data saved successfully:', { myInfo, myContact });
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
    navigate('/mypage');
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

  const [profileImage, setProfileImage] = useState(null);

  const profileImageInputRef = useRef(null);

  const onUploadImage = (event) => {
    const files = Array.from(event.target.files || event.dataTransfer.files);
    setSelectedImage(files);
  };

  const onUploadProfileImage = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
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
          <S.ProfilePic
            style={{
              backgroundImage: `url(${profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <S.GalleryIcon>
            <Icon
              id='gallery'
              fill='#FFFFFF'
              width='20'
              height='20'
              onClick={handleProfileImageClick}
            />
            <input
              type='file'
              accept='image/*'
              ref={profileImageInputRef}
              style={{ display: 'none' }}
              onChange={onUploadProfileImage}
            />
          </S.GalleryIcon>
        </S.PicContainer>
        <S.EditInfoContainer>
          <S.EditName>
            {isEditing.name ? (
              <S.InputNameBox
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
          {InputData.map((field, index) => (
            <InputWrapper
              key={index}
              label={field.label}
              type={field.type}
              name={field.name}
              value={isEditing[field.name] ? field.value : ''}
              placeholder={isEditing[field.name] ? '' : field.value}
              onChange={field.onChange}
              onBlur={() => handleBlur(field.name)}
              onFocus={() => handleFocus(field.name)}
              autoFocus={isEditing[field.name]}
            />
          ))}
        </S.InputContainer>
      </S.InputField>
      <TabBar />
    </>
  );
}
