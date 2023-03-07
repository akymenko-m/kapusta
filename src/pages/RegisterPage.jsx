import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/user/userOperations';

export function RegisterPage() {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
       event.target.reset();
  };

  return (
    <div>
      <p>You can log in with your Google Account:</p>;
      <p>Or log in using an email and password, after registering:</p>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
        }}
      >
        <label>
          Email:
          <input type="text" name="email" placeholder="your@email.com" />
        </label>
        <label>
          Password:
          <input type="text" name="password" placeholder="password" />
        </label>
        <button type="submit">Registration</button>
      </form>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}
