import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectErrorLoginMessage,
  selectErrorRegisterMessage,
} from 'redux/user/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);


  const errorLoginMessage = useSelector(selectErrorLoginMessage);
  const errorRegisterMessage = useSelector(selectErrorRegisterMessage);


  return {
    isLoggedIn,
    isRefreshing,
    user,
    errorLoginMessage,
    errorRegisterMessage,
  };
};


