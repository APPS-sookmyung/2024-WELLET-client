import React, { useState, useRef, memo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as S from './DetailEditPage.style';
import Icon from '../../components/Icon/Icon';
import { BlueBadge, AddGroupModal } from '../../components';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';

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

const badges = [
  { label: '비즈니스', value: '비즈니스' },
  { label: '방송사', value: '방송사' },
  { label: '부동산', value: '부동산' },
  { label: '대학교', value: '대학교' },
];

export default function DetailEditPage() {
  const { id } = useParams();

  const [activeBadge, setActiveBadge] = useState(null);

  const filteredData = CARDS_SAMPLE_DATA.find(
    (data) => data.name === decodeURIComponent(id)
  );

  const [filteredBadges, setFilteredBadges] = useState(() => {
    return filteredData ? badges : [];
  });

  const data = filteredData || {
    imageUrl: '',
  };

  const [profileImage, setProfileImage] = useState(null);

  const [selectedImage, setSelectedImage] = useState([]);

  const profileImageInputRef = useRef(null);

  const onUploadImage = (e) => {
    const files = Array.from(e.target.files || e.dataTransfer.files);
    setSelectedImage(files);
  };

  const onUploadProfileImage = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
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
    console.log('Data saved successfully:', { myInfo, myContact });
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

  const profileImageUrl = data.imageUrl || ProfileImgDefault;

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
              <Icon id='arrow' fill='#2D29FF' width='20' height='20' />
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
              badges={filteredBadges}
              activeBadge={activeBadge}
              setActiveBadge={setActiveBadge}
              fill='#2d29ff'
            />
            <S.PlusBtnWrapper onClick={openModal}>
              <S.PlusText>그룹 수정</S.PlusText>
              <S.MoreIcon>
                <Icon id='more' fill='#2D29FF' />
              </S.MoreIcon>
            </S.PlusBtnWrapper>
          </S.GroupButtonBox>
        </S.GroupButtonContainer>
      </S.DetailEdit>
      <AddGroupModal
        isModalOpen={modalVisible}
        setIsModalOpen={setModalVisible}
      />
    </>
  );
}
