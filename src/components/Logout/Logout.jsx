import { useDispatch } from 'react-redux';
import { useState } from 'react';
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
import { LightModalWindow } from 'components/LightModalWindow/LightModalWindow';

export function Logout() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logOut());
  };
  
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <HederUserWrapper>
      <UserWrapper>
        {user.email && (
          <UserIcon>{user.email.toUpperCase().slice(0, 1)}</UserIcon>
        )}
        <UserEmail>{user.email}</UserEmail>
      </UserWrapper>
      <ExitButton >
        <ExitIcon src={exit} alt="Exit" onClick={handleModalOpen}/>
        <ExitText type="button" onClick={handleModalOpen}>Exit</ExitText>
      </ExitButton>
      {modalOpen && (
          <LightModalWindow
            closeModal={handleModalClose}
            dispatch={handleLogout}
          >
            Do you really want to leave?
          </LightModalWindow>
        )}
    </HederUserWrapper>
  );
}
