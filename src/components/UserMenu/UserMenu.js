import { NavLink } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { Logout } from '../Logout/Logout';
import { useAuth } from '../../hook/useAuth';
import { HeaderWrap } from './UserMenu.styled';
// import { LoginPage } from '../../pages/LoginPage/LoginPage';


export const UserMenu = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderWrap>
      <NavLink to="/expenses">{<img src={logo} alt="logo" />}</NavLink>

      {/* {isLoggedIn ? <Logout /> : <LoginPage />} */}

      {isLoggedIn && <Logout />}

      {/* <p>Welcome, User</p>

      <NavLink to="/transaction/period-data">Reports</NavLink>

      <ul>
        <li>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
        <li>
          <NavLink to="/income">Income</NavLink>
        </li>
      </ul> */}
    </HeaderWrap>
  );
};
