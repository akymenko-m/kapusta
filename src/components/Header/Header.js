import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/App.styled';

export const Header = () => {
  return (
    <div>
      <Container>
        <UserMenu />
      </Container>
      <Outlet />
    </div>
  );
};
