import PropTypes from 'prop-types';
import * as S from './Header.style';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

export default function Header({ color }) {
  const iconColor = color === 'white' ? 'logo-white' : 'logo-blue';

  return (
    <S.Header>
      <Link to='/home'>
        <S.LogoWrapper>
          <Icon id={iconColor} color={color} />
        </S.LogoWrapper>
      </Link>
    </S.Header>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(['white', 'blue']).isRequired,
};
