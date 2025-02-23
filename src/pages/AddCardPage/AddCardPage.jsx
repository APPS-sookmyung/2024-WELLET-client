import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
import { getGroupList } from '../../apis/group.js';
import { postOCR } from '../../apis/ocr.js';
import INPUT_FIELDS from './inputFields';

export default function AddCardPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'image';

  const [activeBadge, setActiveBadge] = useState({
    id: mode === 'image' ? 1 : 2,
    name: mode === 'image' ? '이미지로 입력' : '직접 입력',
  });

  const [groupBadges, setGroupBadges] = useState([]);
  const [activeGroupBadge, setActiveGroupBadge] = useState(null);
  const [selectedImage, setSelectedImage] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const profileImageInputRef = useRef(null);

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

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await getGroupList();
        const groupList = response.data || [];
        setGroupBadges(groupList);
        if (groupList.length > 0) {
          setActiveGroupBadge(groupList[0]);
        }
      } catch (error) {
        console.error('그룹 리스트를 가져오는 데 실패:', error);
      }
    };
    fetchGroupData();
  }, []);

  const handleBadgeChange = (badge) => {
    setActiveBadge(badge);
    setSearchParams({ mode: badge.id === 1 ? 'image' : 'direct' });
  };

  const handleSubmitButtonClick = async () => {
    if (
      !cardInputData.name ||
      !cardInputData.company ||
      !cardInputData.phone ||
      !activeGroupBadge
    ) {
      alert('필수값을 모두 입력해주세요.');
      return;
    }

    const formData = new FormData();
    Object.entries(cardInputData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('categoryName', activeGroupBadge.name);

    if (profileImage) {
      formData.append('profImg', profileImage);
    }

    selectedImage.forEach((image, index) => {
      formData.append(index === 0 ? 'frontImg' : 'backImg', image);
    });

    try {
      await postCards({ data: formData });
      alert('명함이 성공적으로 등록되었습니다.');
      navigate('/card');
    } catch (error) {
      console.error('명함 등록 실패: ', error);
      alert(error.response?.data?.message || '명함 등록에 실패했습니다.');
    }
  };

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
    setProfilePreview(URL.createObjectURL(file));
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
          badges={[
            { id: 1, name: '이미지로 입력' },
            { id: 2, name: '직접 입력' },
          ]}
          activeBadge={activeBadge}
          setActiveBadge={handleBadgeChange}
        />
      </S.ButtonContainer>
      {activeBadge.name === '이미지로 입력' ? (
        <ImageInputForm
          selectedImage={selectedImage}
          onUploadImage={handleProfileImageUpload}
        />
      ) : (
        <DirectInputForm
          profileImage={profilePreview}
          onUploadProfileImage={handleProfileImageUpload}
          profileImageInputRef={profileImageInputRef}
          inputFields={INPUT_FIELDS}
          activeGroupBadge={activeGroupBadge}
          groupBadges={groupBadges}
          setActiveGroupBadge={setActiveGroupBadge}
          onChange={(field, value) =>
            setCardInputData((prev) => ({ ...prev, [field]: value }))
          }
        />
      )}
      <S.ActionBtnContainer>
        <PrimaryButton onClick={handleSubmitButtonClick}>등록</PrimaryButton>
        <SecondaryButton onClick={() => navigate('/card')}>
          취소
        </SecondaryButton>
      </S.ActionBtnContainer>
    </S.AddCardPage>
  );
}
