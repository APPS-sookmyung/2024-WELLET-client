import * as S from './AddCardPage.style';
import Icon from '../../components/Icon/Icon';
import { InputWrapper, BlueBadge } from '../../components';

export default function DirectInputForm({
  profileImage,
  onUploadProfileImage,
  profileImageInputRef,
  inputFields,
  activeGroupBadge,
  groupBadges,
  setActiveGroupBadge,
  value,
  onChange,
}) {
  return (
    <S.DashedBorder>
      <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>

      {/* 프로필 사진 등록 */}
      <S.RegisterImageContainer>
        <S.SelectImg
          onClick={() => profileImageInputRef.current.click()}
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {!profileImage && <Icon id='image' fill='none' />}
        </S.SelectImg>
        <S.RegisterText>
          <S.RegisterTitle>프로필 사진 등록</S.RegisterTitle>
          <S.RegisterSubTitle>
            사진 아이콘을 클릭하여
            <br />
            명함에 들어갈 프로필 사진을 등록하세요.
          </S.RegisterSubTitle>
        </S.RegisterText>
        <input
          type='file'
          accept='image/*'
          ref={profileImageInputRef}
          style={{ display: 'none' }}
          onChange={onUploadProfileImage}
        />
      </S.RegisterImageContainer>

      {/* 입력 필드 */}
      <S.InputContainer>
        {inputFields.map((field, index) => (
          <InputWrapper
            key={index}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={value[field.field]}
            onChange={(e) => onChange(field.field, e.target.value)}
          />
        ))}
      </S.InputContainer>

      {/* 그룹 선택 */}
      <S.GroupContainer>
        <S.InputLabel>그룹 *</S.InputLabel>
        <S.GroupButtonWrapper>
          <BlueBadge
            badges={groupBadges ?? []}
            activeBadge={activeGroupBadge}
            setActiveBadge={setActiveGroupBadge}
          />
          <S.AddGroupButton>
            <p>그룹 편집</p>
            <Icon id='circle-plus-blue' width='13' height='13' />
          </S.AddGroupButton>
        </S.GroupButtonWrapper>
      </S.GroupContainer>
    </S.DashedBorder>
  );
}
