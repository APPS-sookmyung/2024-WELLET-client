import React, { useEffect, useState, useRef, memo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as S from './DetailEditPage.style';
import Icon from '../../components/Icon/Icon';
import { BlueBadge, AddGroupModal } from '../../components';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import USER from '../../dummy/user';
import { getGroupList } from '../../apis';
import { useQuery } from '@tanstack/react-query';

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
  const [activeBadge, setActiveBadge] = useState(null);
  const member_id = USER.id;

  const {
    data: groupListData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['groupList', member_id],
    queryFn: () => getGroupList({ member_id }),
    enabled: !!member_id,
  });

  const [badges, setBadges] = useState([]);

  useEffect(() => {
    if (groupListData) {
      console.log('groupListData: ', groupListData.data);
      const initialBadges = groupListData.data.map((group) => ({
        label: group.id, // or whatever label makes sense
        value: group.name,
      }));
      setBadges(initialBadges); // Set badges to the fetched groups
    }
  }, [groupListData]);

  const filteredData = CARDS_SAMPLE_DATA.find(
    (data) => data.id === decodeURIComponent(id)
  );

  // const [filteredBadges, setFilteredBadges] = useState(() => {
  //   return filteredData ? groupListData : [];
  // });

  const data = filteredData || {
    imageUrl: '',
  };

  const [profileImage, setProfileImage] = useState(null);

  const [selectedImage, setSelectedImage] = useState({
    pic1: null,
    pic2: null,
  });

  const profileImageInputRef = useRef(null);
  const profileImageInputRef1 = useRef(null);
  const profileImageInputRef2 = useRef(null);

  const onUploadImage = (e) => {
    const files = Array.from(e.target.files || e.dataTransfer.files);
    setSelectedImage(files);
  };

  const onUploadProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const handleFirstImageClick = () => {
    profileImageInputRef1.current.click();
  };

  const handleSecondImageClick = () => {
    profileImageInputRef2.current.click();
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

  const [myInfo, setMyInfo] = useState({
    name: filteredData.name,
    job: filteredData.job,
    company: filteredData.company,
    team: filteredData.team,
  });

  const [myContact, setMyContact] = useState({
    phone: filteredData.phone,
    email: filteredData.email,
    tel: filteredData.tel,
    address: filteredData.address,
    memo: filteredData.memo,
  });

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setMyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setMyContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const InputData = [
    {
      label: '회사명',
      type: 'text',
      name: 'company',
      value: myInfo.company,
      onChange: handleInfoChange,
    },
    {
      label: '직책',
      type: 'text',
      name: 'job',
      value: myInfo.job,
      onChange: handleInfoChange,
    },
    {
      label: '부서',
      type: 'text',
      name: 'team',
      value: myInfo.team,
      onChange: handleInfoChange,
    },
    {
      label: '휴대폰',
      type: 'tel',
      name: 'phone',
      value: myContact.phone,
      onChange: handleContactChange,
    },
    {
      label: '이메일',
      type: 'email',
      name: 'email',
      value: myContact.email,
      onChange: handleContactChange,
    },
    {
      label: '유선전화',
      type: 'tel',
      name: 'tel',
      value: myContact.tel,
      onChange: handleContactChange,
    },
    {
      label: '주소',
      type: 'text',
      name: 'address',
      value: myContact.address,
      onChange: handleContactChange,
    },
    {
      label: '메모',
      type: 'text',
      name: 'memo',
      value: myContact.memo,
      onChange: handleContactChange,
    },
  ];

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

  const [isEditing, setIsEditing] = useState({
    name: false,
    job: false,
    company: false,
    phone: false,
    email: false,
    tel: false,
    address: false,
  });

  const navigate = useNavigate();

  const handleEditComplete = () => {
    const updatedData = {
      ...myInfo,
      ...myContact,
      group: activeBadge,
    };

    console.log('Data saved successfully:', updatedData);
    setIsEditing({
      name: false,
      job: false,
      company: false,
      phone: false,
      email: false,
      tel: false,
      address: false,
    });
    navigate(`/card/${id}`);
  };

  const profileImageUrl = profileImage || data.imageUrl || ProfileImgDefault;

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
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
        <S.GroupButtonContainer>
          <S.GroupButtonBar>그룹</S.GroupButtonBar>
          <S.GroupButtonBox>
            <BlueBadge
              badges={badges}
              activeBadge={activeBadge}
              setActiveBadge={setActiveBadge}
            />
            <S.PlusBtnWrapper onClick={openModal}>
              <S.PlusText>그룹 수정</S.PlusText>
              <S.MoreIcon>
                <Icon id='more' fill='#2D29FF' />
              </S.MoreIcon>
            </S.PlusBtnWrapper>
          </S.GroupButtonBox>
        </S.GroupButtonContainer>
        {(data.pic1 || data.pic2) && (
          <S.CardImageContainer>
            <S.CardImageBox>
              <img src={selectedImage.pic1 || data.pic1} alt='사진 1' />

              <S.CardGalleryIcon>
                <Icon
                  id='gallery'
                  fill='#FFFFFF'
                  width='20'
                  height='20'
                  onClick={handleFirstImageClick}
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
            {data.pic2 ? (
              <S.CardImageBox>
                <img src={selectedImage.pic2 || data.pic2} alt='사진 2' />

                <S.CardGalleryIcon>
                  <Icon
                    id='gallery'
                    fill='#FFFFFF'
                    width='20'
                    height='20'
                    onClick={handleSecondImageClick}
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
            ) : (
              <S.CardImageBox />
            )}
          </S.CardImageContainer>
        )}
      </S.DetailEdit>
      <AddGroupModal
        member_id={member_id}
        isModalOpen={modalVisible}
        setIsModalOpen={setModalVisible}
      />
    </>
  );
}
