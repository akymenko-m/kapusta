import { NavLink } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { Logout } from '../Logout/Logout';
import { useAuth } from '../../hook/useAuth';
import { HeaderWrap } from './UserMenu.styled';

export const UserMenu = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderWrap>
      <NavLink to="/expenses">{<img src={logo} alt="logo" />}</NavLink>

      {isLoggedIn && <Logout />}
    </HeaderWrap>
  );
};
