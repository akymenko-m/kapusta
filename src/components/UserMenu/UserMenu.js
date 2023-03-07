import { NavLink } from 'react-router-dom';
import logo from "../../images/logo/logo.png";
export const UserMenu = () => {
  return (
    <>

      <NavLink to="/">{<img src={logo} alt="logo"/>}</NavLink>
      
        <p>Welcome, User</p>

      <button type="button">Logout</button>

      <NavLink to="/transaction/period-data">Reports</NavLink>

      <ul>
        <li>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
        <li>
          <NavLink to="/income">Income</NavLink>
        </li>
      </ul>
    </>
  );
};
