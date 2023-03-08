import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/userOperations';
import { useAuth } from 'hook/useAuth';
import {
  HederUserWrapper,
  UserIcon,
  UserWrapper,
  UserEmail,
  ExitButton,
  ExitText,
  ExitIcon,
} from './Logout.styled';
import exit from '../../images/exit/exit.svg'


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
        <ExitIcon src={exit} alt="Exit" />
        <ExitText>Exit</ExitText>
      </ExitButton>
    </HederUserWrapper>
  );
}
