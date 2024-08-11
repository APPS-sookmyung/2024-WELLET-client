import * as S from './MyCard.style';
import Icon from '../Icon/Icon';
import ProfileImgDefault from '../../assets/images/profile-img-default.svg';

export default function MyCard({
  name,
  job,
  company,
  imageUrl,
  tel,
  email,
  address,
  backgroundColor,
}) {
  return (
    <S.MyCard style={{ backgroundColor: backgroundColor }}>
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
        <Icon id='dot3' fill='#2D29FF' />
      </S.MoreOption>
    </S.MyCard>
  );
}
