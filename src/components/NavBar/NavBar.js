import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <UserMenu />
      <Outlet />
    </div>
  );
};
