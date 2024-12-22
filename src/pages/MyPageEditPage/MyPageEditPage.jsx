import React, { useState, useEffect, memo, useRef } from 'react';
import * as S from './MyPageEditPage.style';
import Icon from '../../components/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { getMyCard, postMyCard, putMyCard } from '../../apis';

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
    name: '',
    job: '',
    company: '',
    phone: '',
    email: '',
    tel: '',
    address: '',
    team: '',
  });
  const [isEditing, setIsEditing] = useState({
    name: false,
    job: false,
    company: false,
    phone: false,
    email: false,
    tel: false,
    address: false,
  });
  const [profileImage, setProfileImage] = useState(null);
  const profileImageInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyCard = async () => {
      try {
        const response = await getMyCard();
        if (response.data) {
          setMyInfo({
            name: response.data.name || '',
            job: response.data.position || '',
            company: response.data.company || '',
            phone: response.data.phone || '',
            email: response.data.email || '',
            tel: response.data.tel || '',
            address: response.data.address || '',
            team: response.data.department || '',
            imageUrl: response.data.profImgUrl || '',
          });
        } else {
          setMyInfo({
            name: '',
            job: '',
            company: '',
            phone: '',
            email: '',
            tel: '',
            address: '',
            team: '',
          });
        }
      } catch (error) {
        console.error('사용자 정보를 불러오는 데 실패했습니다.', error);
      }
    };

    fetchMyCard();
  }, []);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setMyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const InputData = [
    {
      label: '회사명',
      type: 'text',
      name: 'company',
      value: myInfo?.company || '',
      onChange: handleInfoChange,
    },
    {
      label: '직책',
      type: 'text',
      name: 'job',
      value: myInfo?.job || '',
      onChange: handleInfoChange,
    },
    {
      label: '부서',
      type: 'text',
      name: 'team',
      value: myInfo?.team || '',
      onChange: handleInfoChange,
    },
    {
      label: '휴대폰',
      type: 'tel',
      name: 'phone',
      value: myInfo?.phone || '',
      onChange: handleInfoChange,
    },
    {
      label: '이메일',
      type: 'email',
      name: 'email',
      value: myInfo?.email || '',
      onChange: handleInfoChange,
    },
    {
      label: '유선전화',
      type: 'tel',
      name: 'tel',
      value: myInfo?.tel || '',
      onChange: handleInfoChange,
    },
    {
      label: '주소',
      type: 'text',
      name: 'address',
      value: myInfo?.address || '',
      onChange: handleInfoChange,
    },
  ];

  const saveCard = async () => {
    const isCardCreated = Object.values(myInfo).some((value) => value);
    const updatedData = isCardCreated
      ? await putMyCard({ data: JSON.stringify(myInfo) })
      : await postMyCard({ data: myInfo });
    return updatedData;
  };

  const handleEditComplete = async () => {
    try {
      const updatedData = await saveCard();
      console.log('Data saved successfully:', updatedData);
      navigate('/mypage');
    } catch (error) {
      console.error('사용자 정보를 저장하는 데 실패했습니다.', error);
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

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const onUploadProfileImage = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  if (!myInfo) return <div>Loading...</div>;

  return (
    <S.MyEdit>
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
              backgroundImage: `url(${profileImage || myInfo.imageUrl})`,
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
    </S.MyEdit>
  );
}
