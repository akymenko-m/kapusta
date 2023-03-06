import { Routes, Route } from 'react-router-dom';
import { Header } from './NavBar/NavBar';
import { HomePage } from 'pages/HomePage/HomePage';
import { Expenses } from './Expenses/Expenses';
import { Income } from './Income/Income';
import { ReportsPage } from 'pages/ReportsPage/ReportsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
          <Route path="/transaction/period-data" element={<ReportsPage />} />
        </Route>
      </Routes>
    </>
  );
};
