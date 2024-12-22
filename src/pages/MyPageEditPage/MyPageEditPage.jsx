import React, { useState, useEffect, useRef } from 'react';
import * as S from './MyPageEditPage.style';
import Icon from '../../components/Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import { getMyCard, putMyCard } from '../../apis';

export default function MyPageEditPage() {
  const [myInfo, setMyInfo] = useState(null); // API로 받은 사용자 정보 저장
  const [isEditing, setIsEditing] = useState({
    name: false,
    job: false,
    company: false,
    phone: false,
    email: false,
    tel: false,
    address: false,
  });
  const [profileImage, setProfileImage] = useState(null);
  const profileImageInputRef = useRef(null);
  const navigate = useNavigate();

  // 컴포넌트가 마운트될 때 API로 사용자 정보를 가져옴
  useEffect(() => {
    const fetchMyCard = async () => {
      try {
        const data = await getMyCard();
        setMyInfo(data);
      } catch (error) {
        console.error('사용자 정보를 불러오는 데 실패했습니다.', error);
      }
    };

    fetchMyCard();
  }, []);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setMyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleEditComplete = async () => {
    try {
      const updatedData = await putMyCard(myInfo); // 수정된 데이터 서버에 전송
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
      navigate('/mypage'); // 수정 완료 후 마이페이지로 이동
    } catch (error) {
      console.error('사용자 정보를 저장하는 데 실패했습니다.', error);
    }
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

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const onUploadProfileImage = (event) => {
    const file = event.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  if (!myInfo) return <div>Loading...</div>; // 데이터가 없으면 로딩 중 화면

  return (
    <S.MyEdit>
      <S.Header>
        <S.ArrowIcon>
          <Link to='/mypage'>
            <Icon id='arrow' fill='#2D29FF' width='20' height='20' />
          </Link>
        </S.ArrowIcon>
        <S.WelletLogo>
          <Icon id='logo-blue' />
        </S.WelletLogo>
        <S.EditIconBox>
          <S.EditIcon onClick={handleEditComplete}>편집완료</S.EditIcon>
        </S.EditIconBox>
      </S.Header>
      <S.Body>
        <S.PicContainer>
          <S.ProfilePic
            style={{
              backgroundImage: `url(${profileImage || myInfo.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <S.GalleryIcon>
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
          </S.GalleryIcon>
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
        </S.EditInfoContainer>
      </S.Body>
      <S.InputField>
        <S.InputContainer>
          {/* 여기에 기존의 InputWrapper 컴포넌트를 활용하여 각 필드를 편집할 수 있습니다 */}
        </S.InputContainer>
      </S.InputField>
    </S.MyEdit>
  );
}
