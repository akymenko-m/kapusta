import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/userOperations';
import { useAuth } from 'hook/useAuth';


export function Logout() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <div>E</div>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Exit</button>
    </div>
  );
}
