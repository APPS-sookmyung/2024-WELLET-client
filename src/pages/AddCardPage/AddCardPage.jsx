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
import { getGroupList } from '../../apis/group.js';

export default function AddCardPage() {
  const [activeBadge, setActiveBadge] = useState({
    id: 1,
    name: '이미지로 입력',
  });
  const [groupBadges, setGroupBadges] = useState([]);
  const [activeGroupBadge, setActiveGroupBadge] = useState(null);
  const [selectedImage, setSelectedImage] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const profileImageInputRef = useRef(null); // 최상단에서 선언

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

  // 그룹 리스트 가져오기
  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await getGroupList();
        console.log('그룹 리스트 API 응답: ', response.data);

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

  const handleDirectInputChange = (field, value) => {
    setCardInputData((prev) => ({ ...prev, [field]: value }));
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
          setActiveBadge={setActiveBadge}
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
          profileImageInputRef={profileImageInputRef} // 여기에서 props로 전달
          inputFields={[
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
          ]}
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
