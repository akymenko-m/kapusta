import { useLocation } from 'react-router-dom';

export const useChangeColor = () => {
  const { pathname } = useLocation();

  const isIncomePage = pathname.includes('/income');
  const isExpensePage = pathname.includes('/expense');
  const tabExpenseElements = document.querySelectorAll('.expenseTab');
  const tabIncomeElements = document.querySelectorAll('.incomeTab');

  if (isExpensePage) {
    tabExpenseElements.forEach(element => {
      element.style.color = 'white';
      element.style.backgroundColor = '#FF751D';
    });
    tabIncomeElements.forEach(element => {
      element.style.color = 'black';
      element.style.backgroundColor = '#FEFEFE';
    });
  }
  if (isIncomePage) {
    tabExpenseElements.forEach(element => {
      element.style.color = 'black';
      element.style.backgroundColor = '#FEFEFE';
    });
    tabIncomeElements.forEach(element => {
      element.style.color = 'white';
      element.style.backgroundColor = '#FF751D';
    });
  }
};
