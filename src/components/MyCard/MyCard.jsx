import { MdLogin } from 'react-icons/md';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import * as S from './MyCard.style';

export default function MyCard({
  backgroundColor,
  name,
  department,
  position,
  company,
  imageUrl,
  phone,
  email,
  address,
  onClick,
}) {
  return (
    <S.MyCard onClick={onClick} style={{ backgroundColor: backgroundColor }}>
      <S.ImageContainer>
        <S.ProfileImg style={{ marginBottom: address ? '24px' : '12px' }}>
          <img src={imageUrl || ProfileImgDefault} alt={`${name} 프로필`} />
        </S.ProfileImg>
      </S.ImageContainer>

      <S.ProfileText>
        <S.Name>{name}</S.Name>
        <S.Team>
          {`${company || ''}${company && (department || position) ? ' / ' : ''}${department || ''}${department && position ? ' / ' : ''}${position || ''}`}
        </S.Team>
        {phone && (
          <S.ExtraInfo>
            <p>PHONE</p>
            <p>{`+${phone}`}</p>
          </S.ExtraInfo>
        )}
        {email && (
          <S.ExtraInfo>
            <p>EMAIL</p>
            <p>{email}</p>
          </S.ExtraInfo>
        )}
        {address && (
          <S.ExtraInfo>
            <p>ADRESS</p>
            <p>{address}</p>
          </S.ExtraInfo>
        )}
      </S.ProfileText>
      <S.MoreOption>
        <MdLogin size='20' color='#2D29FF' />
      </S.MoreOption>
    </S.MyCard>
  );
}
