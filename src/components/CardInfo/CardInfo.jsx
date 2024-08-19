import PropTypes from 'prop-types';
import * as S from './CardInfo.style';
import Icon from '../../components/Icon/Icon';
import { Link } from 'react-router-dom';

export default function CardInfo({
  name,
  job,
  company,
  imageUrl,
  isDeleteMode = false,
  isSelected = false,
  onClick = () => {},
}) {
  return (
    <Link to={`/card/${name}`}>
      <S.Card
        onClick={onClick}
        isDeleteMode={isDeleteMode}
        isSelected={isSelected}
      >
        <S.CardWrapper>
          {imageUrl ? (
            <img src={imageUrl} alt={`${name} 프로필`} />
          ) : (
            <Icon id='profile-basic' fill='none' />
          )}
          <S.Info>
            <S.Name isSelected={isSelected}>{name}</S.Name>
            <S.Job isSelected={isSelected}>
              {job}, {company}
            </S.Job>
          </S.Info>
        </S.CardWrapper>
        {!isDeleteMode && (
          <S.ArrowIconWrapper>
            <Icon id='arrow-right' fill='none' />
          </S.ArrowIconWrapper>
        )}
        {isDeleteMode && (
          <S.ArrowIconWrapper>
            <Icon id={isSelected ? 'circle-check' : 'circle'} fill='none' />
          </S.ArrowIconWrapper>
        )}
      </S.Card>
    </Link>
  );
}

CardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  isDeleteMode: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
