import React, { useState, useEffect, memo, useRef } from 'react';
import * as S from './MyPageEditPage.style';
import Icon from '../../components/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { getMyCard, postMyCard, putMyCard } from '../../apis';
import useFormData from '../../hooks/useFormData';
import { useQuery } from '@tanstack/react-query';

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
    position: '',
    company: '',
    phone: '',
    email: '',
    tel: '',
    address: '',
    department: '',
    profImgUrl: '',
  });
  const [isEditing, setIsEditing] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const profileImageInputRef = useRef(null);
  const navigate = useNavigate();

  const { data: inputData } = useQuery({
    queryKey: ['myDetail'],
    queryFn: getMyCard,
  });

  useEffect(() => {
    if (inputData) {
      setMyInfo(inputData.data);
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
      if (key !== 'profImgUrl') {
        formData.append(key, value || '');
      }
    });

    // 이미지 파일 추가 (profileImage 상태)
    if (profileImage) {
      formData.append('profileImg', profileImage); // 백엔드의 profileImg 필드 이름 사용
    } else if (myInfo.profImgUrl) {
      formData.append('profImgUrl', myInfo.profImgUrl); // 기존 이미지 URL 유지
    }

    return formData; // FormData 반환
  };

  const handleEditComplete = async () => {
    try {
      if (!myInfo?.id) {
        console.log('POST 요청: 새 명함 생성');
        await postMyCard({ data: updatedDataForm() });
      } else {
        console.log('PUT 요청: 명함 수정');
        await putMyCard({ data: updatedDataForm() });
      }
      setMyInfo((prevInfo) => ({
        ...prevInfo,
        ...response.data, // 서버에서 반환된 데이터를 상태에 반영
        profImgUrl: response.data.profImgUrl || prevInfo.profImgUrl,
      }));
      console.log('업데이트된 myInfo:', myInfo);
      navigate('/mypage');
    } catch (error) {
      console.error(
        '데이터를 저장하는 중에 오류가 발생하였습니다.:',
        error.response?.data || error.message
      );
    }
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const onUploadProfileImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setProfileImage(file); // 파일 객체 저장
      setMyInfo((prevInfo) => ({
        ...prevInfo,
        profImgUrl: previewUrl, // 필요시 URL로 변경 가능
      }));
      console.log('선택된 파일:', file.name);
    } else {
      console.log('파일이 선택되지 않았습니다.');
    }
  };
  console.log('profileImage:', profileImage);
  console.log('profImgUrl:', myInfo.profImgUrl);

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
              backgroundImage: profileImage
                ? `url(${URL.createObjectURL(profileImage)})` // 새로 업로드한 이미지 미리보기
                : myInfo.profImgUrl
                  ? `url(${myInfo.profImgUrl})` // 기존 이미지
                  : '',
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
              value={field.value}
              placeholder={field.value}
              onChange={field.onChange}
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
