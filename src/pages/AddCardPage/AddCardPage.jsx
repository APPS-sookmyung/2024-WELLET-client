import { useRef, useState } from 'react';
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
  });

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
        />
      )}

      <S.ActionBtnContainer>
        <PrimaryButton onClick={handleSubmitButtonClick}>등록</PrimaryButton>
        <SecondaryButton>취소</SecondaryButton>
      </S.ActionBtnContainer>
    </S.AddCardPage>
  );
}
