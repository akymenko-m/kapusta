
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/user/userOperations';

export function LoginPage() {
 const dispatch = useDispatch();

  const handleSubmit = event => {
      event.preventDefault();
      

   const { email, password } = event.target.elements;

   const user = {
     email: email.value,
     password: password.value,
     };
     
   dispatch(login(user));
   event.target.reset();
 };

    return (
      <div>
        <p>You can log in with your Google Account:</p>;
        <p>Or log in using an email and password, after registering:</p>
        <form
          onSubmit={handleSubmit}
          style={{ width: '200px', display: 'flex', flexDirection: 'column' }}
        >
          <label>
            Email:
            <input type="text" name="email" placeholder="your@mail.com" />
          </label>
          <label>
            Password:
            <input type="text" name="password" placeholder="password" />
          </label>
          <button type="submit">Log in</button>
        </form>
        <NavLink to='/register'>Registration</NavLink>
      </div>
    ); 
}