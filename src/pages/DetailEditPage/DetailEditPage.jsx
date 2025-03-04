import { useQuery } from '@tanstack/react-query';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getCardDetail,
  getGroupList,
  putCards,
  putCardsImg,
  putCardsPf,
} from '../../apis';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import { AddGroupModal } from '../../components';
import Icon from '../../components/Icon/Icon';
import useFormData from '../../hooks/useFormData';
import * as S from './DetailEditPage.style';

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
              <Icon id='pencil' fill='none' width={13} height={13} />
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
    frontImg: null,
    backImg: null,
  });
  const [selectedFiles, setSelectedFiles] = useState({
    frontImg: null,
    backImg: null,
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

  const [isEditing, setIsEditing] = useState({});

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

  const { data: inputData } = useQuery({
    queryKey: ['cardDetail', id],
    queryFn: () => getCardDetail({ card_id: id }),
  });

  const profileImageUrl =
    profileImage || inputData?.data.profImgUrl || ProfileImgDefault;

  const { data: groupListData } = useQuery({
    queryKey: ['groupList'],
    queryFn: () => getGroupList(),
  });

  useEffect(() => {
    if (groupListData) {
      const initialBadges = groupListData.data.map(({ id, name }) => ({
        id,
        name,
      }));
      setBadges(initialBadges);
    }
  }, [groupListData]);

  useEffect(() => {
    if (inputData) {
      setInfo({
        ...inputData.data,
        frontImg: inputData.data.frontImgUrl,
        backImg: inputData.data.backImgUrl,
        profImg: inputData.data.profImgUrl,
      });
      setSelectedImage({
        frontImg: inputData.data.frontImgUrl,
        backImg: inputData.data.backImgUrl,
      });

      const matchedBadge = badges.find(
        (badge) => badge.name === inputData.data.category
      );
      if (matchedBadge) {
        setActiveBadge(matchedBadge);
      }
    }
  }, [inputData, badges]);
  useEffect(() => {
    if (selectedImage.frontImg || selectedImage.backImg) {
      setInfo((prev) => ({
        ...prev,
        frontImg: selectedImage.frontImg,
        backImg: selectedImage.backImg,
      }));
    }
  }, [selectedImage]);

  const handleGroupChange = (updatedBadges) => {
    setBadges(updatedBadges);
    if (updatedBadges.length > 0) {
      setActiveBadge(updatedBadges[0]);
    }
  };

  const onUploadProfileImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setProfileImage(URL.createObjectURL(file));
    try {
      const formData = new FormData();
      formData.append('profImg', file);
      await putCardsPf({ card_id: id, data: formData });
      setInfo((prev) => ({
        ...prev,
        profImgUrl: URL.createObjectURL(file),
      }));
    } catch (error) {
      console.error('프로필 이미지 업데이트 중 오류 발생:', error);
    }
  };

  const handleProfileImageClick = () => {
    profileImageInputRef.current.click();
  };

  const handleImageUpload = async (e, target) => {
    const file = e.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);

      setSelectedImage((prev) => {
        const updated = { ...prev, [target]: newImageUrl };
        return updated;
      });

      const updatedFiles = { ...selectedFiles, [target]: file };
      setSelectedFiles(updatedFiles);
      setInfo((prev) => ({
        ...prev,
        [`${target}Url`]: newImageUrl,
      }));

      try {
        if (updatedFiles.frontImg && updatedFiles.backImg) {
          const combinedFormData = new FormData();
          combinedFormData.append('frontImg', updatedFiles.frontImg);
          combinedFormData.append('backImg', updatedFiles.backImg);

          const response = await putCardsImg({
            card_id: id,
            data: combinedFormData,
          });

          setInfo((prev) => ({
            ...prev,
            frontImg: response.data.frontImgUrl ?? prev.frontImg,
            backImg: response.data.backImgUrl ?? prev.backImg,
          }));
        }
      } catch (error) {
        console.error('명함 이미지 업데이트 중 오류 발생:', error);
      }
    }
  };

  const updatedDataForm = useFormData({
    ...info,
    categoryName: activeBadge?.name,
  });

  const handleEditComplete = async () => {
    if (!selectedFiles.frontImg || !selectedFiles.backImg) {
      alert('두 이미지를 모두 수정해주세요.');
      return;
    }
    const updatedData = updatedDataForm();
    if (activeBadge) {
      updatedData.categoryName = activeBadge.name;
    }

    if (selectedFiles.frontImg && selectedFiles.backImg) {
      updatedData.frontImg = selectedFiles.frontImg;
      updatedData.backImg = selectedFiles.backImg;
    }

    if (profileImage) {
      updatedData.profImg = profileImage;
    }

    try {
      await putCards({ card_id: id, data: updatedData });
      const updatedCard = await getCardDetail({ card_id: id });
      setInfo(updatedCard.data);
      navigate(`/card/${id}`);
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
              {isEditing.name ? (
                <S.InputNameBox
                  type='text'
                  name='name'
                  value={info.name}
                  onChange={handleInfoChange}
                  onBlur={() => setIsEditing({ ...isEditing, name: false })}
                  autoFocus
                />
              ) : (
                <>
                  <S.Name>{info.name}</S.Name>
                  <S.PencilIcon
                    onClick={() => setIsEditing({ ...isEditing, name: true })}
                  >
                    <Icon id='pencil' fill='#FFF' width={13} height={13} />
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
                value={field.value}
                onChange={field.onChange}
              />
            ))}
          </S.InputContainer>
        </S.InputField>

        <S.GroupButtonContainer>
          {info.category && (
            <>
              <S.GroupButtonBar>그룹</S.GroupButtonBar>
              <S.GroupButtonBox>
                <S.GroupButton>{info.category}</S.GroupButton>
              </S.GroupButtonBox>
            </>
          )}
          {/* // 그룹 편집 기능
          <S.GroupButtonBox>
            <BlueBadge
              badges={badges}
              activeBadge={activeBadge}
              setActiveBadge={setActiveBadge}
              setInfo={setInfo}
            />
            <S.AddGroupButton onClick={() => setModalVisible(true)}>
              <p>그룹 편집</p>
              <Icon id='circle-plus-blue' width='13' height='13' />
            </S.AddGroupButton>
          </S.GroupButtonBox> */}
        </S.GroupButtonContainer>

        {/* 이미지 업로드 */}
        <S.CardAddImageContainer>
          <S.GroupButtonBar>명함 이미지</S.GroupButtonBar>
          <S.CardImageContainer>
            {(info.frontImg || info.backImg) &&
            (selectedImage.frontImg || selectedImage.backImg) ? (
              <>
                <S.CardImageBox>
                  <img src={selectedImage.frontImg || info.frontImg} alt='' />
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
                      onChange={(e) => handleImageUpload(e, 'frontImg')}
                    />
                  </S.CardGalleryIcon>
                </S.CardImageBox>
                <S.CardImageBox>
                  <img src={selectedImage.backImg || info.backImg} alt='' />
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
                      onChange={(e) => handleImageUpload(e, 'backImg')}
                    />
                  </S.CardGalleryIcon>
                </S.CardImageBox>
              </>
            ) : (
              <>
                <S.AddCardImage>
                  <Icon
                    id='nav-add-card'
                    width='20'
                    height='20'
                    onClick={() => profileImageInputRef1.current.click()}
                  />
                  <input
                    type='file'
                    accept='image/*'
                    ref={profileImageInputRef1}
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageUpload(e, 'frontImg')}
                  />
                </S.AddCardImage>
                <S.AddCardImage>
                  <Icon
                    id='nav-add-card'
                    width='20'
                    height='20'
                    onClick={() => profileImageInputRef2.current.click()}
                  />
                  <input
                    type='file'
                    accept='image/*'
                    ref={profileImageInputRef2}
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageUpload(e, 'backImg')}
                  />
                </S.AddCardImage>
              </>
            )}
          </S.CardImageContainer>
        </S.CardAddImageContainer>
      </S.DetailEdit>

      <AddGroupModal
        isModalOpen={modalVisible}
        setIsModalOpen={setModalVisible}
        badges={badges}
        onGroupChange={handleGroupChange}
      />
    </>
  );
}
