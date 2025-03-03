import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  BlueBadge,
  Header,
  PrimaryButton,
  SearchBar,
  SecondaryButton,
  ImageUploadOverlay,
  AddGroupModal,
} from '../../components';
import * as S from './AddCardPage.style';
import DirectInputForm from './DirectInputForm';
import ImageInputForm from './ImageInputForm';
import { postCards, getGroupList, postOCR } from '../../apis';
import INPUT_FIELDS from './inputFields';

export default function AddCardPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'image';

  const [isLoading, setIsLoading] = useState(false);
  const [activeBadge, setActiveBadge] = useState({
    id: mode === 'image' ? 1 : 2,
    name: mode === 'image' ? '이미지로 입력' : '직접 입력',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupBadges, setGroupBadges] = useState([]);
  const [activeGroupBadge, setActiveGroupBadge] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleCardImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;
    setSelectedImage(files[0]);
    event.target.value = '';
  };

  const formatPhoneNumber = (value) => {
    let onlyNumbers = value.replace(/\D/g, '');

    if (onlyNumbers.startsWith('82')) {
      if (onlyNumbers.startsWith('8210')) {
        onlyNumbers = '010' + onlyNumbers.slice(4);
      } else {
        onlyNumbers = '010' + onlyNumbers.slice(2);
      }
    }

    if (onlyNumbers.length <= 3) {
      return onlyNumbers;
    } else if (onlyNumbers.length <= 7) {
      return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
    } else {
      return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
    }
  };

  const handleSubmitButtonClick = async () => {
    if (activeBadge.id === 1) {
      if (selectedImage === null) {
        alert('이미지를 입력해주세요');
        return;
      }

      setIsLoading(true);

      const formData = new FormData();
      formData.append('file', selectedImage);

      try {
        const { data } = await postOCR(formData);
        const { address, company, email, mobile, name, position, tel } = data;

        setCardInputData({
          name: name || '',
          position: position || '',
          department: '',
          company: company || '',
          phone: mobile ? formatPhoneNumber(mobile) : '',
          email: email || '',
          tel: tel || '',
          address: address || '',
          memo: '',
        });

        setActiveBadge({ id: 2, name: '직접 입력' });
        setSearchParams({ mode: 'direct' });
      } catch (error) {
        console.log('OCR 실패: ', error);
        alert(
          error.response?.data?.message || '명함 이미지 인식에 실패했습니다.'
        );
      } finally {
        setIsLoading(false);
      }
      return;
    }

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
    if (!file) return;
    setProfileImage(file);
    setProfilePreview(URL.createObjectURL(file));
  };

  return (
    <>
      <S.AddCardPage>
        <Header color='blue' />
        <SearchBar theme='white' />
        <S.TitleContainer>
          <S.Title>명함 추가</S.Title>
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
        {activeBadge.id === 1 ? (
          <ImageUploadOverlay isLoading={isLoading}>
            <ImageInputForm
              selectedImage={selectedImage}
              onUploadImage={handleCardImageUpload}
              isLoading={isLoading}
            />
          </ImageUploadOverlay>
        ) : (
          <DirectInputForm
            profileImage={profilePreview}
            onUploadProfileImage={handleProfileImageUpload}
            profileImageInputRef={profileImageInputRef}
            inputFields={INPUT_FIELDS}
            activeGroupBadge={activeGroupBadge}
            groupBadges={groupBadges}
            setActiveGroupBadge={setActiveGroupBadge}
            value={cardInputData}
            onChange={(field, value) =>
              setCardInputData((prev) => ({
                ...prev,
                [field]: field === 'phone' ? formatPhoneNumber(value) : value,
              }))
            }
            onOpenModal={() => {
              console.log('모달 열기 실행됨');
              setIsModalOpen(true);
            }}
          />
        )}
        <S.ActionBtnContainer>
          <PrimaryButton onClick={handleSubmitButtonClick} disabled={isLoading}>
            {isLoading
              ? '등록 중...'
              : activeBadge.id === 1
                ? '이미지 등록'
                : '등록'}
          </PrimaryButton>
          <SecondaryButton
            onClick={() => navigate('/card')}
            disabled={isLoading}
          >
            취소
          </SecondaryButton>
        </S.ActionBtnContainer>
      </S.AddCardPage>

      {isModalOpen && (
        <AddGroupModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          badges={groupBadges}
          onGroupChange={setGroupBadges}
        />
      )}
    </>
  );
}
