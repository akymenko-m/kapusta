import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { Expenses } from './Expenses/Expenses';
import { Income } from './Income/Income';
<<<<<<< HEAD
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/user/userOperations';
=======
import { ReportsPage } from 'pages/ReportsPage/ReportsPage';
import { FooterOfApp } from './Footer/Footer';
>>>>>>> main


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
        <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
          <Route path="/transaction/period-data" element={<ReportsPage />} />
        </Route>
        <Route element={ <FooterOfApp/>}/>

      </Routes>
    </>
  );
};
