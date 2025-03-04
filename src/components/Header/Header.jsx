import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import * as S from './Header.style';

export default function Header({ color }) {
  const iconColor = color === 'white' ? 'logo-white' : 'logo-blue';

  return (
    <S.Header>
      <Link to='/home'>
        <S.LogoWrapper>
          <Icon id={iconColor} color={color} width={78} height={22} />
        </S.LogoWrapper>
      </Link>
    </S.Header>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(['white', 'blue']).isRequired,
};
