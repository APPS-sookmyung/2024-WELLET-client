import { useQuery } from '@tanstack/react-query';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getMyCard, postMyCard, putMyCard, putMyImg } from '../../apis';
import Icon from '../../components/Icon/Icon';
import { formatPhoneNumber } from '../../utils/HomePageUtils/formatPhoneNumber';
import * as S from './MyPageEditPage.style';

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
              <Icon id='pencil' fill='none' width={13} height={13} />
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
    position: '',
    company: '',
    phone: '',
    email: '',
    tel: '',
    address: '',
    department: '',
    profImg: null,
    profImgUrl: '',
  });

  const [isEditing, setIsEditing] = useState({});
  const profileImageInputRef = useRef(null);
  const navigate = useNavigate();

  const { data: inputData } = useQuery({
    queryKey: ['myDetail'],
    queryFn: getMyCard,
  });

  useEffect(() => {
    if (inputData) {
      setMyInfo({
        ...inputData.data,
        profImgUrl: inputData.data.profImgUrl || '',
      });
    }
  }, [inputData]);

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
      name: 'position',
      value: myInfo?.position || '',
      onChange: handleInfoChange,
    },
    {
      label: '부서',
      type: 'text',
      name: 'department',
      value: myInfo?.department || '',
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
  const updatedDataForm = () => {
    const formData = new FormData();

    Object.entries(myInfo).forEach(([key, value]) => {
      if (key !== 'profImgUrl' && value) {
        formData.append(key, value || '');
      }
    });

    if (myInfo.profImg instanceof File) {
      formData.append('profImg', myInfo.profImg);
    }
    return formData;
  };

  const handleEditComplete = async () => {
    try {
      let response;

      if (!myInfo?.id) {
        response = await postMyCard({ data: updatedDataForm() }); // POST 요청: 새 명함 생성
      } else {
        response = await putMyCard({ data: updatedDataForm() }); // PUT 요청: 명함 수정
      }

      setMyInfo((prevInfo) => ({
        ...prevInfo,
        ...response.data,
      }));
      navigate('/mypage');
    } catch (error) {
      console.error('데이터 저장 오류:', error.response?.data || error.message);
    }
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const onUploadProfileImage = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('profImg', file);

      const response = await putMyImg(formData);

      if (response.data?.profImgUrl) {
        setMyInfo((prevInfo) => ({
          ...prevInfo,
          profImgUrl: response.data.profImgUrl,
        }));
      } else {
        console.error('서버 응답에 profImgUrl 없음:', response.data);
      }
    } catch (error) {
      console.error(
        '프로필 이미지 업로드 오류:',
        error.response?.data || error.message
      );
    }
  };

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
          <S.ProfilePic profileImgUrl={myInfo.profImgUrl} />
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
                onBlur={() => setIsEditing({ ...isEditing, name: false })}
                onFocus={() => setIsEditing({ ...isEditing, name: true })}
                autoFocus
              />
            ) : (
              <>
                <S.Name>{myInfo.name}</S.Name>
                <S.PencilIcon
                  onClick={() => setIsEditing({ ...isEditing, name: true })}
                >
                  <Icon id='pencil' fill='#FFF' width={13} height={13} />
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
              value={field.value}
              placeholder={field.value}
              onChange={(e) => {
                const { name, type, value } = e.target;
                setMyInfo((prev) => ({
                  ...prev,
                  [name]: type === 'tel' ? formatPhoneNumber(value) : value,
                }));
              }}
              onBlur={() => setIsEditing({ ...isEditing, [field.name]: false })}
              onFocus={() => setIsEditing({ ...isEditing, [field.name]: true })}
              autoFocus={isEditing[field.name]}
            />
          ))}
        </S.InputContainer>
      </S.InputField>
    </S.MyEdit>
  );
}
