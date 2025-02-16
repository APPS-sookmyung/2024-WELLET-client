import { useEffect, useRef, useState } from 'react';
import {
  BlueBadge,
  Header,
  PrimaryButton,
  SearchBar,
  SecondaryButton,
} from '../../components';
import * as S from './AddCardPage.style';
import DirectInputForm from './DirectInputForm';
import ImageInputForm from './ImageInputForm';
import { postCards } from '../../apis/cards.js';

export default function AddCardPage() {
  const [activeBadge, setActiveBadge] = useState({
    id: 1,
    name: '이미지로 입력',
  });
  const [activeGroupBadge, setActiveGroupBadge] = useState({
    id: 1,
    name: '비즈니스',
  });
  const [selectedImage, setSelectedImage] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [cardInputData, setCardInputData] = useState({
    name: '',
    position: '',
    department: '',
    company: '',
    phone: '',
    email: '',
    tel: '',
    address: '',
    memo: '',
    category: '비즈니스',
  });

  const handleDirectInputChange = (field, value) => {
    setCardInputData((prev) => ({ ...prev, [field]: value }));
  };

  // email과 phone 유효성 검사
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone) => /^\d{3}-\d{3,4}-\d{4}$/.test(phone);

  const handleSubmitButtonClick = async () => {
    if (
      !cardInputData.name ||
      !cardInputData.company ||
      !cardInputData.phone ||
      !activeGroupBadge.name
    ) {
      alert('필수값을 모두 입력해주세요.');
      return;
    }

    if (cardInputData.phone && !isValidPhone(cardInputData.phone)) {
      alert('휴대폰 번호 형식이 올바르지 않습니다.');
      return;
    }

    if (cardInputData.email && !isValidEmail(cardInputData.email)) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('name', cardInputData.name);
    formData.append('position', cardInputData.position);
    formData.append('department', cardInputData.department);
    formData.append('company', cardInputData.company);
    formData.append('phone', cardInputData.phone);
    formData.append('email', cardInputData.email);
    formData.append('tel', cardInputData.tel);
    formData.append('address', cardInputData.address);
    formData.append('memo', cardInputData.memo);
    formData.append('category', activeGroupBadge.name);

    if (profileImage) {
      formData.append('profImgUrl', profileImage);
    }

    selectedImage.forEach((image, index) => {
      formData.append(index === 0 ? 'frontImgUrl' : 'backImgUrl', image);
    });

    try {
      const response = await postCards({ data: formData });
      alert('명함이 성공적으로 등록되었습니다.');
      console.log('명함 등록 API 응답:', response);
    } catch (error) {
      console.error('명함 등록 실패: ', error);
      alert('명함 등록에 실패했습니다.');
    }
  };

  const [isDragOver, setIsDragOver] = useState(false);

  const imageInputRef = useRef(null);
  const profileImageInputRef = useRef(null);

  const badges = [
    { id: 1, name: '이미지로 입력' },
    { id: 2, name: '직접 입력' },
  ];

  const groupBadges = [
    { id: 1, name: '비즈니스' },
    { id: 2, name: '음식점' },
    { id: 3, name: '학교' },
  ];

  const inputFields = [
    {
      label: '이름 *',
      type: 'text',
      placeholder: '이름을 입력하세요',
    },
    {
      label: '회사명 *',
      type: 'text',
      placeholder: 'WELLET Corp.',
    },
    {
      label: '부서',
      type: 'text',
      placeholder: '신규 개발팀',
    },
    {
      label: '직책',
      type: 'text',
      placeholder: '사원',
    },
    {
      label: '휴대폰 *',
      type: 'tel',
      placeholder: '010-1234-5678',
    },
    {
      label: '이메일 *',
      type: 'email',
      placeholder: 'email@welletapp.co.kr',
    },
    {
      label: '유선전화',
      type: 'tel',
      placeholder: '81-2-222-3456',
    },
    {
      label: '주소',
      type: 'text',
      placeholder: '서울특별시 용산구 청파로 47길 100(청파동 2가)',
    },
    {
      label: '메모',
      type: 'text',
      placeholder: '메모',
    },
  ];

  const onUploadImage = (event) => {
    const files = Array.from(event.target.files || event.dataTransfer.files);
    const newImages = files.slice(0, 2);
    setSelectedImage((prevImages) =>
      [...prevImages.slice(0, 2), ...newImages].slice(0, 2)
    );
  };

  const handleButtonClick = () => {
    imageInputRef.current.click();
  };

  const onUploadProfileImage = (event) => {
    const file = event.target.files[0];
    // setProfileImage(URL.createObjectURL(file));
    setProfileImage(file);
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

      {activeBadge.name === '이미지로 입력' ? (
        <ImageInputForm
          selectedImage={selectedImage}
          onUploadImage={onUploadImage}
          handleButtonClick={handleButtonClick}
          imageInputRef={imageInputRef}
          isDragOver={isDragOver}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
        />
      ) : (
        <DirectInputForm
          profileImage={profileImage}
          onUploadProfileImage={onUploadProfileImage}
          handleProfileImageClick={handleProfileImageClick}
          profileImageInputRef={profileImageInputRef}
          inputFields={inputFields}
          activeGroupBadge={activeGroupBadge}
          groupBadges={groupBadges}
          setActiveGroupBadge={setActiveGroupBadge}
          onChange={handleDirectInputChange}
        />
      )}

      <S.ActionBtnContainer>
        <PrimaryButton onClick={handleSubmitButtonClick}>등록</PrimaryButton>
        <SecondaryButton>취소</SecondaryButton>
      </S.ActionBtnContainer>
    </S.AddCardPage>
  );
}
