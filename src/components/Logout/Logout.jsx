import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/userOperations';
import { useAuth } from 'hook/useAuth';
import {
  HederUserWrapper,
  UserIcon,
  UserWrapper,
  UserEmail,
  ExitButton,
} from './Logout.styled';

export function Logout() {
  const dispatch = useDispatch();

  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logOut());
  };
  
  return (
    <HederUserWrapper>
      <UserWrapper>
        {user.email && (
          <UserIcon>{user.email.toUpperCase().slice(0, 1)}</UserIcon>
        )}
        <UserEmail>{user.email}</UserEmail>
      </UserWrapper>
      <ExitButton onClick={handleLogout}>
        Exit
      </ExitButton>
    </HederUserWrapper>
  );
}
