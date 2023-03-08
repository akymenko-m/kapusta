import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { Expenses } from './Expenses/Expenses';
import { Income } from './Income/Income';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/userOperations';
import { ReportsPage } from 'pages/ReportsPage/ReportsPage';
import { FooterOfApp } from './Footer/Footer';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return ( <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
       </Route>
      
      
       
       

        <Route path="/transaction/period-data" element={<ReportsPage />} />

        <Route element={<FooterOfApp />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};
