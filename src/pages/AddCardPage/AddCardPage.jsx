import * as S from './AddCardPage.style';
import React, { useRef, useState } from 'react';
import {
  Header,
  SearchBar,
  BlueBadge,
  PrimaryButton,
  SecondaryButton,
  InputWrapper,
} from '../../components';
import Icon from '../../components/Icon/Icon';

export default function AddCardPage() {
  const [activeBadge, setActiveBadge] = useState('이미지로 입력');
  const [activeGroupBadge, setActiveGroupBadge] = useState('비즈니스');
  const [selectedImage, setSelectedImage] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const imageInputRef = useRef(null);
  const profileImageInputRef = useRef(null);

  const badges = [
    { label: '이미지로 입력', value: '이미지로 입력' },
    { label: '직접 입력', value: '직접 입력' },
  ];

  const groupBadges = [
    { label: '비즈니스', value: '비즈니스' },
    { label: '음식점', value: '음식점' },
    { label: '학교', value: '학교' },
  ];

  const inputFields = [
    { label: '이름', type: 'text', placeholder: '이름을 입력하세요' },
    { label: '회사', type: 'text', placeholder: 'WELLET Corp.' },
    {
      label: '직책 / 부서',
      type: 'text',
      placeholder: 'Web Engineer / 개발실',
    },
    { label: '휴대폰', type: 'tel', placeholder: '010-1234-5678' },
    {
      label: '이메일 주소',
      type: 'email',
      placeholder: 'email@welletapp.co.kr',
    },
    { label: '유선전화', type: 'tel', placeholder: '81-2-222-3456' },
    {
      label: '주소',
      type: 'text',
      placeholder: '서울특별시 용산구 청파로 47길 100(청파동 2가)',
    },
    { label: '메모', type: 'text', placeholder: '메모' },
  ];

  const onUploadImage = (event) => {
    const files = Array.from(event.target.files || event.dataTransfer.files);
    setSelectedImage(files);
  };

  const handleButtonClick = () => {
    imageInputRef.current.click();
  };

  const onUploadProfileImage = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
    onUploadImage(event);
  };

  return (
    <>
      <S.AddCardPage>
        <Header color='blue' />
        <SearchBar theme='white' />

        <S.TitleContainer>
          <S.Title>명함 추가하기</S.Title>
          <S.Subtitle>사진을 첨부 / 직접 입력하여 명함 추가하기</S.Subtitle>
        </S.TitleContainer>

        <S.ButtonContainer>
          <BlueBadge
            badges={badges}
            activeBadge={activeBadge}
            setActiveBadge={setActiveBadge}
          />
        </S.ButtonContainer>

        <S.DashedBorder
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          isDragOver={isDragOver}
        >
          {activeBadge === '이미지로 입력' && (
            <S.AddImageContainer onClick={handleButtonClick}>
              <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>
              <S.AddBoxIconWrapper>
                <Icon id='circle-plus' fill='none' />
              </S.AddBoxIconWrapper>
              <S.AddBoxSubTitle>
                아래 버튼을 클릭하거나, <br />
                이미지 파일을 여기에 끌어다 놓으세요.
              </S.AddBoxSubTitle>
              <S.AddBoxDescWrapper>
                <S.AddBoxDesc>
                  <Icon id='dot' />
                  <S.AddBoxText>
                    선택한 모든 명함 이미지는 앞면으로 인식합니다.
                  </S.AddBoxText>
                </S.AddBoxDesc>
                <S.AddBoxDesc>
                  <Icon id='dot' />
                  <S.AddBoxText>
                    이미지는 한 번에 1장까지 업로드할 수 있습니다.
                  </S.AddBoxText>
                </S.AddBoxDesc>
                <S.AddBoxDesc>
                  <Icon id='dot' />
                  <S.AddBoxText>
                    이미지 한 장 당 최대 크기는 1MB 입니다.
                  </S.AddBoxText>
                </S.AddBoxDesc>
              </S.AddBoxDescWrapper>
              <S.ImportImageBtnWrapper>
                <S.ImportImageBtn>파일 가져오기</S.ImportImageBtn>
                <input
                  type='file'
                  accept='image/*'
                  ref={imageInputRef}
                  style={{ display: 'none' }}
                  onChange={onUploadImage}
                  multiple
                />
              </S.ImportImageBtnWrapper>
              {selectedImage.length > 0 && (
                <S.PreviewContainer>
                  {selectedImage.map((file, index) => (
                    <S.PreviewImage
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={`preview ${index}`}
                    />
                  ))}
                </S.PreviewContainer>
              )}
            </S.AddImageContainer>
          )}

          {activeBadge === '직접 입력' && (
            <S.FormContainer>
              <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>

              <S.RegisterImageContainer>
                <S.SelectImg
                  onClick={handleProfileImageClick}
                  style={{
                    backgroundImage: `url(${profileImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {!profileImage && <Icon id='image' fill='none' />}
                </S.SelectImg>
                <S.RegisterText>
                  <S.RegisterTitle>프로필 사진 등록</S.RegisterTitle>
                  <S.RegisterSubTitle>
                    사진 아이콘을 클릭하여
                    <br />
                    명함에 들어갈 프로필 사진을 등록하세요.
                  </S.RegisterSubTitle>
                </S.RegisterText>
                <input
                  type='file'
                  accept='image/*'
                  ref={profileImageInputRef}
                  style={{ display: 'none' }}
                  onChange={onUploadProfileImage}
                />
              </S.RegisterImageContainer>

              <S.InputContainer>
                {inputFields.map((field, index) => (
                  <InputWrapper
                    key={index}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                ))}
              </S.InputContainer>

              <S.GroupContainer>
                <S.InputLabel>그룹</S.InputLabel>
                <S.GroupButtonWrapper>
                  <BlueBadge
                    badges={groupBadges}
                    activeBadge={activeGroupBadge}
                    setActiveBadge={setActiveGroupBadge}
                  />
                </S.GroupButtonWrapper>
              </S.GroupContainer>
            </S.FormContainer>
          )}
        </S.DashedBorder>

        <S.ActionBtnContainer>
          <PrimaryButton>등록</PrimaryButton>
          <SecondaryButton>취소</SecondaryButton>
        </S.ActionBtnContainer>
      </S.AddCardPage>
    </>
  );
}
