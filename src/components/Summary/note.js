// Нтатки (видалити перед сдаею)

import { Summary } from 'components/Summary/Summary';
<Summary />

// ********** TransactionsOperations.js *змінити:

// ********** TransactionsSlice.js
// *додати слайс
// monthsStats: {}
// *змінити:

// ********** selectors.js *додати:
// export const selectMonthsStats = state => state.transactions.monthsStats;










// ***************  selectors.js
export const selectMonthsStats = state => {
  const stateMonts = state.transactions.monthsStats;
  const summaryMonth = 6; // кількість місяцв яка буде рендеритись в summary
    // ключі обьєкту який повертає бекенд. Порядок в масиві визначає порядок видачі в summary
    const listKeyMonths = [
      'Декабрь',
      'Ноябрь',
      'Октябрь',
      'Сентябрь',
      'Август',
      'Июль',
      'Июнь',
      'Май',
      'Апрель',
      'Март',
      'Февраль',
      'Январь',
    ];

    const listMonthsEng = {
      Январь: 'January',
      Февраль: 'February',
      Март: 'March',
      Апрель: 'April',
      Май: 'May',
      Июнь: 'June',
      Июль: 'July',
      Август: 'August',
      Сентябрь: 'September',
      Октябрь: 'October',
      Ноябрь: 'November',
      Декабрь: 'December',
    };

    const result = listKeyMonths
      .map(e => {
        return { month: listMonthsEng[e], value: stateMonts[e] };
      })
      .filter(e => e.value !== 'N/A')
      .slice(0, summaryMonth);
};















