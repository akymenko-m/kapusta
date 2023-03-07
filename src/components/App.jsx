import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { Expenses } from './Expenses/Expenses';
import { Income } from './Income/Income';
import { FooterOfApp } from './Footer/Footer';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
        <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
        </Route>
        <Route element={ <FooterOfApp/>}/>

      </Routes>
    </>
  );
};
