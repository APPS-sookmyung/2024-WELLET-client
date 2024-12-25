import React, { useEffect, useState, useRef, memo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as S from './DetailEditPage.style';
import Icon from '../../components/Icon/Icon';
import { BlueBadge, AddGroupModal } from '../../components';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import { getGroupList, getCardDetail, putCards } from '../../apis';
import { useQuery } from '@tanstack/react-query';
import useFormData from '../../hooks/useFormData';

const InputWrapper = memo(
  ({
    label,
    type,
    name,
    value,
    onChange,
    onBlur,
    onFocus,
    autoFocus,
    placeholder,
  }) => {
    return (
      <S.InputWrapper>
        <S.InputLabel>{label}</S.InputLabel>
        <S.InputBox>
          <S.Input
            type={type}
            name={name}
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoFocus={autoFocus}
            placeholder={placeholder}
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

export default function DetailEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeBadge, setActiveBadge] = useState(null);
  const [badges, setBadges] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    pic1: null,
    pic2: null,
  });
  const [info, setInfo] = useState({});

  const profileImageInputRef = useRef(null);
  const profileImageInputRef1 = useRef(null);
  const profileImageInputRef2 = useRef(null);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // 입력할 데이터
  const InputData = [
    {
      label: '회사명',
      type: 'text',
      name: 'company',
      value: info.company,
      onChange: handleInfoChange,
    },
    {
      label: '직책',
      type: 'text',
      name: 'position',
      value: info.position,
      onChange: handleInfoChange,
    },
    {
      label: '부서',
      type: 'text',
      name: 'department',
      value: info.department,
      onChange: handleInfoChange,
    },
    {
      label: '휴대폰',
      type: 'tel',
      name: 'phone',
      value: info.phone,
      onChange: handleInfoChange,
    },
    {
      label: '이메일',
      type: 'email',
      name: 'email',
      value: info.email,
      onChange: handleInfoChange,
    },
    {
      label: '유선전화',
      type: 'tel',
      name: 'tel',
      value: info.tel,
      onChange: handleInfoChange,
    },
    {
      label: '주소',
      type: 'text',
      name: 'address',
      value: info.address,
      onChange: handleInfoChange,
    },
    {
      label: '메모',
      type: 'text',
      name: 'memo',
      value: info.memo,
      onChange: handleInfoChange,
    },
  ];

  // 카드 상세 데이터
  const { data: inputData } = useQuery({
    queryKey: ['cardDetail', id],
    queryFn: () => getCardDetail({ card_id: id }),
  });

  const profileImageUrl = profileImage || ProfileImgDefault;

  const { data: groupListData } = useQuery({
    queryKey: ['groupList'],
    queryFn: () => getGroupList(),
  });

  useEffect(() => {
    if (groupListData) {
      const initialBadges = groupListData.data.map((group) => ({
        label: group.id,
        value: group.name,
      }));
      setBadges(initialBadges);
    }
  }, [groupListData]);

  useEffect(() => {
    if (inputData) {
      setInfo(inputData.data); // inputData로부터 info 상태 업데이트
    }
  }, [inputData]);

  const onUploadProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const handleImageUpload = (e, target) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file); // 업로드된 파일의 URL 생성
      setSelectedImage((prev) => ({
        ...prev,
        [target]: newImageUrl, // target(pic1, pic2)에 따라 상태 업데이트
      }));
    }
  };

  // useFormData 훅을 컴포넌트 내에서 호출
  const updatedDataForm = useFormData({
    ...info,
    group: activeBadge,
  });

  const handleEditComplete = async () => {
    try {
      await putCards({ card_id: id, data: updatedDataForm() }); // updatedDataForm() 호출
      navigate(`/card/${id}`); // 편집 완료 후 해당 카드 페이지로 리디렉션
    } catch (error) {
      console.error('데이터를 저장하는 중에 오류가 발생하였습니다.:', error);
    }
  };
  return (
    <>
      <S.DetailEdit>
        <S.Header>
          <S.Arrowicon>
            <Link to={`/card/${id}`}>
              <Icon id='arrow' fill='#2D29FF' width='18' height='18' />
            </Link>
          </S.Arrowicon>
          <S.Welletlogo>
            <Icon id='logo-blue' />
          </S.Welletlogo>
          <S.EditIconBox>
            <S.EditIcon onClick={handleEditComplete}>편집완료</S.EditIcon>
          </S.EditIconBox>
        </S.Header>
        <S.Body>
          <S.PicContainer>
            <S.ProfilePic
              style={{
                backgroundImage: `url(${profileImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <S.Galleryicon>
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
            </S.Galleryicon>
          </S.PicContainer>
          <S.EditInfoContainer>
            <S.EditName>
              <S.Name>{info.name}</S.Name>
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
                onChange={field.onChange}
              />
            ))}
          </S.InputContainer>
        </S.InputField>

        <S.GroupButtonContainer>
          <S.GroupButtonBar>그룹</S.GroupButtonBar>
          <S.GroupButtonBox>
            <BlueBadge
              badges={badges}
              activeBadge={activeBadge}
              setActiveBadge={setActiveBadge}
            />
          </S.GroupButtonBox>
        </S.GroupButtonContainer>

        {/* 이미지 업로드 */}
        <S.CardImageContainer>
          <S.CardImageBox>
            <img src={selectedImage.pic1 || info.pic1} alt='사진 1' />
            <S.CardGalleryIcon>
              <Icon
                id='gallery'
                fill='#FFFFFF'
                width='20'
                height='20'
                onClick={() => profileImageInputRef1.current.click()}
              />
              <input
                type='file'
                accept='image/*'
                ref={profileImageInputRef1}
                style={{ display: 'none' }}
                onChange={(e) => handleImageUpload(e, 'pic1')}
              />
            </S.CardGalleryIcon>
          </S.CardImageBox>

          <S.CardImageBox>
            <img src={selectedImage.pic2 || info.pic2} alt='사진 2' />
            <S.CardGalleryIcon>
              <Icon
                id='gallery'
                fill='#FFFFFF'
                width='20'
                height='20'
                onClick={() => profileImageInputRef2.current.click()}
              />
              <input
                type='file'
                accept='image/*'
                ref={profileImageInputRef2}
                style={{ display: 'none' }}
                onChange={(e) => handleImageUpload(e, 'pic2')}
              />
            </S.CardGalleryIcon>
          </S.CardImageBox>
        </S.CardImageContainer>
      </S.DetailEdit>

      <AddGroupModal
        isModalOpen={modalVisible}
        setIsModalOpen={setModalVisible}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
}
