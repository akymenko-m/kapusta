import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { Expenses } from './Expenses/Expenses';
import { Income } from './Income/Income';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/userOperations';
import { ReportsPage } from 'pages/ReportsPage/ReportsPage';
// import { FooterOfApp } from './Footer/Footer';
import { PrivateRoute} from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { useAuth } from 'hook/useAuth'; 
import { Loader } from './Loader/Loader';



export const App = () => {
  const {isRefreshing} = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return ( isRefreshing ? (<Loader/>) : (<>
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="expenses" element={<PrivateRoute redirectTo="/login" component={<Expenses />} />} />
          <Route path="income" element={<PrivateRoute redirectTo="/login" component={<Income />} />} />
          <Route path="login" element={ <RestrictedRoute redirectTo="/expenses" component={<LoginPage />} />} />
          <Route path="register" element={ <RestrictedRoute redirectTo="/expenses" component={<LoginPage />} />} />
       </Route>
      <Route path="/transaction/period-data" element={<ReportsPage />} />

        {/* <Route element={<FooterOfApp />} /> */}
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes></>)
     
   
  );
};
