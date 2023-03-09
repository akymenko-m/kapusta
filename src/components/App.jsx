import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import { Expenses } from './Expenses/Expenses';
import { Income } from './Income/Income';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/userOperations';
import { PrivateRoute} from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { useAuth } from 'hook/useAuth'; 
import { Loader } from './Loader/Loader';
import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ReportsPage = lazy(() => import('pages/ReportsPage/ReportsPage'));

export const App = () => {
  const {isRefreshing} = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return ( isRefreshing ? (<Loader/>) : (<>
      <Suspense falback={<Loader />}>
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="expenses" element={<PrivateRoute redirectTo="/login" component={<Expenses />} />} />
          <Route path="income" element={<PrivateRoute redirectTo="/login" component={<Income />} />} />
          <Route path="login" element={ <RestrictedRoute redirectTo="/expenses" component={<LoginPage />} />} />
          <Route path="register" element={ <RestrictedRoute redirectTo="/expenses" component={<LoginPage />} />} />
       </Route>
      <Route path="/transaction/period-data" element={<ReportsPage />} />

     
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      </Suspense>
      </>)
     
   
  );
};
