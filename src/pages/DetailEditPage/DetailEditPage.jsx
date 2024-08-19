import { useState, useRef, useEffect, memo } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as S from './DetailEditPage.style';
import Icon from '../../components/Icon/Icon';
import { BlueBadge } from '../../components';
import CARDS_SAMPLE_DATA from '../../constants/cardsSampleData';

const InputWrapper = memo(
  ({ label, type, name, value, onChange, onBlur, onFocus, autoFocus }) => {
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
  const [filteredBadges, setFilteredBadges] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const filteredData = CARDS_SAMPLE_DATA.find(
    (data) => data.name === decodeURIComponent(id)
  );

  const profileImageInputRef = useRef(null);
  const onUploadImage = (event) => {
    const files = Array.from(event.target.files || event.dataTransfer.files);
    setSelectedImage(files);
  };
  const onUploadProfileImage = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };
  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };
  const [myInfo, setMyInfo] = useState({
    name: filteredData.name,
    job: filteredData.job,
    company: filteredData.company,
  });

  const [myContact, setMyContact] = useState({
    phone: filteredData.phone,
    email: filteredData.email,
    tel: filteredData.tel,
    address: filteredData.address,
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

  useEffect(() => {
    if (filteredData) {
      setFilteredBadges(badges);
    }
  }, [filteredData]);

  const badges = [
    { label: '비즈니스', value: '비즈니스' },
    { label: '방송사', value: '방송사' },
    { label: '부동산', value: '부동산' },
    { label: '대학교', value: '대학교' },
  ];

  return (
    <>
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
          <S.EditIcon>편집완료</S.EditIcon>
        </S.EditIconBox>
      </S.Header>
      <S.Body>
        <S.PicContainer>
          <S.ProfilePic
            style={{
              backgroundImage: `url(${profileImage})`,
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
              <input
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
          <InputWrapper
            label='회사명'
            type='text'
            name='company'
            value={myInfo.company}
            onChange={handleInfoChange}
            onBlur={() => handleBlur('company')}
            onFocus={() => handleFocus('company')}
            autoFocus={isEditing.company}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='직책'
            type='text'
            name='job'
            value={myInfo.job}
            onChange={handleInfoChange}
            onBlur={() => handleBlur('job')}
            onFocus={() => handleFocus('job')}
            autoFocus={isEditing.job}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='휴대폰'
            type='tel'
            name='phone'
            value={myContact.phone}
            onChange={handleContactChange}
            onBlur={() => handleBlur('phone')}
            onFocus={() => handleFocus('phone')}
            autoFocus={isEditing.phone}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='이메일 주소'
            type='email'
            name='email'
            value={myContact.email}
            onChange={handleContactChange}
            onBlur={() => handleBlur('email')}
            onFocus={() => handleFocus('email')}
            autoFocus={isEditing.email}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='유선전화'
            type='tel'
            name='tel'
            value={myContact.tel}
            onChange={handleContactChange}
            onBlur={() => handleBlur('tel')}
            onFocus={() => handleFocus('tel')}
            autoFocus={isEditing.tel}
          />
        </S.InputContainer>
        <S.InputContainer>
          <InputWrapper
            label='주소'
            type='text'
            name='address'
            value={myContact.address}
            onChange={handleContactChange}
            onBlur={() => handleBlur('address')}
            onFocus={() => handleFocus('address')}
            autoFocus={isEditing.address}
          />
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
          <S.PlusBtnWrapper>
            <S.PlusText>그룹 추가</S.PlusText>
            <S.MoreIcon>
              <Icon id='more' fill='#2D29FF' />
            </S.MoreIcon>
          </S.PlusBtnWrapper>
        </S.GroupButtonBox>
      </S.GroupButtonContainer>
    </>
  );
}
