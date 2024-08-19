import * as S from './MyCard.style';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';
import { MdLogin } from 'react-icons/md';

export default function MyCard({
  name,
  job,
  company,
  imageUrl,
  tel,
  email,
  address,
  backgroundColor,
  onClick,
}) {
  return (
    <S.MyCard onClick={onClick} style={{ backgroundColor: backgroundColor }}>
      <S.ProfileImg>
        <img src={imageUrl || ProfileImgDefault} alt={`${name} 프로필`} />
      </S.ProfileImg>
      <S.ProfileText>
        <S.Name>{name}</S.Name>
        <S.Team>{company}</S.Team>
        <S.ExtraInfo>
          <p>TEL</p>
          <p>{`+${tel}`}</p>
        </S.ExtraInfo>
        <S.ExtraInfo>
          <p>EMAIL</p>
          <p>{email}</p>
        </S.ExtraInfo>
        <S.ExtraInfo>
          <p>ADRESS</p>
          <p>{address}</p>
        </S.ExtraInfo>
      </S.ProfileText>
      <S.MoreOption>
        <MdLogin size='20' color='#2D29FF' />
      </S.MoreOption>
    </S.MyCard>
  );
}
